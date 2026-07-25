import { AssetPlaceholder } from "./AssetPlaceholder";

type Pillar = {
  key: string;
  eyebrow: string;
  title: string;
  body: string;
  quote: string;
  href: string;
  linkLabel: string;
  asset: string;
  accent: string;
  panelBg: string;
};

const PILLARS: Pillar[] = [
  {
    key: "education",
    eyebrow: "Pillar One",
    title: "Education",
    body:
      "From DPMS classrooms to allied learning initiatives, the Foundation invests in young minds through modern facilities, dedicated teachers and scholarships that open doors for every deserving student in and around Sitamarhi.",
    quote: "Every child taught is a family transformed.",
    href: "/education",
    linkLabel: "Explore Education",
    asset: "foundation-work-education",
    accent: "var(--accent-education)",
    panelBg: "oklch(0.97 0.024 85 / 0.85)",
  },
  {
    key: "healthcare",
    eyebrow: "Pillar Two",
    title: "Healthcare",
    body:
      "Free medical camps, diagnostic support and long-term health infrastructure bring compassionate, dignified care to families for whom quality treatment has too often been out of reach.",
    quote: "Care that reaches the last mile.",
    href: "/healthcare-social-welfare",
    linkLabel: "Explore Healthcare",
    asset: "foundation-work-healthcare",
    accent: "var(--accent-healthcare)",
    panelBg: "oklch(0.96 0.022 230 / 0.85)",
  },
  {
    key: "social",
    eyebrow: "Pillar Three",
    title: "Social Welfare",
    body:
      "Group weddings, livelihood support and relief programmes stand alongside sustained, dignity-first work with the poor and underprivileged — meeting people not with charity, but with belonging.",
    quote: "Uplift with dignity, always.",
    href: "/healthcare-social-welfare",
    linkLabel: "Explore Social Welfare",
    asset: "foundation-work-social-welfare",
    accent: "var(--accent-sita)",
    panelBg: "oklch(0.965 0.028 60 / 0.85)",
  },
  {
    key: "sita",
    eyebrow: "Pillar Four",
    title: "Sita Samahit Sthal",
    body:
      "Stewardship of a site of profound cultural and spiritual significance — where heritage, faith and community come together, and where pilgrims and neighbours alike find a place that is truly theirs.",
    quote: "A living heritage, tenderly kept.",
    href: "/sita-samahit-sthal",
    linkLabel: "Explore Sita Samahit Sthal",
    asset: "foundation-work-sita-samahit-sthal",
    accent: "var(--accent-sita)",
    panelBg: "oklch(0.96 0.028 45 / 0.85)",
  },
  {
    key: "environment",
    eyebrow: "Pillar Five",
    title: "Environment & Rural Regeneration",
    body:
      "Soil-first agriculture, tree cover and water-system revival — an emerging body of work that partners with rural communities to build landscapes and livelihoods that endure for generations.",
    quote: "Rooted in the land, growing with the people.",
    href: "/environment-rural-regeneration",
    linkLabel: "Explore Environment & Rural Regeneration",
    asset: "foundation-work-environment",
    accent: "var(--accent-environment)",
    panelBg: "oklch(0.965 0.028 145 / 0.85)",
  },
];

function PillarRow({ pillar, index }: { pillar: Pillar; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <article
      aria-labelledby={`pillar-${pillar.key}-title`}
      className="relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Immersive image */}
        <div
          className={`relative h-[340px] w-full overflow-hidden md:h-[460px] lg:h-[560px] ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out hover:scale-[1.04]">
            <AssetPlaceholder name={pillar.asset} />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `linear-gradient(${
                reverse ? "270deg" : "90deg"
              }, transparent 55%, ${pillar.panelBg} 100%)`,
            }}
          />
          {/* Pillar numeral */}
          <div
            className={`pointer-events-none absolute top-6 font-serif text-[100px] leading-none opacity-25 md:text-[140px] ${
              reverse ? "right-6" : "left-6"
            }`}
            style={{ color: pillar.accent }}
            aria-hidden="true"
          >
            0{index + 1}
          </div>
        </div>

        {/* Text panel */}
        <div
          className={`relative flex flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:px-16 ${
            reverse ? "lg:order-1" : "lg:order-2"
          }`}
          style={{ backgroundColor: pillar.panelBg }}
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span
                className="h-[2px] w-10"
                style={{ background: pillar.accent }}
                aria-hidden="true"
              />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--charcoal)]/65">
                {pillar.eyebrow}
              </span>
            </div>
            <h3
              id={`pillar-${pillar.key}-title`}
              className="mt-5 font-serif text-[32px] leading-[1.1] md:text-[42px] lg:text-[48px]"
              style={{ color: pillar.accent }}
            >
              {pillar.title}
            </h3>
            <p className="mt-5 font-sans text-[15px] leading-[1.85] text-[color:var(--charcoal)]/85 md:text-[16.5px]">
              {pillar.body}
            </p>
            <blockquote
              className="mt-6 border-l-2 pl-4 font-serif text-[17px] italic leading-snug text-[color:var(--charcoal)]/70 md:text-[19px]"
              style={{ borderColor: pillar.accent }}
            >
              &ldquo;{pillar.quote}&rdquo;
            </blockquote>
            <a
              href={pillar.href}
              className="mt-8 inline-flex items-center gap-2 font-sans text-[12.5px] font-semibold uppercase tracking-[0.2em] text-[color:var(--charcoal)] transition-opacity hover:opacity-70"
            >
              <span className="border-b pb-1" style={{ borderColor: pillar.accent }}>
                {pillar.linkLabel}
              </span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function PillarsSection() {
  return (
    <section aria-labelledby="pillars-heading" className="relative">
      <div
        className="px-5 py-20 text-center md:px-8 md:py-24"
        style={{
          background:
            "linear-gradient(180deg, var(--ivory) 0%, oklch(0.97 0.02 60 / 0.6) 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[color:var(--accent-sita)]/60" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--charcoal)]/65">
              The Five Pillars
            </span>
            <span className="h-px w-8 bg-[color:var(--accent-sita)]/60" />
          </div>
          <h2
            id="pillars-heading"
            className="mt-5 font-serif text-[32px] leading-[1.1] text-[color:var(--charcoal)] md:text-[44px] lg:text-[52px]"
          >
            The Work, Pillar by Pillar
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-[15px] leading-[1.8] text-[color:var(--charcoal)]/70 md:text-[16px]">
            Five deep commitments, each shaping lives in and around Sitamarhi in its own way.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        {PILLARS.map((p, i) => (
          <PillarRow key={p.key} pillar={p} index={i} />
        ))}
      </div>
    </section>
  );
}
