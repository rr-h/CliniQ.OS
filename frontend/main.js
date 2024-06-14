import { fetchData } from './utils/dataFetcher.js';
import { processData } from './utils/dataProcessor.js';
import { displayData } from './components/UIComponents.js';
import { handleSubmit, handleClick } from './components/EventHandler.js';
import './CliniQ.OS/css/styles.css';
import './CliniQ.OS/css/clinic_OS.min.css';
import './CliniQ.OS/css/fonts.css';
import './CliniQ.OS/js/clinic.OS.webflow.js'; // Import the main JS file of CliniQ.OS

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await fetchData('/api/data');
    const processedData = processData(data);
    displayData(processedData);
  } catch (error) {
    console.error(error);
  }
});

document.addEventListener('submit', handleSubmit);
document.addEventListener('click', handleClick);
