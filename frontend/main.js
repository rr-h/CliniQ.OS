import { fetchData } from './utils/dataFetcher.js';
import { processData } from './utils/dataProcessor.js';
import { displayData } from './components/UIComponents.js';
import { handleSubmit, handleClick } from './components/EventHandler.js';
import './CliniQ.OS/css/styles.css';
import './CliniQ.OS/css/clinic_OS.min.css';
import './CliniQ.OS/css/fonts.css';
import './CliniQ.OS/js/clinic.OS.webflow.js';
import './CliniQ.OS/js/jquery-3.3.1.min.js';
import './CliniQ.OS/js/jquery-3.5.1.min.dc5e7f18c8.js';
import './CliniQ.OS/js/jquery-ui.min.js';
import './CliniQ.OS/js/jquery.validate.min.js';
import './CliniQ.OS/js/select.menu.custom.js';
import './CliniQ.OS/js/widget.js';


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
