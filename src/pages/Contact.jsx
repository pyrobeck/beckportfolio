import artvid from "../assets/artwork/BeckBraun_ITEC4007_Assignment1A_FULLvideo.mp4";

export default function Contact() {
  return (
    <main className="flex flex-1">
      <section className="w-1/2 bg-black flex flex-col justify-center px-24">
        <h1 className="font-[Playfair Display] font-bold leading-[0.85] tracking-tight mb-12 text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[20rem] xl:text-[20rem]">
            Contact
        </h1>
        <br></br>
        <div className="space-y-6">
          <p className="text-lg font-semibold text-purple-100">
            Instagram:{" "}
            <a
              href="https://www.instagram.com/pyrobeckdraws"
              className="underline hover:text-purple-400 transition-colors"
            >
              @pyrobeckdraws
            </a>
          </p>
  
          <p className="text-lg font-semibold text-purple-100">
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

      <section className="w-1/2 bg-gray-300 flex items-center justify-center">
        <video
          src={artvid}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </section>
    </main>
  );
}

