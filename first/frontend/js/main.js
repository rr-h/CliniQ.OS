// frontend/CQ.OS_UI/js/main.js

document.addEventListener('DOMContentLoaded', () => {
   fetch('/api/data')
     .then(response => response.json())
     .then(data => {
       console.log(data); // Handle data as needed
       displayData(data); // Custom function to render data
     })
     .catch(error => console.error('Error fetching data:', error));
 });
 
 function displayData(data) {
   // Implement your logic to display data in the UI
   const dataContainer = document.getElementById('data-container');
   dataContainer.innerHTML = JSON.stringify(data, null, 2);
 }
 