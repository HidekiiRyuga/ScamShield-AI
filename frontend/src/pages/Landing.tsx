import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
   <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <Navbar />

     <section id="home" className="flex flex-col items-center px-8 pt-12 pb-16 text-center">

        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-violet-400">
          AI-Powered Scam Detection
        </p>

        <h1 className="max-w-4xl text-6xl font-bold leading-none lg:text-7xl">
          Stop Scams
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Before They Start.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-zinc-400">
          Upload screenshots of suspicious messages, emails,
          and chats. KnowScam AI uses Gemini Vision and
          multi-agent threat analysis to detect scams in seconds.
        </p>

        <div className="mt-10 flex gap-4">

           <Link
            to="/scan"
            className="rounded-lg bg-violet-500 px-6 py-3 font-medium transition hover:bg-violet-400"
          >
            Protect My Digital Life
          </Link>

                 <a
  href="https://youtu.be/-pKjUNppt-s"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block cursor-pointer rounded-lg border border-zinc-700 px-6 py-3 transition hover:border-zinc-500"
>
  Watch Demo
</a>
          </div>
            <div className="mt-20 w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-[0_0_100px_rgba(139,92,246,0.15)]">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-cyan-500/5" />

          {/* Dashboard Content */}
          <div className="relative z-10">

            <div className="mb-8 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  Threat Intelligence Dashboard
                </h3>
                <p className="text-sm text-zinc-500">
                  Live Scam Monitoring
                </p>
              </div>

              <div className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1 text-sm text-green-400">
                Active
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border border-zinc-800 bg-black p-6">
                <p className="text-sm text-zinc-500">
                  Threat Score
                </p>

                <h4 className="mt-3 text-4xl font-bold text-red-400">
                  94%
                </h4>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-black p-6">
                <p className="text-sm text-zinc-500">
                  Scam Category
                </p>

                <h4 className="mt-3 text-xl font-semibold">
                  SMS Phishing
                </h4>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-black p-6">
                <p className="text-sm text-zinc-500">
                  Confidence
                </p>

                <h4 className="mt-3 text-4xl font-bold text-cyan-400">
                  96%
                </h4>
              </div>

            </div>

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-black p-6">

      
        
      <div className="grid gap-8 md:grid-cols-2">

  {/* LEFT SIDE */}

  <div className="space-y-8 flex flex-col items-center">

    <div className="mb-6">

  <h4 className="text-lg font-semibold">
    Threat Analysis Timeline
  </h4>

  <p className="mt-1 text-sm text-zinc-500">
    Multi-agent threat detection workflow
  </p>

</div>

    <div className="flex items-center gap-4 w-fit">
      

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
        ✓
      </div>

      <div>
        <p className="font-medium">
          Screenshot Uploaded
        </p>

        <p className="text-xs text-zinc-500">
          Input received
        </p>
      </div>

    </div>

    <div className="flex items-center gap-4 w-fit">

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
        ✓
      </div>

      <div>
        <p className="font-medium">
          OCR Extraction Complete
        </p>

        <p className="text-xs text-zinc-500">
          Text successfully detected
        </p>
      </div>

    </div>

    <div className="flex items-center gap-4 w-fit">

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
        ⚠
      </div>

      <div>
        <p className="font-medium">
          Phishing Pattern Found
        </p>

        <p className="text-xs text-zinc-500">
          Suspicious indicators detected
        </p>
      </div>

    </div>

    <div className="flex items-center gap-4 w-fit">

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-400 animate-pulse">
        🚨
      </div>

      <div>
        <p className="font-medium text-red-400">
          Critical Threat Identified
        </p>

        <p className="text-xs text-zinc-500">
          Risk Score: 94%
        </p>
      </div>

    </div>

  </div>

  {/* RIGHT SIDE */}

  <div>

    <h5 className="mb-4 text-sm font-medium text-zinc-400">
      Agent Status
    </h5>

    <div className="space-y-3">

      <div className="flex items-center justify-between rounded-xl border border-zinc-800 p-3">
        <span>🧠 Vision Agent</span>
        <span className="text-green-400">Complete</span>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-zinc-800 p-3">
        <span>🛡 Threat Agent</span>
        <span className="text-green-400">Complete</span>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-zinc-800 p-3">
        <span>🔍 Pattern Agent</span>
        <span className="text-green-400">Complete</span>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-zinc-800 p-3">
        <span>⚠ Risk Agent</span>
        <span className="text-green-400">Complete</span>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-zinc-800 p-3">
        <span>🛟 Safety Agent</span>
        <span className="text-green-400">Complete</span>
      </div>

    </div>

  </div>

