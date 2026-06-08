import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

import scanRoutes from "./routes/scan.routes";

dotenv.config();

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use(
  express.json({
    limit: "10mb",
  })
);

app.use("/api/scan", scanRoutes);

export default app;