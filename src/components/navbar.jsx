import { Link } from "react-router-dom";
import { Plus, Bell, User } from "lucide-react";
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#09090f]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xl">
            🔎
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              Lost<span className="text-violet-400">Found</span>
            </h1>

            <p className="text-[10px] text-gray-500">
              CAMPUS COMMUNITY
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-white transition hover:text-violet-400"
          >
            Home
          </Link>

          <a
            href="#recent"
            className="text-sm font-medium text-gray-400 transition hover:text-white"
          >
            Lost Items
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-gray-400 transition hover:text-white"
          >
            How It Works
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="hidden rounded-xl border border-white/10 p-2.5 text-gray-400 transition hover:bg-white/10 hover:text-white sm:block">
            <Bell size={18} />
          </button>

          <button className="hidden rounded-xl border border-white/10 p-2.5 text-gray-400 transition hover:bg-white/10 hover:text-white sm:block">
            <User size={18} />
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500">
            <Plus size={17} />
            Report Item
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;