export default function Footer() {
  return (
    <footer className="bg-[#0E3A4A] text-white py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Freedive Anilao
          </h3>
          <p className="text-sm text-gray-300">
            Ocean experiences for beginners and travelers in Anilao, Philippines.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Experiences</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Book</a></li>
          </ul>
        </div>

        {/* Soft Upsell */}
        <div>
          <h4 className="font-semibold mb-2">
            Want to go deeper?
          </h4>
          <p className="text-sm text-gray-300 mb-3">
            Train with The Deep Practice for structured freediving progression.
          </p>

          <a
            href="https://thedeeppractice.co/"
            target="_blank"
            className="text-[#5CE1E6] font-medium hover:underline"
          >
            Visit The Deep Practice →
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} Freedive Anilao. All rights reserved.
      </div>
    </footer>
  );
}