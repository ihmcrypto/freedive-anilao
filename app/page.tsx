import Image from "next/image";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const experiences = [
  {
    number: "01",
    label: "A first ocean day",
    title: "First Ocean Session",
    description:
      "A relaxed introduction for travelers who want to try freediving with clear guidance and no pressure to perform.",
    bestFor: "Complete beginners and curious swimmers",
  },
  {
    number: "02",
    label: "More time in the blue",
    title: "Reef Explore",
    description:
      "An unhurried day for comfortable swimmers and returning freedivers who want more time along the Anilao coast.",
    bestFor: "Returning guests and confident swimmers",
  },
  {
    number: "03",
    label: "Your own pace",
    title: "Private Anilao Day",
    description:
      "A personal experience for couples, friends, or small groups, shaped around your comfort and interests.",
    bestFor: "Couples, friends, and private groups",
  },
];

const dayFlow = [
  {
    time: "01",
    title: "Meet and plan",
    description:
      "We start with a simple conversation about your experience, comfort in the water, and the day ahead.",
  },
  {
    time: "02",
    title: "Ease in",
    description:
      "Take time to settle, get comfortable, and understand what to expect before entering the water.",
  },
  {
    time: "03",
    title: "Explore",
    description:
      "Enjoy focused ocean time at a pace that leaves room to look around, breathe, and take in Anilao.",
  },
  {
    time: "04",
    title: "Slow down",
    description:
      "Come back to shore, reset, and leave space for the easy coastal rhythm that makes Mabini worth the trip.",
  },
];

