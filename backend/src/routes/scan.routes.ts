import { Router } from "express";

import {
  analyzeText,
  analyzeImage,
} from "../controllers/scan.controller";

import { scanLimiter }
  from "../middleware/rateLimiter";

const router = Router();

router.post(
  "/text",
  scanLimiter,
  analyzeText
);

router.post(
  "/image",
  scanLimiter,
  analyzeImage
);

export default router;