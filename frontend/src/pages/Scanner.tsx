import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useScan } from "../context/ScanContext";
import { useInput } from "../context/InputContext";
import { demoScenarios } from "../data/demoScenarios";
import { useState, useRef } from "react";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}


export default function Scanner() {
  
   const [speechLanguage, setSpeechLanguage] =
  useState("en-US");
  const languages = [
  { label: "🇺🇸 English", value: "en-US" },
  { label: "🇮🇳 Hindi", value: "hi-IN" },
  { label: "🇯🇵 Japanese", value: "ja-JP" },
  { label: "🇪🇸 Spanish", value: "es-ES" },
  { label: "🇫🇷 French", value: "fr-FR" },
  { label: "🇩🇪 German", value: "de-DE" },
  { label: "🇮🇹 Italian", value: "it-IT" },
  { label: "🇵🇹 Portuguese", value: "pt-BR" },
  { label: "🇷🇺 Russian", value: "ru-RU" },
  { label: "🇨🇳 Chinese", value: "zh-CN" },
  { label: "🇰🇷 Korean", value: "ko-KR" },
  { label: "🇸🇦 Arabic", value: "ar-SA" },
  { label: "🇹🇷 Turkish", value: "tr-TR" },
  { label: "🇳🇱 Dutch", value: "nl-NL" },
  { label: "🇹🇭 Thai", value: "th-TH" },
  { label: "🇻🇳 Vietnamese", value: "vi-VN" },
];
  const [selectedDemo, setSelectedDemo] =
  useState("");
  const [mode, setMode] =
  useState<"image" | "text">("image");
  const navigate = useNavigate();
  const { image, setImage } = useScan();
  const { message, setMessage } = useInput();
  const [isListening, setIsListening] =
  useState(false);

  const recognitionRef =
  useRef<any>(null);

  const startListening = () => {

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

      alert(
        "Speech Recognition is not supported in this browser."
      );

      return;
    }

    const recognition =
      new SpeechRecognition();

    recognitionRef.current =
      recognition;

    recognition.continuous = true;

    recognition.interimResults = true;

    recognition.lang = speechLanguage;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event: any) => {

    let transcript = "";

    for (
      let i = event.resultIndex;
      i < event.results.length;
      i++
    ) {

      transcript +=
        event.results[i][0].transcript;
    }

    setMessage(transcript);

  };

    recognition.start();
  };

  const stopListening = () => {

  recognitionRef.current?.stop();

  setIsListening(false);

};

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      <Navbar />

      <section className="mx-auto max-w-7xl px-8 py-10">

        <div className="mb-12">

          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Threat Intelligence
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Scanner
          </h1>

          <p className="mt-4 text-zinc-500">
            Upload suspicious screenshots or paste
            messages for instant scam analysis.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* LEFT SIDE */}

          <div className="lg:col-span-2">

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

              <div className="mb-6 flex gap-3">

              <button
              onClick={() => {
                setMode("image");

                setMessage("");

                setSelectedDemo("");
              }}
                className={
                  mode === "image"
                    ? "rounded-xl bg-violet-500 px-6 py-3 text-sm font-medium cursor-pointer transition-all duration-300  hover:shadow-lg hover:shadow-violet-500/0"
                    :"rounded-xl border border-zinc-700 px-6 py-3 text-sm cursor-pointer transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/5 hover:scale-105"
                    
                }
              >
                Screenshot
              </button>

              <button
              onClick={() => {
                setMode("text");

                setImage("");

              }}
                className={
                  mode === "text"
                    ? "rounded-xl bg-violet-500 px-6 py-3 text-sm font-medium cursor-pointer transition-all duration-300  hover:shadow-lg hover:shadow-violet-500/0"
                    : "rounded-xl border border-zinc-700 px-6 py-3 text-sm cursor-pointer transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/5 hover:scale-105"
                }
              >
                Message Text
              </button>
              
            </div>
            {mode === "text" && (
          <>
            <textarea
              id="message-box"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Paste suspicious message here..."
              className="mb-4 h-40 w-full resize-none rounded-2xl border border-zinc-800 bg-black p-4 text-white"
            />

            <div className="flex gap-3">
              <div className="mb-3">

        <select
          value={speechLanguage}
          onChange={(e) =>
            setSpeechLanguage(e.target.value)
          }
          className="
            rounded-xl
            border
            border-zinc-700
            bg-black
            px-4
            py-2
            text-white
          "
        >
          {languages.map((lang) => (
            <option
              key={lang.value}
              value={lang.value}
            >
              {lang.label}
            </option>
          ))}
        </select>

      </div>

              {!isListening ? (
                
                <button
                  onClick={startListening}
                  className="rounded-xl bg-violet-500 px-3 py-1,5 font-medium hover:bg-violet-400"
                >
                  🎤 Speak Message
                </button>
              ) : (
                <button
                  onClick={stopListening}
                  className="rounded-xl bg-red-500 px- py-1.5 font-medium hover:bg-red-400"
                >
                  ⏹ Stop
                  
                </button>
                
              )}

            </div>
            {isListening && (
          <div className="text-sm text-red-400 animate-pulse">
            🎙 Listening...
          </div>
        )}
          </>
        )}

            {mode === "image" && (
            
              <div className="flex h-[350px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-700">

        {!image && (
        <>
          <div className="text-5xl">
            📤
          </div>

          <h3 className="mt-6 text-xl font-semibold">
            Upload Screenshot
          </h3>

          <p className="mt-2 text-zinc-500">
            PNG, JPG, JPEG supported
          </p>
        </>
      )}

        {image && (
           <div className="relative mt-6">
        <img
          src={image}
          alt="Preview"
          className="mt-6 max-h-48 rounded-xl"
        />
         <button
      onClick={() => {
      setImage("");

      const input =
        document.getElementById("upload") as HTMLInputElement;

      if (input) {
        input.value = "";
      }
    }}
      className="
        absolute
        -top-2
        -right-2
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-full
        bg-red-500
        text-white
        shadow-lg
        transition
        hover:bg-red-400
        cursor-pointer
      "
    >
      ✕
    </button>

        </div>
      )}


              <input
        type="file"
        accept="image/*"
        id="upload"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Maximum image size is 5MB");
      return;
    }

    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only PNG, JPG, JPEG and WEBP files are allowed.");
      return;
    }

    const reader = new FileReader();
          reader.onloadend = () => {
            const result = reader.result as string;

            setImage(result);

            setMessage("");

            setSelectedDemo("");
          };

        reader.readAsDataURL(file);
        }}
      />
      

      <label
        htmlFor="upload"
        className="mt-8 cursor-pointer rounded-xl bg-violet-500 px-6 py-3 font-medium hover:bg-violet-400"
      >
        Browse Files
      </label>
      </div>
      )}
      <div className="mt-10">
        <div className="mb-6 inline-flex rounded-full bg-green-500/10 px-4 py-2 text-green-400">
      🟢 Demo Mode Ready
    </div>

      <h3 className="mb-4 text-lg font-semibold">
        Demo Scenarios
      </h3>

      <div className="grid gap-4 md:grid-cols-2">

        <div
      onClick={() => {

      if (selectedDemo === "banking") {
        setSelectedDemo("");
        setMessage("");
        return;
      }
      setImage("");
      setMode("text");

      setSelectedDemo("banking");

      setMessage(demoScenarios.banking);

      setTimeout(() => {
        document
          .getElementById("message-box")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
      }, 50);

    }}
      className={`cursor-pointer rounded-xl border p-4 transition ${
  selectedDemo === "banking"
    ? "border-violet-500 bg-violet-500/10"
    : "border-zinc-800"
}`}
    >
      🏦 Banking Phishing
    </div>

        <div
      onClick={() => {
      if (selectedDemo === "job") {
        setSelectedDemo("");
        setMessage("");
        return;
      }
      setImage("");
      setMode("text");
      setSelectedDemo("job");

  setMessage(demoScenarios.job);

  setTimeout(() => {
    document
      .getElementById("message-box")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }, 50);

}}
      className={`cursor-pointer rounded-xl border p-4 transition ${
  selectedDemo === "job"
    ? "border-violet-500 bg-violet-500/10"
    : "border-zinc-800"
}`}
    >
      💼 Fake Job Offer
    </div>

        <div
      onClick={() => {
      if (selectedDemo === "delivery") {
        setSelectedDemo("");
        setMessage("");
        return;
      }
      setImage("");
      setMode("text");
       setSelectedDemo("delivery");

  setMessage(demoScenarios.delivery);

  setTimeout(() => {
    document
      .getElementById("message-box")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }, 50);

}}
      className={`cursor-pointer rounded-xl border p-4 transition ${
  selectedDemo === "delivery"
    ? "border-violet-500 bg-violet-500/10"
    : "border-zinc-800"
}`}
    >
      📦 Delivery Scam
    </div>

        <div
      onClick={() => {
      if (selectedDemo === "lottery") {
        setSelectedDemo("");
        setMessage("");
        return;
      }
      setImage("");
      setMode("text");
      setSelectedDemo("lottery");

  setMessage(demoScenarios.lottery);

  setTimeout(() => {
    document
      .getElementById("message-box")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }, 50);

}}
      className={`cursor-pointer rounded-xl border p-4 transition ${
  selectedDemo === "lottery"
    ? "border-violet-500 bg-violet-500/10"
    : "border-zinc-800"
}`}
    >
      🎁 Lottery Scam
    </div>

      </div>

    </div>

      </div>

         </div>

          {/* RIGHT SIDE */}

          <div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">

              <>
          <h3 className="mb-6 text-lg font-semibold">
            AI Agents
          </h3>

          <div className="space-y-4">

            <div className="rounded-xl border border-zinc-800 p-4">

          <div className="flex items-center justify-between">

            <span>
              🧠 Vision Agent
            </span>

            <span className="text-xs text-zinc-500">
              Waitng...
            </span>

          </div>

        </div>

            <div className="rounded-xl border border-zinc-800 p-4">

          <div className="flex items-center justify-between">

            <span>
               🛡 Threat Agent  
            </span>

            <span className="text-xs text-zinc-500">
              Waitng...
            </span>

          </div>

        </div>

           <div className="rounded-xl border border-zinc-800 p-4">

        <div className="flex items-center justify-between">

          <span>
            🔍 Pattern Agent
          </span>

          <span className="text-xs text-zinc-500">
            Waitng...
          </span>

        </div>

      </div>

          <div className="rounded-xl border border-zinc-800 p-4">

        <div className="flex items-center justify-between">

          <span>
             ⚠ Risk Agent 
          </span>

          <span className="text-xs text-zinc-500">
            Waitng...
          </span>

        </div>

      </div>

           <div className="rounded-xl border border-zinc-800 p-4">

        <div className="flex items-center justify-between">

          <span>
             🛟 Safety Agent
          </span>

          <span className="text-xs text-zinc-500">
            Waitng...
          </span>

        </div>

      </div>
      <div className="mt-10">
    <button
      disabled={!message && !image}
      onClick={() => navigate("/analysis")}
      className={`w-full rounded-xl py-4 text-lg font-medium transition ${
        !message && !image
          ? "cursor-not-allowed bg-zinc-800 text-zinc-500"
          : "bg-violet-500 hover:bg-violet-400"
      }`}
    >
      Analyze Threat
    </button>

      </div>

          </div>
        </>

            </div>

          </div>

        </div>

      </section>

          <footer className="border-t border-zinc-800 py-6">

      <div className="mx-auto max-w-7xl px-8">

        <div className="flex flex-col items-center gap-2 text-center">

          <h3 className="text-lg font-semibold">
            ScamShield AI
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