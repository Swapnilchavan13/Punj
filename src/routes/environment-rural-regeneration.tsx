import { useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { AssetPlaceholder } from "@/components/AssetPlaceholder";
import {
  Caption,
  Eyebrow,
  Figure,
  GhostBtn,
  Pending,
  PrimaryBtn,
  Reveal,
  Section,
} from "@/components/editorial";

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is the Environment and Rural Regeneration programme?",
    a: "It is the Foundation's natural-capital restoration programme, working across soil health, water stewardship, sustainable biomass management and carbon, so that rural landscapes and rural livelihoods strengthen together.",
  },
  {
    q: "What is B3 – Bhoomi Bio Booster?",
    a: "B3 is a biochar-based soil-restoration intervention developed and implemented by NettZero within the Foundation's wider programme. It is designed to support soil organic carbon restoration, soil structure, moisture retention and biological activity.",
  },
  {
    q: "Is B3 a fertiliser?",
    a: "No. B3 is not presented as a fertiliser or a replacement for prescribed agronomic inputs. It is intended to help restore the underlying soil system on which nutrient and water performance depend.",
  },
  {
    q: "Who is NettZero?",
    a: "NettZero Environmental Advisory Technologies Pvt. Ltd. is the Foundation's environmental strategy and implementation partner, responsible for programme design, field protocols, environmental measurement, data systems and the technical stewardship of B3.",
  },
  {
    q: "Can every farmer receive B3?",
    a: "Participation is subject to programme geography, eligibility, available material, field suitability and implementation schedule.",
  },
  {
    q: "Does the programme generate carbon credits?",
    a: "Not automatically. Carbon outcomes require feedstock documentation, production data, carbon-content analysis, stability assumptions, lifecycle accounting, application records, monitoring, an approved methodology and verification where applicable.",
  },
  {
    q: "Does soil restoration recharge groundwater?",
    a: "Improved soil structure and infiltration may contribute to better movement and retention of water within the soil profile. Recharge outcomes must be modelled and measured separately, and are never reported as the same figure as moisture retained.",
  },
  {
    q: "How can a farmer or village join?",
    a: "Through Khet Bachao Abhiyaan farmer meetings, village engagement and the programme enquiry form on this page. Field teams confirm geography, plot suitability and baseline sampling before enrolment.",
  },
];

