import Hero from "./components/Hero";
import Footer from "./components/Footer";

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
          {/* cards here */}
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

      {/* ✅ FOOTER HERE */}
      <Footer />

    </main>
  );
}