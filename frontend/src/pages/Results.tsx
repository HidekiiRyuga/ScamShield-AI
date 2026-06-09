import Navbar from "../components/Navbar";
import { useAnalysis } from "../context/AnalysisContext";
import { generatePDF } from "../utils/generatePDF";
import { useNavigate } from "react-router-dom";


const radius = 90;
const circumference = 2 * Math.PI * radius;


export default function Results() {
  const navigate = useNavigate();
  const { result } = useAnalysis();
  
  
  
  console.log(result);
  
  if (!result) {

 return (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="flex flex-col items-center gap-6">
      <p className="text-lg">No analysis available.</p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="rounded-xl border border-zinc-700 px-6 py-3 cursor-pointer hover:bg-zinc-900 transition"
        >
          Home
        </button>

        <button
          onClick={() => navigate("/scan")}
          className="rounded-xl bg-violet-500 px-6 py-3 cursor-pointer hover:bg-violet-600 transition"
        >
          Scan Again
        </button>
      </div>
    </div>
  </div>
);
}
if (!result.isRelevant) {
   
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="max-w-xl text-center">

        <div className="mb-6 text-6xl">
          ⚠️
        </div>

        <h1 className="text-4xl font-bold">
          Unable to Analyze
        </h1>

        <p className="mt-4 text-zinc-400">
          {result.relevanceReason}
        </p>

        <div className="mt-8 flex justify-center gap-4">

      <button
        onClick={() => navigate("/")}
        className="rounded-xl border border-zinc-700 px-6 py-3 cursor-pointer"
      >
        Home
      </button>

      <button
        onClick={() => navigate("/scan")}
        className="rounded-xl bg-violet-500 px-6 py-3 cursor-pointer "
      >
        Scan Again
      </button>

    </div>

      </div>

    </div>
  );
}

let currentRisk;

if (result.riskScore <= 20) {
  currentRisk = {
    level: "Low",
    icon: "✅",
    text: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    circle: "#22c55e",
  };
}

else if (result.riskScore <= 50) {
  currentRisk = {
    level: "Medium",
    icon: "⚠️",
    text: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    circle: "#eab308",
  };
}

else if (result.riskScore <= 80) {
  currentRisk = {
    level: "High",
    icon: "🚨",
    text: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    circle: "#f97316",
  };
}

