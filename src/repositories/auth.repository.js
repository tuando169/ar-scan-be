import { database } from "../config/database.js";

export const authRepository = {
  logIn: async (username, password) => {
    const [rows] = await database.execute(
      "SELECT * FROM user WHERE Username = ? AND Password = ?",
      [username, password]
    );
    return rows.length > 0 ? rows[0] : null;
  },
  signUp: async (username, password) => {
    const [rows] = await database.execute(
      "INSERT INTO user (Username, Password) VALUES (?, ?)",
      [username, password]
    );
    return rows.affectedRows > 0 ? true : false;
  },
  checkEmailExists: async (username) => {
    const [rows] = await database.execute(
      "SELECT * FROM user WHERE Username = ?",
      [username]
    );
    return rows.length > 0 ? true : false;
  },
};
