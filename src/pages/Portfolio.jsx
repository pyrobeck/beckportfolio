import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import firstpic from "../assets/artwork/viomgrealsigned.png";
import anotherpic from "../assets/artwork/Viandvanderdrawinined.png";
import thirdpic from "../assets/artwork/morevibabysigned.png";
import fourthpic from "../assets/artwork/istheretime.png";
import fifthpic from "../assets/artwork/kitchenorange.0004.png";
import sixthpic from "../assets/artwork/playbillcovermeangirls_final.png";

export default function Portfolio() {
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
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-24 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-[Playfair_Display] font-bold text-center leading-[0.9] mb-16
                   text-[4rem] sm:text-[6rem] md:text-[8rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent"
      >
        My Work
      </motion.h1>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8"
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => setSelectedIndex(i)}
          >
            <img
              src={src}
              alt={`art-${i}`}
              className="w-full h-[350px] object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        ))}
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-20 space-y-3 text-gray-300"
      >
        <p className="text-base sm:text-lg max-w-xl mx-auto">
          I have created these artworks both in my free time and as part of collaborative projects.
        </p>
        <p className="text-sm sm:text-base text-purple-300">Updated frequently ✦</p>
      </motion.div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setSelectedIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              key={selectedIndex}
              src={images[selectedIndex]}
              alt="enlarged"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
