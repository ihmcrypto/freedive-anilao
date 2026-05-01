export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Freediving in Anilao"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Discover Freediving in Anilao
        </h1>

        <p className="text-lg md:text-xl mb-6">
          Explore vibrant reefs, relax on a tropical island, and experience the ocean—no experience needed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <a
            href="https://wa.me/YOURNUMBER"
            className="bg-[#5CE1E6] text-black px-6 py-3 rounded-xl font-semibold"
          >
            Book Your Experience
          </a>

          <button className="border border-white px-6 py-3 rounded-xl">
            View Packages
          </button>
        </div>

        <p className="text-sm opacity-90">
          ✔ Beginner-friendly &nbsp; ✔ Guided & safe &nbsp; ✔ Photos included
        </p>
      </div>

    </section>
  );
}