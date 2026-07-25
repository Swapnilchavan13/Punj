import { AssetPlaceholder } from "./AssetPlaceholder";

type Work = {
  asset: string;
  label: string;
  blurb: string;
  accent: string;
};

const WORKS: Work[] = [
  {
    asset: "foundation-work-education",
    label: "Education",
    blurb:
      "Nurturing young minds through DPMS and allied learning initiatives in and around Sitamarhi.",
    accent: "var(--accent-education)",
  },
  {
    asset: "foundation-work-healthcare",
    label: "Healthcare",
    blurb:
      "Accessible care, camps and long-term health infrastructure for underserved communities.",
    accent: "var(--accent-healthcare)",
  },
  {
    asset: "foundation-work-social-welfare",
    label: "Social Welfare",
    blurb:
      "Uplifting the poor and underprivileged through sustained, dignity-first programmes.",
    accent: "var(--accent-sita)",
  },
  {
    asset: "foundation-work-sita-samahit-sthal",
    label: "Sita Samahit Sthal",
    blurb:
      "Stewarding a site of profound cultural and spiritual significance to Sitamarhi.",
    accent: "var(--accent-sita)",
  },
  {
    asset: "foundation-work-environment",
    label: "Environment",
    blurb:
      "Rural regeneration, tree cover and soil-first initiatives for a living landscape.",
    accent: "var(--accent-environment)",
  },
];

export function OurWorkSection() {
  return (
    <section
      aria-labelledby="ourwork-heading"
      className="relative px-5 py-20 md:px-8 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.97 0.016 220 / 0.5) 0%, oklch(0.965 0.02 160 / 0.55) 60%, var(--ivory) 100%)",
      }}
    >
      {/* Subtle divider ornament */}
      <div className="mx-auto mb-14 flex max-w-[1240px] items-center gap-4 md:mb-20">
        <span className="h-px flex-1 bg-[color:var(--charcoal)]/15" />
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--charcoal)]/55">
          Our Work
        </span>
        <span className="h-px flex-1 bg-[color:var(--charcoal)]/15" />
      </div>

      <div className="mx-auto w-full max-w-[1240px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="ourwork-heading"
            className="font-serif text-[32px] leading-[1.1] text-[color:var(--charcoal)] md:text-[44px] lg:text-[52px]"
          >
            Five Pillars, One Enduring Commitment
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-[15px] leading-[1.8] text-[color:var(--charcoal)]/75 md:text-[16px]">
            The Foundation's work spans education, healthcare, social welfare, cultural
            stewardship and environmental regeneration — each rooted in the communities of
            Sitamarhi.
          </p>
        </div>

        {/* Editorial grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-6 md:gap-6">
          <WorkCard work={WORKS[0]} className="md:col-span-4 md:row-span-2 md:min-h-[520px]" featured />
          <WorkCard work={WORKS[1]} className="md:col-span-2 md:min-h-[250px]" />
          <WorkCard work={WORKS[2]} className="md:col-span-2 md:min-h-[250px]" />
          <WorkCard work={WORKS[3]} className="md:col-span-3 md:min-h-[280px]" />
          <WorkCard work={WORKS[4]} className="md:col-span-3 md:min-h-[280px]" />
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  work,
  className = "",
  featured = false,
}: {
  work: Work;
  className?: string;
  featured?: boolean;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-xl ring-1 ring-black/5 shadow-[0_2px_16px_rgba(60,60,80,0.08)] transition-shadow duration-500 hover:shadow-[0_10px_32px_rgba(60,60,80,0.16)] ${className}`}
    >
      <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]">
        <AssetPlaceholder name={work.asset} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <div className="flex items-center gap-2.5">
          <span
            className="h-[2px] w-7"
            style={{ background: work.accent }}
            aria-hidden="true"
          />
          <span className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/90">
            {work.label}
          </span>
        </div>
        <h3
          className={`mt-2 font-serif text-white ${
            featured ? "text-[26px] md:text-[32px]" : "text-[20px] md:text-[22px]"
          } leading-tight`}
        >
          {work.label}
        </h3>
        <p
          className={`mt-2 max-w-md font-sans text-white/85 ${
            featured ? "text-[14px] md:text-[15px]" : "text-[13px]"
          } leading-snug`}
        >
          {work.blurb}
        </p>
      </figcaption>
    </figure>
  );
}
