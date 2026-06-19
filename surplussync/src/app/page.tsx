"use client";

import { useState, type FormEvent } from "react";

/* ----------------------------------------------------------------------- */
/* Icons (inline SVG, stroke-based, no icon library)                       */
/* ----------------------------------------------------------------------- */

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <path strokeLinecap="round" d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </svg>
  );
}

function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <path strokeLinecap="round" d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

function IconArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function IconLeaf(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path d="M5 19c8-1 13-6 14-14-8 1-13 6-14 14Z" strokeLinejoin="round" />
      <path d="M5 19c1.5-4.5 4.5-7.5 9-9" strokeLinecap="round" />
    </svg>
  );
}

function IconBolt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path d="M13 3 6 13h5l-1 8 7-10h-5l1-8Z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z" strokeLinejoin="round" />
      <path d="m9 12 2.2 2.2L15.5 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconTruck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path d="M3 16V7a1 1 0 0 1 1-1h9v10" strokeLinejoin="round" />
      <path d="M13 10h4l3 3v3h-7v-6Z" strokeLinejoin="round" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
    </svg>
  );
}

function IconChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path d="M4 20V10M11 20V4M18 20v-7" strokeLinecap="round" />
      <path d="M4 20h16" strokeLinecap="round" />
    </svg>
  );
}

function IconBox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path d="M3.5 8 12 4l8.5 4-8.5 4-8.5-4Z" strokeLinejoin="round" />
      <path d="M3.5 8v8l8.5 4 8.5-4V8M12 12v8" strokeLinejoin="round" />
    </svg>
  );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path
        d="M6 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2c-8 0-14-6-14-14a2 2 0 0 1 2-2Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4.5 4.5L19 7" />
    </svg>
  );
}

/* ----------------------------------------------------------------------- */
/* Static content                                                          */
/* ----------------------------------------------------------------------- */

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#impact", label: "Impact" },
  { href: "#vision", label: "Vision" },
  { href: "#contact", label: "Contact" },
];

const PROBLEM_STATS = [
  { stat: "40%", label: "of food produced locally never reaches a plate before it spoils." },
  { stat: "3 hrs+", label: "average time surplus sits before anyone nearby even hears about it." },
  { stat: "1 in 6", label: "people in our partner cities face food or supply insecurity today." },
  { stat: "Phone calls", label: "is still how most surplus gets coordinated — slow, and easy to miss." },
];

const HOW_IT_WORKS = [
  {
    n: "01",
    title: "List the surplus",
    body: "A business logs what's available — category, quantity, and pickup window — in under a minute.",
    icon: IconBox,
  },
  {
    n: "02",
    title: "Get matched",
    body: "SurplusSync notifies the nearest verified shelter, kitchen, or volunteer first, so nothing sits too long.",
    icon: IconBolt,
  },
  {
    n: "03",
    title: "Coordinate pickup",
    body: "Both sides see the pickup time, contact, and directions in a single shared thread.",
    icon: IconTruck,
  },
  {
    n: "04",
    title: "Track the impact",
    body: "Every redirected item is logged, so partners can see exactly what their surplus made possible.",
    icon: IconChart,
  },
];

const FEATURES = [
  {
    icon: IconBolt,
    title: "Real-time listings",
    body: "Post surplus in seconds with category, quantity, and pickup window — no spreadsheets, no phone trees.",
  },
  {
    icon: IconLeaf,
    title: "Smart matching",
    body: "Listings reach the nearest verified recipient first, cutting the time surplus spends sitting unclaimed.",
  },
  {
    icon: IconShield,
    title: "Verified network",
    body: "Every shelter, kitchen, and partner organisation is vetted before they can claim a listing.",
  },
  {
    icon: IconTruck,
    title: "Pickup coordination",
    body: "Built-in scheduling keeps both sides aligned on time and place, without endless back-and-forth.",
  },
  {
    icon: IconChart,
    title: "Impact tracking",
    body: "Simple dashboards show kilograms redirected, meals enabled, and waste avoided — by partner, by month.",
  },
  {
    icon: IconBox,
    title: "Built for any surplus",
    body: "Food, clothing, school supplies, medical stock — the same simple flow works for almost anything.",
  },
];

