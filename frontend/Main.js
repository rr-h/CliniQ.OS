import { fetchData } from './utils/DataFetcher.js';
import { processData } from './utils/DataProcessor.js';
import { displayData } from './components/UIComponents.js';
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
