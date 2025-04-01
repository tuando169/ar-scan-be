import { modelController } from "../controllers/model.controller.js";
import express from "express";

const router = express.Router();

router.get("/", modelController.getAll);
router.get("/:id", modelController.getById);
router.post("/", modelController.create);
router.put("/:id", modelController.update);
router.delete("/:id", modelController.delete);

export default router;
