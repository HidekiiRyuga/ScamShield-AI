import rateLimit from "express-rate-limit";

export const scanLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,

  message: {
    error:
      "Too many scans. Please wait a minute.",
  },

  standardHeaders: true,
  legacyHeaders: false,
});