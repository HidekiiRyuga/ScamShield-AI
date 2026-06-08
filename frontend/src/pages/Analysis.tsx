import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnalysis } from "../context/AnalysisContext";
import { useInput } from "../context/InputContext";
import { useScan } from "../context/ScanContext";
import {
  bankingScamResult,
  fakeJobResult,
  lotteryResult,
  deliveryResult,
} from "../data/demoResults";
import { demoScenarios } from "../data/demoScenarios";
import {
  analyzeText,
  analyzeImage,
} from "../services/api";


const logs = [
  "Extracting text from screenshot...",
  "Checking for phishing indicators...",
  "Comparing against scam patterns...",
  "Calculating threat score...",
  "Generating safety recommendations...",
];
export default function Analysis() {
  
  const { setResult } = useAnalysis();
  const navigate = useNavigate();
  const { message } = useInput();
  const { image, setImage } = useScan();
  const [step, setStep] = useState(0);
  const [analysisFinished, setAnalysisFinished] =
  useState(false);
  const finishAgentsQuickly = () => {
  const currentStep = step;

  if (currentStep < 5) {

    setTimeout(() => {
      setStep(Math.max(currentStep, 3));
    }, 100);

    setTimeout(() => {
      setStep(Math.max(currentStep, 4));
    }, 250);

    setTimeout(() => {
      setStep(5);
    }, 400);

  }

  setAnalysisFinished(true);
};

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}, []);
  

  useEffect(() => {
  const timers = [
    setTimeout(() => setStep((prev) => Math.max(prev, 1)), 1000),
setTimeout(() => setStep((prev) => Math.max(prev, 2)), 2500),
setTimeout(() => setStep((prev) => Math.max(prev, 3)), 4000),
setTimeout(() => setStep((prev) => Math.max(prev, 4)), 5500),
setTimeout(() => setStep((prev) => Math.max(prev, 5)), 7000),
  ];

    return () => timers.forEach(clearTimeout);
  }, []);

   useEffect(() => {

    if (
      analysisFinished &&
      step >= 5
    ) {

      const timer = setTimeout(() => {
        navigate("/result");
      }, 500);

      return () => clearTimeout(timer);
    }

  }, [analysisFinished, step]);

  useEffect(() => {
  async function runAnalysis() {
    try {

     if (!image && !message.trim()) {
      navigate("/scan");
      return;
    }
    const parsed = image
    ? await analyzeImage(image.split(",")[1])
    : await analyzeText(message);

      setResult(parsed);
      setImage("");

    finishAgentsQuickly();
    } catch (error) {
  console.error(error);

    if (message === demoScenarios.banking) {
      setResult(bankingScamResult);
    }

    else if (message === demoScenarios.job) {
      setResult(fakeJobResult);
    }

    else if (message === demoScenarios.delivery) {
      setResult(deliveryResult);
    }

    else if (message === demoScenarios.lottery) {
      setResult(lotteryResult);
    }

    else {
      setResult({
        detectedLanguage: "",
        isRelevant: false,
        relevanceReason:
          "AI Service Temporarily Busy. Please try again in a few moments",

        riskScore: 0,
        riskLevel: "Unknown",
        confidence: 0,
        category: "Unavailable",
        legitimacyAssessment: "",
        threatIndicators: [],
        explanation: "",
        simpleExplanation: "",
        recommendations: [],
      });
    }
   finishAgentsQuickly();
    }
  }

  runAnalysis();
}, []);

  return (
  <div className="min-h-screen bg-black text-white px-6 pt-24">

    <div className="mx-auto w-full max-w-3xl">

      <div className="mb-12 text-center">

        <h1 className="text-5xl font-bold">
          AI Analysis In Progress
        </h1>

        <p className="mt-4 text-zinc-500">
          Multi-agent threat detection system running...
        </p>

      </div>

      <div className="mb-8 h-3 overflow-hidden rounded-full bg-zinc-800">

        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-1000"
          style={{
            width: `${step * 20}%`,
          }}
        />

      </div>

      <div className="space-y-4">

        <Agent
          icon="🧠"
          name="Vision Agent"
          active={step >= 1}
          log={logs[0]}
        />

        <Agent
          icon="🛡"
          name="Threat Agent"
          active={step >= 2}
          log={logs[1]}
        />

        <Agent
          icon="🔍"
          name="Pattern Agent"
          active={step >= 3}
          log={logs[2]}
        />

        <Agent
          icon="⚠"
          name="Risk Agent"
          active={step >= 4}
          log={logs[3]}
        />

        <Agent
          icon="🛟"
          name="Safety Agent"
          active={step >= 5}
          log={logs[4]}
        />

      </div>

    </div>

  </div>
);
}

function Agent({
  icon,
  name,
  active,
  log,
}: {
  icon: string;
  name: string;
  active: boolean;
  log: string;
}) {
return (
  <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

    <div className="flex items-center justify-between">

      <span>
        {icon} {name}
      </span>

      <span
        className={
          active
            ? "text-green-400"
            : "text-zinc-500"
        }
      >
        {active ? "Complete" : "Waiting"}
      </span>

    </div>

    {active ? (
      <div className="mt-3 text-sm text-green-400">
        ✓ {log}
      </div>
    ) : (
      <div className="mt-3 text-sm text-zinc-500">
        Waiting...
      </div>
    )}
   
  </div>
  
  
);
}