export const Route = createFileRoute("/environment-rural-regeneration")({
  head: () => ({
    meta: [
      {
        title: "Environment & Rural Regeneration | Soil, Water and Carbon Restoration",
      },
      {
        name: "description",
        content:
          "The Punj Foundation's natural-capital restoration programme with NettZero: soil organic carbon, water stewardship, biomass management, biochar-based B3 and climate-resilient rural livelihoods.",
      },
      {
        property: "og:title",
        content: "Restoring the Natural Foundations of Rural Life",
      },
      {
        property: "og:description",
        content:
          "Soil health, water stewardship, sustainable biomass and carbon management — a field-led restoration programme by the Punj Foundation with NettZero, anchored by B3 – Bhoomi Bio Booster.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/environment-rural-regeneration" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: EnvironmentPage,
});

const ENV = "var(--accent-environment)";
const SOIL = "oklch(0.38 0.05 60)"; /* deep soil brown */
const WATER = "oklch(0.55 0.05 230)"; /* water blue-grey */
const COPPER = "oklch(0.58 0.11 55)";
const BIOCHAR = "oklch(0.26 0.01 60)";

/* ---------------- local primitives ---------------- */

function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="mt-5 font-serif text-[34px] leading-[1.08] text-[color:var(--charcoal)] md:text-[46px]"
    >
      {children}
    </h2>
  );
}

function Body({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`space-y-5 font-sans text-[15.5px] leading-[1.8] text-muted-foreground ${className}`}
    >
      {children}
    </div>
  );
}

function Rule() {
  return (
    <span
      className="mt-6 block h-[2px] w-14"
      style={{ background: "var(--page-accent, var(--charcoal))" }}
      aria-hidden="true"
    />
  );
}

function Panel({
  children,
  className = "",
  tone = "soil",
}: {
  children: ReactNode;
  className?: string;
  tone?: "soil" | "water" | "leaf" | "sand" | "char";
}) {
  const tones: Record<string, string> = {
    soil: "oklch(0.93 0.02 70 / 0.55)",
    water: "oklch(0.94 0.02 230 / 0.55)",
    leaf: "oklch(0.94 0.025 150 / 0.5)",
    sand: "oklch(0.95 0.02 90 / 0.6)",
    char: "oklch(0.92 0.005 60 / 0.6)",
  };
  return (
    <div
      className={`rounded-[6px] border border-[color:var(--border)]/70 p-6 backdrop-blur-[2px] md:p-8 ${className}`}
      style={{ background: tones[tone] }}
    >
      {children}
    </div>
  );
}

function Flow({ steps, className = "" }: { steps: string[]; className?: string }) {
  return (
    <ol className={`flex flex-wrap items-stretch gap-2 ${className}`}>
      {steps.map((s, i) => (
        <li key={s} className="flex items-stretch gap-2">
          <span className="flex items-center rounded-[4px] border border-[color:var(--border)] bg-[color:var(--ivory)]/70 px-3 py-2 font-sans text-[12.5px] leading-snug text-[color:var(--charcoal)]">
            {s}
          </span>
          {i < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="flex items-center font-sans text-[13px]"
              style={{ color: "var(--page-accent, var(--charcoal))" }}
            >
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function Status({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block rounded-full px-2.5 py-[3px] font-sans text-[10px] font-semibold uppercase tracking-[0.14em]"
      style={{
        background: "var(--page-accent, var(--charcoal))",
        color: "var(--ivory)",
        opacity: 0.9,
      }}
    >
      {children}
    </span>
  );
}

function NumberedList({ items }: { items: { t: string; d?: string }[] }) {
  return (
    <ol className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {items.map((it, i) => (
        <li key={it.t} className="border-t border-[color:var(--border)] pt-4">
          <span
            className="font-sans text-[11px] font-semibold tracking-[0.2em]"
            style={{ color: "var(--page-accent, var(--charcoal))" }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 font-serif text-[21px] text-[color:var(--charcoal)]">{it.t}</h3>
          {it.d ? (
            <p className="mt-2 font-sans text-[14px] leading-[1.75] text-muted-foreground">
              {it.d}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/* ---------------- page ---------------- */

function EnvironmentPage() {
  return (
    <div
      className="min-h-screen bg-[color:var(--ivory)]"
      style={{ ["--page-accent" as string]: ENV }}
    >
      <Header />
      <main>
        <Hero />
        <Vision />
        <Challenge />
        <Framework />
        <Partnership />
        <B3Intro />
        <WhatIsB3 />
        <WhyBiochar />
        <HowPrepared />
        <RootZone />
        <ForFarmers />
        <ForSoil />
        <ForWater />
        <ForEnvironment />
        <ApplicationJourney />
        <SoilCarbon />
        <WaterStewardship />
        <Biomass />
        <BurningReduction />
        <Carbon />
        <Regenerative />
        <Livelihoods />
        <Implementation />
        <Trials />
        <Verification />
        <Dashboard />
        <KhetBachao />
        <Stories />
        <Geography />
        <Reports />
        <Partnerships />
        <Registration />
        <Faq />
        <Updates />
        <Closing />
      </main>
      <SiteFooter />
    </div>
  );
}

/* 5. HERO */
function Hero() {
  return (
    <section
      aria-labelledby="env-hero-heading"
      className="relative overflow-hidden border-b border-[color:var(--border)]"
    >
      <div className="absolute inset-0">
        <AssetPlaceholder name="environment-hero" label="Environment hero" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.22 0.02 90 / 0.72) 0%, oklch(0.24 0.03 120 / 0.55) 45%, oklch(0.2 0.02 90 / 0.82) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0 26px, oklch(0.95 0.02 120 / 0.35) 26px 27px)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1360px] px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-48">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-[color:var(--ivory)]/80">
          Environment and Rural Regeneration
        </p>
        <h1
          id="env-hero-heading"
          className="mt-6 max-w-4xl font-serif text-[42px] leading-[1.03] text-[color:var(--ivory)] md:text-[72px]"
        >
          Restoring the Natural Foundations of Rural Life
        </h1>
        <div className="mt-8 max-w-2xl space-y-5 font-sans text-[15.5px] leading-[1.85] text-[color:var(--ivory)]/85">
          <p>
            The Pt. Kanahya Lal Dayawanti Punj Foundation is committed to restoring India's
            natural capital through large-scale interventions in soil health, water
            stewardship, carbon sequestration and sustainable biomass management.
          </p>
          <p>
            Through regenerative agricultural practices and biochar-based soil-restoration
            models, the Foundation seeks to create measurable outcomes across air, water and
            soil while improving farmer livelihoods and building climate-resilient rural
            economies.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#programme"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--ivory)] px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--charcoal)] transition-colors hover:bg-[color:var(--ivory)]/85"
          >
            Explore the Programme
          </a>
          <a
            href="#b3"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[color:var(--ivory)]/50 px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--ivory)] transition-colors hover:border-[color:var(--ivory)]"
          >
            Understand B3
          </a>
          <a
            href="#register"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[color:var(--ivory)]/50 px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--ivory)] transition-colors hover:border-[color:var(--ivory)]"
          >
            Farmer Registration
          </a>
        </div>

        <ul className="mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-4 border-t border-[color:var(--ivory)]/25 pt-6 md:grid-cols-4">
          {["Soil", "Water", "Biomass", "Carbon"].map((s) => (
            <li
              key={s}
              className="font-sans text-[11px] uppercase tracking-[0.22em] text-[color:var(--ivory)]/75"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 6. VISION */
function Vision() {
  const pillars = [
    { t: "Soil", d: "Rebuilding organic carbon, structure and biological function." },
    { t: "Water", d: "Infiltration, moisture retention and recharge potential." },
    { t: "Biomass", d: "Turning residue into a productive, local resource." },
    { t: "Carbon", d: "Stable storage and careful, evidence-led accounting." },
    { t: "Livelihoods", d: "Restoration that is economically realistic for farmers." },
    { t: "Scale", d: "Systems that can expand across farms, villages and regions." },
  ];
  return (
    <Section id="programme" labelledBy="vision-heading" tint="var(--ivory)">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
        <Reveal>
          <Eyebrow tone={ENV}>Natural-Capital Restoration</Eyebrow>
          <H2 id="vision-heading">Rural Prosperity Rests on Natural Systems</H2>
          <Rule />
          <Body className="mt-7">
            <p>
              For four decades the Foundation has worked with rural communities in and around
              Sitamarhi. This pillar extends that commitment to the natural systems on which
              those communities ultimately depend — soil, water, biomass and air.
            </p>
            <p>
              The approach is field-led rather than declarative: measure first, intervene
              carefully, observe over seasons, and report what the evidence supports.
            </p>
          </Body>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Panel key={p.t} tone={i % 2 === 0 ? "soil" : "leaf"}>
                <h3 className="font-serif text-[22px] text-[color:var(--charcoal)]">{p.t}</h3>
                <p className="mt-2 font-sans text-[13.5px] leading-[1.7] text-muted-foreground">
                  {p.d}
                </p>
              </Panel>
            ))}
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-14">
        <Figure
          asset="environment-hero-secondary"
          alt="Field implementation"
          aspect="21 / 9"
          caption="Soil sampling, irrigation and field implementation across programme geographies."
        />
      </Reveal>
    </Section>
  );
}

/* 7. CHALLENGE */
function Challenge() {
  const items = [
    {
      t: "Depleted Soil Organic Carbon",
      d: "Many agricultural soils are losing the organic carbon that supports structure, biological activity, nutrient cycling and water retention.",
      asset: "soil-degraded",
    },
    {
      t: "Declining Water Resilience",
      d: "Compacted or carbon-depleted soils may absorb and retain less water, increasing dependence on irrigation and reducing resilience during dry periods.",
      asset: "water-field-retention",
    },
    {
      t: "Crop-Residue Burning",
      d: "When agricultural biomass has no viable local use, open burning may become the quickest disposal method, affecting air quality, soil and carbon emissions.",
      asset: "residue-burning",
    },
    {
      t: "Rising Farm Vulnerability",
      d: "Increasing input dependence, uncertain weather and declining soil function can place additional pressure on farm economics.",
      asset: "farmer-landscape",
    },
    {
      t: "Disconnected Environmental Interventions",
      d: "Soil, water, carbon and biomass are often treated as separate issues even though they function as one connected natural system.",
      asset: null,
    },
  ];
  return (
    <Section
      labelledBy="challenge-heading"
      tint="linear-gradient(180deg, var(--ivory) 0%, oklch(0.94 0.015 70 / 0.7) 100%)"
    >
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SOIL}>The Challenge</Eyebrow>
        <H2 id="challenge-heading">
          When Soil, Water and Biomass Systems Begin to Break Down
        </H2>
        <Rule />
        <Body className="mt-7">
          <p>
            These pressures are interconnected. Each is described here as observed field
            context, not as a national statistic — programme figures appear only where they
            have been measured and verified.
          </p>
        </Body>
      </Reveal>

      <div className="mt-14 space-y-6">
        {items.map((it, i) => (
          <Reveal key={it.t}>
            <div className="grid items-center gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className={it.asset ? (i % 2 ? "md:order-2" : "") : "md:col-span-2"}>
                {it.asset ? (
                  <Figure asset={it.asset} alt={it.t} aspect="16 / 10" />
                ) : (
                  <Panel tone="char">
                    <h3 className="font-serif text-[24px] text-[color:var(--charcoal)]">
                      {it.t}
                    </h3>
                    <p className="mt-3 font-sans text-[14.5px] leading-[1.8] text-muted-foreground">
                      {it.d}
                    </p>
                  </Panel>
                )}
              </div>
              {it.asset ? (
                <div>
                  <span className="font-sans text-[11px] font-semibold tracking-[0.22em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-serif text-[26px] leading-tight text-[color:var(--charcoal)] md:text-[30px]">
                    {it.t}
                  </h3>
                  <p className="mt-3 max-w-xl font-sans text-[15px] leading-[1.8] text-muted-foreground">
                    {it.d}
                  </p>
                </div>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* 8. FRAMEWORK */
const SYSTEM = [
  {
    t: "Soil",
    items: ["Organic carbon", "Structure", "Biology", "Roots", "Nutrient cycling"],
    c: SOIL,
  },
  {
    t: "Water",
    items: [
      "Infiltration",
      "Moisture retention",
      "Irrigation efficiency",
      "Run-off reduction",
      "Recharge potential",
    ],
    c: WATER,
  },
  {
    t: "Air",
    items: [
      "Reduced residue burning",
      "Biomass conversion",
      "Lower smoke exposure",
      "Carbon management",
    ],
    c: BIOCHAR,
  },
  {
    t: "Agriculture",
    items: [
      "Crop resilience",
      "Root development",
      "Productivity",
      "Input efficiency",
      "Farm economics",
    ],
    c: ENV,
  },
  {
    t: "Community",
    items: [
      "Farmer knowledge",
      "Local participation",
      "Rural employment",
      "Biomass value chains",
      "Long-term livelihoods",
    ],
    c: COPPER,
  },
];

function Framework() {
  const [active, setActive] = useState(0);
  return (
    <Section labelledBy="framework-heading" tint="var(--ivory)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={ENV}>One Connected System</Eyebrow>
        <H2 id="framework-heading">Restoring Air, Water and Soil Together</H2>
        <Rule />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
        <Reveal>
          <div className="rounded-[8px] border border-[color:var(--border)] bg-[color:var(--muted)]/40 p-6 md:p-10">
            <div
              className="mx-auto max-w-md rounded-[6px] px-6 py-7 text-center"
              style={{ background: "oklch(0.93 0.03 150 / 0.7)" }}
            >
              <p className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                At the centre
              </p>
              <p className="mt-2 font-serif text-[24px] leading-tight text-[color:var(--charcoal)]">
                Healthy and Resilient Rural Landscapes
              </p>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {SYSTEM.map((s, i) => (
                <li key={s.t}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    className={`w-full rounded-[5px] border px-3 py-4 text-left font-sans text-[13px] transition-colors ${
                      active === i
                        ? "border-transparent text-[color:var(--ivory)]"
                        : "border-[color:var(--border)] bg-[color:var(--ivory)]/70 text-[color:var(--charcoal)]"
                    }`}
                    style={active === i ? { background: s.c } : undefined}
                  >
                    <span className="font-semibold uppercase tracking-[0.16em] text-[11px]">
                      {s.t}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-[color:var(--border)] pt-5">
              <h3 className="font-serif text-[22px] text-[color:var(--charcoal)]">
                {SYSTEM[active].t}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {SYSTEM[active].items.map((x) => (
                  <li
                    key={x}
                    className="rounded-full border border-[color:var(--border)] px-3 py-1 font-sans text-[12.5px] text-muted-foreground"
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <Panel tone="water">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              How the relationships run
            </p>
            <Flow
              className="mt-5"
              steps={[
                "More soil organic carbon",
                "Improved soil structure",
                "Greater water retention",
                "Stronger crop resilience",
              ]}
            />
            <Flow
              className="mt-6"
              steps={[
                "Biomass collection",
                "Reduced open burning",
                "Biochar production",
                "Soil restoration and carbon storage",
              ]}
            />
            <p className="mt-7 font-sans text-[13.5px] leading-[1.8] text-muted-foreground">
              The centre of this system is the restored landscape — not any single product.
              B3 appears later on this page as the flagship intervention that supports it.
            </p>
          </Panel>
        </Reveal>
      </div>
    </Section>
  );
}

/* 9. PARTNERSHIP */
function Partnership() {
  const cols = [
    {
      t: "Foundation Role",
      items: [
        "Programme anchor",
        "Community relationships",
        "Farmer mobilisation",
        "Institutional presence",
        "Local coordination",
        "Social-development alignment",
        "Long-term continuity",
        "Partnership development",
      ],
    },
    {
      t: "NettZero Role",
      items: [
        "Environmental strategy",
        "Programme architecture",
        "B3 development and technical stewardship",
        "Soil-restoration protocols",
        "Water-stewardship methodology",
        "Carbon-sequestration strategy",
        "Biomass-management systems",
        "Field implementation",
        "Data collection",
        "Scientific measurement",
        "Reporting and validation",
      ],
    },
    {
      t: "Shared Responsibilities",
      items: [
        "Farmer engagement",
        "Demonstration programmes",
        "Field trials",
        "Training",
        "Monitoring",
        "Impact documentation",
        "Programme expansion",
        "Stakeholder engagement",
      ],
    },
  ];
  return (
    <Section
      id="partnership"
      labelledBy="partnership-heading"
      tint="linear-gradient(180deg, oklch(0.95 0.015 150 / 0.6) 0%, var(--ivory) 100%)"
    >
      <Reveal className="max-w-3xl">
        <Eyebrow tone={ENV}>Partnership for Implementation</Eyebrow>
        <H2 id="partnership-heading">Community Trust Meets Environmental Expertise</H2>
        <Rule />
        <Body className="mt-7">
          <p>
            The Foundation brings deep community relationships, long-term regional presence
            and an institutional commitment to rural development.
          </p>
          <p>
            NettZero Environmental Advisory Technologies Pvt. Ltd. brings environmental
            strategy, scientific methodology, B3 technology, field-implementation systems,
            measurement frameworks and expertise in natural-capital restoration.
          </p>
          <p>
            Together, the two organisations are building a programme designed to move from
            field intervention to measurable environmental outcomes.
          </p>
        </Body>
      </Reveal>

      <Reveal className="mt-12">
        <div className="flex flex-wrap items-end gap-10">
          <div className="w-[220px]">
            <AssetPlaceholder name="foundation-logo" label="Foundation" aspect="3 / 2" />
          </div>
          <div className="w-[150px]">
            <AssetPlaceholder name="nettzero-logo" label="NettZero" aspect="3 / 2" />
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {cols.map((c, i) => (
          <Reveal key={c.t}>
            <Panel tone={i === 0 ? "soil" : i === 1 ? "water" : "leaf"} className="h-full">
              <h3 className="font-serif text-[23px] text-[color:var(--charcoal)]">{c.t}</h3>
              <ul className="mt-4 space-y-2">
                {c.items.map((x) => (
                  <li
                    key={x}
                    className="font-sans text-[13.5px] leading-[1.7] text-muted-foreground"
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <blockquote className="max-w-3xl border-l-2 pl-6 font-serif text-[20px] leading-[1.6] text-[color:var(--charcoal)] md:text-[24px]" style={{ borderColor: ENV }}>
          An environmental and rural-regeneration programme of the Pt. Kanahya Lal Dayawanti
          Punj Foundation, designed and implemented with the support and expertise of NettZero
          Environmental Advisory Technologies Pvt. Ltd.
        </blockquote>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryBtn href="/environment-rural-regeneration/nettzero-partnership">
            Learn About the Partnership
          </PrimaryBtn>
          <a
            href="https://nettzero.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[color:var(--charcoal)]/25 px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--charcoal)] transition-colors hover:border-[color:var(--accent-environment)] hover:text-[color:var(--accent-environment)]"
          >
            Visit NettZero
          </a>
          <GhostBtn href="#partner">Discuss an Environmental Partnership</GhostBtn>
        </div>
        <p className="mt-4">
          <Pending>Partnership subpage in preparation</Pending>
        </p>
      </Reveal>
    </Section>
  );
}

/* 10. B3 INTRO */
function B3Intro() {
  const roles = [
    "Soil Organic Carbon",
    "Soil Structure",
    "Water Retention",
    "Biological Function",
    "Carbon Storage",
  ];
  return (
    <Section id="b3" labelledBy="b3-heading" tint="oklch(0.94 0.012 70 / 0.75)">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <Eyebrow tone={COPPER}>Flagship Soil-Restoration Intervention</Eyebrow>
          <H2 id="b3-heading">B3 – Bhoomi Bio Booster</H2>
          <Rule />
          <div className="mt-7 w-[130px]">
            <AssetPlaceholder name="b3-logo" label="B3 logo" aspect="3 / 2" />
          </div>
          <Body className="mt-7">
            <p>
              B3 – Bhoomi Bio Booster is a biochar-based soil-restoration intervention
              developed and implemented by NettZero within the Foundation's wider
              natural-capital restoration programme.
            </p>
            <p>
              It is designed to support the rebuilding of soil organic carbon, improve soil
              condition, strengthen the relationship between soil and water, support
              biological activity and create a durable use for agricultural biomass.
            </p>
            <p>
              B3 is not another agricultural input. Its role is to help restore the underlying
              soil system on which crop productivity, water resilience and long-term farm
              economics depend.
            </p>
          </Body>
          <ul className="mt-8 flex flex-wrap gap-2">
            {roles.map((r) => (
              <li
                key={r}
                className="rounded-full border px-4 py-2 font-sans text-[12px] uppercase tracking-[0.14em] text-[color:var(--charcoal)]"
                style={{ borderColor: COPPER }}
              >
                {r}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <PrimaryBtn href="#what-is-b3">Understand B3</PrimaryBtn>
            <GhostBtn href="#journey">See How B3 Is Applied</GhostBtn>
            <GhostBtn href="#implementation">View Field Programmes</GhostBtn>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid gap-4">
            <Figure asset="b3-material-closeup" alt="B3 material close-up" aspect="16 / 10" />
            <div className="grid grid-cols-2 gap-4">
              <Figure asset="b3-bag-field" alt="B3 in the field" aspect="4 / 5" />
              <Figure asset="b3-application" alt="B3 application" aspect="4 / 5" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 11. WHAT B3 IS */
function WhatIsB3() {
  const supports = [
    "Soil organic carbon restoration",
    "Better soil aggregation",
    "Improved pore structure",
    "Greater moisture retention",
    "More favourable conditions for microbial activity",
    "Root-zone development",
    "Nutrient-holding capacity",
    "Long-term carbon storage",
  ];
  return (
    <Section id="what-is-b3" labelledBy="whatb3-heading" tint="var(--ivory)">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <Eyebrow tone={ENV}>Understanding B3</Eyebrow>
          <H2 id="whatb3-heading">A Soil-Restoration System Built Around Biochar</H2>
          <Rule />
          <Body className="mt-7">
            <p>
              B3 is a biochar-based soil-restoration formulation intended to improve the
              physical, biological and carbon-related condition of agricultural soil.
            </p>
            <p>Biochar forms the durable carbon framework within the product.</p>
            <p>
              The formulation is prepared so that the biochar can function not merely as an
              inert carbon material, but as part of a biologically active and field-applicable
              soil intervention.
            </p>
          </Body>
        </Reveal>
        <Reveal>
          <Panel tone="leaf">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Within the programme, B3 is used to support
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {supports.map((s) => (
                <li
                  key={s}
                  className="border-t border-[color:var(--border)] pt-3 font-sans text-[13.5px] leading-[1.65] text-[color:var(--charcoal)]"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Panel>
          <Caption>
            Programme language is deliberately careful: designed to support, intended to
            improve, may contribute to, field programmes are measuring.
          </Caption>
        </Reveal>
      </div>
    </Section>
  );
}

/* 12. WHY BIOCHAR */
function WhyBiochar() {
  return (
    <Section
      labelledBy="biochar-heading"
      tint="linear-gradient(180deg, var(--ivory) 0%, oklch(0.92 0.008 70 / 0.85) 100%)"
    >
      <Reveal className="max-w-3xl">
        <Eyebrow tone={BIOCHAR}>The Biochar Foundation</Eyebrow>
        <H2 id="biochar-heading">
          Turning Agricultural Biomass Into a Long-Lived Soil Resource
        </H2>
        <Rule />
        <Body className="mt-7">
          <p>
            Biochar is a stable, carbon-rich material produced by heating biomass under
            controlled conditions with limited oxygen.
          </p>
          <p>
            Within an appropriate soil-restoration model, biochar can serve as a durable
            carbon framework with a porous structure that supports water, nutrients and
            biological activity.
          </p>
          <p>
            Its value lies not only in the material itself, but in the wider system
            surrounding it: biomass collection, controlled conversion, product preparation,
            soil application, farmer training, field monitoring and environmental measurement.
          </p>
        </Body>
      </Reveal>

      <Reveal className="mt-12">
        <Panel tone="char">
          <Flow
            steps={[
              "Agricultural Residue",
              "Collection",
              "Controlled Conversion",
              "Biochar",
              "B3 Preparation",
              "Field Application",
              "Soil, Water and Carbon Outcomes",
            ]}
          />
        </Panel>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {[
          ["crop-residue", "Agricultural residue"],
          ["biomass-collection", "Biomass collection"],
          ["biochar-production", "Controlled conversion"],
          ["biochar-closeup", "Biochar material"],
        ].map(([a, l]) => (
          <Reveal key={a}>
            <Figure asset={a} alt={l} aspect="4 / 3" caption={l} />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <Figure
          asset="biomass-to-biochar-flow"
          alt="Biomass to biochar process diagram"
          aspect="21 / 9"
          caption="Process diagram — biomass to biochar to soil."
        />
      </Reveal>
    </Section>
  );
}

/* 13. HOW B3 IS PREPARED */
function HowPrepared() {
  const steps = [
    {
      t: "Biomass Sourcing",
      d: "Agricultural biomass is identified and collected through responsible local systems.",
    },
    {
      t: "Biochar Production",
      d: "Biomass is converted into stable carbon-rich biochar through a controlled process.",
    },
    {
      t: "Size Preparation",
      d: "Biochar is processed into an appropriate particle range for blending and field application.",
    },
    {
      t: "Biological Preparation",
      d: "The biochar-based formulation is prepared to support biological activity and soil interaction.",
    },
    {
      t: "Curing and Stabilisation",
      d: "The prepared material is allowed to stabilise before field use.",
    },
    { t: "Quality Review", d: "Relevant parameters are checked before deployment." },
    {
      t: "Packaging and Field Movement",
      d: "B3 is packed and transported for farmer programmes and demonstration plots.",
    },
  ];
  return (
    <Section labelledBy="prep-heading" tint="var(--ivory)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={COPPER}>From Biochar to Field-Ready Intervention</Eyebrow>
        <H2 id="prep-heading">Preparing B3 for Soil Application</H2>
        <Rule />
      </Reveal>
      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <Reveal>
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.t} className="flex gap-5">
                <span
                  className="mt-1 h-9 w-9 shrink-0 rounded-full border text-center font-sans text-[13px] leading-[34px] text-[color:var(--charcoal)]"
                  style={{ borderColor: COPPER }}
                >
                  {i + 1}
                </span>
                <div className="border-b border-[color:var(--border)] pb-5">
                  <h3 className="font-serif text-[21px] text-[color:var(--charcoal)]">{s.t}</h3>
                  <p className="mt-1.5 font-sans text-[14px] leading-[1.75] text-muted-foreground">
                    {s.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <Caption>
            Formulation ratios, additives and compliance statements are published only when
            approved and verified.
          </Caption>
        </Reveal>
        <Reveal>
          <div className="grid gap-4">
            <Figure asset="b3-preparation" alt="B3 preparation" aspect="4 / 3" />
            <div className="grid grid-cols-2 gap-4">
              <Figure asset="biochar-closeup" alt="Biochar close-up" aspect="1 / 1" />
              <Figure asset="b3-bag-front" alt="B3 bag" aspect="1 / 1" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 14. ROOT ZONE */
function RootZone() {
  const layers = [
    {
      t: "Above Ground",
      c: "oklch(0.93 0.03 150 / 0.75)",
      items: ["Crop", "Weather", "Irrigation", "Farm management"],
    },
    {
      t: "Root Zone",
      c: "oklch(0.88 0.03 70 / 0.85)",
      items: [
        "Root growth",
        "Soil aggregation",
        "Microbial habitat",
        "Moisture availability",
        "Nutrient exchange",
      ],
    },
    {
      t: "Deeper Soil Profile",
      c: "oklch(0.78 0.03 60 / 0.9)",
      items: [
        "Reduced rapid run-off",
        "Moisture movement",
        "Recharge potential",
      ],
    },
  ];
  return (
    <Section
      labelledBy="rootzone-heading"
      tint="linear-gradient(180deg, oklch(0.95 0.015 150 / 0.5) 0%, oklch(0.93 0.02 70 / 0.7) 100%)"
    >
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SOIL}>Below the Surface</Eyebrow>
        <H2 id="rootzone-heading">Restoration Begins in the Root Zone</H2>
        <Rule />
      </Reveal>
      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Reveal>
          <div className="overflow-hidden rounded-[6px] border border-[color:var(--border)]">
            {layers.map((l) => (
              <div key={l.t} className="px-6 py-7" style={{ background: l.c }}>
                <p className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[color:var(--charcoal)]/70">
                  {l.t}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {l.items.map((x) => (
                    <li
                      key={x}
                      className="rounded-full bg-[color:var(--ivory)]/70 px-3 py-1 font-sans text-[12.5px] text-[color:var(--charcoal)]"
                    >
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="grid gap-4">
            <Figure asset="soil-profile" alt="Soil profile" aspect="16 / 10" />
            <div className="grid grid-cols-2 gap-4">
              <Figure asset="soil-roots" alt="Root zone" aspect="1 / 1" />
              <Figure asset="b3-material-closeup" alt="B3 material" aspect="1 / 1" />
            </div>
          </div>
          <Panel tone="water" className="mt-6">
            <p className="font-sans text-[14px] leading-[1.8] text-[color:var(--charcoal)]">
              By improving soil structure and infiltration, B3-based soil restoration may
              contribute to better movement and retention of water within the soil profile.
              Recharge outcomes must be measured separately.
            </p>
          </Panel>
        </Reveal>
      </div>
    </Section>
  );
}

/* 15. FOR FARMERS */
function ForFarmers() {
  const benefits = [
    {
      t: "Improved Soil Condition",
      d: "Better physical structure may make soil easier to work and more supportive of root development.",
    },
    {
      t: "Greater Moisture Resilience",
      d: "Improved water retention may help crops manage intervals between irrigation or rainfall more effectively.",
    },
    {
      t: "Stronger Root Environment",
      d: "A more favourable root zone may support crop establishment and resilience.",
    },
    {
      t: "Improved Nutrient-Holding Environment",
      d: "Biochar-based soil restoration may help retain nutrients within the root zone and reduce avoidable losses.",
    },
    {
      t: "Reduced Vulnerability to Soil Decline",
      d: "Restoring organic carbon addresses a foundational cause of long-term soil deterioration.",
    },
    {
      t: "Potential Productivity Improvement",
      d: "Healthier soil may support better crop performance, subject to crop, soil, weather and management conditions.",
    },
    {
      t: "Potential Input Efficiency",
      d: "Improved soil function may help farmers use water and nutrients more effectively over time.",
    },
    {
      t: "Long-Term Farm Value",
      d: "Restored soil represents a productive asset that can support future cropping cycles.",
    },
    {
      t: "Biomass Value",
      d: "Local biomass-management systems may create an alternative to waste or burning.",
    },
    {
      t: "Participation in Measured Programmes",
      d: "Farmers can become part of demonstration, soil-testing and environmental-monitoring initiatives.",
    },
  ];
  return (
    <Section labelledBy="farmers-heading" tint="var(--ivory)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={COPPER}>For Farmers</Eyebrow>
        <H2 id="farmers-heading">Restoring Soil to Strengthen Farm Resilience</H2>
        <Rule />
        <Body className="mt-7">
          <p>
            B3 is explained to farmers not through abstract environmental language, but
            through the practical functions of healthy soil.
          </p>
        </Body>
      </Reveal>
      <Reveal className="mt-12">
        <NumberedList items={benefits} />
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {[
          ["farmer-training", "Farmer training"],
          ["b3-application", "Field application"],
          ["farmer-meeting", "Farmer meeting"],
          ["farmer-landscape", "Farm landscape"],
        ].map(([a, l]) => (
          <Reveal key={a}>
            <Figure asset={a} alt={l} aspect="4 / 3" />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10">
        <Panel tone="sand">
          <p className="font-sans text-[14px] leading-[1.8] text-[color:var(--charcoal)]">
            Field outcomes depend on soil type, crop, weather, irrigation, existing farm
            practices, application method and programme conditions. The programme does not
            promise guaranteed yield, fertiliser reduction, income increase or drought
            protection.
          </p>
        </Panel>
      </Reveal>
    </Section>
  );
}

/* 16. FOR SOIL */
function ForSoil() {
  const areas = [
    {
      t: "Soil Organic Carbon",
      d: "B3 introduces a durable carbon-rich component intended to support the restoration of depleted soil carbon.",
    },
    {
      t: "Soil Structure",
      d: "Biochar's physical properties may support aggregation and pore development.",
    },
    {
      t: "Water-Holding Capacity",
      d: "A more porous soil environment may retain water more effectively.",
    },
    {
      t: "Biological Activity",
      d: "The formulation is intended to create more favourable conditions for beneficial soil biology.",
    },
    {
      t: "Root Development",
      d: "Improved structure and moisture conditions may support a healthier root zone.",
    },
    {
      t: "Nutrient Retention",
      d: "Biochar's surface and pore structure may help retain nutrients within the soil system.",
    },
    {
      t: "Reduced Compaction Stress",
      d: "Improved physical condition may help address some effects associated with dense or degraded soil.",
    },
    {
      t: "Long-Term Resilience",
      d: "Restoring carbon and structure supports soil function beyond a single crop cycle.",
    },
  ];
  return (
    <Section
      labelledBy="soil-heading"
      tint="linear-gradient(180deg, oklch(0.93 0.02 70 / 0.6) 0%, var(--ivory) 100%)"
    >
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SOIL}>For Soil</Eyebrow>
        <H2 id="soil-heading">Rebuilding the Carbon Framework of Living Soil</H2>
        <Rule />
      </Reveal>
      <Reveal className="mt-12">
        <NumberedList items={areas} />
      </Reveal>

      <Reveal className="mt-14">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <Figure asset="soil-degraded" alt="Depleted soil" aspect="16 / 10" />
            <p className="mt-3 font-sans text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
              Depleted soil function
            </p>
          </div>
          <div>
            <Figure asset="soil-healthy" alt="Restored soil" aspect="16 / 10" />
            <p className="mt-3 font-sans text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
              Restored soil function
            </p>
          </div>
        </div>
        <Caption>
          Illustrative soil-function comparison. Not a claim of guaranteed field outcome.
        </Caption>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Figure asset="soil-organic-carbon" alt="Soil organic carbon" aspect="16 / 9" />
        <Figure asset="soil-roots" alt="Roots" aspect="16 / 9" />
      </div>
    </Section>
  );
}

/* 17. FOR WATER */
const WATER_LABELS = ["Expected", "Modelled", "Observed", "Measured", "Independently Validated"];

function ForWater() {
  const fns = [
    {
      t: "Infiltration",
      d: "Improved soil structure may allow water to enter the soil more effectively.",
    },
    {
      t: "Moisture Retention",
      d: "Porous carbon and improved soil aggregation may help hold water in the root zone.",
    },
    {
      t: "Reduced Surface Run-Off",
      d: "Better infiltration may reduce rapid movement of water across the surface under suitable conditions.",
    },
    {
      t: "Irrigation Resilience",
      d: "Retained soil moisture may help improve the effectiveness of irrigation.",
    },
    {
      t: "Root-Zone Availability",
      d: "Water held within a healthier soil profile may remain available to crops for longer.",
    },
    {
      t: "Recharge Potential",
      d: "Improved infiltration and water movement through the soil may support recharge processes, but recharge must be separately modelled and measured.",
    },
  ];
  return (
    <Section
      labelledBy="water-heading"
      tint="linear-gradient(180deg, var(--ivory) 0%, oklch(0.94 0.02 230 / 0.6) 100%)"
    >
      <div style={{ ["--page-accent" as string]: WATER }}>
        <Reveal className="max-w-3xl">
          <Eyebrow tone={WATER}>For Water</Eyebrow>
          <H2 id="water-heading">Healthier Soil Creates a Stronger Relationship With Water</H2>
          <Rule />
        </Reveal>
        <Reveal className="mt-12">
          <NumberedList items={fns} />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            ["water-irrigation", "Irrigation"],
            ["water-field-retention", "Soil moisture"],
            ["water-monitoring", "Water monitoring"],
            ["water-recharge", "Recharge context"],
          ].map(([a, l]) => (
            <Reveal key={a}>
              <Figure asset={a} alt={l} aspect="4 / 3" caption={l} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Panel tone="water">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Evidence label carried by every water figure
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {WATER_LABELS.map((l) => (
                <li key={l}>
                  <Status>{l}</Status>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-sans text-[14px] leading-[1.8] text-[color:var(--charcoal)]">
              Litres retained are never reported as litres recharged, and irrigation reduction
              is never presented as proven without measurement.
            </p>
          </Panel>
        </Reveal>
      </div>
    </Section>
  );
}

/* 18. FOR ENVIRONMENT */
function ForEnvironment() {
  const quads = [
    {
      t: "Air",
      c: BIOCHAR,
      items: [
        "Reduced residue burning where biomass is collected",
        "Lower smoke and particulate exposure",
        "Productive use of agricultural waste",
      ],
    },
    {
      t: "Soil",
      c: SOIL,
      items: [
        "Carbon restoration",
        "Improved soil condition",
        "Biological and structural support",
      ],
    },
    {
      t: "Water",
      c: WATER,
      items: [
        "Better infiltration",
        "Improved moisture retention",
        "Potential reduction in run-off",
        "Recharge contribution where measured",
      ],
    },
    {
      t: "Climate",
      c: ENV,
      items: [
        "Conversion of biomass carbon into more stable biochar carbon",
        "Long-term carbon storage",
        "Reduced emissions from avoided burning",
        "Potential reduction in selected agricultural emissions through wider programme practices",
      ],
    },
  ];
  return (
    <Section labelledBy="envpath-heading" tint="var(--ivory)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={ENV}>For the Environment</Eyebrow>
        <H2 id="envpath-heading">One Intervention, Multiple Environmental Pathways</H2>
        <Rule />
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {quads.map((q) => (
          <Reveal key={q.t}>
            <div className="h-full rounded-[6px] border border-[color:var(--border)] bg-[color:var(--muted)]/35 p-7">
              <span className="block h-[3px] w-12" style={{ background: q.c }} aria-hidden="true" />
              <h3 className="mt-4 font-serif text-[26px] text-[color:var(--charcoal)]">{q.t}</h3>
              <ul className="mt-4 space-y-2.5">
                {q.items.map((x) => (
                  <li
                    key={x}
                    className="font-sans text-[14px] leading-[1.7] text-muted-foreground"
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Caption>
        Verified carbon-removal statements appear only where measurement and methodology have
        been supplied.
      </Caption>
    </Section>
  );
}

/* 19. APPLICATION JOURNEY */
const JOURNEY = [
  {
    t: "Programme Area Selection",
    purpose: "Identify geographies where soil, biomass and community readiness align.",
    team: "Foundation + NettZero",
    farmer: "—",
    data: "Geography assessment",
  },
  {
    t: "Village Engagement",
    purpose: "Introduce the programme through village meetings.",
    team: "Foundation field team",
    farmer: "Attend meeting",
    data: "Participation record",
  },
  {
    t: "Farmer Registration",
    purpose: "Record interest, land details and crop context.",
    team: "Field team",
    farmer: "Register",
    data: "Farmer profile",
  },
  {
    t: "Plot Identification",
    purpose: "Select suitable plots for application or demonstration.",
    team: "Field team",
    farmer: "Confirm plot",
    data: "Plot mapping",
  },
  {
    t: "Baseline Soil Sampling",
    purpose: "Establish soil condition before intervention.",
    team: "NettZero",
    farmer: "Provide access",
    data: "Baseline soil parameters",
  },
  {
    t: "B3 Allocation",
    purpose: "Allocate material against plot area and schedule.",
    team: "Programme operations",
    farmer: "Receive allocation",
    data: "Allocation record",
  },
  {
    t: "Farmer Training",
    purpose: "Explain method, timing, quantity and safety.",
    team: "Field team",
    farmer: "Attend training",
    data: "Training record",
  },
  {
    t: "Field Application",
    purpose: "Apply B3 in line with crop and soil guidance.",
    team: "Farmer with field support",
    farmer: "Apply",
    data: "Application record",
  },
  {
    t: "Crop and Water Observation",
    purpose: "Observe establishment, root condition and moisture.",
    team: "NettZero",
    farmer: "Share observation",
    data: "Field observations",
  },
  {
    t: "Follow-Up Testing and Reporting",
    purpose: "Re-test soil and report programme outcomes.",
    team: "NettZero",
    farmer: "Provide access",
    data: "Post-season data",
  },
];

function ApplicationJourney() {
  const [open, setOpen] = useState(0);
  return (
    <Section
      id="journey"
      labelledBy="journey-heading"
      tint="linear-gradient(180deg, oklch(0.94 0.015 70 / 0.7) 0%, var(--ivory) 100%)"
    >
      <Reveal className="max-w-3xl">
        <Eyebrow tone={COPPER}>From Programme to Plot</Eyebrow>
        <H2 id="journey-heading">How B3 Reaches the Farmer and the Field</H2>
        <Rule />
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <Reveal>
          <ol className="divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
            {JOURNEY.map((s, i) => (
              <li key={s.t}>
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center gap-4 py-4 text-left"
                >
                  <span className="font-sans text-[11px] tracking-[0.2em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-serif text-[21px] text-[color:var(--charcoal)]">
                    {s.t}
                  </span>
                  <span aria-hidden="true" className="text-muted-foreground">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                {open === i ? (
                  <dl className="grid gap-3 pb-6 pl-10 sm:grid-cols-2">
                    {[
                      ["Purpose", s.purpose],
                      ["Responsible team", s.team],
                      ["Farmer action", s.farmer],
                      ["Data collected", s.data],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {k}
                        </dt>
                        <dd className="mt-1 font-sans text-[14px] leading-[1.7] text-[color:var(--charcoal)]">
                          {v}
                        </dd>
                      </div>
                    ))}
                    <div>
                      <dt className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Completion status
                      </dt>
                      <dd className="mt-1">
                        <Pending>Data being compiled</Pending>
                      </dd>
                    </div>
                  </dl>
                ) : null}
              </li>
            ))}
          </ol>
          <Panel tone="sand" className="mt-8">
            <p className="font-sans text-[14px] leading-[1.8] text-[color:var(--charcoal)]">
              Participation is subject to programme geography, eligibility, available
              material, field suitability and implementation schedule.
            </p>
          </Panel>
        </Reveal>
        <Reveal>
          <div className="grid gap-4">
            <Figure asset="farmer-registration" alt="Farmer registration" aspect="4 / 3" />
            <div className="grid grid-cols-2 gap-4">
              <Figure asset="soil-sampling" alt="Soil sampling" aspect="1 / 1" />
              <Figure asset="b3-field-team" alt="Field team" aspect="1 / 1" />
              <Figure asset="b3-paddy-application" alt="Paddy application" aspect="1 / 1" />
              <Figure asset="crop-measurement" alt="Crop measurement" aspect="1 / 1" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 20. SOIL ORGANIC CARBON */
function SoilCarbon() {
  return (
    <Section labelledBy="soc-heading" tint="oklch(0.93 0.018 70 / 0.65)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SOIL}>The Core Soil Metric</Eyebrow>
        <H2 id="soc-heading">Why Soil Organic Carbon Matters</H2>
        <Rule />
        <Body className="mt-7">
          <p>
            Soil organic carbon is not merely a climate metric. It influences soil structure,
            water retention, biological function, nutrient cycling, root development, erosion
            resilience, agricultural productivity and long-term soil health.
          </p>
          <p>
            B3 is intended to introduce stable carbon, while the broader programme supports
            regenerative practices that build living organic matter. The two are related but
            not the same.
          </p>
        </Body>
      </Reveal>

      <Reveal className="mt-10">
        <Flow
          steps={[
            "More Functional Soil Carbon",
            "Improved Structure",
            "Greater Water and Nutrient Retention",
            "Stronger Root Environment",
            "Greater Farm Resilience",
          ]}
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Panel tone="char" className="h-full">
            <h3 className="font-serif text-[24px] text-[color:var(--charcoal)]">
              Biochar Carbon
            </h3>
            <ul className="mt-4 space-y-2 font-sans text-[14px] leading-[1.7] text-muted-foreground">
              {["Stable", "Long-lived", "Structural", "Porous", "Carbon-storage function"].map(
                (x) => (
                  <li key={x}>{x}</li>
                ),
              )}
            </ul>
          </Panel>
        </Reveal>
        <Reveal>
          <Panel tone="leaf" className="h-full">
            <h3 className="font-serif text-[24px] text-[color:var(--charcoal)]">
              Biological Soil Organic Matter
            </h3>
            <ul className="mt-4 space-y-2 font-sans text-[14px] leading-[1.7] text-muted-foreground">
              {[
                "Dynamic",
                "Nutrient-cycling",
                "Biologically active",
                "Continuously formed and decomposed",
              ].map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Panel>
        </Reveal>
      </div>
      <Caption>The restoration model is designed to support both.</Caption>
    </Section>
  );
}

/* 21. WATER STEWARDSHIP */
function WaterStewardship() {
  const distinctions = [
    "Soil moisture retained",
    "Irrigation water potentially reduced",
    "Surface run-off potentially avoided",
    "Water infiltrated",
    "Water estimated to contribute to recharge",
    "Recharge independently measured",
  ];
  return (
    <Section
      labelledBy="stewardship-heading"
      tint="linear-gradient(180deg, var(--ivory) 0%, oklch(0.93 0.025 230 / 0.65) 100%)"
    >
      <div style={{ ["--page-accent" as string]: WATER }}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <Reveal>
            <Eyebrow tone={WATER}>Water Stewardship</Eyebrow>
            <H2 id="stewardship-heading">From Soil Moisture to Landscape Water Resilience</H2>
            <Rule />
            <Body className="mt-7">
              <p>
                The Foundation's water-stewardship approach begins with the understanding that
                soil is part of the water system.
              </p>
              <p>
                When soil structure, porosity and organic carbon decline, water may run off
                more quickly, remain available for less time or require greater irrigation
                input.
              </p>
              <p>
                The programme therefore explores how soil restoration can contribute to
                improved infiltration, greater root-zone moisture, more effective irrigation,
                reduced rapid run-off, improved water-use resilience and groundwater-recharge
                potential.
              </p>
            </Body>
          </Reveal>
          <Reveal>
            <Panel tone="water">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Measurement pathway
              </p>
              <Flow
                className="mt-5"
                steps={[
                  "Baseline Soil and Water Assessment",
                  "B3 Application",
                  "Soil-Moisture Observation",
                  "Irrigation Tracking",
                  "Infiltration Assessment",
                  "Recharge Modelling",
                  "Field Validation",
                  "Programme Reporting",
                ]}
              />
            </Panel>
            <Panel tone="sand" className="mt-5">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Reported separately, never merged
              </p>
              <ul className="mt-4 space-y-2">
                {distinctions.map((d) => (
                  <li
                    key={d}
                    className="border-t border-[color:var(--border)] pt-2 font-sans text-[13.5px] text-[color:var(--charcoal)]"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            ["water-monitoring", "Water monitoring"],
            ["water-recharge", "Recharge context"],
            ["groundwater-landscape", "Groundwater landscape"],
            ["water-irrigation", "Irrigation"],
          ].map(([a, l]) => (
            <Reveal key={a}>
              <Figure asset={a} alt={l} aspect="4 / 3" />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* 22. BIOMASS */
function Biomass() {
  const benefits = [
    "Reduced pressure to burn residue",
    "Cleaner local air",
    "Productive biomass use",
    "Local collection opportunities",
    "Stable carbon production",
    "Soil-restoration input",
    "Circular rural-resource model",
  ];
  return (
    <Section labelledBy="biomass-heading" tint="var(--ivory)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={COPPER}>Biomass as a Resource</Eyebrow>
        <H2 id="biomass-heading">
          Creating a Productive Alternative to Agricultural Residue Burning
        </H2>
        <Rule />
        <Body className="mt-7">
          <p>Agricultural residue is often treated as a disposal problem.</p>
          <p>
            The Foundation and NettZero seek to create local systems in which suitable biomass
            can become an environmental and economic resource. Not all biomass is suitable,
            and collection or exchange terms are published only when verified.
          </p>
        </Body>
      </Reveal>

      <Reveal className="mt-10">
        <Panel tone="soil">
          <Flow
            steps={[
              "Farm Residue",
              "Local Collection",
              "Aggregation",
              "Controlled Biochar Production",
              "B3 Preparation",
              "Return to Agricultural Soil",
              "Improved Soil Function",
              "Future Biomass Production",
            ]}
          />
        </Panel>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <li
                key={b}
                className="border-t border-[color:var(--border)] pt-3 font-sans text-[14px] leading-[1.7] text-[color:var(--charcoal)]"
              >
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Figure asset="crop-residue" alt="Crop residue" aspect="4 / 3" />
            <Figure asset="biomass-collection" alt="Biomass collection" aspect="4 / 3" />
            <Figure asset="biomass-bales" alt="Biomass bales" aspect="4 / 3" />
            <Figure asset="biochar-production" alt="Biochar production" aspect="4 / 3" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 23. BURNING REDUCTION */
function BurningReduction() {
  const causes = [
    "Short residue-management windows",
    "Collection difficulties",
    "Transport costs",
    "Lack of local buyers",
    "Limited storage",
    "Lack of practical alternatives",
  ];
  const response = [
    "Farmer awareness",
    "Biomass collection",
    "Local aggregation",
    "Responsible conversion",
    "Farmer participation",
    "B3-linked soil restoration",
    "Monitoring of residue diverted from burning",
  ];
  return (
    <Section
      labelledBy="burning-heading"
      tint="linear-gradient(180deg, oklch(0.92 0.008 70 / 0.8) 0%, var(--ivory) 100%)"
    >
      <Reveal className="max-w-3xl">
        <Eyebrow tone={BIOCHAR}>Cleaner Air</Eyebrow>
        <H2 id="burning-heading">Replacing Burning With a Local Biomass Value Chain</H2>
        <Rule />
        <Body className="mt-7">
          <p>Farmers require viable systems, not lectures.</p>
        </Body>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Panel tone="char" className="h-full">
            <h3 className="font-serif text-[23px] text-[color:var(--charcoal)]">
              Why burning happens
            </h3>
            <ul className="mt-4 space-y-2 font-sans text-[14px] leading-[1.7] text-muted-foreground">
              {causes.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Panel>
        </Reveal>
        <Reveal>
          <Panel tone="leaf" className="h-full">
            <h3 className="font-serif text-[23px] text-[color:var(--charcoal)]">
              The programme response
            </h3>
            <ul className="mt-4 space-y-2 font-sans text-[14px] leading-[1.7] text-muted-foreground">
              {response.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Panel>
        </Reveal>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {[
          ["residue-burning", "Residue burning"],
          ["biomass-collection", "Collection"],
          ["biomass-bales", "Bales"],
          ["khet-bachao-farmer-event", "Farmer event"],
        ].map(([a, l]) => (
          <Reveal key={a}>
            <Figure asset={a} alt={l} aspect="4 / 3" />
          </Reveal>
        ))}
      </div>
      <Caption>
        The programme does not claim that burning has been eliminated. Residue diverted is
        reported only where recorded.
      </Caption>
    </Section>
  );
}

/* 24. CARBON */
function Carbon() {
  const pathways = [
    {
      t: "Biochar Carbon Storage",
      d: "Biomass carbon is converted into a more stable form and applied to soil.",
    },
    {
      t: "Avoided Burning Emissions",
      d: "Residue diverted from open burning may reduce selected emissions associated with burning.",
    },
    {
      t: "Agricultural Emissions Management",
      d: "The wider programme may study methane, farm inputs, water practices and other sources of agricultural emissions.",
    },
  ];
  const requirements = [
    "Feedstock documentation",
    "Production data",
    "Carbon-content analysis",
    "Stability assumptions",
    "Lifecycle accounting",
    "Application records",
    "Monitoring",
    "Approved methodology",
    "Verification where applicable",
  ];
  return (
    <Section labelledBy="carbon-heading" tint="var(--ivory)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={BIOCHAR}>Carbon Management</Eyebrow>
        <H2 id="carbon-heading">Storing Carbon While Restoring Productive Landscapes</H2>
        <Rule />
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {pathways.map((p, i) => (
          <Reveal key={p.t}>
            <Panel tone="char" className="h-full">
              <span className="font-sans text-[11px] tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-[22px] text-[color:var(--charcoal)]">
                {p.t}
              </h3>
              <p className="mt-2 font-sans text-[14px] leading-[1.75] text-muted-foreground">
                {p.d}
              </p>
            </Panel>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Evidence ladder
        </p>
        <Flow
          className="mt-5"
          steps={[
            "Programme Activity",
            "Data Collection",
            "Calculation",
            "Methodology Review",
            "Verification",
            "Eligible Environmental Claim",
          ]}
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Reveal>
          <Panel tone="sand">
            <p className="font-serif text-[22px] leading-snug text-[color:var(--charcoal)]">
              Not every tonne of biochar automatically becomes a verified carbon-removal
              credit.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {requirements.map((r) => (
                <li
                  key={r}
                  className="border-t border-[color:var(--border)] pt-2 font-sans text-[13.5px] text-muted-foreground"
                >
                  {r}
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Figure asset="biochar-closeup" alt="Biochar" aspect="1 / 1" />
            <Figure asset="lab-report" alt="Laboratory report" aspect="1 / 1" />
            <Figure asset="methane-measurement" alt="Methane measurement" aspect="1 / 1" />
            <Figure asset="research-team" alt="Research team" aspect="1 / 1" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 25. REGENERATIVE MODEL */
function Regenerative() {
  const practices = [
    "Soil testing",
    "Appropriate B3 application",
    "Organic-matter management",
    "Crop-residue recycling",
    "Reduced unnecessary soil disturbance",
    "Water management",
    "Balanced nutrient management",
    "Crop and root observation",
  ];
  const optional = [
    "Crop rotation",
    "Cover cropping",
    "Biological inputs",
    "Integrated pest management",
  ];
  return (
    <Section
      labelledBy="regen-heading"
      tint="linear-gradient(180deg, var(--ivory) 0%, oklch(0.94 0.025 150 / 0.6) 100%)"
    >
      <Reveal className="max-w-3xl">
        <Eyebrow tone={ENV}>Beyond a Single Input</Eyebrow>
        <H2 id="regen-heading">B3 Within a Wider Regenerative Agriculture Model</H2>
        <Rule />
        <Body className="mt-7">
          <p>
            B3 works best as one element of a broader farm-management approach, guided by
            agronomic advice. Farmers are never advised to discontinue prescribed inputs
            without such guidance.
          </p>
        </Body>
      </Reveal>
      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {practices.map((p, i) => (
              <li
                key={p}
                className="rounded-[5px] border border-[color:var(--border)] bg-[color:var(--ivory)]/70 px-4 py-4"
              >
                <span className="font-sans text-[11px] tracking-[0.18em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 font-serif text-[19px] text-[color:var(--charcoal)]">{p}</p>
              </li>
            ))}
          </ul>
          <Panel tone="leaf" className="mt-6">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Optional practices — shown as programme components only when verified
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {optional.map((o) => (
                <li
                  key={o}
                  className="rounded-full border border-[color:var(--border)] px-3 py-1 font-sans text-[12.5px] text-muted-foreground"
                >
                  {o}
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Figure asset="field-trial" alt="Field trial" aspect="4 / 3" />
            <Figure asset="soil-sampling" alt="Soil sampling" aspect="4 / 3" />
            <Figure asset="farmer-training" alt="Farmer training" aspect="4 / 3" />
            <Figure asset="water-irrigation" alt="Irrigation" aspect="4 / 3" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 26. LIVELIHOODS */
function Livelihoods() {
  const paths = [
    {
      t: "Healthier Productive Soil",
      d: "Improved soil function may support crop resilience and long-term productivity.",
    },
    {
      t: "Better Water Efficiency",
      d: "Improved soil-water performance may reduce vulnerability and irrigation pressure.",
    },
    {
      t: "Biomass Value Creation",
      d: "Residue may become part of a local supply chain rather than a disposal burden.",
    },
    {
      t: "Local Employment",
      d: "Collection, processing, field implementation, monitoring and logistics can create rural work.",
    },
    {
      t: "Scalable Restoration Enterprises",
      d: "Local restoration systems may develop into economically viable regional models.",
    },
  ];
  return (
    <Section labelledBy="livelihood-heading" tint="var(--ivory)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={COPPER}>Restoration and Livelihoods</Eyebrow>
        <H2 id="livelihood-heading">Environmental Restoration Must Also Work Economically</H2>
        <Rule />
        <Body className="mt-7">
          <p>The Foundation's vision is not limited to environmental improvement.</p>
          <p>
            For restoration to scale, it must create practical value for farmers, villages,
            implementation partners and local economies. The programme does not claim
            guaranteed farmer income, and commercial terms are not published unless supplied.
          </p>
        </Body>
      </Reveal>
      <Reveal className="mt-12">
        <NumberedList items={paths} />
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {[
          ["farmer-meeting", "Farmer meeting"],
          ["biomass-collection", "Biomass collection"],
          ["b3-field-team", "Field team"],
          ["farmer-landscape", "Farm landscape"],
        ].map(([a, l]) => (
          <Reveal key={a}>
            <Figure asset={a} alt={l} aspect="4 / 3" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* 27. IMPLEMENTATION */
const PHASES = [
  {
    t: "Prepare",
    items: [
      "Geography selection",
      "Stakeholder engagement",
      "Farmer mobilisation",
      "Baseline mapping",
      "Biomass assessment",
    ],
    asset: "farmer-meeting",
  },
  {
    t: "Measure",
    items: [
      "Soil sampling",
      "Water baseline",
      "Crop baseline",
      "Residue assessment",
      "Farmer-practice documentation",
    ],
    asset: "soil-sample-bags",
  },
  {
    t: "Implement",
    items: [
      "B3 production",
      "Logistics",
      "Farmer training",
      "Field application",
      "Demonstration plots",
    ],
    asset: "b3-application",
  },
  {
    t: "Monitor",
    items: [
      "Crop observations",
      "Soil moisture",
      "Irrigation",
      "Soil parameters",
      "Biomass and emissions data",
    ],
    asset: "crop-measurement",
  },
  {
    t: "Report and Scale",
    items: [
      "Analysis",
      "Farmer economics",
      "Environmental outcomes",
      "Partner reporting",
      "Programme expansion",
    ],
    asset: "research-team",
  },
];

function Implementation() {
  const [active, setActive] = useState(0);
  return (
    <Section
      id="implementation"
      labelledBy="impl-heading"
      tint="linear-gradient(180deg, oklch(0.93 0.02 70 / 0.6) 0%, var(--ivory) 100%)"
    >
      <Reveal className="max-w-3xl">
        <Eyebrow tone={ENV}>Implementation at Scale</Eyebrow>
        <H2 id="impl-heading">From Village Engagement to Measured Environmental Outcomes</H2>
        <Rule />
      </Reveal>

      <div className="mt-12">
        <ol className="flex flex-wrap gap-2" role="tablist" aria-label="Implementation phases">
          {PHASES.map((p, i) => (
            <li key={p.t}>
              <button
                type="button"
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`rounded-full border px-5 py-2.5 font-sans text-[12px] uppercase tracking-[0.16em] transition-colors ${
                  active === i
                    ? "border-transparent bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
                    : "border-[color:var(--border)] text-[color:var(--charcoal)]"
                }`}
              >
                Phase {i + 1} — {p.t}
              </button>
            </li>
          ))}
        </ol>

        <Reveal className="mt-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
            <Figure
              asset={PHASES[active].asset}
              alt={PHASES[active].t}
              aspect="16 / 10"
            />
            <div>
              <h3 className="font-serif text-[30px] text-[color:var(--charcoal)]">
                {PHASES[active].t}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {PHASES[active].items.map((x) => (
                  <li
                    key={x}
                    className="border-t border-[color:var(--border)] pt-2.5 font-sans text-[14.5px] text-muted-foreground"
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 28. TRIALS */
function Trials() {
  const compare = [
    "Treated plots",
    "Control plots",
    "Different crops",
    "Different soil types",
    "Water-management practices",
    "Nutrient-management practices",
    "Replications",
    "Seasons",
  ];
  const measures = [
    "Baseline soil organic carbon",
    "pH",
    "Nutrient parameters",
    "Soil moisture",
    "Irrigation",
    "Crop establishment",
    "Root development",
    "Yield",
    "Farmer cost",
    "Methane where relevant",
    "Post-harvest soil condition",
  ];
  return (
    <Section labelledBy="trials-heading" tint="var(--ivory)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={ENV}>Field Evidence</Eyebrow>
        <H2 id="trials-heading">
          Testing What Works, Where It Works and Under What Conditions
        </H2>
        <Rule />
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Panel tone="soil" className="h-full">
            <h3 className="font-serif text-[22px] text-[color:var(--charcoal)]">
              Comparison structure
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {compare.map((c) => (
                <li
                  key={c}
                  className="border-t border-[color:var(--border)] pt-2 font-sans text-[13.5px] text-muted-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>
        <Reveal>
          <Panel tone="water" className="h-full">
            <h3 className="font-serif text-[22px] text-[color:var(--charcoal)]">
              Possible measurements
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {measures.map((c) => (
                <li
                  key={c}
                  className="border-t border-[color:var(--border)] pt-2 font-sans text-[13.5px] text-muted-foreground"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>
      </div>
      <Reveal className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {[
            "Add verified study design",
            "Add verified treatment structure",
            "Add verified research partner",
            "Add verified result",
          ].map((p) => (
            <li key={p}>
              <Pending>{p}</Pending>
            </li>
          ))}
        </ul>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-5">
        {[
          ["control-treatment-plots", "Control and treatment plots"],
          ["field-trial", "Field trial"],
          ["crop-measurement", "Crop measurement"],
          ["water-measurement", "Water measurement"],
          ["methane-measurement", "Methane measurement"],
        ].map(([a, l]) => (
          <Reveal key={a}>
            <Figure asset={a} alt={l} aspect="4 / 3" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* 29. VERIFICATION */
const STATUSES = [
  "Programme Data",
  "Laboratory Tested",
  "Field Observed",
  "Modelled",
  "Third-Party Reviewed",
  "Independently Verified",
];

function Verification() {
  const pillars = [
    { t: "Soil", items: ["Organic carbon", "pH", "Structure", "Nutrients", "Biology where tested"] },
    { t: "Water", items: ["Moisture", "Irrigation", "Infiltration", "Run-off", "Recharge modelling"] },
    {
      t: "Agriculture",
      items: ["Crop growth", "Yield", "Root condition", "Input use", "Farmer economics"],
    },
    {
      t: "Biomass",
      items: ["Quantity collected", "Source", "Moisture", "Conversion", "Diversion from burning"],
    },
    {
      t: "Carbon and Emissions",
      items: ["Biochar carbon", "Stability", "Lifecycle emissions", "Methane", "Avoided burning"],
    },
    {
      t: "Social and Economic Outcomes",
      items: [
        "Farmers engaged",
        "Training",
        "Local employment",
        "Cost and benefit",
        "Programme adoption",
      ],
    },
  ];
  return (
    <Section
      labelledBy="verify-heading"
      tint="linear-gradient(180deg, var(--ivory) 0%, oklch(0.94 0.015 230 / 0.55) 100%)"
    >
      <Reveal className="max-w-3xl">
        <Eyebrow tone={WATER}>Science and Accountability</Eyebrow>
        <H2 id="verify-heading">Every Environmental Claim Must Have a Measurement Path</H2>
        <Rule />
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.t}>
            <Panel tone={i % 3 === 0 ? "soil" : i % 3 === 1 ? "water" : "leaf"} className="h-full">
              <span className="font-sans text-[11px] tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-[22px] text-[color:var(--charcoal)]">
                {p.t}
              </h3>
              <ul className="mt-3 space-y-1.5 font-sans text-[13.5px] leading-[1.7] text-muted-foreground">
                {p.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Verification status carried by every published claim
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {STATUSES.map((s) => (
            <li key={s}>
              <Status>{s}</Status>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

/* 30. DASHBOARD */
type Metric = {
  group: string;
  label: string;
  unit: string;
  method: string;
  status: string;
};

const METRICS: Metric[] = [
  { group: "Soil", label: "Acres treated", unit: "acres", method: "Programme records", status: "Data being compiled" },
  { group: "Soil", label: "Soil samples", unit: "samples", method: "Field sampling", status: "Measurement underway" },
  { group: "Soil", label: "Baseline SOC", unit: "%", method: "Laboratory analysis", status: "Add verified figure" },
  { group: "Soil", label: "Post-treatment SOC", unit: "%", method: "Laboratory analysis", status: "Measurement underway" },
  { group: "Soil", label: "Demonstration plots", unit: "plots", method: "Programme records", status: "Data being compiled" },
  { group: "Water", label: "Moisture assessments", unit: "readings", method: "Field measurement", status: "Measurement underway" },
  { group: "Water", label: "Irrigation observations", unit: "cycles", method: "Farmer records", status: "Data being compiled" },
  { group: "Water", label: "Infiltration tests", unit: "tests", method: "Field measurement", status: "Measurement underway" },
  { group: "Water", label: "Modelled recharge", unit: "litres", method: "Hydrological modelling", status: "Add verified figure" },
  { group: "Water", label: "Validated recharge", unit: "litres", method: "Independent validation", status: "Add verified figure" },
  { group: "Air", label: "Residue diverted from burning", unit: "tonnes", method: "Collection records", status: "Data being compiled" },
  { group: "Air", label: "Villages participating", unit: "villages", method: "Programme records", status: "Data being compiled" },
  { group: "Biomass", label: "Biomass collected", unit: "tonnes", method: "Weighbridge records", status: "Data being compiled" },
  { group: "Biomass", label: "Biochar produced", unit: "tonnes", method: "Production records", status: "Measurement underway" },
  { group: "Carbon", label: "Biochar carbon applied", unit: "tCO₂e", method: "Carbon-content analysis", status: "Add verified figure" },
  { group: "Carbon", label: "Modelled carbon storage", unit: "tCO₂e", method: "Lifecycle accounting", status: "Add verified figure" },
  { group: "Carbon", label: "Verified carbon removal", unit: "tCO₂e", method: "Approved methodology", status: "Add verified figure" },
  { group: "Carbon", label: "Emissions studies", unit: "studies", method: "Field research", status: "Measurement underway" },
  { group: "Agriculture", label: "Crops covered", unit: "crops", method: "Programme records", status: "Data being compiled" },
  { group: "Agriculture", label: "Yield observations", unit: "plots", method: "Field measurement", status: "Measurement underway" },
  { group: "Agriculture", label: "Root assessments", unit: "assessments", method: "Field observation", status: "Measurement underway" },
  { group: "Agriculture", label: "Farmer cost studies", unit: "studies", method: "Farmer interviews", status: "Data being compiled" },
  { group: "Farmers", label: "Farmers enrolled", unit: "farmers", method: "Registration records", status: "Data being compiled" },
  { group: "Farmers", label: "Farmers trained", unit: "farmers", method: "Training records", status: "Data being compiled" },
  { group: "Farmers", label: "Villages reached", unit: "villages", method: "Programme records", status: "Data being compiled" },
  { group: "Farmers", label: "Women farmers participating", unit: "farmers", method: "Registration records", status: "Data being compiled" },
];

const FILTERS = ["All", "Soil", "Water", "Air", "Carbon", "Agriculture", "Farmers", "Biomass"];

function Dashboard() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? METRICS : METRICS.filter((m) => m.group === filter);
  return (
    <Section id="outcomes" labelledBy="dash-heading" tint="oklch(0.95 0.01 90 / 0.7)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={ENV}>Measuring Restoration</Eyebrow>
        <H2 id="dash-heading">
          Environmental Outcomes Across Soil, Water, Air and Livelihoods
        </H2>
        <Rule />
      </Reveal>

      <ul className="mt-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <li key={f}>
            <button
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border px-4 py-2 font-sans text-[12px] uppercase tracking-[0.14em] transition-colors ${
                filter === f
                  ? "border-transparent bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
                  : "border-[color:var(--border)] text-[color:var(--charcoal)]"
              }`}
            >
              {f}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((m) => (
          <div
            key={`${m.group}-${m.label}`}
            className="rounded-[6px] border border-[color:var(--border)] bg-[color:var(--ivory)]/80 p-5"
          >
            <div className="flex items-center justify-between">
              <span className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {m.group}
              </span>
              <Pending>{m.status}</Pending>
            </div>
            <h3 className="mt-3 font-serif text-[21px] leading-tight text-[color:var(--charcoal)]">
              {m.label}
            </h3>
            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 font-sans text-[12px] text-muted-foreground">
              <div>
                <dt className="uppercase tracking-[0.14em] text-[10px]">Unit</dt>
                <dd className="mt-0.5 text-[color:var(--charcoal)]">{m.unit}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-[10px]">Period</dt>
                <dd className="mt-0.5 text-[color:var(--charcoal)]">To be confirmed</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-[10px]">Geography</dt>
                <dd className="mt-0.5 text-[color:var(--charcoal)]">Programme areas</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-[10px]">Method</dt>
                <dd className="mt-0.5 text-[color:var(--charcoal)]">{m.method}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
      <Caption>
        Figures are published only once measured and evidence-labelled. No placeholder numbers
        are displayed.
      </Caption>
    </Section>
  );
}

/* 31. KHET BACHAO */
function KhetBachao() {
  const learn = [
    "Why soil organic carbon matters",
    "Why water retention matters",
    "Why residue burning has long-term costs",
    "How biomass can have value",
    "What B3 is",
    "How B3 is applied",
    "How demonstration plots work",
    "How field outcomes are measured",
    "How farmers can participate",
  ];
  const pathways = [
    "Farmer meetings",
    "WhatsApp education",
    "Soil testing",
    "Field demonstrations",
    "B3 distribution",
    "Application guidance",
    "Farmer stories",
    "Biomass exchange or collection where active",
  ];
  return (
    <Section
      labelledBy="khet-heading"
      tint="linear-gradient(180deg, var(--ivory) 0%, oklch(0.94 0.03 90 / 0.6) 100%)"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Reveal>
          <Eyebrow tone={COPPER}>Farmer and Village Outreach</Eyebrow>
          <H2 id="khet-heading">Khet Bachao Abhiyaan</H2>
          <Rule />
          <div className="mt-7 w-[130px]">
            <AssetPlaceholder name="khet-bachao-logo" label="Khet Bachao" aspect="3 / 2" />
          </div>
          <Body className="mt-7">
            <p>
              Khet Bachao Abhiyaan is the Foundation's farmer-facing platform for practical
              education, field participation and soil-restoration action.
            </p>
          </Body>
          <ul className="mt-7 space-y-2">
            {learn.map((l) => (
              <li
                key={l}
                className="border-t border-[color:var(--border)] pt-2 font-sans text-[14px] text-muted-foreground"
              >
                {l}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Figure asset="khet-bachao-farmer-event" alt="Farmer campaign event" aspect="4 / 3" />
            <Figure asset="khet-bachao-distribution" alt="B3 distribution" aspect="4 / 3" />
            <Figure asset="farmer-meeting" alt="Farmer meeting" aspect="4 / 3" />
            <Figure asset="farmer-training" alt="Farmer training" aspect="4 / 3" />
          </div>
          <Panel tone="sand" className="mt-6">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Campaign pathways
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {pathways.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-[color:var(--border)] px-3 py-1 font-sans text-[12.5px] text-[color:var(--charcoal)]"
                >
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-sans text-[13px] leading-[1.75] text-muted-foreground">
              Schemes, distribution offers and eligibility criteria are published only when
              current and verified.
            </p>
          </Panel>
        </Reveal>
      </div>
      <Reveal className="mt-10">
        <Figure asset="women-farmers" alt="Women farmers" aspect="21 / 9" />
      </Reveal>
    </Section>
  );
}

/* 32. STORIES */
const STORY_TYPES = [
  "Farmer experience",
  "Village programme",
  "Soil-restoration plot",
  "Biomass collection",
  "Water observation",
  "Field team",
  "Research partner",
];

function Stories() {
  const stories = [
    { asset: "farmer-story-01", label: "Farmer Experience" },
    { asset: "farmer-story-02", label: "Field Observation" },
    { asset: "farmer-story-03", label: "Measured Result" },
    { asset: "b3-field-team", label: "Verified Case Study" },
  ];
  const fields = [
    "Farmer or village",
    "Location",
    "Crop",
    "Soil context",
    "Intervention",
    "Observation period",
    "Farmer experience",
    "Measured outcome",
    "Evidence status",
    "Related report",
  ];
  return (
    <Section labelledBy="stories-heading" tint="var(--ivory)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={ENV}>From the Field</Eyebrow>
        <H2 id="stories-heading">Restoration Through the Experience of Farmers</H2>
        <Rule />
        <ul className="mt-7 flex flex-wrap gap-2">
          {STORY_TYPES.map((t) => (
            <li
              key={t}
              className="rounded-full border border-[color:var(--border)] px-3 py-1 font-sans text-[12px] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {stories.map((s) => (
          <Reveal key={s.asset}>
            <article className="h-full rounded-[6px] border border-[color:var(--border)] bg-[color:var(--muted)]/30 p-4">
              <AssetPlaceholder name={s.asset} label={s.label} aspect="4 / 3" />
              <div className="mt-4">
                <Status>{s.label}</Status>
                <p className="mt-3 font-sans text-[13px] leading-[1.75] text-muted-foreground">
                  Story content will be published once the farmer's account, location, crop
                  and observation period have been recorded and consented.
                </p>
                <p className="mt-3">
                  <Pending>Story in preparation</Pending>
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10">
        <Panel tone="char">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Each published story records
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
            {fields.map((f) => (
              <li
                key={f}
                className="border-t border-[color:var(--border)] pt-2 font-sans text-[13px] text-muted-foreground"
              >
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-5 font-sans text-[13.5px] leading-[1.8] text-[color:var(--charcoal)]">
            Testimonials are never invented, and anecdotal experience is never presented as
            scientific proof.
          </p>
        </Panel>
      </Reveal>
    </Section>
  );
}

/* 33. GEOGRAPHY */
function Geography() {
  return (
    <Section
      labelledBy="geo-heading"
      tint="linear-gradient(180deg, var(--ivory) 0%, oklch(0.94 0.02 150 / 0.55) 100%)"
    >
      <Reveal className="max-w-3xl">
        <Eyebrow tone={ENV}>Where Restoration Is Happening</Eyebrow>
        <H2 id="geo-heading">From Demonstration Plots to Regional Restoration</H2>
        <Rule />
        <Body className="mt-7">
          <p>
            Programme geography is published only from verified maps and field records.
            Locations, plot counts and village lists appear as they are confirmed by the field
            team.
          </p>
        </Body>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <Reveal>
          <Figure
            asset="environment-programme-map"
            alt="Programme map"
            aspect="4 / 3"
            caption="Regional programme locations."
          />
        </Reveal>
        <Reveal>
          <Figure
            asset="sitamarhi-environment-map"
            alt="Sitamarhi programme map"
            aspect="4 / 3"
            caption="Local programme map."
          />
        </Reveal>
        <Reveal>
          <Figure
            asset="environment-aerial"
            alt="Aerial view of programme geography"
            aspect="4 / 3"
            caption="Aerial view of programme geography."
          />
        </Reveal>
      </div>
      <Reveal className="mt-8">
        <Panel tone="leaf">
          <ul className="grid gap-3 sm:grid-cols-4">
            {["Villages", "Demonstration plots", "Districts", "Crops covered"].map((x) => (
              <li key={x}>
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {x}
                </p>
                <p className="mt-2">
                  <Pending>Add verified figure</Pending>
                </p>
              </li>
            ))}
          </ul>
        </Panel>
      </Reveal>
    </Section>
  );
}

/* 34. REPORTS */
function Reports() {
  const reports = [
    { asset: "environment-report-cover", t: "Environment Programme Report" },
    { asset: "b3-study-cover", t: "B3 Field Study" },
    { asset: "water-study-cover", t: "Water Stewardship Study" },
    { asset: "carbon-study-cover", t: "Carbon and Emissions Study" },
  ];
  return (
    <Section labelledBy="reports-heading" tint="var(--ivory)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SOIL}>Documentation</Eyebrow>
        <H2 id="reports-heading">Reports, Studies and Programme Documentation</H2>
        <Rule />
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reports.map((r) => (
          <Reveal key={r.asset}>
            <article className="h-full rounded-[6px] border border-[color:var(--border)] p-4">
              <AssetPlaceholder name={r.asset} label={r.t} aspect="3 / 4" />
              <h3 className="mt-4 font-serif text-[20px] leading-tight text-[color:var(--charcoal)]">
                {r.t}
              </h3>
              <p className="mt-3">
                <Pending>Publication pending</Pending>
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* 35. PARTNERSHIP OPPORTUNITIES */
function Partnerships() {
  const options = [
    {
      t: "Corporate and CSR Partners",
      d: "Support restoration geographies, demonstration programmes or measurement infrastructure.",
    },
    {
      t: "Research Institutions",
      d: "Collaborate on trial design, soil and water analysis, and independent review.",
    },
    {
      t: "Government and Development Agencies",
      d: "Align programme geographies with rural development and air-quality priorities.",
    },
    {
      t: "Implementation and Biomass Partners",
      d: "Build local collection, aggregation and conversion capacity.",
    },
  ];
  return (
    <Section
      id="partner"
      labelledBy="partners-heading"
      tint="oklch(0.94 0.02 150 / 0.55)"
    >
      <Reveal className="max-w-3xl">
        <Eyebrow tone={ENV}>Work With the Programme</Eyebrow>
        <H2 id="partners-heading">Partnership Opportunities</H2>
        <Rule />
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {options.map((o) => (
          <Reveal key={o.t}>
            <Panel tone="leaf" className="h-full">
              <h3 className="font-serif text-[23px] text-[color:var(--charcoal)]">{o.t}</h3>
              <p className="mt-3 font-sans text-[14px] leading-[1.8] text-muted-foreground">
                {o.d}
              </p>
            </Panel>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex flex-wrap gap-3">
        <PrimaryBtn href="#register">Start a Conversation</PrimaryBtn>
        <GhostBtn href="/environment-rural-regeneration/nettzero-partnership">
          Partnership Details
        </GhostBtn>
      </Reveal>
    </Section>
  );
}

/* 36. REGISTRATION */
function Registration() {
  const [sent, setSent] = useState(false);
  const field =
    "mt-2 w-full rounded-[4px] border border-[color:var(--border)] bg-[color:var(--ivory)] px-4 py-3 font-sans text-[14px] text-[color:var(--charcoal)] outline-none focus:border-[color:var(--accent-environment)]";
  const label =
    "font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground";
  return (
    <Section id="register" labelledBy="register-heading" tint="var(--ivory)">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal>
          <Eyebrow tone={COPPER}>Participate</Eyebrow>
          <H2 id="register-heading">Farmer Registration and Programme Enquiries</H2>
          <Rule />
          <Body className="mt-7">
            <p>
              Farmers, village representatives, institutions and partners can register
              interest in the programme. The field team responds with the next steps for the
              relevant geography.
            </p>
            <p>
              Participation is subject to programme geography, eligibility, available
              material, field suitability and implementation schedule.
            </p>
          </Body>
          <Panel tone="sand" className="mt-8">
            <p className="font-sans text-[13.5px] leading-[1.8] text-[color:var(--charcoal)]">
              Farmer details are collected for programme administration only and are not
              published.
            </p>
          </Panel>
        </Reveal>

        <Reveal>
          <form
            className="rounded-[6px] border border-[color:var(--border)] bg-[color:var(--muted)]/30 p-6 md:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="reg-name">
                  Name
                </label>
                <input id="reg-name" name="name" className={field} required />
              </div>
              <div>
                <label className={label} htmlFor="reg-phone">
                  Phone
                </label>
                <input id="reg-phone" name="phone" type="tel" className={field} required />
              </div>
              <div>
                <label className={label} htmlFor="reg-village">
                  Village / District
                </label>
                <input id="reg-village" name="village" className={field} />
              </div>
              <div>
                <label className={label} htmlFor="reg-type">
                  I am enquiring as
                </label>
                <select id="reg-type" name="type" className={field}>
                  <option>Farmer</option>
                  <option>Village representative</option>
                  <option>Research institution</option>
                  <option>Partner organisation</option>
                  <option>Media</option>
                </select>
              </div>
              <div>
                <label className={label} htmlFor="reg-land">
                  Land area (acres)
                </label>
                <input id="reg-land" name="land" className={field} />
              </div>
              <div>
                <label className={label} htmlFor="reg-crop">
                  Main crop
                </label>
                <input id="reg-crop" name="crop" className={field} />
              </div>
              <div className="sm:col-span-2">
                <label className={label} htmlFor="reg-message">
                  Message
                </label>
                <textarea id="reg-message" name="message" rows={4} className={field} />
              </div>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <PrimaryBtn type="submit">Submit Enquiry</PrimaryBtn>
              {sent ? (
                <p
                  role="status"
                  className="font-sans text-[13.5px] text-[color:var(--charcoal)]"
                >
                  Thank you — your enquiry has been noted. The field team will be in touch.
                </p>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

/* 37. FAQ */
function Faq() {
  const [open, setOpen] = useState<number>(-1);
  return (
    <Section
      labelledBy="faq-heading"
      tint="linear-gradient(180deg, var(--ivory) 0%, oklch(0.94 0.015 70 / 0.65) 100%)"
    >
      <Reveal className="max-w-3xl">
        <Eyebrow tone={ENV}>Questions</Eyebrow>
        <H2 id="faq-heading">Frequently Asked Questions</H2>
        <Rule />
      </Reveal>
      <div className="mt-10 max-w-3xl divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
        {FAQS.map((f, i) => (
          <div key={f.q}>
            <button
              type="button"
              className="flex w-full items-center gap-4 py-5 text-left"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <span className="flex-1 font-serif text-[20px] leading-snug text-[color:var(--charcoal)]">
                {f.q}
              </span>
              <span aria-hidden="true" className="text-muted-foreground">
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i ? (
              <p className="pb-6 font-sans text-[14.5px] leading-[1.8] text-muted-foreground">
                {f.a}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* 38. UPDATES */
function Updates() {
  return (
    <Section labelledBy="updates-heading" tint="var(--ivory)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SOIL}>Programme Notes</Eyebrow>
        <H2 id="updates-heading">Latest Environmental Updates</H2>
        <Rule />
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {["Field programme", "Research", "Campaign"].map((t) => (
          <Reveal key={t}>
            <article className="h-full rounded-[6px] border border-[color:var(--border)] p-6">
              <span className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t}
              </span>
              <h3 className="mt-3 font-serif text-[21px] leading-snug text-[color:var(--charcoal)]">
                Updates will be published as field activity is recorded.
              </h3>
              <p className="mt-4">
                <Pending>Update in preparation</Pending>
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* 39. CLOSING */
function Closing() {
  return (
    <section
      aria-labelledby="closing-heading"
      className="relative overflow-hidden border-t border-[color:var(--border)]"
    >
      <div className="absolute inset-0">
        <AssetPlaceholder name="rural-landscape" label="Rural landscape" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.24 0.03 130 / 0.78) 0%, oklch(0.2 0.02 90 / 0.86) 100%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1360px] px-5 py-24 md:px-10 md:py-32">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-[color:var(--ivory)]/75">
          The Long View
        </p>
        <h2
          id="closing-heading"
          className="mt-6 max-w-3xl font-serif text-[36px] leading-[1.08] text-[color:var(--ivory)] md:text-[56px]"
        >
          Restoration Is a Generational Commitment
        </h2>
        <p className="mt-7 max-w-2xl font-sans text-[15.5px] leading-[1.85] text-[color:var(--ivory)]/85">
          Soil takes decades to deplete and years to rebuild. The Foundation and NettZero
          measure this work in seasons and generations — restoring the soil, water and air on
          which rural livelihoods depend, and doing so in a way that farmers can sustain.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#register"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--ivory)] px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--charcoal)] transition-colors hover:bg-[color:var(--ivory)]/85"
          >
            Join the Programme
          </a>
          <a
            href="#partner"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[color:var(--ivory)]/50 px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--ivory)] transition-colors hover:border-[color:var(--ivory)]"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
