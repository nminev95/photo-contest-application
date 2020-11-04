import mariadb from 'mariadb';
import { DB_CONFIG } from '../constants/config.js';

const pool = mariadb.createPool(DB_CONFIG);

export default pool;
