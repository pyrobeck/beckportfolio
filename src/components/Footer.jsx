

export default function Footer() {
    return (
      <footer >
        © {new Date().getFullYear()} Beck. Crafted with 🕸️ 
        <a
            href="https://github.com/pyrobeck/pyrobeck.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline"
            >  Github
          </a>
      </footer>
    );
  }
  