import express from "express";

import {
  addService,
  getServices,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Anyone can view services
router.get("/", getServices);

// Only admin can add
router.post("/", protect, adminOnly, addService);

// Only admin can update
router.put("/:id", protect, adminOnly, updateService);

// Only admin can delete
router.delete("/:id", protect, adminOnly, deleteService);

export default router;