// frontend/main.js

import { initUIComponents } from './components/UIComponents';
import { handleSubmit, handleClick } from './components/EventHandler.js';
import { fetchData, processData } from './utils/dataHandlers.js';
import { displayData } from './components/UIComponents.js';
import './CQ.OS_UI/css/styles.css';
import './CQ.OS_UI/css/cliniq_OS.min.css';
import './CQ.OS_UI/css/fonts.css';
import './CQ.OS_UI/js/cliniq_OS.webflow.js';
import './CQ.OS_UI/js/jquery-3.3.1.min.js';
import './CQ.OS_UI/js/jquery-3.5.1.min.dc5e7f18c8.js';
import './CQ.OS_UI/js/jquery-ui.min.js';
import './CQ.OS_UI/js/jquery.validate.min.js';
import './CQ.OS_UI/js/select.menu.custom.js';
import './CQ.OS_UI/js/widget.js';

// Initialize UI components
initUIComponents();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#form').addEventListener('submit', handleSubmit);
  document.querySelector('#button').addEventListener('click', handleClick);
  fetchData().then(data => {
    const processedData = processData(data);
    displayData(processedData);
    console.log(data);
  });
});