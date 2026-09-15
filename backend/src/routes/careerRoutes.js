import express from "express";

import {
  addCareer,
  getCareers,
  updateCareer,
  deleteCareer,
} from "../controllers/careerController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Anyone can view careers
router.get("/", getCareers);

// Only admin can add
router.post("/", protect, adminOnly, addCareer);

// Only admin can update
router.put("/:id", protect, adminOnly, updateCareer);

// Only admin can delete
router.delete("/:id", protect, adminOnly, deleteCareer);

export default router;