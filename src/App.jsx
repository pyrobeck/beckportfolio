import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ArtPortfolio from "./pages/ArtPortfolio";
import Games from "./pages/Games";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


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
        <Footer />
      </div>
    </Router>
  );
}