else {
  currentRisk = {
    level: "Critical",
    icon: "🚨",
    text: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    circle: "#ef4444",
  };
}

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      <Navbar />

      <section className="mx-auto max-w-7xl px-8 py-6">

          <div className="mb-12">
        <div className="flex items-center gap-2 text-green-400">

          <div className="h-2 w-2 rounded-full bg-green-400 " />

          Analysis Complete

        </div>

        <h1 className="mt-6 text-5xl font-bold">
          Scam Detection Report
        </h1>

        <p className="mt-3 text-zinc-500">
          Generated on {new Date().toLocaleDateString()}
        </p>
        </div>
        <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-950 p-10   ">

      <div className="grid gap-8 md:grid-cols-3">

        <div className="relative flex items-center justify-center">

      <svg
      width="260"
      height="260"
      className="-rotate-90 drop-shadow-[0_0_25px_rgba(249,115,22,0.00)]"
    >

        <circle
          cx="130"
          cy="130"
          r={radius}
          stroke="#27272a"
          strokeWidth="16"
          fill="transparent"
        />

        <circle
          cx="130"
          cy="130"
          r={radius}
          stroke={currentRisk.circle}
          strokeWidth="16"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={
            circumference -
            (result.riskScore / 100) *
            circumference
          }
        />

      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <p className="text-zinc-500">
          Risk Score
        </p>

        <h2 className={`text-5xl font-bold ${currentRisk.text}`}>
          {result.riskScore}%
        </h2>

      </div>

    </div>

        <div className="flex flex-col justify-center">

          <p className="text-zinc-500">
            Threat Category
          </p>

          <h3 className="mt-4 text-4xl font-semibold">
            {result.category}
           
          </h3>
           <div
          className={`mt-4 inline-flex rounded-full px-4 py-2 text-sm font-medium
          ${currentRisk.bg}
          ${currentRisk.text}`}
        >
          {currentRisk.level.toUpperCase()}
        </div>

        </div>

      <div className="flex flex-col justify-center">

          <p className="text-zinc-500">
            Confidence
          </p>

          <h2 className="mt-4 text-7xl font-bold text-cyan-400">
            <p className="mt-2 text-sm text-zinc-500">
            AI Confidence
          </p>
            {result.confidence}%
          </h2>

        </div>

      </div>
      
  </div>
  <p className="mt-4 text-zinc-500">
      Detected Language
    </p>

    <h3 className="mt-2 text-xl">
      {result.detectedLanguage}
    </h3>
     <div
      className={`mt-8 rounded-2xl p-6
      ${currentRisk.border}
      ${currentRisk.bg}
      border`}
    >

      <h3 className={`font-semibold ${currentRisk.text}`}>
        {currentRisk.icon}  {result.riskLevel.toUpperCase()} 
      </h3>

      <p className="mt-2 text-zinc-300">
        {result.legitimacyAssessment}
      </p>

    </div>

    <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

      <h2 className="text-2xl font-bold">
        Scan Summary
      </h2>

      <p className="mt-4 text-zinc-400">
        KnowScam AI analyzed the uploaded content using
        Gemini Vision and multi-agent threat detection.
        <p className="mt-2 text-zinc-400">
      {result.riskScore <= 20
        ? "This content appears legitimate and shows little to no evidence of scam activity."
        : result.riskScore <= 50
        ? "Some suspicious elements were detected, but evidence of fraud is limited."
        : result.riskScore <= 80
        ? "Several scam indicators were detected. Proceed with caution."
        : "Strong evidence of phishing, fraud, or scam activity was detected."}
    </p>
      </p>
      

    </div>

    <div className="mt-12">

      <h2 className="mb-6 text-2xl font-bold">
        Threat Indicators
      </h2>

      <div className="mb-8">

      <div
        className={`inline-flex rounded-full px-4 py-2
        ${currentRisk.bg}
        ${currentRisk.text}`}
      >

        {currentRisk.icon} {result.riskLevel.toUpperCase()} 

      </div>

    </div>

      <div className="grid gap-4 md:grid-cols-2">

        {result.threatIndicators.map((item) => (
          <div
            key={item}
          className="rounded-2xl ${currentRisk.border} ${currentRisk.bg} p-4 text-sm"
          >
            ⚠ {item}
          </div>
        ))}

      </div>

    </div>

    <div className="mt-12 grid gap-8 md:grid-cols-2">

      <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

        <h3 className="text-xl font-semibold">
          Detailed Analysis
        </h3>

        <p className="mt-4 text-zinc-400">
          {result.explanation}
        </p>

      </div>

      <div className="rounded-3xl border border-violet-500/30 bg-violet-500/5 p-8">

        <h3 className="text-xl font-semibold">
          Explain Like I'm 60
        </h3>

        <p className="mt-4 text-zinc-300">
          {result.simpleExplanation}
        </p>

      </div>

    </div>

        <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

      <h2 className="text-2xl font-bold">
        Recommended Actions
      </h2>

      <div className="mt-6 space-y-4">

        {result.recommendations.map((item) => (
          <div key={item}>
            ✅ {item}
          </div>
        ))}

      </div>

    </div>

     <div className="mt-10 flex gap-4">

  <button
    onClick={() => window.location.href="/scan"}
    className="rounded-xl border border-zinc-700 px-8 py-4 hover:border-violet-500"
  >
    Scan Another
  </button>

  <button
    onClick={async () => {
    await generatePDF(result);
  }}
    className="rounded-xl bg-violet-500 px-8 py-4 font-medium hover:bg-violet-400"
  >
    📄 Download Report
  </button>

</div>

      </section>
          <footer className="border-t border-zinc-800 py-6">

        <div className="mx-auto max-w-7xl px-8">

          <div className="flex flex-col items-center gap-2 text-center">

            <h3 className="text-lg font-semibold">
              KnowScam AI
            </h3>

            <p className="text-sm text-zinc-500">
              Detect scams before they cause harm.
            </p>

            <p className="text-xs text-zinc-600">
              Powered by Gemini Vision & AI Threat Detection
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}