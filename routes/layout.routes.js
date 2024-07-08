import { Router } from "express";
import { Layout } from "../models/layout.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const layout = await Layout.find();

    res.json(layout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
