import database from '../utils/database.js';

export const getData = async () => {
  const data = await database.query('SELECT * FROM data');
  return data.rows;
};
