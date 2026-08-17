const footerLinks = [
  { label: "Experiences", href: "#experiences" },
  { label: "Your day", href: "#day" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Book", href: "#book" },
];

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.7 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.6v8h3.1Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#062832] px-5 pb-8 pt-16 text-white sm:px-8 sm:pt-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <a
              href="#top"
              aria-label="Freedive Anilao home"
              className="inline-flex flex-col rounded-sm leading-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5CE1E6]"
            >
              <span className="text-[0.78rem] font-semibold tracking-[0.34em]">
                FREEDIVE
              </span>
              <span className="mt-1.5 text-[0.64rem] tracking-[0.46em] text-white/55">
                ANILAO
              </span>
            </a>
            <p className="mt-6 text-sm leading-6 text-white/60">
              Thoughtfully guided freediving and ocean days for travelers in
              Anilao, Mabini, Batangas, Philippines.
            </p>
            <p className="mt-4 text-xs leading-5 text-white/40">
              All water activities are subject to local weather and sea
              conditions.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8de9e8]">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/62 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5CE1E6]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8de9e8]">
              Connect
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/freedive.anilao/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Freedive Anilao on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/35 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5CE1E6]"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589091390446"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Freedive Anilao on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/35 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5CE1E6]"
              >
                <FacebookIcon />
              </a>
            </div>
            <p className="mt-6 text-sm text-white/60">Mabini, Batangas</p>
            <p className="mt-1 text-xs text-white/40">Philippines</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Freedive Anilao. All rights reserved.</p>
          <p>Ocean days in Mabini, Batangas.</p>
        </div>
      </div>
    </footer>
  );
}
