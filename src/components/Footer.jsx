export default function Footer() {
    return (
      <footer className="bg-black text-gray-400 text-sm py-6 text-center border-t border-purple-950">
        <p>
          This website was made by me using{" "}
          <span className="text-white">React</span> and{" "}
          <span className="text-white">Tailwind</span>. The code for this website
          can be found on my{" "}
          <a
            href="https://github.com/pyrobeck/pyrobeck.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            Github
          </a>
          .
        </p>
      </footer>
    );
  }
  