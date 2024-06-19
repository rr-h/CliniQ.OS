// frontend/components/UIComponents.js

export const initUIComponents = () => {
    console.log('UI Components initialized');
    // Initialize and render your UI components
};

export const displayData = (data) => {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = ''; // Clear previous content

    data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `Name: ${item.name}, Value: ${item.value}`;
        dataContainer.appendChild(itemElement);
    });
};