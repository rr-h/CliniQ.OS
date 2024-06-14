import dataModel from '../models/dataModels.js';

export const getData = async (req, res) => {
  try {
    const data = await dataModel.getData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
