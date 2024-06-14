import { fetchData } from './utils/dataFetcher';
import { processData } from './utils/dataProcessor';
import { displayData } from './components/UIComponents';
import { handleSubmit, handleClick } from './components/EventHandler';
import './CliniQ.OS/css/styles.css';
import './CliniQ.OS/css/clinic_OS.min.css';
import './CliniQ.OS/css/fonts.css';
import './CliniQ.OS/fonts';
import './CliniQ.OS/index.CliniQ.OS.html';
import './CliniQ.OS/images';
import './CliniQ.OS/js';

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
