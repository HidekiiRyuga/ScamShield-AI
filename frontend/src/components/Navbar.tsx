import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
   <nav className="border-b border-zinc-900">
  <div className="flex items-center justify-between px-10 py-5">
            <Link
        to="/"
        className="flex flex-col items-start"
      >
        <span className="text-lg font-semibold tracking-wide">
          KnowScam AI
        </span>

        <span className="text-xs text-zinc-500">
          Know scam No scam.
        </span>
      </Link>

        <div className="flex items-center gap-8 text-sm text-zinc-400">
          <HashLink smooth to="/#home">Home</HashLink>
          <HashLink smooth to="/#features">Features</HashLink>
          <HashLink smooth to="/#how-it-works">How It Works</HashLink>

          <Link
            to="/scan"
            className="rounded-md bg-violet-500 px-4 py-2 text-white transition hover:bg-violet-400"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}