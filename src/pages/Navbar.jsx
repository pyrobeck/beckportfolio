import spider from '../assets/spiderbec.png'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-black text-white font-sans">
      <img src={spider} alt="Logo" className="w-12" />
      <ul className="flex items-center space-x-8 text-lg">
        <li className="text-purpleText">Home</li>
        <li>Art Portfolio</li>
        <li>Games</li>
        <li className="bg-purpleAccent px-5 py-2 rounded text-black font-semibold hover:bg-purpleText transition">
          Contact
        </li>
      </ul>
    </nav>
  )
}
