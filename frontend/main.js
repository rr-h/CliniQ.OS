import { fetchData } from './utils/dataFetcher.js';
import { processData } from './utils/dataProcessor.js';
import { displayData } from './components/UIComponents.js';
import { handleSubmit, handleClick } from './components/EventHandler.js';

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
