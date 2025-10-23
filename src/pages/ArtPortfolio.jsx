import { useState } from "react";

import firstpic from "../assets/artwork/viomgrealsigned.png";
import anotherpic from "../assets/artwork/Viandvanderdrawinined.png";
import thirdpic from "../assets/artwork/morevibabysigned.png";
import fourthpic from "../assets/artwork/istheretime.png";
import fifthpic from "../assets/artwork/kitchenorange.0004.png";
import sixthpic from "../assets/artwork/playbillcovermeangirls_final.png";



export default function ArtPortfolio() {
  const images = [firstpic, anotherpic, thirdpic, fourthpic, fifthpic, sixthpic];
  const [selectedIndex, setSelectedIndex] = useState(null);

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    };


  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-20">
      <h1 className="font-[Playfair Display] font-bold text-center leading-tight mb-12 text-[5rem] sm:text-[7rem] md:text-[10rem]">
        My Work
      </h1>

      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8">
        {images.map((src, i) => (
          <div key={i} className="flex justify-center">
            <img
              src={src}
              alt={`art-${i}`}
              className="rounded-lg shadow-lg object-cover w-full h-[350px] cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedIndex(i)}
            />
          </div>
        ))}
      </section>

      <p className="text-white text-center mt-16 text-md">
        I have created these items both in my free time and as a part of various groups. 
      </p>
      <p className="text-white text-center mt-16 text-md">
        Updated frequently! 
      </p>
      {selectedIndex !== null && (
  <div
    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={() => setSelectedIndex(null)}
  >
    <img
      src={images[selectedIndex]}
      alt="enlarged"
      className="max-h-[90vh] max-w-[90vw] object-contain lg shadow-2xl"
    />

    <button
      onClick={handlePrev}
      className="absolute left-8 text-white text-5xl font-bold hover:text-purple-400 select-none"
    >
      ‹
    </button>
    <button
      onClick={handleNext}
      className="absolute right-8 text-white text-5xl font-bold hover:text-purple-400 select-none"
    >
      ›
    </button>

    <button
      onClick={(e) => {
        e.stopPropagation();
        setSelectedIndex(null);
      }}
        className="absolute top-6 right-8 text-white text-4xl font-bold hover:text-purple-400"
        >
        &times;
        </button>
    </div>
    )}

    </main>
  );
}