</div>
    

  </div>

          </div>

        </div>
      </div>

        <div className="mt-20 w-full max-w-6xl">

        </div>
        {/* Features Section */}
        <section id="features">
        <div
          id="features"
          className="mt-0 w-full max-w-6xl"
        >
          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Engineered for absolute
              <br />
              technical precision.
            </h2>

            <p className="mt-4 text-zinc-500">
              Advanced threat detection powered by
              intelligent scam analysis.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">

            {/* Card 1 */}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-violet-500/50">

              <div className="mb-6 text-violet-400 text-2xl">
                ⚡
              </div>

              <h3 className="text-xl font-semibold">
                Real-Time Detection
              </h3>

              <p className="mt-3 text-zinc-500">
                Analyze suspicious content instantly
                using intelligent scam detection.
              </p>

            </div>

            {/* Card 2 */}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-cyan-500/50">

              <div className="mb-6 text-cyan-400 text-2xl">
                🖼️
              </div>

              <h3 className="text-xl font-semibold">
                Screenshot Analysis
              </h3>

              <p className="mt-3 text-zinc-500">
                Upload screenshots and let AI
                identify potential threats.
              </p>

            </div>

            {/* Card 3 */}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-green-500/50">

              <div className="mb-6 text-green-400 text-2xl">
                🌐
              </div>

              <h3 className="text-xl font-semibold">
                Global Threat Database
              </h3>

              <p className="mt-3 text-zinc-500">
                Compare threats against known scam
                patterns and malicious tactics.
              </p>

            </div>

            {/*card 4 and etc */}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-green-500/50">
            <div className="mb-6 text-green-400 text-2xl">
              🌍
            </div>

            <h3 className="text-xl font-semibold">
              Language Detection
            </h3>

            <p className="mt-3 text-zinc-500">
              Automatically detects content language and
              returns analysis in the same language.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-yellow-500/50">
            <div className="mb-6 text-yellow-400 text-2xl">
              🎙️
            </div>

            <h3 className="text-xl font-semibold">
              Speech-to-Text Input
            </h3>

            <p className="mt-3 text-zinc-500">
              Speak suspicious messages directly instead
              of typing them manually.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-red-500/50">
            <div className="mb-6 text-red-400 text-2xl">
              🛡️
            </div>

            <h3 className="text-xl font-semibold">
              Prompt Injection Protection
            </h3>

            <p className="mt-3 text-zinc-500">
              Hardened AI prompts help prevent malicious
              instructions from manipulating analysis.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-orange-500/50">
            <div className="mb-6 text-orange-400 text-2xl">
              🚫
            </div>

            <h3 className="text-xl font-semibold">
              Relevance Detection
            </h3>

            <p className="mt-3 text-zinc-500">
              Identifies and rejects unrelated content,
              ensuring analysis focuses only on scam-related material.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-pink-500/50">
            <div className="mb-6 text-pink-400 text-2xl">
              📄
            </div>

            <h3 className="text-xl font-semibold">
              Downloadable Reports
            </h3>

            <p className="mt-3 text-zinc-500">
              Export professional threat reports with
              risk scores, indicators, and recommendations.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-emerald-500/50">
            <div className="mb-6 text-emerald-400 text-2xl">
              🔒
            </div>

            <h3 className="text-xl font-semibold">
              Privacy First
            </h3>

            <p className="mt-3 text-zinc-500">
              No accounts, no data storage, and no sharing
              of user-submitted content.
            </p>
          </div>

          </div>
        </div>
        </section>
        {/* How It Works */}
        <section id="how-it-works">
        <div
          id="how-it-works"
          className="mt-32 w-full max-w-6xl"
        >
          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Sophisticated Defense In Three Steps
            </h2>
            {/* Scanner Preview */}

        <div className="mt-32 w-full max-w-6xl">

          <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">

            {/* Left Side */}

            <div>

              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-400">
                Live Scanner
              </p>

              <h2 className="text-4xl font-bold">
                The Scanner Interface
              </h2>

              <div className="mt-10 space-y-8">

                <div>

                  <h3 className="text-xl font-semibold">
                    Deep Pattern Recognition
                  </h3>

                  <p className="mt-2 text-zinc-500">
                    Detects phishing attempts,
                    impersonation tactics,
                    urgency language,
                    and suspicious requests.
                  </p>

                </div>

                <div>

                  <h3 className="text-xl font-semibold">
                    Social Profiling
                  </h3>

                  <p className="mt-2 text-zinc-500">
                    Identifies manipulation tactics
                    commonly used in scams and fraud.
                  </p>

                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-[0_0_50px_rgba(139,92,246,0.1)]">

              <div className="mb-4 flex items-center justify-between">

                <p className="text-sm text-zinc-500">
                  THREAT ANALYSIS
                </p>

                <div className="rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-400">
                  CRITICAL
                </div>

              </div>

              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4">

                <p className="text-sm text-zinc-300">
                  Your account has been suspended.
                  Click here immediately to verify
                  your identity:
                </p>

                <p className="mt-3 text-red-400">
                  bank-secure-login.xyz
                </p>

              </div>

              <div className="mt-6 flex gap-3">

                <button className="rounded-lg bg-red-500 px-4 py-2 text-sm">
                  Block Sender
                </button>

                <button className="rounded-lg border border-zinc-700 px-4 py-2 text-sm">
                  Safe Mode
                </button>

              </div>

            </div>

          </div>

        </div>

          <div className="mx-auto my-24 max-w-7xl px-8">

          <div className="relative">
        <div className="mx-auto my-24 max-w-7xl px-8">

          <div className="h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

        </div>
          </div>

        </div>
        
        {/* FAQ Section */}
        
          <section  id="faq" 
          className="mx-auto max-w-4xl px-0">
        <div className="mt-24 w-full max-w-4xl">

          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-zinc-500">
              Everything you need to know about KnowScam AI.
            </p>

          </div>

          <div className="mt-12 space-y-4">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

              <h3 className="font-semibold">
                How does KnowScam detect scams?
              </h3>

              <p className="mt-3 text-zinc-500">
                KnowScam analyzes screenshots and messages
                for phishing attempts, impersonation tactics,
                suspicious links, and social engineering patterns.
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

              <h3 className="font-semibold">
                Do I need technical knowledge?
              </h3>

              <p className="mt-3 text-zinc-500">
                No. KnowScam explains risks in simple,
                human-friendly language anyone can understand.
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

              <h3 className="font-semibold">
                What kinds of scams can it detect?
              </h3>

              <p className="mt-3 text-zinc-500">
                Banking scams, phishing attacks, fake jobs,
                delivery scams, lottery scams, and many more.
              </p>

            </div>

          </div>

        </div>
        </section>

        {/* Final CTA */}

        <div className="mt-32 mb-24 w-full max-w-6xl">

          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-violet-500/10 via-zinc-950 to-cyan-500/10 p-12 text-center">

            <h2 className="text-5xl font-bold">
              Ready To Protect
              <br />
              Your Digital Life?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
              Upload suspicious screenshots and let
              KnowScam AI help you stay one step ahead
              of scammers.
            </p>

            <div className="mt-10">

              <Link
                to="/scan"
                className="rounded-xl bg-violet-500 px-8 py-4 font-medium transition hover:bg-violet-400"
              >
                Start Scanning
              </Link>

            </div>

          </div>

        </div>

            <p className="mt-4 text-zinc-500">
              Fast, automated, and easy to understand.
            </p>

          </div>

          <div className="mt-20 flex flex-col items-center justify-between gap-8 md:flex-row">

            {/* Step 1 */}

            <div className="flex flex-col items-center text-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-2xl">
                📤
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Upload
              </h3>

              <p className="mt-2 max-w-xs text-zinc-500">
                Upload a suspicious screenshot,
                message, or link.
              </p>

            </div>

            {/* Arrow */}

            <div className="hidden text-zinc-700 md:block">
              ─────→
            </div>

            {/* Step 2 */}

            <div className="flex flex-col items-center text-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-2xl">
                🧠
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Analyze
              </h3>

              <p className="mt-2 max-w-xs text-zinc-500">
                AI agents evaluate the content
                for scam indicators.
              </p>

            </div>

            {/* Arrow */}

            <div className="hidden text-zinc-700 md:block">
              ─────→
            </div>

            {/* Step 3 */}

            <div className="flex flex-col items-center text-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10 text-2xl">
                📄
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Report
              </h3>

              <p className="mt-2 max-w-xs text-zinc-500">
                Receive risk scores,
                explanations, and actions.
              </p>

            </div>

          </div>
        </div>
        </section>
        
      </section>
      <div className="mx-auto mb-12 w-full max-w-6xl">
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5 text-center">

      <h3 className="text-sm font-medium text-zinc-300">
        🔒 Privacy First
      </h3>

      <p className="mt-2 text-sm text-zinc-500">
        KnowScam AI does not store, sell, or share your messages,
        screenshots, or personal information. Submitted content is
        analyzed solely for scam detection and is not retained after
        processing.
      </p>

    </div>
  </div>
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
