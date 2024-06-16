// frontend/main.js
import { initUIComponents } from './components/UIComponents';
import { handleSubmit, handleClick } from './components/EventHandler.js';
import { fetchData, processData } from './utils/dataHandlers.js';
import { displayData } from './components/UIComponents.js';
import './CliniQ.OS_UI/css/styles.css';
import './CliniQ.OS_UI/css/clinic_OS.min.css';
import './CliniQ.OS_UI/css/fonts.css';
import './CliniQ.OS_UI/js/cliniq_OS.webflow.js';
import './CliniQ.OS_UI/js/jquery-3.3.1.min.js';
import './CliniQ.OS_UI/js/jquery-3.5.1.min.dc5e7f18c8.js';
import './CliniQ.OS_UI/js/jquery-ui.min.js';
import './CliniQ.OS_UI/js/jquery.validate.min.js';
import './CliniQ.OS_UI/js/select.menu.custom.js';
import './CliniQ.OS_UI/js/widget.js';

// Initialize UI components
initUIComponents();

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#form').addEventListener('submit', handleSubmit);
  document.querySelector('#button').addEventListener('click', handleClick);
  fetchData().then(data => {
    const processedData = processData(data);
    displayData(processedData);
    console.log(data);
  });
});
