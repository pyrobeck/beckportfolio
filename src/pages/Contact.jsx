import artvid from "../assets/artwork/BeckBraun_ITEC4007_Assignment1C_video.mp4";

export default function Contact() {
  return (
    <main className="flex flex-col md:flex-row flex-1">
      <section className="w-full md:w-1/2 bg-black flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-12 text-center md:text-left">
        <h1 className="font-[Playfair Display] font-bold leading-[0.9] tracking-tight mb-8 
          text-5xl sm:text-7xl md:text-8xl lg:text-[12rem] xl:text-[16rem] text-white">
          Contact
        </h1>

        <div className="space-y-6 mt-6">
          <p className="text-base sm:text-lg font-semibold text-purple-100">
            Instagram:{" "}
            <a
              href="https://www.instagram.com/pyrobeckdraws"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-purple-400 transition-colors"
            >
              @pyrobeckdraws
            </a>
          </p>

          <p className="text-base sm:text-lg font-semibold text-purple-100">
            Email:{" "}
            <a
              href="mailto:beckbraun@cmail.carleton.ca"
              className="underline hover:text-purple-400 transition-colors"
            >
              beckbraun@cmail.carleton.ca
            </a>
          </p>
        </div>
      </section>

      <section className="w-full md:w-1/2 bg-gray-300 flex items-center justify-center">
        <video
          src={artvid}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-64 sm:h-80 md:h-full object-cover"
        />
      </section>
    </main>
  );
}
