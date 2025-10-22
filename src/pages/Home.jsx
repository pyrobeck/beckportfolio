import spiderlegovid from "../assets/artwork/IMD3002_TPC_B_Braun_I_Legault_Video.mp4";

export default function Home() {
  return (
    <main className="flex flex-1">
      {/* Left side */}
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
        <br></br>
        <br></br>
        <p>I am a dedicated artist and developer. </p>
        <br></br>
        <p>Welcome to my art portfolio. </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
      </section>

      {/* Right side */}
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
  );
}
