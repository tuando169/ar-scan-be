import mysql from "mysql2/promise.js";

let connection;
export const database = {
  connect: () => {
    connection = mysql.createPool({
      host: "sql12.freesqldatabase.com",
      user: "sql12782293",
      password: "p5JBVTLvMq",
      database: "sql12782293",
      port: 3306,
      waitForConnections: true,
    });
  },
  execute: async (sql, params = []) => {
    const [rows] = await connection.execute(sql, params);
    return rows;
  },
};
