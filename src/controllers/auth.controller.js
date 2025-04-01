import { authService } from "../services/auth.service.js";

export const authController = {
  logIn: async (req, res) => {
    try {
      const { username, password } = req.body;
      const result = await authService.logIn(username, password);
      if (result) {
        res.status(200).json({ message: "Login successful", data: result });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  signUp: async (req, res) => {
    try {
      const { username, password } = req.body;
      const result = await authService.signUp(username, password);
      if (result) {
        res.status(201).json({ message: "Signup successful" });
      } else {
        res.status(400).json({ message: "Signup failed" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
