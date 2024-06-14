import database from '../utils/database.js';

const getData = async () => {
  const data = await database.query('SELECT * FROM data');
  return data.rows;
};

export default {
  getData
};
