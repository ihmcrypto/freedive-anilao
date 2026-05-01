import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <Hero />

      {/* WHAT THIS IS */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">
          A Different Kind of Ocean Experience
        </h2>
        <p className="text-lg text-gray-600">
          Freedive Anilao offers curated ocean experiences designed for beginners and travelers.
          No pressure, no heavy training—just a safe, guided way to explore the underwater world.
        </p>
      </section>

      {/* EXPERIENCES */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Experiences
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Ocean Flow */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Ocean Flow Day</h3>
            <p className="text-gray-600 mb-4">
              Explore multiple dive spots, enjoy island lunch, and capture your experience.
            </p>
            <ul className="text-sm text-gray-500 mb-6 space-y-1">
              <li>✔ Boat dives (2–3 sites)</li>
              <li>✔ Island lunch</li>
              <li>✔ Photos & videos</li>
            </ul>
            <a
              href="https://wa.me/639XXXXXXXXX"
              className="block text-center bg-[#5CE1E6] text-black py-2 rounded-lg"
            >
              Book Now
            </a>
          </div>

          {/* Intro Freedive */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Intro Freedive</h3>
            <p className="text-gray-600 mb-4">
              Your first underwater experience in a calm and controlled environment.
            </p>
            <ul className="text-sm text-gray-500 mb-6 space-y-1">
              <li>✔ Beginner friendly</li>
              <li>✔ Shallow water training</li>
              <li>✔ Guided session</li>
            </ul>
            <a
              href="https://wa.me/639XXXXXXXXX"
              className="block text-center bg-[#5CE1E6] text-black py-2 rounded-lg"
            >
              Book Now
            </a>
          </div>

          {/* Private */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Private Experience</h3>
            <p className="text-gray-600 mb-4">
              A fully personalized day with flexible schedule and premium attention.
            </p>
            <ul className="text-sm text-gray-500 mb-6 space-y-1">
              <li>✔ Custom itinerary</li>
              <li>✔ Private guide</li>
              <li>✔ Flexible timing</li>
            </ul>
            <a
              href="https://wa.me/639XXXXXXXXX"
              className="block text-center bg-[#5CE1E6] text-black py-2 rounded-lg"
            >
              Book Now
            </a>
          </div>

        </div>
      </section>

      {/* EXPERIENCE FLOW */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">
          What Your Day Looks Like
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Start your day with a relaxed briefing. Head out on a boat into clear waters.
          Explore vibrant reefs and marine life. Unwind with lunch on a tropical island.
          End the day calm, present, and recharged.
        </p>
      </section>

      {/* VISUAL PROOF */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-10">
          The Experience
        </h2>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="h-48 bg-gray-300 rounded-xl" />
          <div className="h-48 bg-gray-300 rounded-xl" />
          <div className="h-48 bg-gray-300 rounded-xl" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">
          What People Say
        </h2>

        <div className="space-y-6 text-gray-600">
          <p>"Best experience in Anilao!"</p>
          <p>"Felt safe even as a beginner."</p>
          <p>"Highlight of our trip."</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 text-center bg-[#0E3A4A] text-white">
        <h2 className="text-3xl mb-6">
          Ready to Experience the Ocean?
        </h2>

        <a
          href="https://wa.me/639XXXXXXXXX"
          className="bg-[#5CE1E6] text-black px-8 py-4 rounded-xl font-semibold"
        >
          Book Your Experience
        </a>
      </section>

    </main>
  );
}