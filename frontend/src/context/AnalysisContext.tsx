import { createContext, useContext, useState } from "react";

export type AnalysisResult = {
  detectedLanguage: string;
  isRelevant: boolean;
  relevanceReason: string;
  riskScore: number;
  riskLevel: string;
  confidence: number;
  category: string;
  legitimacyAssessment: string,
  threatIndicators: string[];
  explanation: string;
  simpleExplanation: string;
  recommendations: string[];
};

type ContextType = {
  result: AnalysisResult | null;
  setResult: (data: AnalysisResult) => void;
};

const AnalysisContext =
  createContext<ContextType | null>(null);

export function AnalysisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [result, setResult] =
    useState<AnalysisResult | null>(null);

  return (
    <AnalysisContext.Provider
      value={{
        result,
        setResult,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  const context = useContext(AnalysisContext);

  if (!context) {
    throw new Error(
      "useAnalysis must be used inside AnalysisProvider"
    );
  }

  return context;
}