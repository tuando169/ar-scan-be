import { database } from "../config/database.js";

export const modelRepository = {
  getModels: async () => {
    const [rows] = await database.execute("SELECT * FROM model");
    return rows;
  },
  getModelById: async (id) => {
    const [rows] = await database.execute("SELECT * FROM model WHERE ID = ?", [
      id,
    ]);
    return rows.length > 0 ? rows[0] : null;
  },
  createModel: async (model) => {
    const [rows] = await database.execute(
      "INSERT INTO model (Name, Url,User, TrainData, Description) VALUES (?, ?, ?, ?, ?)",
      [model.name, model.url, model.user, model.trainData, model.description]
    );
    return rows.affectedRows > 0 ? true : false;
  },
  updateModel: async (id, model) => {
    const [rows] = await database.execute(
      "UPDATE model SET Name = ?, Url = ?, User = ?, TrainData = ?, Description = ? WHERE ID = ?",
      [
        model.name,
        model.url,
        model.user,
        model.trainData,
        model.description,
        id,
      ]
    );
    return rows.affectedRows > 0 ? true : false;
  },
  deleteModel: async (id) => {
    const [rows] = await database.execute("DELETE FROM model WHERE ID = ?", [
      id,
    ]);
    return rows.affectedRows > 0 ? true : false;
  },
};
