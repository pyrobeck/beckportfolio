import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ArtPortfolio from "./pages/ArtPortfolio";
import Games from "./pages/Games";
import Contact from "./pages/Contact";
import spiderlegovid from "./assets/artwork/IMD3002_TPC_B_Braun_I_Legault_Video.mp4";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* Navbar */}
        <nav className="flex justify-end items-center px-12 py-6 space-x-8 text-lg font-sans">
          <Link to="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link to="/art" className="hover:text-purple-400 transition-colors">
            Art Portfolio
          </Link>
          <Link to="/games" className="hover:text-purple-400 transition-colors">
            Games
          </Link>
          <Link
            to="/contact"
            className="bg-purple-700 px-4 py-2 rounded text-white hover:bg-purple-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<ArtPortfolio />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Split Section */}
        <main className="flex flex-1">
          <section className="w-1/2 bg-black flex flex-col justify-center px-24">
            <h1 className="text-7xl font-serif leading-tight mb-6">
              BECK'S<br />PORTFOLIO
            </h1>
            <p className="text-lg font-semibold text-purple-100">
              Email:{" "}
              <a
                href="mailto:beckbraun@cmail.carleton.ca"
                className="underline"
              >
                beckbraun@cmail.carleton.ca
              </a>
            </p>
          </section>

          <section className="w-1/2 bg-gray-300 flex items-center justify-center">
            <video
              src={spiderlegovid}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </section>
        </main>
      </div>
    </Router>
  );
}
