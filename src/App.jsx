import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ArtPortfolio from "./pages/ArtPortfolio";
import Games from "./pages/Games";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <nav className="flex justify-end p-6 space-x-6 bg-black text-white">
          <Link to="/">Home</Link>
          <Link to="/art">Art Portfolio</Link>
          <Link to="/games">Games</Link>
          <Link to="/contact" className="bg-purple-700 px-3 py-1 rounded">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<ArtPortfolio />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
