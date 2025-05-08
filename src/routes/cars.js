import express, { Router } from "express";

import {
  createCar,
  deleteCar,
  getCarById,
  getCars,
  updateCar,
} from "../controllers/Cars.js";

const router = express.Router();

router.get("/cars", getCars);
router.get("/cars/:id", getCarById);
router.post("/cars", createCar);
router.put("/cars/:id", updateCar);
router.delete("/cars/:id", deleteCar);

export default router;
