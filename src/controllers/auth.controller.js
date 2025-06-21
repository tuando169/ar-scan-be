import { database } from '../config/database.js';
import { ErrorConstants } from '../constants/error.constant.js';

export const authController = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const [result] = await database.execute(
        'SELECT * FROM user WHERE username = ? AND password = ?',
        [username, password]
      );

      if (result) {
        res.status(200).json({ id: result.id, result: result });
      } else {
        res
          .status(ErrorConstants.NOT_FOUND.statusCode)
          .json({ message: ErrorConstants.NOT_FOUND.message });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  signUp: async (req, res) => {
    try {
      const { username, password } = req.body;
      const result = await database.execute(
        'INSERT INTO user (username, password) VALUES (?, ?)',
        [username, password]
      );

      if (result.affectedRows > 0) {
        res.status(201).json({ message: 'Signup successful' });
      } else {
        res.status(400).json({ message: 'Signup failed' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  changePassword: async (req, res) => {
    try {
      const { userId, password } = req.body;
      const result = await database.execute(
        'UPDATE user SET password = ? WHERE id = ?',
        [password, userId]
      );

      if (result.affectedRows > 0) {
        res.status(200).json({ message: 'Password changed successfully' });
      } else {
        res.status(400).json({ message: 'Password change failed' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};
