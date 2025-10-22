import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ArtPortfolio from "./pages/ArtPortfolio";
import Games from "./pages/Games";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import spiderlogo from "./assets/spiderbec.png";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
      <nav className="flex justify-between items-center px-12 py-6 text-lg font-sans">
  <Link to="/" className="flex items-center">
    <img
      src={spiderlogo}
      alt="Beck's Logo"
      className="h-50 w-50 md:h-30 md:w-30 hover:scale-105 transition-transform"
    />
  </Link>

  <div className="flex items-center space-x-8">
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
  </div>
</nav>


        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/art" element={<ArtPortfolio />} />
            <Route path="/games" element={<Games />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