const reassurance = [
  "A clear briefing before the water",
  "A pace shaped around your comfort",
  "Plans adjusted to local conditions",
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

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="m5 10 3.2 3.2L15 6.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fbfaf5] text-[#0b3039]">
      <Hero />

      <section id="about" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-20">
          <div>
            <p className="section-label">Freedive Anilao</p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Come for the water. Leave with a different pace.
            </h2>
          </div>

          <div className="max-w-xl lg:pb-2">
            <p className="text-pretty text-lg leading-8 text-[#31525a]">
              Anilao is a coastal escape in Mabini, Batangas, known for clear
              water, coral reefs, and days that move with the sea. We shape each
              experience around your comfort, background, and the conditions.
            </p>
            <a
              href="#location"
              className="mt-7 inline-flex items-center gap-2 border-b border-[#0b3039]/25 pb-1 text-sm font-semibold text-[#0b3039] transition-colors hover:border-[#0b3039] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b3039]"
            >
              Find Anilao
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-px overflow-hidden rounded-3xl border border-[#0b3039]/10 bg-[#0b3039]/10 sm:grid-cols-3">
          {[
            ["New to freediving", "Simple guidance and time to settle in"],
            ["Already comfortable", "More room to explore at an easy pace"],
            ["Traveling together", "A day shaped around your group"],
          ].map(([title, description]) => (
            <div key={title} className="bg-white px-6 py-7 sm:px-7 sm:py-8">
              <p className="text-sm font-semibold text-[#0b3039]">{title}</p>
              <p className="mt-2 text-sm leading-6 text-[#5a747a]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="experiences"
        className="bg-[#eef4f1] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="section-label">Ways to spend the day</p>
              <h2 className="mt-4 text-balance text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Choose the shape of your ocean time.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#4d6a70] lg:justify-self-end">
              Start with the format that feels closest to your trip. Final
              timing, route, and inclusions are confirmed around your dates,
              group, and local conditions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {experiences.map((experience) => (
              <article
                key={experience.title}
                className="group flex min-h-[420px] flex-col rounded-3xl border border-[#0b3039]/10 bg-[#fbfaf5] p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-[#638087]">
                    {experience.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#5CE1E6]" />
                </div>
                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-[#568087]">
                  {experience.label}
                </p>
                <h3 className="mt-3 text-3xl font-medium tracking-[-0.035em]">
                  {experience.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-[#4d6a70]">
                  {experience.description}
                </p>
                <div className="mt-auto border-t border-[#0b3039]/10 pt-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#789095]">
                    Best for
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#284a52]">
                    {experience.bestFor}
                  </p>
                  <a
                    href="#book"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0b3039] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b3039]"
                  >
                    Ask about this day
                    <span className="transition-transform group-hover:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="day"
        className="bg-[#082f39] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="section-label section-label-light">Your day</p>
              <h2 className="mt-4 text-balance text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Enough structure to feel ready. Enough space to enjoy it.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/65 lg:justify-self-end">
              Every day looks a little different. The water, weather, and your
              comfort decide the details, but the rhythm stays simple.
            </p>
          </div>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/12 bg-white/12 md:grid-cols-2 lg:grid-cols-4">
            {dayFlow.map((step) => (
              <li key={step.title} className="bg-[#082f39] p-7 sm:p-8">
                <span className="font-mono text-xs tracking-[0.2em] text-[#5CE1E6]">
                  {step.time}
                </span>
                <h3 className="mt-8 text-xl font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-8 rounded-3xl bg-white/6 p-7 sm:p-9 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8de9e8]">
                New to the water
              </p>
              <h3 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                You do not need to know the language of the sport.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
                We keep instructions clear, set expectations before the water,
                and make room for questions. The point is to feel prepared, not
                rushed.
              </p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-[#0d3c47] p-6 sm:p-7">
              <ul className="space-y-4">
                {reassurance.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5CE1E6]/12 text-[#5CE1E6]">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-5 text-white/50">
                All water plans depend on the weather and sea conditions on the
                day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="bg-[#f4efe5] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
            <div>
              <p className="section-label">A first look at Mabini</p>
              <h2 className="mt-4 max-w-3xl text-balance text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Stay for the light at the end of the day.
              </h2>
            </div>
            <p className="text-sm leading-6 text-[#5c7378] lg:pb-1">
              Warm light settles over the Mabini coast as the bay grows quiet.
              It is a simple ending to a day spent in and around the water.
            </p>
          </div>

          <figure className="relative mt-12 aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#c9b98e] sm:aspect-[16/10] lg:aspect-[16/8]">
            <Image
              src="/images/mabini-sunset.png"
              alt="A golden sunset over calm water, boats, and the shoreline in Mabini"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 92vw, 1200px"
              className="object-cover object-[56%_70%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082f39]/65 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-white sm:p-9">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Mabini, Batangas
                </p>
                <p className="mt-2 text-lg font-medium sm:text-xl">
                  Sunset on the Anilao coast
                </p>
              </div>
              <span className="hidden rounded-full border border-white/30 bg-black/10 px-4 py-2 text-xs text-white/75 backdrop-blur-sm sm:inline-flex">
                Mabini sunset
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="location" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <p className="section-label">Location</p>
            <h2 className="mt-4 text-balance text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Anilao, on the coast of Mabini.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#4d6a70]">
              Based in Mabini, Batangas, south of Metro Manila. Anilao fits
              naturally into a Batangas stay or a wider Philippines itinerary.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#5f777c]">
              Once we know your dates, we will confirm the meeting point,
              timing, and what to bring for your chosen experience.
            </p>
            <a
              href="#book"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b3039] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b3039]"
            >
              Plan Anilao into your trip
              <ArrowIcon />
            </a>
          </div>

          <div className="location-card relative min-h-[440px] overflow-hidden rounded-[2rem] border border-[#0b3039]/10 bg-[#dff2ef] p-7 sm:min-h-[500px] sm:p-10">
            <div className="relative z-10 flex h-full min-h-[384px] flex-col justify-between sm:min-h-[420px]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4a7177]">
                  Your route south
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b3039] text-[#5CE1E6]">
                  <PinIcon />
                </span>
              </div>

              <div className="mx-auto w-full max-w-md space-y-5">
                <div className="rounded-2xl border border-[#0b3039]/10 bg-white/70 px-5 py-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#698188]">
                    Start
                  </p>
                  <p className="mt-1 text-lg font-medium">Metro Manila</p>
                </div>
                <div className="ml-8 h-12 w-px border-l border-dashed border-[#0b3039]/25" />
                <div className="rounded-2xl bg-[#0b3039] px-5 py-5 text-white shadow-xl shadow-[#0b3039]/12">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#8de9e8]">
                    Arrive
                  </p>
                  <p className="mt-1 text-xl font-medium">Anilao, Mabini</p>
                  <p className="mt-2 text-sm text-white/60">Batangas, Philippines</p>
                </div>
              </div>

              <p className="max-w-sm text-xs leading-5 text-[#557278]">
                Exact meeting details are shared when your date and experience
                are confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="px-5 pb-5 pt-6 sm:px-8 sm:pb-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#5CE1E6] px-6 py-14 text-[#082f39] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#24575f]">
                Booking enquiries
              </p>
              <h2 className="mt-4 max-w-3xl text-balance text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Make Anilao part of your Philippines trip.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#285860] sm:text-lg">
                Tell us your dates, group size, and how comfortable you feel in
                the water. We will help you choose the right experience.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href="https://www.instagram.com/freedive.anilao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#082f39] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#082f39]"
                >
                  Message on Instagram
                  <ArrowIcon />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61589091390446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#082f39]/25 px-6 py-3 text-sm font-semibold text-[#082f39] transition-colors hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#082f39]"
                >
                  Find us on Facebook
                </a>
              </div>
              <p className="mt-4 text-center text-xs text-[#35636a] lg:text-left">
                Direct booking details are confirmed in your conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
