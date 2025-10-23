import groupcapstonepic from "../assets/artwork/IMG_4158.jpg";
import anotherpic from "../assets/artwork/DeckOfSecrets_Logo_White.png";
import thirdpic from "../assets/artwork/IMG_1138.JPG";
// 👉 Add more photos as needed

export default function Games() {
  const images = [groupcapstonepic, anotherpic, thirdpic];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-20">
      <h1 className="font-[Playfair Display] font-bold text-center leading-tight mb-12 text-[5rem] sm:text-[7rem] md:text-[10rem]">
        Games
      </h1>

      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8">
        {images.map((src, i) => (
          <div key={i} className="flex justify-center">
            <img
              src={src}
              alt={`art-${i}`}
              className="rounded-lg shadow-lg object-cover w-full h-[350px]"
            />
          </div>
        ))}
      </section>

      <p className="text-purple-200 text-center mt-16 text-lg">
        You can check out the capstone VR project I worked on here:
      </p>
      <a href="https://codenoirstudios.wixsite.com/deckofsecrets/" className="underline">https://codenoirstudios.wixsite.com/deckofsecrets/</a>
      <br></br> <br></br>
      <p className="text-purple-200 text-center mt-16 text-lg">
        More games I worked on:
      </p>
      <a href="https://pyrobeck.itch.io/" className="underline">itch.io</a>
    </main>
  );
}
