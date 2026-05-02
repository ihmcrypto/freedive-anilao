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

        {/* Social + Deep Practice */}
        <div>
          <h4 className="font-semibold mb-2">
            Connect
          </h4>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-4">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/freedive.anilao/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61589091390446"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M13 22v-9h3l1-4h-4V7c0-1.1.3-2 2-2h2V1h-3c-3 0-5 2-5 5v3H6v4h3v9h4z"/>
              </svg>
            </a>

          </div>

          {/* Deep Practice */}
          <p className="text-sm text-gray-300 mb-2">
            Want to go deeper?
          </p>

          <a
            href="https://thedeeppractice.co/"
            target="_blank"
            rel="noopener noreferrer"
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