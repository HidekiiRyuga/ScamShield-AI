import type { AnalysisResult }
from "../context/AnalysisContext";

const API_URL =
   `${import.meta.env.VITE_API_URL}/api/scan`;

export async function analyzeText(
  text: string
): Promise<AnalysisResult> {

  const response = await fetch(
    `${API_URL}/text`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    }
  );

  return await response.json();
}

export async function analyzeImage(
  image: string
): Promise<AnalysisResult> {

  const response = await fetch(
    `${API_URL}/image`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image }),
    }
  );

  return await response.json();
}