const IMPACT_STATS = [
  { value: "12,480 kg", label: "Surplus redirected" },
  { value: "96,300", label: "Meals made possible" },
  { value: "184", label: "Partner organisations" },
  { value: "9", label: "Cities live" },
];

const ROLE_OPTIONS = [
  "Business with surplus",
  "Individual donor",
  "NGO or shelter",
  "Volunteer / driver",
];

/* ----------------------------------------------------------------------- */
/* Page                                                                     */
/* ----------------------------------------------------------------------- */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    role: "",
    city: "",
    message: "",
  });

  function updateField<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.role || !form.city) {
      setError("Please fill in every required field before submitting.");
      return;
    }
    setError(null);
    setSubmitted(true);
  }

  function resetForm() {
    setForm({
      name: "",
      organisation: "",
      email: "",
      phone: "",
      role: "",
      city: "",
      message: "",
    });
    setSubmitted(false);
    setError(null);
  }

  return (
    <main className="overflow-x-hidden">
      {/* ----------------------------------------------------------- */}
      {/* 1. NAVBAR                                                    */}
      {/* ----------------------------------------------------------- */}
      <header className="sticky top-0 z-50 border-b border-forest-900/10 bg-sand/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-700 text-rust-300">
              <IconLeaf className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-forest-900">
              SurplusSync
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-forest-800/80 transition hover:text-forest-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#register"
            className="hidden rounded-full bg-rust-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rust-600 md:inline-block"
          >
            Register
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-forest-900 transition hover:bg-forest-900/5 md:hidden"
          >
            {menuOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden ${
            menuOpen ? "max-h-96 border-t border-forest-900/10" : "max-h-0"
          } overflow-hidden bg-sand transition-[max-height] duration-300`}
        >
          <div className="flex flex-col gap-1 px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-forest-800 transition hover:bg-forest-900/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-rust-500 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Register
            </a>
          </div>
        </div>
      </header>

      {/* ----------------------------------------------------------- */}
      {/* 2. HERO                                                      */}
      {/* ----------------------------------------------------------- */}
      <section id="home" className="relative bg-forest-950 text-sand">
        <div className="bg-dots absolute inset-0 text-forest-800/40" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-forest-700/60 bg-forest-900/60 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-rust-300">
              Surplus, redirected — not discarded
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              Every surplus has somewhere better to go.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand/80">
              SurplusSync connects restaurants, stores, farms, and event organisers carrying
              surplus food and goods with the shelters, kitchens, and communities that can use
              them — coordinated the same day, every day.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#register"
                className="inline-flex items-center gap-2 rounded-full bg-rust-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rust-900/30 transition hover:bg-rust-600"
              >
                Register your organisation
                <IconArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-sand/25 px-6 py-3.5 text-sm font-semibold text-sand transition hover:bg-sand/10"
              >
                See how it works
              </a>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-sand/10 pt-8 sm:grid-cols-4">
            {IMPACT_STATS.map((item) => (
              <div key={item.label}>
                <dd className="font-mono text-2xl font-semibold text-rust-300 sm:text-3xl">
                  {item.value}
                </dd>
                <dt className="mt-1 text-xs text-sand/60">{item.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* 3. PROBLEM STATEMENT                                         */}
      {/* ----------------------------------------------------------- */}
      <section id="problem" className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-rust-600">
              The problem
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-950 sm:text-4xl">
              Surplus is not the problem. Disconnection is.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-forest-900/70">
              Usable food and goods get thrown out every day, often within walking distance of a
              shelter or kitchen that needs them. The surplus exists. The need exists too. What's
              missing is a fast, reliable way to put the two in touch before the window closes.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEM_STATS.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-sm"
              >
                <p className="font-display text-3xl font-semibold text-forest-700">{item.stat}</p>
                <p className="mt-3 text-sm leading-relaxed text-forest-900/65">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* 4. HOW IT WORKS                                              */}
      {/* ----------------------------------------------------------- */}
      <section id="how-it-works" className="bg-forest-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-rust-600">
              How it works
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-950 sm:text-4xl">
              From extra to essential, in four steps.
            </h2>
          </div>

          <div className="mt-14 flex flex-col gap-0 lg:flex-row lg:items-start">
            {HOW_IT_WORKS.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === HOW_IT_WORKS.length - 1;
              return (
                <div key={step.n} className="flex flex-1 lg:flex-col">
                  <div className="flex flex-col items-start lg:items-start">
                    <div className="flex items-center gap-3">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-forest-700 text-sand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-sm text-rust-600">{step.n}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-forest-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-forest-900/65">
                      {step.body}
                    </p>
                  </div>
                  {!isLast && (
                    <div
                      className="my-6 ml-6 h-8 w-px border-l-2 border-dashed border-forest-700/30 lg:my-7 lg:ml-0 lg:h-px lg:w-full lg:border-l-0 lg:border-t-2"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* 5. FEATURES                                                  */}
      {/* ----------------------------------------------------------- */}
      <section id="features" className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-rust-600">
              Features
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-950 sm:text-4xl">
              Everything a handoff needs, nothing it doesn't.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-forest-900/10 bg-white p-7 transition hover:border-rust-300 hover:shadow-md"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-rust-50 text-rust-600 transition group-hover:bg-rust-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-forest-950">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-900/65">{feature.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* 6. IMPACT STATISTICS                                         */}
      {/* ----------------------------------------------------------- */}
      <section id="impact" className="bg-forest-950 text-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-rust-300">
              Impact so far
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Numbers that used to be waste.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-sand/10 bg-sand/10 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT_STATS.map((item) => (
              <div key={item.label} className="bg-forest-950 p-8">
                <p className="font-mono text-3xl font-semibold text-rust-300 sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-sand/65">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-sand/45">
            Figures are illustrative, updated monthly across all active SurplusSync regions.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* 7. VISION & MISSION                                          */}
      {/* ----------------------------------------------------------- */}
      <section id="vision" className="bg-forest-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-9 shadow-sm">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest-700 text-sand">
                <IconLeaf className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-forest-950">
                Our vision
              </h3>
              <p className="mt-3 text-base leading-relaxed text-forest-900/70">
                A future where surplus is never simply discarded — only ever redirected to the
                place where it matters most, as a normal part of how every business operates.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-9 shadow-sm">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-rust-500 text-white">
                <IconBolt className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-forest-950">
                Our mission
              </h3>
              <p className="mt-3 text-base leading-relaxed text-forest-900/70">
                We build the fastest, simplest path between an organisation carrying surplus and
                the community ready to use it — removing friction, delay, and guesswork from
                every handoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* 8. REGISTRATION FORM                                         */}
      {/* ----------------------------------------------------------- */}
      <section id="register" className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-rust-600">
                Join the network
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-950 sm:text-4xl">
                Register with SurplusSync.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-forest-900/70">
                Whether you have surplus to share or capacity to receive it, tell us a bit about
                you. Our team reaches out within two business days to get you set up.
              </p>
              <ul className="mt-7 space-y-3 text-sm text-forest-900/70">
                {[
                  "No cost to register, for businesses or recipients",
                  "Verified network — every partner is checked before joining",
                  "Set up in one short call, usually within a week",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-forest-700 text-sand">
                      <IconCheck className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-forest-900/10 bg-white p-7 shadow-sm sm:p-9">
              {submitted ? (
                <div className="flex flex-col items-start gap-4 py-6">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-forest-700 text-sand">
                    <IconCheck className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-forest-950">
                    You're on the list, {form.name.split(" ")[0]}.
                  </h3>
                  <p className="text-sm leading-relaxed text-forest-900/70">
                    Thanks for registering as a {form.role.toLowerCase()}. We've noted your
                    details for <span className="font-medium text-forest-900">{form.city}</span>{" "}
                    and will reach out at {form.email} within two business days.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-2 inline-flex items-center gap-2 rounded-full border border-forest-900/15 px-5 py-2.5 text-sm font-semibold text-forest-900 transition hover:bg-forest-900/5"
                  >
                    Register another organisation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" required>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Asha Rao"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Organisation (optional)">
                      <input
                        type="text"
                        value={form.organisation}
                        onChange={(e) => updateField("organisation", e.target.value)}
                        placeholder="Green Table Cafe"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email" required>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Phone" required>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="I am registering as" required>
                      <select
                        required
                        value={form.role}
                        onChange={(e) => updateField("role", e.target.value)}
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        {ROLE_OPTIONS.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="City" required>
                      <input
                        type="text"
                        required
                        value={form.city}
                        onChange={(e) => updateField("city", e.target.value)}
                        placeholder="Bengaluru"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field label="Tell us about your surplus, or how you'd like to help (optional)">
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="We have leftover prepared meals most evenings, looking for a nearby shelter partner..."
                      className={inputClass}
                    />
                  </Field>

                  {error && (
                    <p className="rounded-lg bg-rust-50 px-4 py-3 text-sm text-rust-700">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-rust-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rust-600"
                  >
                    Register with SurplusSync
                    <IconArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-forest-900/50">
                    This form is for demonstration only — no data leaves your browser.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* 9. CONTACT                                                   */}
      {/* ----------------------------------------------------------- */}
      <section id="contact" className="bg-forest-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-rust-600">
              Contact
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest-950 sm:text-4xl">
              Questions before you register?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-forest-900/70">
              Reach out directly and a member of the SurplusSync team will get back to you.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <a
              href="mailto:hello@surplussync.org"
              className="flex flex-col gap-3 rounded-2xl border border-forest-900/10 bg-white p-6 transition hover:border-rust-300 hover:shadow-md"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-700 text-sand">
                <IconMail className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-forest-950">Email us</span>
              <span className="text-sm text-forest-900/65">hello@surplussync.org</span>
            </a>
            <a
              href="tel:+919876543210"
              className="flex flex-col gap-3 rounded-2xl border border-forest-900/10 bg-white p-6 transition hover:border-rust-300 hover:shadow-md"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-700 text-sand">
                <IconPhone className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-forest-950">Call us</span>
              <span className="text-sm text-forest-900/65">+91 98765 43210</span>
            </a>
            <div className="flex flex-col gap-3 rounded-2xl border border-forest-900/10 bg-white p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-700 text-sand">
                <IconPin className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-forest-950">Visit us</span>
              <span className="text-sm text-forest-900/65">Bengaluru, Karnataka, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* 10. FOOTER                                                   */}
      {/* ----------------------------------------------------------- */}
      <footer className="bg-forest-950 text-sand">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <a href="#home" className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-800 text-rust-300">
                  <IconLeaf className="h-5 w-5" />
                </span>
                <span className="font-display text-lg font-semibold tracking-tight">
                  SurplusSync
                </span>
              </a>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand/60">
                Routing surplus food and goods to the people and organisations who can use them —
                before it ever becomes waste.
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-sand/45">
                Navigate
              </h4>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-sand/70 transition hover:text-sand">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-sand/45">
                Get involved
              </h4>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href="#register" className="text-sm text-sand/70 transition hover:text-sand">
                    Register your organisation
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-sand/70 transition hover:text-sand">
                    Talk to our team
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-sand/10 pt-6 text-xs text-sand/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 SurplusSync. Built to redirect, not discard.</p>
            <p>A demo product — no data is stored or transmitted.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ----------------------------------------------------------------------- */
/* Small form helpers                                                      */
/* ----------------------------------------------------------------------- */

const inputClass =
  "w-full rounded-lg border border-forest-900/15 bg-sand/40 px-4 py-2.75 text-sm text-forest-950 placeholder:text-forest-900/35 outline-none transition focus:border-rust-400 focus:ring-2 focus:ring-rust-200";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-forest-900/80">
        {label}
        {required && <span className="text-rust-500"> *</span>}
      </span>
      {children}
    </label>
  );
}
