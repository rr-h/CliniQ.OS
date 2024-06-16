import database from '../utils/database.js';

const getData = async () => {
  const { rows } = await database.query('SELECT * FROM data');
  return rows;
};

export default {
  getData
};
