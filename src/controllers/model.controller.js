import { database } from '../config/database.js';

export const modelController = {
  getListByUser: async (req, res) => {
    try {
      const userId = req.query.userId;
      const rows = await database.execute(
        'SELECT * FROM model WHERE user = ?',
        [userId]
      );
      res.status(200).json({ models: rows });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  getOne: async (req, res) => {
    const id = req.params.id;
    try {
      const [model] = await database.execute(
        'SELECT * FROM model WHERE id = ?',
        [id]
      );
      if (model) {
        res.status(200).json({ model: model });
      } else {
        res.status(404).json({ message: 'Model not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  create: async (req, res) => {
    try {
      const filePath = req.file.path;
      const { name, user, description } = req.body;

      const model = {
        name,
        file: filePath,
        user,
        description,
      };
      console.log(model);

      const result = await database.execute(
        'INSERT INTO model (name, file, user, description) VALUES (?, ?, ?, ?)',
        [model.name, model.file, model.user, model.description]
      );
      if (result.affectedRows > 0) {
        res.status(201).json({ message: 'Model created' });
      } else {
        res.status(500).json({ message: 'Creation failed' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  update: async (req, res) => {
    try {
      const model = req.body;
      const [rows] = await database.execute(
        'UPDATE model SET name = ?, file = ?, user = ?, description = ? WHERE id = ?',
        [model.name, model.file, model.user, model.description, id]
      );
      if (rows.affectedRows > 0) {
        res.status(200).json({ message: 'Model updated successfully' });
      } else {
        res.status(400).json({ message: 'Model update failed' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  delete: async (req, res) => {
    try {
      const [rows] = await database.execute('DELETE FROM model WHERE id = ?', [
        id,
      ]);
      if (rows.affectedRows) {
        res.status(200).json({ message: 'Model deleted successfully' });
      } else {
        res.status(400).json({ message: 'Model deletion failed' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};
