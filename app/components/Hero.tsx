import Image from "next/image";

const navigation = [
  { label: "Experiences", href: "#experiences" },
  { label: "Your day", href: "#day" },
  { label: "Anilao", href: "#location" },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M4 10h12m-4.5-4.5L16 10l-4.5 4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function BrandMark() {
  return (
    <span className="flex flex-col leading-none">
      <span className="text-[0.7rem] font-semibold tracking-[0.34em]">
        FREEDIVE
      </span>
      <span className="mt-1 text-[0.58rem] tracking-[0.46em] text-white/65">
        ANILAO
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[720px] overflow-hidden bg-[#0b3039] text-white sm:min-h-[760px] lg:min-h-[820px]"
    >
      <Image
        src="/images/mabini-sunset.png"
        alt="Sunset over the water in Mabini, Batangas"
        fill
        preload
        sizes="100vw"
        className="object-cover object-[58%_68%] sm:object-[54%_66%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,27,34,0.9)_0%,rgba(4,27,34,0.56)_52%,rgba(4,27,34,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(4,27,34,0.9)_0%,transparent_44%,rgba(4,27,34,0.28)_100%)]" />

      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10 lg:py-7">
          <a
            href="#top"
            aria-label="Freedive Anilao home"
            className="rounded-sm py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5CE1E6]"
          >
            <BrandMark />
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5CE1E6]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-[#5CE1E6] px-5 py-2.5 text-sm font-semibold text-[#092f38] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Plan your day
              <ArrowIcon />
            </a>
          </nav>

          <details className="nav-menu relative md:hidden">
            <summary className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5CE1E6]">
              <span className="sr-only">Open navigation</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 8h14M5 12h14M5 16h14"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
              </svg>
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-14 flex w-[min(20rem,calc(100vw-2.5rem))] flex-col rounded-2xl border border-white/20 bg-[#072f39]/95 p-3 shadow-2xl backdrop-blur-xl"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-[#5CE1E6]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#book"
                className="mt-2 inline-flex items-center justify-between rounded-xl bg-[#5CE1E6] px-4 py-3 text-sm font-semibold text-[#092f38] focus-visible:outline-2 focus-visible:outline-white"
              >
                Plan your day
                <ArrowIcon />
              </a>
            </nav>
          </details>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-end px-5 pb-14 pt-32 sm:min-h-[760px] sm:px-8 sm:pb-20 lg:min-h-[820px] lg:items-center lg:px-10 lg:pb-12 lg:pt-36">
        <div className="max-w-3xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b9f2f0] sm:text-sm">
            <span className="h-px w-8 bg-[#5CE1E6]" />
            Mabini, Batangas, Philippines
          </p>
          <h1 className="hero-copy max-w-3xl text-balance text-5xl font-medium leading-[0.97] tracking-[-0.055em] sm:text-6xl lg:text-[5.4rem]">
            A quieter way to meet the ocean.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
            Guided freediving and ocean days for curious first-timers,
            returning divers, and travelers spending time in the Philippines.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#experiences"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#5CE1E6] px-6 py-3 text-sm font-semibold text-[#092f38] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore experiences
              <ArrowIcon />
            </a>
            <a
              href="#book"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5CE1E6]"
            >
              Start an enquiry
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 border-t border-white/20 pt-5 text-sm text-white/72 sm:grid-cols-3 sm:gap-6">
            {["First-time friendly", "Comfort-led pace", "Conditions-first plans"].map(
              (item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5CE1E6]" />
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
