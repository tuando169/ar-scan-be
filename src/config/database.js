import mysql from 'mysql2/promise.js';

const options =
  process.env.NODE_ENV === 'production'
    ? {
        host: 'sql12.freesqldatabase.com',
        user: 'sql12782293',
        password: 'p5JBVTLvMq',
        database: 'sql12782293',
        port: 3306,
      }
    : {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'ar',
        port: 3306,
      };

let connection;
export const database = {
  connect: () => {
    connection = mysql.createPool(options);
  },
  execute: async (sql, params = []) => {
    const [rows] = await connection.execute(sql, params);
    return rows;
  },
};
