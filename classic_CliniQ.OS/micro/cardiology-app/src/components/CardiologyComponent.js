import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import "../styles/FormComponent.css";
import "../styles/RetroMedicalForm.css";
import "../styles/Drawer.css";
import "../styles/WindowComponent.css";
import closeIcon from "../assets/icons/close-48.png";
import maxIcon from "../assets/icons/max-48.png";
import minIcon from "../assets/icons/min-48.png";
// Import CardiologyDiseases data
import CardiologyDiseases from "../data/consultation/disease/CardiologyDisease.json";

const WindowComponent = ({ title, children, onClose, style = {}, onClick, zIndex }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 300, height: 300 });
    const [position, setPosition] = useState({ x: 10, y: 10 });
    const titleBarRef = useRef(null);

    useEffect(() => {
        if (isMinimized && titleBarRef.current) {
            const titleBarWidth = titleBarRef.current.offsetWidth;
            setDimensions({ width: titleBarWidth, height: 30 });
        }
    }, [isMinimized]);

    const handleMinimize = () => {
        if (isMinimized) {
            setDimensions({ width: 300, height: 300 });
        } else {
            const titleBarWidth = titleBarRef.current ? titleBarRef.current.offsetWidth : 300;
            setDimensions({ width: titleBarWidth, height: 30 });
        }
        setIsMinimized(!isMinimized);
    };

    const handleMaximize = () => {
        const container = document.querySelector(".container");
        const containerRect = container.getBoundingClientRect();

        if (isMaximized) {
            setDimensions({ width: 300, height: 300 });
            setPosition({ x: containerRect.left + 10, y: containerRect.top + 10 });
        } else {
            setDimensions({ width: containerRect.width, height: containerRect.height });
            setPosition({ x: containerRect.left, y: containerRect.top });
        }
        setIsMaximized(!isMaximized);
    };

    const handleStop = (e, data) => {
        setPosition({ x: data.x, y: data.y });
    };

    return (
        <Draggable handle=".title-bar" bounds="parent" position={position} onStop={handleStop}>
            <div
                className={`retro-window ${isMinimized ? "minimized" : ""} ${isMaximized ? "maximized" : ""}`}
                style={{ ...style, width: dimensions.width, height: dimensions.height, zIndex }}
                onClick={onClick}
            >
                <div className="title-bar" ref={titleBarRef}>
                    <div className="title">{title}</div>
                    <div className="window-controls">
                        <button onClick={handleMinimize}>
                            <img src={minIcon} alt="Minimize" width="16" height="16" />
                        </button>
                        <button onClick={handleMaximize}>
                            <img src={maxIcon} alt="Maximize" width="16" height="16" />
                        </button>
                        <button onClick={onClose}>
                            <img src={closeIcon} alt="Close" width="16" height="16" />
                        </button>
                    </div>
                </div>
                <div className={`window-content ${isMinimized ? "hidden" : ""}`}>{children}</div>
            </div>
        </Draggable>
    );
};

const Drawer = ({ specialty, data, setSelectedDisease }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDrawerClick = () => {
        setIsOpen(!isOpen);
    };

    const handleDiseaseClick = (diseaseName) => {
        setSelectedDisease(diseaseName);
        setIsOpen(false);
    };

    return (
        <div className={`drawer ${isOpen ? "open" : ""}`}>
            <div className="drawer-label" onClick={handleDrawerClick}>
                {specialty}
            </div>
            {isOpen && (
                <div className="drawer-content">
                    {data.cardiologyDisease.map((disease) => (
                        <div
                            key={disease.diseaseID}
                            className="disease-card"
                            onClick={() => handleDiseaseClick(disease.diseaseName)}
                        >
                            {disease.diseaseName}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const FormComponent = ({ onClose, style, disease, specialty }) => {
    const [formData, setFormData] = useState({});
    const [markdownOutput, setMarkdownOutput] = useState("");
    const [fields, setFields] = useState([]);
    const [showCopyButton, setShowCopyButton] = useState(false);

    useEffect(() => {
        const loadDefaults = async () => {
            try {
                const defaults = await import(`../data/consultation/defaults/${specialty}Defaults.json`);
                const diseaseDefaults = defaults.default.disease.find((d) => d.diseaseName === disease);
                if (diseaseDefaults) {
                    setFields(diseaseDefaults.fields);
                    const initialFormData = diseaseDefaults.fields.reduce((acc, field) => {
                        acc[field.name] = field.defaultValue;
                        return acc;
                    }, {});
                    setFormData(initialFormData);
                }
            } catch (error) {
                console.error(`Error loading defaults for ${specialty}:`, error);
            }
        };

        if (specialty && disease) {
            loadDefaults();
        }
    }, [specialty, disease]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const markdown = generateMarkdown(formData);
        setMarkdownOutput(markdown);
        setShowCopyButton(true); // Show the copy button after form submission
    };

    const generateMarkdown = (data) => {
        return `
**Chief Complaint:**
[${data.chiefComplaint}]

**Social History:**
[${data.socialHistory}]

**Systems Survey:**
[${data.systemsSurvey}]

**Vitals**
[HR - ${data.vitals?.hr}; Temp - ${data.vitals?.temp}°C; BP - ${data.vitals?.bp}; RR - ${data.vitals?.rr}bpm]

**Physical Exam:**
[${data.physicalExam}]

**Impression:**
[${data.impression}]

**DDx:**
[${data.differentialDiagnosis}]

**Allergies:**
[${data.allergies}]

**Pregnancy:**
[${data.pregnancy}]

**Treatment Plan:**
[${data.treatment} ${data.carePlan}]

**Accurex**
[${data.accurex}]
    `;
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(markdownOutput).then(() => {
            alert("Markdown copied to clipboard!");
        });
    };

    return (
        <WindowComponent title={disease} onClose={onClose} style={style}>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    {fields.map((field, index) => (
                        <div key={index} className="form-group">
                            <label htmlFor={field.name}>{field.label}:</label>
                            <input
                                type="text"
                                id={field.name}
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleInputChange}
                                placeholder={field.placeholder}
                            />
                        </div>
                    ))}
                    <button type="submit">Submit</button>
                </form>
                {markdownOutput && (
                    <div className="markdown-output">
                        <h2>Markdown Output</h2>
                        <pre>{markdownOutput}</pre>
                    </div>
                )}
                {showCopyButton && (
                    <button onClick={handleCopyToClipboard}>Copy Markdown to Clipboard</button>
                )}
            </div>
        </WindowComponent>
    );
};

const CardiologyComponent = () => {
    const [selectedDisease, setSelectedDisease] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (selectedDisease) {
            setIsModalOpen(true); // Open the modal when a disease is selected
        }
    }, [selectedDisease]);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDisease(null);
    };

    return (
        <div className="retro-desktop">
            <div className="container">
                <WindowComponent title="Retro Medical Form">
                    <div className="window-content">
                        <div className="icon-grid">
                            <Drawer
                                specialty="Cardiology"
                                data={CardiologyDiseases}
                                setSelectedDisease={setSelectedDisease}
                            />
                        </div>
                    </div>
                </WindowComponent>
                {isModalOpen && (
                    <FormComponent
                        onClose={handleCloseModal}
                        style={{ top: "20%", left: "30%" }}
                        disease={selectedDisease}
                        specialty="Cardiology"
                    />
                )}
            </div>
        </div>
    );
};

export default CardiologyComponent;
