import { Request, Response }
from "express";

import {
  analyzeScam,
  analyzeScamImage,
}
from "../services/gemini.service";

export async function analyzeText(
  req: Request,
  res: Response
) {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        error: "Text required",
      });
    }
    if (text.length > 10000) {
  return res.status(400).json({
    error: "Message too large"
  });
}

    const result = await analyzeScam(text);

    const cleaned = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    res.json(JSON.parse(cleaned));

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Analysis failed",
    });
  }
}

export async function analyzeImage(
  req: Request,
  res: Response
) {
  try {

    const { image } = req.body;

    if (!image) {
      return res.status(400).json({
        error: "Image required",
      });
    }
    if (image.length > 8_000_000) {
  return res.status(400).json({
    error: "Image too large"
  });
}
    

    const result =
  await analyzeScamImage(image);

  const cleaned = result
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  res.json(JSON.parse(cleaned));

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Analysis failed",
    });
  }
}