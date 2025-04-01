import { authController } from "../controllers/auth.controller.js";
import express from "express";

const router = express.Router();

router.post("/login", authController.logIn);
router.post("/signup", authController.signUp);

export default router;
