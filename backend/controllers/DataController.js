import DataModel from '../models/DataModel.js';

export const getData = async (req, res) => {
  try {
    const data = await DataModel.getData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
