import spiderlegovid from "../assets/artwork/IMD3002_TPC_B_Braun_I_Legault_Video.mp4";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row flex-1">
      <section className="w-full md:w-1/2 bg-black flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-12 text-center md:text-left">
        <h1 className="font-[Playfair Display] font-bold leading-[0.9] tracking-tight mb-8 
          text-5xl sm:text-7xl md:text-8xl lg:text-[12rem] xl:text-[16rem] text-white">
          <br></br> <br></br>
          BECK'S<br />PORTFOLIO
        </h1>

        <p className="text-base sm:text-lg font-semibold text-purple-100">
          Email:{" "}
          <a
            href="mailto:beckbraun@cmail.carleton.ca"
            className="underline"
          >
            beckbraun@cmail.carleton.ca
          </a>
        </p>

        <p className="mt-6 text-gray-200 text-sm sm:text-base">
          I am a dedicated artist and developer.
        </p>
        <p className="text-gray-200 text-sm sm:text-base">
          Welcome to my art portfolio.
        </p>
      </section>

      <section className="w-full md:w-1/2 bg-gray-300 flex items-center justify-center">
        <video
          src={spiderlegovid}
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
