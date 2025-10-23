import { useState } from "react";
import spider from "../assets/spiderbec.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white font-sans px-6 sm:px-10 py-4">
      <div className="flex justify-between items-center">
        {/* Logo wrapper */}
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              src={spider}
              alt="Logo"
              className="max-h-16 h-auto w-auto object-contain"
              style={{ aspectRatio: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center space-x-8 text-lg">
          <li className="text-purpleText hover:text-purpleAccent transition">Home</li>
          <li className="hover:text-purpleAccent transition">Art Portfolio</li>
          <li className="hover:text-purpleAccent transition">Games</li>
          <li className="bg-purpleAccent px-5 py-2 rounded text-black font-semibold hover:bg-purpleText transition">
            Contact
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-6 text-lg">
          <li className="text-purpleText hover:text-purpleAccent transition">Home</li>
          <li className="hover:text-purpleAccent transition">Art Portfolio</li>
          <li className="hover:text-purpleAccent transition">Games</li>
          <li className="bg-purpleAccent px-5 py-2 rounded text-black font-semibold hover:bg-purpleText transition">
            Contact
          </li>
        </ul>
      )}
    </nav>
  );
}
