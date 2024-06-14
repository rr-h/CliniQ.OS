import { fetchData } from './utils/dataFetcher.js';
import { processData } from './utils/dataProcessor.js';
import { displayData } from './components/uiComponents.js';
import { handleSubmit, handleClick } from './components/eventHandlers.js';

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
