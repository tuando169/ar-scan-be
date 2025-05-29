import { modelService } from "../services/model.service.js";

export const modelController = {
  getAll: async (req, res) => {
    try {
      const models = await modelService.getModels();
      res.status(200).json(models);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  create: async (req, res) => {
    try {
      console.log(req);

      const model = req.body;
      console.log("Creating model:", model);

      const result = await modelService.createModel(model);
      if (result) {
        res.status(201).json({ message: "Model created successfully" });
      } else {
        res.status(400).json({ message: "Model creation failed" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  update: async (req, res) => {
    try {
      const model = req.body;
      const result = await modelService.updateModel(req.params.id, model);
      if (result) {
        res.status(200).json({ message: "Model updated successfully" });
      } else {
        res.status(400).json({ message: "Model update failed" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  delete: async (req, res) => {
    try {
      const result = await modelService.deleteModel(req.params.id);
      if (result) {
        res.status(200).json({ message: "Model deleted successfully" });
      } else {
        res.status(400).json({ message: "Model deletion failed" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
