document.addEventListener('DOMContentLoaded', function() {
    loadDiseases();
    setUpWindowControls();
    makeDraggable(document.getElementById('main-window'));
    makeDraggable(document.getElementById('form-container'));
    const drawerContent = document.getElementById("drawer-content");
    drawerContent.style.display = "none";
});

function loadDiseases() {
    fetch('data/consultation/disease/CardiologyDisease.json')
        .then(response => response.json())
        .then(data => {
            const drawerContent = document.getElementById('drawer-content');
            drawerContent.innerHTML = ''; // Clear previous content
            data.cardiologyDisease.forEach(disease => {
                const diseaseCard = document.createElement('div');
                diseaseCard.className = 'disease-card';
                diseaseCard.innerText = disease.diseaseName;
                diseaseCard.addEventListener('click', () => openForm(disease.diseaseName));
                drawerContent.appendChild(diseaseCard);
            });
        })
        .catch(error => console.error('Error loading diseases:', error));
}

function toggleDrawer() {
    const drawerContent = document.getElementById('drawer-content');
    drawerContent.classList.toggle('open');
}

function openForm(diseaseName) {
    fetch('data/consultation/defaults/CardiologyDefaults.json')
        .then(response => response.json())
        .then(data => {
            const diseaseData = data.disease.find(d => d.diseaseName === diseaseName);
            if (!diseaseData) return;

            const formContainer = document.getElementById('form-container');
            const formTitle = document.getElementById('form-title');
            formTitle.innerText = diseaseData.diseaseName;

            const form = document.getElementById('disease-form');
            form.innerHTML = ''; // Clear previous fields

            diseaseData.fields.forEach(field => {
                const formGroup = document.createElement('div');
                formGroup.className = 'form-group';
                const label = document.createElement('label');
                label.setAttribute('for', field.name);
                label.innerText = field.label;
                const input = document.createElement('input');
                input.type = 'text';
                input.id = field.name;
                input.name = field.name;
                input.placeholder = field.placeholder;
                input.value = field.defaultValue;
                formGroup.appendChild(label);
                formGroup.appendChild(input);
                form.appendChild(formGroup);
            });

            form.addEventListener('submit', generateMarkdown);

            // Display the form container as a modal
            formContainer.style.display = 'block';
            formContainer.style.position = 'fixed';
            formContainer.style.top = '50%';
            formContainer.style.left = '50%';
            formContainer.style.transform = 'translate(-50%, -50%)';
        })
        .catch(error => console.error('Error loading form defaults:', error));
}

function generateMarkdown(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const markdownOutput = document.getElementById('markdown-output');
    let markdown = `
**Chief Complaint:**
${formData.get('chiefComplaint')}

**Social History:**
${formData.get('socialHistory')}

**Systems Survey:**
${formData.get('systemsSurvey')}

**Vitals**
HR - ${formData.get('vitals.hr')}; Temp - ${formData.get('vitals.temp')}°C; BP - ${formData.get('vitals.bp')}; RR - ${formData.get('vitals.rr')}bpm

**Physical Exam:**
${formData.get('physicalExam')}

**Impression:**
${formData.get('impression')}

**DDx:**
${formData.get('differentialDiagnosis')}

**Allergies:**
${formData.get('allergies')}

**Pregnancy:**
${formData.get('pregnancy')}

**Treatment Plan:**
${formData.get('treatment')} ${formData.get('carePlan')}

**Accurex**
${formData.get('accurex')}
`;
    markdownOutput.innerHTML = `<pre>${markdown}</pre>`;
    document.getElementById('copy-button').style.display = 'block';
}

function copyToClipboard() {
    const markdownOutput = document.getElementById('markdown-output');
    navigator.clipboard.writeText(markdownOutput.innerText).then(() => {
        alert('Markdown copied to clipboard!');
    });
}

function setUpWindowControls() {
    document.getElementById('main-close').addEventListener('click', () => {
        const mainWindow = document.getElementById('main-window');
        mainWindow.style.display = 'none';
    });

    document.getElementById('form-close').addEventListener('click', () => {
        const formContainer = document.getElementById('form-container');
        formContainer.style.display = 'none';
    });
}

function makeDraggable(element) {
    let isMouseDown = false;
    let offset = [0, 0];
    let mousePosition;

    const titleBar = element.querySelector('.title-bar');
    titleBar.addEventListener('mousedown', e => {
        isMouseDown = true;
        offset = [element.offsetLeft - e.clientX, element.offsetTop - e.clientY];
    });

    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    document.addEventListener('mousemove', e => {
        if (isMouseDown) {
            mousePosition = {
                x: e.clientX,
                y: e.clientY
            };
            element.style.left = mousePosition.x + offset[0] + 'px';
            element.style.top = mousePosition.y + offset[1] + 'px';
        }
    });
}