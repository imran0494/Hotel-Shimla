// import at top of the file
import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
// import { RiRupeeLine } from "react-icons/ri";

/* ---------- Footer component ---------- */
export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
          {/* Left: copyright + links */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span>© {new Date().getFullYear()} Hotel Shimla, Inc.</span>
            <span className="hidden md:inline">·</span>
            <a href="/privacy" className="hover:underline">Privacy</a>
            <span className="hidden md:inline">·</span>
            <a href="/terms" className="hover:underline">Terms</a>
            <span className="hidden md:inline">·</span>
            <a href="/company" className="hover:underline">Company details</a>
          </div>

          {/* Right: language, currency, social icons */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
            >
              <FaGlobe className="w-4 h-4" />
              <span className="hidden sm:inline">English (IN)</span>
            </button>

            <button
              type="button"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
            >
              <RiMoneyRupeeCircleLine className="w-4 h-4" />
              <span className="hidden sm:inline">INR</span>
            </button>

            <div className="flex items-center gap-3 text-gray-600">
              <a href="#" aria-label="Facebook" className="hover:text-gray-900">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" aria-label="X / Twitter" className="hover:text-gray-900">
                <FiX className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-900">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
