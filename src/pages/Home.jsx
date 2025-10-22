export default function Home() {
    return (
        <section className="flex min-h-screen">
        {/* Left side */}
        <div className="bg-dark w-1/2 flex flex-col justify-center px-16">
          <h1 className="text-[7rem] font-serif leading-[1] text-[#E6E4F4]">
            BECK'S <br /> PORTFOLIO
          </h1>
          <p className="mt-10 text-white font-sans text-lg">
            Email: <span className="font-bold">beckbraun@cmail.carleton.ca</span>
          </p>
        </div>
  
        {/* Right side */}
        <div className="bg-lightgray w-1/2 flex justify-center items-center">
          <button className="bg-dark rounded-full p-6 hover:bg-purpleAccent transition">
            <img src={play} alt="Play" className="w-8" />
          </button>
        </div>
      </section>
    );
  }
  