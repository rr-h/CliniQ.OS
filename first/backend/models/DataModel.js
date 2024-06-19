// backend/models/DataModel.js

import database from '../utils/database.js';

// Get all data
const getData = async () => {
  try {
    const { rows } = await database.query('SELECT * FROM data');
    return rows;
  } catch (error) {
    console.error('Database query error (getData):', error);
    throw error;
  }
};

// Get data by ID
const getDataById = async (id) => {
  try {
    const { rows } = await database.query('SELECT * FROM data WHERE id = $1', [id]);
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  } catch (error) {
    console.error('Database query error (getDataById):', error);
    throw error;
  }
};

// Add new data
const addData = async ({ name, value }) => {
  try {
    const { rows } = await database.query(
      'INSERT INTO data (name, value) VALUES ($1, $2) RETURNING *',
      [name, value]
    );
    return rows[0];
  } catch (error) {
    console.error('Database insert error (addData):', error);
    throw error;
  }
};

// Update data
const updateData = async (id, { name, value }) => {
  try {
    const { rows } = await database.query(
      'UPDATE data SET name = $1, value = $2 WHERE id = $3 RETURNING *',
      [name, value, id]
    );
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  } catch (error) {
    console.error('Database update error (updateData):', error);
    throw error;
  }
};

// Delete data
const deleteData = async (id) => {
  try {
    const { rows } = await database.query('DELETE FROM data WHERE id = $1 RETURNING *', [id]);
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  } catch (error) {
    console.error('Database delete error (deleteData):', error);
    throw error;
  }
};

export default {
  getData,
  getDataById,
  addData,
  updateData,
  deleteData
};
