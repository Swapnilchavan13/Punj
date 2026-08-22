import { useEffect, useRef, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { AssetPlaceholder } from "@/components/AssetPlaceholder";

export const Route = createFileRoute("/about-foundation")({
  head: () => ({
    meta: [
      { title: "About the Foundation | Punj Foundation, Sitamarhi" },
      {
        name: "description",
        content:
          "The story of the Pt. Kanahya Lal Dayawanti Punj Foundation — its founding values, institutions in Sitamarhi, and work across education, healthcare, heritage and rural regeneration.",
      },
      { property: "og:title", content: "A Legacy of Service, Built Across Generations" },
      {
        property: "og:description",
        content:
          "A narrative history of the Punj Foundation: founding values, educational mission, community care, stewardship of Sita Samahit Sthal and rural regeneration.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutFoundation,
});

/* ---------------- motion helper ---------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, shown };
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, tone }: { children: ReactNode; tone?: string }) {
  return (
    <p
      className="font-sans text-[11px] font-medium uppercase tracking-[0.28em]"
      style={{ color: tone ?? "var(--muted-foreground)" }}
    >
      {children}
    </p>
  );
}

function Caption({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 font-sans text-[12px] italic leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

function Portrait({
  asset,
  name,
  href,
  description,
}: {
  asset: string;
  name: string;
  href: string;
  description: string;
}) {
  return (
    <figure className="flex items-start gap-4">
      <div
        className="shrink-0 rounded-[5px] p-[2px] ring-1 ring-[color:var(--accent-sita)]/25"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.94 0.03 60) 0%, oklch(0.88 0.05 40) 50%, oklch(0.94 0.03 60) 100%)",
        }}
      >
        <div className="h-[96px] w-[78px] overflow-hidden rounded-[3px] md:h-[118px] md:w-[96px]">
          <img
  src={href}
  alt=""
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  }}
/>
        </div>
      </div>
      <figcaption>
        <p className="font-serif text-[18px] leading-tight text-[color:var(--charcoal)]">{name}</p>
        <p className="mt-2 max-w-sm font-sans text-[13.5px] leading-relaxed text-muted-foreground">
          {description}
        </p>
      </figcaption>
    </figure>
  );
}

/* ---------------- timeline ---------------- */

type Chapter = {
  id: string;
  period: string;
  title: string;
  body: string[];
  asset: string;
  alt: string;
  accent: string;
  panel: string;
  himg: string;
  portraits?: { asset: string; name: string; description: string; href:string }[];
  pull?: string;
  pullNote?: string;
  smallLabel?: string;
  link?: { label: string; href: string };
};

const CHAPTERS: Chapter[] = [
  {
    id: "founding-vision",
    period: "The Founding Vision",
    title: "A Legacy Built on Integrity, Discipline and Service",
    body: [
      "The earliest foundations of the institution were laid through values rather than programmes.",
      "Late Pt. Kanahya Lal Punj represented a tradition of vision, integrity, hard work and public responsibility. His life established the moral foundation on which the institution would later grow.",
      "Late Smt. Dayawanti Punj brought wisdom, devotion, grace and a strong sense of service to the family's public legacy.",
      "Together, their values created the guiding framework for a Foundation that would later work across education, healthcare, social welfare, heritage and rural development.",
    ],
    asset: "archive-foundation-early-years",
    alt: "Archival material representing the Foundation's early years",
    accent: "var(--accent-education)",
    himg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQTfv44SVHwdP1FmHlHjWiIqxhhH81lowvee58dXdkhxfDfIxF0mgYiAy&s=10",
    panel: "oklch(0.965 0.026 85 / 0.7)",
    portraits: [
      {
        asset: "founder-kanahya-lal-punj",
        href:"/founders/kanahya.jpg",
        name: "Late Pt. Kanahya Lal Punj",
        description:
          "A man of vision and integrity, he built his legacy on honesty, sincerity, and hard work. His life continues to inspire generations.",
      },
      {
        asset: "founder-dayawanti-punj",
        name: "Late Smt. Dayawanti Punj",
        href:"/founders/dayawanti.jpg",
        description:
          "A noble and idealistic woman, she embodied wisdom, devotion, and grace. Her values remain the guiding light of the Foundation.",
      },
    ],
    pull: "Service must be reflected in the institutions and values we leave behind.",
    pullNote: "A thematic editorial line, not a direct founder quotation.",
  },
  {
    id: "education",
    period: "Building the Educational Mission",
    title: "Creating Access to Learning in Sitamarhi",
    body: [
      "The Foundation's commitment to institution-building found one of its strongest expressions in education.",
      "Late Shri S. N. P. Punj carried forward the family's values through a clear and ambitious educational vision: to create access to high-quality learning in Sitamarhi.",
      "The establishment and growth of Dayawanti Punj Model School represented more than the creation of a school. It was an effort to bring opportunity, confidence, discipline and aspiration closer to rural students.",
      "The educational mission later expanded in scope, creating pathways for school education, higher learning, student development and the long-term growth of the region's young people.",
    ],
    asset: "archive-education-beginnings",
    alt: "Students participating in an early educational programme",
    accent: "var(--accent-education)",
    panel: "oklch(0.97 0.024 85 / 0.7)",
    himg: "/src/assets/generated/slider-education.png",
    smallLabel: "Education as institution-building",
    portraits: [
      {
        asset: "founder-snp-punj",
        name: "Late Shri S. N. P. Punj",
        href:"/founders/snp.jpg",
        description:
          "A visionary entrepreneur and educationist, he founded DPMS to bring world-class learning to Sitamarhi. His mission lives on through every student's success.",
      },
    ],
    link: { label: "Explore Education", href: "/education" },
  },
  {
    id: "community-care",
    period: "Expanding Community Care",
    title: "From Compassion to Practical Social Support",
    body: [
      "As the Foundation's relationship with the community deepened, its work extended beyond formal institutions.",
      "Late Smt. Indu Punj embodied a compassionate and active commitment to the poor and underprivileged. Her approach to service was personal, practical and closely connected with the needs of families.",
      "This spirit became visible in programmes involving social assistance, community support, group weddings, distribution of essential items and help during moments of difficulty.",
      "The Foundation's social-welfare work has continued to be shaped by one central principle: support should preserve dignity.",
    ],
    asset: "archive-social-welfare",
    alt: "Community assistance activity supported by the Foundation",
    accent: "oklch(0.52 0.11 45)",
    panel: "oklch(0.965 0.028 55 / 0.7)",
    himg:"/src/assets/generated/work-social-welfare.jpg",
    portraits: [
      {
        asset: "founder-indu-punj",
        name: "Late Smt. Indu Punj",
        href:"/founders/indu.jpg",
        description:
          "A compassionate and inspiring soul, she worked tirelessly for the upliftment of the poor and underprivileged. Her kindness is woven into every initiative of the Foundation.",
      },
    ],
    link: { label: "Explore Healthcare & Social Welfare", href: "/healthcare-social-welfare" },
  },
  {
    id: "healthcare",
    period: "Strengthening Community Wellbeing",
    title: "Bringing Care Closer to Rural Families",
    body: [
      "The Foundation's commitment to community wellbeing gradually expanded into healthcare and patient support.",
      "Through its hospital, medical camps, eye-care initiatives, ambulance support and assistance with essential medicines, the Foundation has worked to reduce the distance between rural families and timely care.",
      "This work reflects the same institutional philosophy that shaped its educational mission: meaningful service must be accessible, sustained and responsive to local needs.",
    ],
    asset: "archive-healthcare-growth",
    alt: "Community healthcare activity supported by the Foundation",
    accent: "var(--accent-healthcare)",
    panel: "oklch(0.96 0.022 230 / 0.7)",
    himg:"/src/assets/generated/slider-healthcare.png",
    link: { label: "Explore Healthcare & Social Welfare", href: "/healthcare-social-welfare" },
  },
  {
    id: "sita",
    period: "Preserving a Sacred Heritage",
    title: "Serving Faith, Culture and Community Belonging",
    body: [
      "The Foundation's responsibilities have also included the stewardship of Sita Samahit Sthal.",
      "Its role extends beyond the physical maintenance of a sacred site. It includes preserving the cultural and spiritual meaning of the place, supporting visitors and pilgrims, sustaining community traditions and protecting an important heritage for future generations.",
      "Through this stewardship, the Foundation's work connects service with belonging and institutional care with cultural continuity.",
    ],
    asset: "archive-sita-samahit-sthal",
    alt: "Architectural view of Sita Samahit Sthal",
    accent: "var(--accent-sita)",
    panel: "oklch(0.955 0.026 30 / 0.7)",
    himg:"https://dpms.in/wp-content/uploads/2025/08/transport-area.jpg",
    link: { label: "Explore Sita Samahit Sthal", href: "/sita-samahit-sthal" },
  },
  {
    id: "environment",
    period: "Broadening the Foundation's Responsibility",
    title: "Extending Community Service to Soil, Water and Agriculture",
    body: [
      "As rural communities face new pressures from declining soil health, water stress and agricultural vulnerability, the Foundation's work is entering a new chapter.",
      "Its environment and rural-regeneration programmes seek to strengthen the natural systems on which farmers, families and rural livelihoods depend. This work includes soil restoration, water stewardship, farmer education, crop-residue management, field demonstrations and environmental measurement.",
      "The programme is being developed in partnership with NettZero, which contributes technical, implementation and environmental expertise. B3 – Bhoomi Bio Booster is used as one intervention within this wider programme for soil restoration, water resilience and agricultural regeneration.",
      "This chapter is the latest extension of a long-standing community mission — not a replacement for the Foundation's other work.",
    ],
    asset: "archive-environment-expansion",
    alt: "Farmer participating in a soil-restoration field programme",
    accent: "var(--accent-environment)",
    panel: "oklch(0.96 0.022 150 / 0.7)",
    himg:"https://assets.ramen.101reporters.com/imgs/2025/6/826*532/101RPT2542363/7.webp",
    link: {
      label: "Explore Environment and Rural Regeneration",
      href: "/environment-rural-regeneration",
    },
  },
  {
    id: "present",
    period: "The Present Chapter",
    title: "One Foundation, Multiple Dimensions of Community Wellbeing",
    body: [
      "Today, the Foundation's work spans four principal programme pillars: Education, Healthcare & Social Welfare, Sita Samahit Sthal, and Environment and Rural Regeneration.",
      "These areas are different expressions of one institutional purpose. Education creates opportunity. Healthcare and social support protect dignity and wellbeing. Cultural stewardship preserves identity and belonging. Healthy soil, water and agriculture sustain rural livelihoods.",
      "The Foundation continues to evolve by responding to the needs of the community while remaining anchored in the values established by its founders.",
    ],
    asset: "leadership-current",
    alt: "Current Foundation leadership",
    accent: "var(--charcoal)",
    panel: "oklch(0.96 0.01 80 / 0.7)",
    himg:"https://dpms.in/wp-content/uploads/2025/08/IMG_0733.jpg",
  },
];

function ChapterBlock({ chapter, index }: { chapter: Chapter; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal>
      <article
        id={chapter.id}
        aria-labelledby={`${chapter.id}-title`}
        className="relative pl-10 md:pl-0"
      >
        {/* marker */}
        <span
          aria-hidden="true"
          className="absolute left-[10px] top-2 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-[color:var(--ivory)] md:left-1/2"
          style={{ background: chapter.accent }}
        />
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
          <div className={flip ? "md:order-2 md:pl-16" : "md:pr-16"}>
            <Eyebrow tone={chapter.accent}>{chapter.period}</Eyebrow>
            <h3
              id={`${chapter.id}-title`}
              className="mt-3 font-serif text-[28px] leading-[1.15] text-[color:var(--charcoal)] md:text-[36px]"
            >
              {chapter.title}
            </h3>
            <div
              className="mt-5 rounded-lg border border-[color:var(--border)]/60 p-6 backdrop-blur-[2px] md:p-7"
              style={{ background: chapter.panel }}
            >
              {chapter.body.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="mb-4 max-w-[62ch] font-sans text-[15px] leading-[1.75] text-[color:var(--charcoal)]/85 last:mb-0"
                >
                  {p}
                </p>
              ))}
              {chapter.pull ? (
                <blockquote
                  className="mt-6 border-l-2 pl-5"
                  style={{ borderColor: chapter.accent }}
                >
                  <p className="font-serif text-[20px] italic leading-snug text-[color:var(--charcoal)]">
                    “{chapter.pull}”
                  </p>
                  <footer className="mt-2 font-sans text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {chapter.pullNote}
                  </footer>
                </blockquote>
              ) : null}
            </div>

            {chapter.portraits ? (
              <div className="mt-7 grid gap-6 sm:grid-cols-1">
                {chapter.portraits.map((p) => (
                  <Portrait key={p.asset} {...p} />
                ))}
              </div>
            ) : null}

            {chapter.link ? (
              <a
                href={chapter.link.href}
                className="mt-7 inline-flex items-center gap-2 font-sans text-[13px] font-medium uppercase tracking-[0.2em] underline-offset-8 hover:underline focus-visible:outline focus-visible:outline-2"
                style={{ color: chapter.accent }}
              >
                {chapter.link.label}
                <span aria-hidden="true">→</span>
              </a>
            ) : null}
          </div>

          <div className={flip ? "md:order-1 md:pr-16" : "md:pl-16"}>
            <figure>
              <div className="overflow-hidden rounded-lg shadow-[0_18px_50px_-30px_rgba(60,40,20,0.6)]">
                {/* <AssetPlaceholder name={chapter.asset} aspect="4/3" label={chapter.alt} /> */}
                <img src={chapter.himg} alt="" />
              </div>
              {chapter.smallLabel ? (
                <figcaption className="mt-3 font-sans text-[10.5px] uppercase tracking-[0.24em] text-muted-foreground">
                  {chapter.smallLabel}
                </figcaption>
              ) : (
                <Caption>{chapter.alt}.</Caption>
              )}
            </figure>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ---------------- static content ---------------- */

const PRINCIPLES = [
  ["Service", "Meaningful work begins with responsibility toward the community."],
  ["Integrity", "Institutions must be built on honesty, sincerity and accountability."],
  ["Dignity", "Support must respect the people and families it seeks to serve."],
  ["Continuity", "Long-term institutions create deeper impact than one-time interventions."],
  [
    "Stewardship",
    "Education, healthcare, heritage and the environment must be protected for future generations.",
  ],
  ["Community", "The Foundation's work must remain connected with local realities and relationships."],
];

const PILLAR_CARDS = [
  {
    title: "Education",
    desc: "Building opportunity through schools, higher education and student development.",
    href: "/education",
    asset: "foundation-work-education",
    accent: "var(--accent-education)",
  },
  {
    title: "Healthcare & Social Welfare",
    desc: "Supporting physical wellbeing, family dignity and practical community needs.",
    href: "/healthcare-social-welfare",
    asset: "foundation-work-healthcare",
    accent: "var(--accent-healthcare)",
  },
  {
    title: "Sita Samahit Sthal",
    desc: "Preserving a sacred centre of heritage, faith and belonging.",
    href: "/sita-samahit-sthal",
    asset: "foundation-work-sita-samahit-sthal",
    accent: "var(--accent-sita)",
  },
  {
    title: "Environment and Rural Regeneration",
    desc: "Supporting soil, water, agriculture and the long-term resilience of rural livelihoods.",
    href: "/environment-rural-regeneration",
    asset: "foundation-work-environment",
    accent: "var(--accent-environment)",
  },
];

const VALUES = [
  "Service",
  "Compassion",
  "Dignity",
  "Education",
  "Community",
  "Stewardship",
  "Integrity",
  "Continuity",
  "Accountability",
  "Inclusion",
];

function AboutFoundation() {
  return (
    <div
      className="min-h-dvh"
      style={{
        background:
          "linear-gradient(180deg, var(--ivory) 0%, oklch(0.975 0.012 220) 32%, oklch(0.975 0.014 150) 64%, var(--ivory) 100%)",
      }}
    >
      <Header />
      <main>
        {/* HERO */}
        <section className="mx-auto w-full max-w-[1360px] px-5 pb-16 pt-8 md:px-10 md:pb-24 md:pt-14">
          <div className="grid items-center gap-10 md:grid-cols-[0.92fr_1.08fr] md:gap-16">
            <div>
              <Eyebrow tone="var(--accent-sita)">About the Foundation</Eyebrow>
              <h1 className="mt-4 font-serif text-[38px] leading-[1.08] text-[color:var(--charcoal)] md:text-[58px]">
                A Legacy of Service, Built Across Generations
              </h1>
              <div className="mt-7 max-w-[60ch] rounded-lg border border-[color:var(--border)]/60 bg-[oklch(0.97_0.016_85_/_0.65)] p-6 backdrop-blur-[2px] md:p-7">
                <p className="font-sans text-[15.5px] leading-[1.8] text-[color:var(--charcoal)]/85">
                  The Pt. Kanahya Lal Dayawanti Punj Foundation was shaped by a belief that
                  meaningful service must be sustained through values, institutions and long-term
                  commitment to the community.
                </p>
                <p className="mt-4 font-sans text-[15.5px] leading-[1.8] text-[color:var(--charcoal)]/85">
                  Its journey began with a vision for education and public service and grew steadily
                  across healthcare, social welfare, cultural stewardship and, more recently,
                  environment and rural regeneration.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="#the-journey"
                  className="inline-flex min-h-11 items-center rounded-full bg-[color:var(--charcoal)] px-7 py-3 font-sans text-[13px] font-medium uppercase tracking-[0.2em] text-[color:var(--ivory)] transition-colors hover:bg-[color:var(--accent-sita)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Explore Our Journey
                </a>
                <a
                  href="/#pillars"
                  className="inline-flex min-h-11 items-center font-sans text-[13px] font-medium uppercase tracking-[0.2em] text-[color:var(--charcoal)] underline-offset-8 hover:underline"
                >
                  Discover Our Work
                </a>
              </div>
            </div>

            <figure>
              <div className="overflow-hidden rounded-xl shadow-[0_30px_70px_-40px_rgba(60,40,20,0.75)]">
                <div className="aspect-[16/10] overflow-hidden rounded-[6px]">
  <img
    src="https://dpms.in/wp-content/uploads/2025/08/school-building.jpg"
    alt="Institutional image of the Foundation"
    className="h-full w-full object-cover"
  />
</div>
              </div>
              <Caption>An institutional view of the Foundation's work in Sitamarhi.</Caption>
            </figure>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="border-y border-[color:var(--border)]/60 bg-[oklch(0.985_0.008_80_/_0.6)]">
          <div className="mx-auto grid w-full max-w-[1360px] gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:gap-20 md:px-10 md:py-28">
            <Reveal>
              <Eyebrow>Our Beginning</Eyebrow>
              <h2 className="mt-4 max-w-[18ch] font-serif text-[30px] leading-[1.12] text-[color:var(--charcoal)] md:text-[42px]">
                A Foundation Created to Serve Beyond a Single Generation
              </h2>
              <div className="mt-7 max-w-[64ch] space-y-4">
                {[
                  "The Pt. Kanahya Lal Dayawanti Punj Foundation emerged from a deeply held belief that progress in rural communities must be built patiently, institution by institution and generation by generation.",
                  "Its founding vision was not limited to charitable assistance. It was rooted in creating durable systems of education, care, dignity and community support.",
                  "From the beginning, the Foundation's work was shaped by values of honesty, sincerity, compassion, discipline and service.",
                  "Over time, these values took institutional form through schools, higher education, healthcare initiatives, social-welfare programmes, the stewardship of Sita Samahit Sthal and, more recently, programmes for soil, water and rural regeneration.",
                  "The Foundation's story is therefore not the story of one project. It is the story of an evolving commitment to the people and communities of Sitamarhi and the surrounding region.",
                ].map((p) => (
                  <p
                    key={p.slice(0, 20)}
                    className="font-sans text-[15.5px] leading-[1.8] text-[color:var(--charcoal)]/85"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="space-y-8">
              <figure>
                <div className="overflow-hidden rounded-lg shadow-[0_18px_50px_-32px_rgba(60,40,20,0.6)]">
                  <div className="aspect-[4/3] overflow-hidden rounded-[6px]">
  <img
    src="https://content3.jdmagicbox.com/comp/bhadohi/g9/9999p5414.5414.110223220140.w9g9/catalogue/dayawanti-punj-model-school-khamaria-srn-bhadohi-cbse-schools-ph7jus1k13.jpg"
    alt="Archival material from the Foundation's early years"
    className="h-full w-full object-cover"
  />
</div>
                </div>
                <Caption>An early chapter in the Foundation's institutional journey.</Caption>
              </figure>
              <figure>
                <div className="overflow-hidden rounded-lg">
                 <div className="aspect-[4/3] overflow-hidden rounded-[6px]">
  <img
    src="https://i.ytimg.com/vi/B_SA6LpddW8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDBuW7vKu0ceZi7j8E9MrIybZZc7A"
    alt="Historical Foundation document"
    className="h-full w-full object-cover"
  />
</div>
                </div>
                <Caption>Institutional material held by the Foundation.</Caption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="the-journey" className="scroll-mt-24">
          <div className="mx-auto w-full max-w-[1360px] px-5 py-20 md:px-10 md:py-28">
            <Reveal className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="var(--accent-sita)">The Foundation's Journey</Eyebrow>
              <h2 className="mt-4 font-serif text-[32px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
                From Founding Values to Enduring Institutions
              </h2>
              <p className="mx-auto mt-5 max-w-[62ch] font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
                The Foundation's journey has unfolded through a series of connected commitments—each
                responding to a real community need, and each extending the values established by
                its founders.
              </p>
            </Reveal>

            <div className="relative mt-16 md:mt-24">
              <span
                aria-hidden="true"
                className="absolute left-[10px] top-0 h-full w-px bg-gradient-to-b from-transparent via-[color:var(--border)] to-transparent md:left-1/2"
              />
              <div className="flex flex-col gap-24 md:gap-36">
                {CHAPTERS.map((c, i) => (
                  <ChapterBlock key={c.id} chapter={c} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="border-y border-[color:var(--border)]/60 bg-[oklch(0.965_0.014_80_/_0.75)]">
          <div className="mx-auto w-full max-w-[1360px] px-5 py-20 md:px-10 md:py-28">
            <Reveal className="max-w-3xl">
              <Eyebrow>What Has Remained Constant</Eyebrow>
              <h2 className="mt-4 font-serif text-[30px] leading-[1.12] text-[color:var(--charcoal)] md:text-[42px]">
                Values That Continue to Shape the Foundation
              </h2>
              <p className="mt-5 max-w-[62ch] font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
                The Foundation's activities have expanded over time, but the principles guiding its
                work have remained consistent.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-[color:var(--border)]/70 sm:grid-cols-2 lg:grid-cols-3">
              {PRINCIPLES.map(([title, desc]) => (
                <div
                  key={title}
                  className="group bg-[oklch(0.985_0.008_80_/_0.9)] p-8 transition-colors hover:bg-[oklch(0.97_0.02_85_/_0.95)] md:p-10"
                >
                  <h3 className="font-serif text-[24px] text-[color:var(--charcoal)]">{title}</h3>
                  <span
                    aria-hidden="true"
                    className="mt-3 block h-px w-8 bg-[color:var(--accent-sita)]/50 transition-all duration-500 group-hover:w-16"
                  />
                  <p className="mt-4 font-sans text-[14.5px] leading-[1.75] text-muted-foreground">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EVOLUTION */}
        <section className="mx-auto w-full max-w-[1360px] px-5 py-20 md:px-10 md:py-28">
          <Reveal className="max-w-3xl">
            <Eyebrow>How the Foundation's Work Has Evolved</Eyebrow>
            <p className="mt-4 max-w-[62ch] font-serif text-[24px] leading-[1.35] text-[color:var(--charcoal)] md:text-[30px]">
              The Foundation has grown by responding to different but connected dimensions of rural
              life.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PILLAR_CARDS.map((p) => (
              <Reveal key={p.title}>
                <a
                  href={p.href}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-[color:var(--border)]/70 bg-[oklch(0.985_0.008_80_/_0.8)] transition-shadow hover:shadow-[0_20px_50px_-35px_rgba(60,40,20,0.8)] focus-visible:outline focus-visible:outline-2"
                >
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none">
                      <AssetPlaceholder name={p.asset} aspect="4/3" label={p.title} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-[21px] leading-tight text-[color:var(--charcoal)]">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex-1 font-sans text-[14px] leading-[1.7] text-muted-foreground">
                      {p.desc}
                    </p>
                    <span
                      className="mt-5 font-sans text-[11.5px] font-medium uppercase tracking-[0.2em]"
                      style={{ color: p.accent }}
                    >
                      Explore →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SITAMARHI */}
       <section className="relative">
  <div className="mx-auto w-full max-w-[1360px] px-5 md:px-10">
    <Reveal>
      <div className="relative overflow-hidden rounded-xl">
        <div className="aspect-[16/9] overflow-hidden rounded-[6px]">
          <img
            src="https://d3fphkxyf5o5bm.cloudfront.net/image-resize/format=webp,w=960/QwRY54Li1HMwD7oNfppnX6fmVwarHfwu0r8chvFiKA"
            alt="Sita Samahit Sthal in Sitamarhi, Bhadohi, Uttar Pradesh"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 -mt-10 w-full rounded-lg border border-[color:var(--border)]/60 bg-[oklch(0.98_0.012_85_/_0.92)] p-7 backdrop-blur-md md:-mt-24 md:ml-10 md:max-w-[640px] md:p-10">
        <Eyebrow tone="var(--accent-environment)">
          Rooted in Sitamarhi
        </Eyebrow>

        <h2 className="mt-3 font-serif text-[28px] leading-[1.15] text-[color:var(--charcoal)] md:text-[38px]">
          A Long-Term Relationship With Place and Community
        </h2>

        <div className="mt-5 space-y-4">
          {[
            "The Foundation's identity is closely connected with Sitamarhi and the communities around it.",
            "Its institutions, programmes and relationships have developed through sustained presence rather than distant intervention.",
            "The school, college, healthcare work, social-welfare initiatives, Sita Samahit Sthal and newer rural-regeneration programmes all form part of this long-term regional commitment.",
            "The Foundation's work is shaped by an understanding that lasting development must remain connected with the realities, aspirations and cultural life of the people it serves.",
          ].map((p) => (
            <p
              key={p.slice(0, 20)}
              className="font-sans text-[15px] leading-[1.8] text-[color:var(--charcoal)]/85"
            >
              {p}
            </p>
          ))}
        </div>

        <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          Sitamarhi, Bhadohi, Uttar Pradesh
        </p>
      </div>
    </Reveal>
  </div>
</section>

        {/* VISION MISSION VALUES */}
        <section className="mt-20 border-y border-[color:var(--border)]/60 bg-[oklch(0.96_0.016_220_/_0.5)] md:mt-28">
          <div className="mx-auto w-full max-w-[1360px] px-5 py-20 md:px-10 md:py-28">
            <Reveal>
              <Eyebrow>Our Direction</Eyebrow>
              <h2 className="mt-4 font-serif text-[30px] text-[color:var(--charcoal)] md:text-[40px]">
                Vision, Mission and Values
              </h2>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="sr-only">Vision</h3>
              <p className="max-w-[24ch] font-sans text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                Vision
              </p>
              <p className="mt-4 max-w-[22ch] font-serif text-[34px] leading-[1.15] text-[color:var(--charcoal)] md:max-w-[26ch] md:text-[54px]">
                To help build strong, educated, healthy, dignified and environmentally resilient
                rural communities.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
              <Reveal>
                <div className="rounded-lg border border-[color:var(--border)]/70 bg-[oklch(0.985_0.008_80_/_0.85)] p-7 md:p-9">
                  <h3 className="font-sans text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                    Mission
                  </h3>
                  <p className="mt-4 font-sans text-[16px] leading-[1.8] text-[color:var(--charcoal)]/85">
                    To create and support institutions and programmes that expand opportunity,
                    improve wellbeing, preserve cultural heritage and protect the natural
                    foundations of rural life.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <h3 className="font-sans text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  Core Values
                </h3>
                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-3">
                  {VALUES.map((v) => (
                    <li
                      key={v}
                      className="rounded-full border border-[color:var(--border)] px-5 py-2 font-serif text-[18px] text-[color:var(--charcoal)]"
                    >
                      {v}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="mx-auto w-full max-w-[1360px] px-5 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <Eyebrow>Leadership and Continuity</Eyebrow>
              <h2 className="mt-4 font-serif text-[28px] leading-[1.15] text-[color:var(--charcoal)] md:text-[40px]">
                Carrying the Foundation's Values Forward
              </h2>
              <div className="mt-6 max-w-[62ch] space-y-4">
                <p className="font-sans text-[15.5px] leading-[1.8] text-[color:var(--charcoal)]/85">
                  The Foundation's work continues through trustees, institutional leaders, programme
                  teams and partners who are responsible for sustaining its institutions and
                  responding to new community needs.
                </p>
                <p className="font-sans text-[15.5px] leading-[1.8] text-[color:var(--charcoal)]/85">
                  Its leadership carries forward the founding values while guiding the Foundation
                  through its present areas of work and future responsibilities.
                </p>
              </div>
              <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Leadership details to be added — add current trustee details
              </p>
              <a
                href="/about-foundation/leadership"
                className="mt-7 inline-flex min-h-11 items-center rounded-full border border-[color:var(--charcoal)]/30 px-7 py-3 font-sans text-[12.5px] font-medium uppercase tracking-[0.2em] text-[color:var(--charcoal)] transition-colors hover:border-[color:var(--accent-sita)] hover:text-[color:var(--accent-sita)]"
              >
                Meet the Leadership
              </a>
            </Reveal>
            <Reveal>
              <figure>
                <div className="overflow-hidden rounded-lg shadow-[0_20px_55px_-38px_rgba(60,40,20,0.7)]">
                 <div className="aspect-[4/3] overflow-hidden rounded-[6px]">
  <img
    src="https://dpms.in/wp-content/uploads/2025/08/IMG_0822.jpg"
    alt="Current Foundation leadership"
    className="h-full w-full object-cover"
  />
</div>
                </div>
                <Caption>Foundation leadership photograph to be added.</Caption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* CLOSING */}
        <section className="border-t border-[color:var(--border)]/60 bg-[oklch(0.965_0.016_150_/_0.45)]">
          <div className="mx-auto w-full max-w-[1360px] px-5 py-20 md:px-10 md:py-28">
            <Reveal className="max-w-3xl">
              <Eyebrow tone="var(--accent-sita)">Continuing the Journey</Eyebrow>
              <h2 className="mt-4 font-serif text-[30px] leading-[1.12] text-[color:var(--charcoal)] md:text-[42px]">
                Explore the Foundation's Work
              </h2>
              <p className="mt-5 max-w-[64ch] font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
                The Foundation's story continues through the institutions, programmes and
                partnerships that serve the community today. Explore how its founding values are
                being carried forward across education, healthcare and social welfare, cultural
                stewardship and environment and rural regeneration.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {PILLAR_CARDS.map((p) => (
                <Reveal key={`close-${p.title}`}>
                  <a
                    href={p.href}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border border-[color:var(--border)]/70 bg-[oklch(0.99_0.006_80_/_0.9)] transition-shadow hover:shadow-[0_20px_50px_-35px_rgba(60,40,20,0.8)]"
                  >
                    <AssetPlaceholder name={p.asset} aspect="3/2" label={p.title} />
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-[20px] leading-tight text-[color:var(--charcoal)]">
                        {p.title}
                      </h3>
                      <p className="mt-3 flex-1 font-sans text-[13.5px] leading-[1.7] text-muted-foreground">
                        {p.desc}
                      </p>
                      <span
                        className="mt-5 font-sans text-[11.5px] font-medium uppercase tracking-[0.2em]"
                        style={{ color: p.accent }}
                      >
                        Explore →
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
