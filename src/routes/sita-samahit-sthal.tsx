import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
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

export const Route = createFileRoute("/sita-samahit-sthal")({
  head: () => ({
    meta: [
      { title: "Sita Samahit Sthal | Sacred Heritage & Foundation Stewardship" },
      {
        name: "description",
        content:
          "Sita Samahit Sthal is a sacred place of faith, heritage and community life. Explore its significance, architecture, festivals, visitor information and the Punj Foundation's long-term stewardship.",
      },
      { property: "og:title", content: "A Sacred Place of Faith, Heritage and Belonging" },
      {
        property: "og:description",
        content:
          "How the Pt. Kanahya Lal Dayawanti Punj Foundation preserves Sita Samahit Sthal — its sacred spaces, living traditions, community connection and visitor experience.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sita-samahit-sthal" }],
  }),
  component: SitaPage,
});

const SITA = "var(--accent-sita)";

/* ---------------- local helpers ---------------- */

function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="mt-5 font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]"
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

function InfoRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-[color:var(--border)] py-3">
      <dt className="min-w-[150px] font-sans text-[11.5px] font-medium uppercase tracking-[0.18em] text-[color:var(--charcoal)]/60">
        {label}
      </dt>
      <dd className="font-sans text-[14px] text-muted-foreground">
        {value ? value : <Pending>{`Add verified ${label.toLowerCase()}`}</Pending>}
      </dd>
    </div>
  );
}

function FilterBar({
  options,
  value,
  onChange,
  label,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  label: string;
}) {
  return (
    <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label={label}>
      {options.map((o) => {
        const on = o === value;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            aria-pressed={on}
            className={`min-h-11 rounded-full border px-5 py-2 font-sans text-[12px] uppercase tracking-[0.16em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-sita)] ${
              on
                ? "border-transparent bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
                : "border-[color:var(--charcoal)]/20 text-[color:var(--charcoal)]/80 hover:border-[color:var(--accent-sita)] hover:text-[color:var(--accent-sita)]"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

/* ---------------- page ---------------- */

function SitaPage() {
  return (
    <div className="min-h-dvh bg-[color:var(--ivory)]" style={{ ["--page-accent" as string]: SITA }}>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Significance />
        <FoundationRole />
        <VisualJourney />
        <Architecture />
        <RamayanaTradition />
        <LivingTraditions />
        <Festivals />
        <VisitorExperience />
        <CommunityConnection />
        <Preservation />
        <VisitWithRespect />
        <SiteExploration />
        <VisitorInformation />
        <EventsCalendar />
        {/* <Numbers /> */}
        <Documentation />
        <DedicatedWebsite />
        <Closing />
      </main>
      <SiteFooter />
    </div>
  );
}

/* 2. Hero */
function Hero() {
  return (
    <section
      className="px-5 pb-14 pt-8 md:px-10 md:pb-20 md:pt-12"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.965 0.022 60) 0%, oklch(0.978 0.014 78) 55%, var(--ivory) 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1360px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[8px] ring-1 ring-[color:var(--border)]">
  <img
    src="https://d3fphkxyf5o5bm.cloudfront.net/image-resize/format=webp,w=1200/QwRY54Li1HMwD7oNfppnX6fmVwarHfwu0r8chvFiKA"
    alt="Wide architectural view of Sita Samahit Sthal"
    className="w-full h-auto object-cover"
  />
</div>
        </Reveal>

        <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          <Reveal>
            <Eyebrow tone={SITA}>Sita Samahit Sthal</Eyebrow>
            <h1 className="mt-5 font-serif text-[40px] leading-[1.06] text-[color:var(--charcoal)] md:text-[60px]">
              A Sacred Place of Faith, Heritage and Belonging
            </h1>
            <p className="mt-7 max-w-2xl font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
              Sita Samahit Sthal stands as a place of deep spiritual meaning, cultural memory and
              community connection.
            </p>
            <p className="mt-4 max-w-2xl font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
              Through its long-term stewardship, the Pt. Kanahya Lal Dayawanti Punj Foundation works
              to preserve the site, support visitors and pilgrims, sustain its living traditions and
              protect its significance for future generations.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <PrimaryBtn href="#explore">Explore the Sthal</PrimaryBtn>
              <GhostBtn href="#plan-your-visit">Plan Your Visit</GhostBtn>
            </div>
            <a
              href="#significance"
              className="mt-6 inline-block font-serif text-[16px] italic text-[color:var(--charcoal)]/70 underline-offset-4 hover:text-[color:var(--accent-sita)] hover:underline"
            >
              Discover Its Significance →
            </a>
          </Reveal>

          <Reveal>
           <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1">
  <img
    src="https://images.bhaskarassets.com/web2images/521/2026/02/16/aab13e49-21d4-4892-8705-2e8f9b60a3f3_1771218456037.jpg"
    alt="Visitors entering Sita Samahit Sthal"
    className="w-full aspect-[16/10] object-cover rounded-[8px]"
  />

  <img
    src="https://www.omastrology.com/indian-temples/images/sita-samahit-sthal-uttar-pradesh.jpg"
    alt="Architectural detail at Sita Samahit Sthal"
    className="w-full aspect-[16/10] object-cover rounded-[8px]"
  />
</div>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-3 border-t border-[color:var(--border)] pt-6 sm:grid-cols-3">
          {["Sacred Heritage", "Living Tradition", "Foundation Stewardship"].map((m) => (
            <li
              key={m}
              className="font-sans text-[11.5px] uppercase tracking-[0.24em] text-[color:var(--charcoal)]/60"
            >
              {m}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 3. Introduction */
function Introduction() {
  return (
    <Section id="introduction">
      <div className="grid gap-12 md:grid-cols-[1.02fr_0.98fr] md:gap-16">
        <Reveal>
          <Eyebrow tone={SITA}>The Sthal</Eyebrow>
          <H2>A Place Where Faith, Memory and Community Meet</H2>
          <Body className="mt-7 max-w-xl">
            <p>
              Sita Samahit Sthal holds a distinct place in the spiritual and cultural landscape of
              the region.
            </p>
            <p>
              For devotees and visitors, it is a place of reverence, reflection and connection with
              the enduring story of Mata Sita.
            </p>
            <p>
              For the surrounding community, it is also a living institution — a place where faith,
              festivals, family visits, local memory and collective participation come together.
            </p>
            <p>
              The Foundation’s relationship with the Sthal is rooted in stewardship: caring for its
              physical spaces, supporting those who visit, sustaining community traditions and
              preserving its significance across generations.
            </p>
          </Body>
          <a
            href="#foundation-stewardship"
            className="mt-7 inline-block font-serif text-[16px] italic text-[color:var(--charcoal)]/70 underline-offset-4 hover:text-[color:var(--accent-sita)] hover:underline"
          >
            Read about the Foundation’s stewardship →
          </a>
        </Reveal>

        <Reveal>
          <div
            className="rounded-[6px] p-6 md:p-8"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.965 0.024 62 / 0.7), oklch(0.978 0.012 88 / 0.55))",
            }}
          >
           <div className="relative overflow-hidden rounded-[8px]">
  <img
    src="https://static2.tripoto.com/media/filter/tst/img/2173352/SpotDocument/1632644945_1632645139486.jpg.webp"
    alt="Wide establishing view of Sita Samahit Sthal and its setting"
    className="w-full aspect-[5/4] object-cover"
  />
  <p className="mt-2 text-sm text-muted-foreground">
    Sita Samahit Sthal and its wider cultural setting.
  </p>
</div>
           <p className="mt-6 font-sans text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
  <a
    href="https://en.wikipedia.org/wiki/Sita_Samahit_Sthal"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Site history
  </a>
</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 4. Significance */
const DIMENSIONS = [
  {
    title: "Sacred Significance",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5LXGlQ3gu1EADPl3ai3I54EKcSkIL6HDV8GuDNzazk-G_eMBiINP0XA86&s=10",
    alt: "Sacred area within Sita Samahit Sthal",
    text: "A place of devotion, prayer and spiritual connection associated with the enduring cultural memory of Mata Sita.",
  },
  {
    title: "Cultural Heritage",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCGIuDg1DwmPrBPn3tTefgQoYvX3-m-3mogrOrqlRbdjjrCfgmSURwiY&s=10",
    alt: "Architectural view of Sita Samahit Sthal",
    text: "A site through which stories, rituals, architecture, festivals and regional traditions are carried across generations.",
  },
  {
    title: "Community Belonging",
    image: "https://images.bhaskarassets.com/web2images/521/2022/07/08/b997bb58-be81-442b-94c3-bed698d0429c_1657265624351.jpg",
    alt: "Community gathering at Sita Samahit Sthal",
    text: "A living gathering place connected with local families, pilgrims, visitors and the cultural life of the region.",
  },
];

function Significance() {
  return (
    <Section id="significance" tint="oklch(0.972 0.016 70 / 0.5)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SITA}>The Significance of the Sthal</Eyebrow>
        <H2>More Than a Sacred Destination</H2>

        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          Three dimensions hold equal weight at the Sthal, and each one depends on the others.
        </p>
      </Reveal>

      <div className="relative mt-12">
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-[10px] hidden h-px lg:block"
          style={{
            background:
              "color-mix(in oklab, var(--accent-sita) 30%, transparent)",
          }}
        />

        <ul className="grid gap-8 lg:grid-cols-3">
          {DIMENSIONS.map((d) => (
            <li key={d.title}>
              <Reveal>
                <article className="flex h-full flex-col overflow-hidden rounded-[8px] bg-[color:var(--card)]/65 ring-1 ring-[color:var(--border)] backdrop-blur-sm">
                  
                  <span
                    aria-hidden="true"
                    className="block h-[3px] w-full"
                    style={{
                      background:
                        "color-mix(in oklab, var(--accent-sita) 45%, transparent)",
                    }}
                  />

                  <img
                    src={d.image}
                    alt={d.alt}
                    className="w-full aspect-[4/3] object-cover"
                  />

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-serif text-[26px] leading-tight text-[color:var(--charcoal)]">
                      {d.title}
                    </h3>

                    <p className="mt-4 font-sans text-[15px] leading-[1.75] text-muted-foreground">
                      {d.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
/* 5. Foundation stewardship */

const RESPONSIBILITIES_MAJOR = [
  {
    title: "Preservation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSBlFlbdrTFn4HE_nvZeOXJ8ehLvf6x_bUAMKOwv7qKlelKIhRbFuWYVg&s=10",
    alt: "Preservation work under way at Sita Samahit Sthal",
    text: "Protecting the architectural, cultural and sacred character of the site.",
  },
  {
    title: "Maintenance",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9Ia1rLKKROUEuxbZz7QIHxDwOIQpU_JROJKnvhVqahriGwnJRjik-LAZ&s=10",
    alt: "Foundation team supporting site maintenance at Sita Samahit Sthal",
    text: "Supporting the upkeep, cleanliness and functioning of the Sthal and its facilities.",
  },
  {
    title: "Visitor and Pilgrim Support",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-Azgp0QkwJyaC1QFyr9to2aU3S2JBqESRY1wl18KpPidE16iT8__f2s&s=10",
    alt: "Visitor assistance being provided at Sita Samahit Sthal",
    text: "Helping visitors experience the site with dignity, clarity and comfort.",
  },
];

const RESPONSIBILITIES_MINOR = [
  {
    title: "Festival Coordination",
    image: "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL2I3ODliMDBkNzY2MzRkZTlhZTdhODJlYmFkMmJjZjU0IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImhlaWdodCI6NjQwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJ0b0Zvcm1hdCI6ICJ3ZWJwIn19",
    alt: "Volunteers supporting a gathering at Sita Samahit Sthal",
    text: "Supporting the organisation and responsible management of major gatherings.",
  },
  {
    title: "Community Connection",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70OPSF5A4EfIGyOAp7RLKySk_qgFY2JRnAko_RjfBWNoBxwRD7vISmQY&s=10",
    alt: "Community members gathered at Sita Samahit Sthal",
    text: "Maintaining the Sthal’s relationship with the surrounding region and its people.",
  },
  {
    title: "Documentation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGL4uT-9if5Q1i2jHYKfe19qSM1suyeLR7EnFxR5oMT8U-LTippssR8VY&s=10",
    alt: "Archival photograph of Sita Samahit Sthal",
    text: "Preserving photographs, records, stories and institutional memory for future generations.",
  },
];
function FoundationRole() {
  return (
    <Section id="foundation-stewardship">
      <div className="grid gap-12 md:grid-cols-[1fr_0.9fr] md:gap-16">
        <Reveal>
          <Eyebrow tone={SITA}>Foundation Stewardship</Eyebrow>
          <H2>Caring for a Sacred Institution Across Generations</H2>
          <Body className="mt-7 max-w-xl">
            <p>The Foundation’s role at Sita Samahit Sthal extends beyond periodic support.</p>
            <p>
              It involves the continuing responsibility of preserving the site, maintaining its
              spaces, assisting visitors, supporting major gatherings and strengthening the
              relationship between the Sthal and the surrounding community.
            </p>
            <p>
              This work brings together spiritual stewardship, heritage preservation, site
              management and public service.
            </p>
          </Body>
        </Reveal>
        <Reveal>
          <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSOzwN1ZG3Ktnky1cFWm_Br9_1kJwvcd7w5KM0LcvhaU2Ro7HQXjiOny6&s=10"
  alt="Foundation and site-management team at Sita Samahit Sthal"
  className="w-full aspect-[4/3] object-cover rounded-[8px]"
/>
        </Reveal>
      </div>

     <div className="mt-14 grid gap-7 lg:grid-cols-3">
  {RESPONSIBILITIES_MAJOR.map((r) => (
    <Reveal key={r.title}>
      <article className="flex h-full flex-col overflow-hidden rounded-[8px] ring-1 ring-[color:var(--border)] bg-[color:var(--offwhite)]/70">
        <img
          src={r.image}
          alt={r.alt}
          className="w-full aspect-[16/10] object-cover"
        />

        <div className="flex flex-1 flex-col p-7">
          <h3 className="font-serif text-[24px] leading-tight text-[color:var(--charcoal)]">
            {r.title}
          </h3>

          <p className="mt-3 font-sans text-[14.5px] leading-[1.75] text-muted-foreground">
            {r.text}
          </p>
        </div>
      </article>
    </Reveal>
  ))}
</div>

<div className="mt-7 grid gap-7 lg:grid-cols-3">
  {RESPONSIBILITIES_MINOR.map((r) => (
    <Reveal key={r.title}>
      <article className="flex h-full gap-5 rounded-[8px] p-5 ring-1 ring-[color:var(--border)]">
        <div className="w-[104px] shrink-0 overflow-hidden rounded-[4px]">
          <img
            src={r.image}
            alt={r.alt}
            className="w-full aspect-square object-cover"
          />
        </div>

        <div>
          <h3 className="font-serif text-[21px] leading-tight text-[color:var(--charcoal)]">
            {r.title}
          </h3>

          <p className="mt-2 font-sans text-[14px] leading-[1.7] text-muted-foreground">
            {r.text}
          </p>
        </div>
      </article>
    </Reveal>
  ))}
</div>
    </Section>
  );
}

/* 6. Visual journey — sticky image with chapter text */
const JOURNEY = [
  {
    title: "The Approach",
    images: ["https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL2I3ODliMDBkNzY2MzRkZTlhZTdhODJlYmFkMmJjZjU0IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImhlaWdodCI6NjQwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJ0b0Zvcm1hdCI6ICJ3ZWJwIn19"],
    text: "The first experience of entering the Sthal and moving from the surrounding landscape toward its sacred centre.",
    alt: "Entrance and approach to Sita Samahit Sthal",
  },
  {
    title: "The Main Architectural View",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmYhFMXo6dWjiWhQIj4MW01nyqro3YCBKTMcJmeeO6hwydnOKW28skTPB&s=10"],
    text: "The principal structure and its visual relationship with the wider site.",
    alt: "Wide architectural view of Sita Samahit Sthal",
  },
  {
    title: "Sacred Spaces",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyAnoNDNHjN2XWzeZSq5-5SpTSOeNts9J7KNNyo4VrNEHLsUBz_1aEcFBh&s=10"],
    text: "Areas of prayer, reflection and devotional significance, shown only where photography is permitted.",
    alt: "Sacred area within Sita Samahit Sthal",
  },
  {
    title: "Architectural Details",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytvuaupkATz6NUzzkfVO5pW_CR3nLCH16j70sGx-Lkw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAH32GBlUb-K5Y3mD2DWnXNC3KIYL9UD06eEXm1MbSvIPYMgPTPE3Cemo&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8ctHKch5dX6cQZhXdcPjo-BxTKGIIie_tQQbQkuCJHp5qNdWU_hvSxHs&s=10",
    ],
    text: "Details that reveal the craftsmanship, visual language and cultural character of the site.",
    alt: "Architectural detail at Sita Samahit Sthal",
  },
  {
    title: "Pathways and Landscape",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8ctHKch5dX6cQZhXdcPjo-BxTKGIIie_tQQbQkuCJHp5qNdWU_hvSxHs&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeG6GlHniCV3Kcf-_YGv7EI_rGHPBlzp8VNVMjiXEGTy0Slai3sz4M8Tv&s=10",
    ],
    text: "The natural and built spaces through which visitors move, pause and gather.",
    alt: "Pathway and landscape at Sita Samahit Sthal",
  },
  {
    title: "The Sthal in Community Life",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeG6GlHniCV3Kcf-_YGv7EI_rGHPBlzp8VNVMjiXEGTy0Slai3sz4M8Tv&s=10"],
    text: "The site as a living place of participation, family connection and collective memory.",
    alt: "Community gathering at Sita Samahit Sthal",
  },
];

function VisualJourney() {
  const [active, setActive] = useState(0);

  const refs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number(
              (e.target as HTMLElement).dataset["index"]
            );

            if (!Number.isNaN(i)) {
              setActive(i);
            }
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
      },
    );

    refs.current.forEach((el) => {
      if (el) {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, []);

  const chapter = JOURNEY[active] ?? JOURNEY[0]!;

  return (
    <Section
      id="explore"
      tint="oklch(0.968 0.02 64 / 0.5)"
    >
      {/* Section Header */}
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SITA}>Explore the Sthal</Eyebrow>

        <H2>A Visual Journey Through Sacred Spaces</H2>

        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          Move through the principal spaces, architecture and landscapes
          that shape the visitor experience of Sita Samahit Sthal.
        </p>
      </Reveal>

      {/* Journey Content */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">

        {/* Desktop Sticky Images */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <div className="grid gap-4">
              {chapter.images.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={chapter.alt}
                  className="w-full aspect-[4/3] object-cover rounded-[8px]"
                />
              ))}
            </div>

            <Caption>{chapter.title}</Caption>
          </div>
        </div>

        {/* Chapter Text */}
        <ol className="grid gap-14">
          {JOURNEY.map((c, i) => (
            <li
              key={c.title}
              data-index={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="scroll-mt-28"
            >
              {/* Mobile Images */}
              <div className="grid gap-4 lg:hidden">
                {c.images.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={c.alt}
                    className="w-full aspect-[4/3] object-cover rounded-[8px]"
                  />
                ))}
              </div>

              {/* Chapter Number */}
              <span
                className="mt-6 block font-sans text-[11px] font-medium uppercase tracking-[0.24em] lg:mt-0"
                style={{ color: SITA }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Chapter Title */}
              <h3 className="mt-3 font-serif text-[30px] leading-tight text-[color:var(--charcoal)]">
                {c.title}
              </h3>

              {/* Chapter Description */}
              <p className="mt-4 max-w-lg font-sans text-[15px] leading-[1.8] text-muted-foreground">
                {c.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* 7. Architecture and sacred spaces */
const SPACES = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZFIrUPocKolSVjPKdMaSjqWbieZAMLao4H0nV_6yyFD4p_o_EWyDuun7&s=10",
    alt: "Principal architecture at Sita Samahit Sthal",
    label: "Principal architecture",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "4 / 3",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcW28lwCxdZur9fAhs7_sOxUxS-lVKY3piG82ghs6J1uUPZWoI2-XeCpx&s=10",
    alt: "Sacred area within Sita Samahit Sthal",
    label: "Sacred space",
    span: "",
    aspect: "4 / 3",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldLuPROqG2u9IteeKJ7BxbUG9zrKXunZRISDVXTEm1ChDF9M-LrI_ne8&s=10",
    alt: "Pathway at Sita Samahit Sthal",
    label: "Pathways",
    span: "",
    aspect: "4 / 3",
  },
  {
    image: "https://avathioutdoors.gumlet.io/travelGuide/dev/varanasi_P3866.jpg?w=600&h=400&format=webp&q=80&compress=true",
    alt: "Sita Samahit Sthal within its wider landscape",
    label: "Landscape",
    span: "",
    aspect: "4 / 3",
  },
  {
    image: "https://images.bhaskarassets.com/thumb/360x0/web2images/521/2023/08/04/3f25a99e-9726-45d2-ab9c-36021092c791_1691141221556.jpg",
    alt: "Architectural detail at Sita Samahit Sthal",
    label: "Architectural detail",
    span: "",
    aspect: "1 / 1",
  },
  {
    image: "https://thetimelock.in/wp-content/uploads/IMG_20230430_173817-Small.jpg",
    alt: "Architectural detail at Sita Samahit Sthal",
    label: "Architectural detail",
    span: "",
    aspect: "1 / 1",
  },
  {
    image: "https://images.bhaskarassets.com/web2images/521/2025/09/29/2c1c99f7-9c84-478f-9263-1c6812fa4f92_1759140300613.jpg",
    alt: "Evening view of Sita Samahit Sthal",
    label: "Evening view",
    span: "lg:col-span-2",
    aspect: "16 / 9",
  },
];

function Architecture() {
  return (
    <Section id="architecture">
      <div className="grid gap-10 md:grid-cols-[1fr_0.85fr] md:gap-16">
        <Reveal>
          <Eyebrow tone={SITA}>Architecture and Place</Eyebrow>
          <H2>The Spaces That Shape the Experience</H2>
        </Reveal>

        <Reveal>
          <Body className="md:pt-14">
            <p>
              The physical environment of Sita Samahit Sthal plays an important role in how visitors
              encounter the site.
            </p>

            <p>
              Architecture, pathways, sacred spaces, landscape and gathering areas together create a
              setting for prayer, reflection, movement and community participation.
            </p>
          </Body>
        </Reveal>
      </div>

      <ul className="mt-12 grid auto-rows-auto gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SPACES.map((s) => (
          <li key={`${s.image}-${s.label}`} className={s.span}>
            <div className="overflow-hidden rounded-[6px] ring-1 ring-[color:var(--border)]">
              <img
                src={s.image}
                alt={s.alt}
                className="w-full h-full object-cover"
                style={{
                  aspectRatio: s.aspect.replace(" / ", " / "),
                }}
              />
            </div>

            <p className="mt-3 font-sans text-[13px] text-[color:var(--charcoal)]">
              {s.label}
            </p>

            {/* <p className="mt-1 font-sans text-[12px] text-muted-foreground">
              <Pending>Add verified name of this space</Pending>
            </p> */}
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* 8. Ramayana tradition */
function RamayanaTradition() {
  return (
    <Section id="living-story" tint="oklch(0.965 0.024 58 / 0.5)">
      <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <Reveal>
          <Eyebrow tone={SITA}>The Living Story</Eyebrow>
          <H2>Connected With the Enduring Memory of Mata Sita</H2>
          <Body className="mt-7 max-w-xl">
            <p>
              Sita Samahit Sthal is associated in faith and regional tradition with the story of
              Mata Sita.
            </p>
            <p>
              For devotees, the site carries profound emotional and spiritual meaning connected with
              her life, strength, sacrifice, dignity and relationship with the earth.
            </p>
            <p>
              The Sthal forms part of a living cultural tradition in which sacred narrative, local
              memory and devotional practice continue to shape how the place is understood and
              experienced.
            </p>
          </Body>
          <p className="mt-8 max-w-xl border-l-2 pl-5 font-sans text-[13.5px] leading-[1.8] text-muted-foreground" style={{ borderColor: SITA }}>
            The Foundation presents these associations as they are held in faith and regional
            tradition. Historical and archaeological statements are published only where
            authoritative sources have been verified.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOZfDfMVPH4lZ9diZ2zR7nN7dir0f975NE0JqxFU9uj0OrV8Acdj8GwE&s=10"
    alt="Sacred detail at Sita Samahit Sthal"
    className="w-full aspect-[3/4] object-cover rounded-[8px] sm:mt-10"
  />

  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjHhHbjhzuvkZsgYPRCDmJA3DtCw0fsbWpKsVYsjvJr9xeL461xOTjhgU&s=10"
    alt="Offerings placed at Sita Samahit Sthal"
    className="w-full aspect-[3/4] object-cover rounded-[8px]"
  />

  <figure className="sm:col-span-2">
    <img
      src="https://photos.wikimapia.org/p/00/03/95/58/30_big.jpg"
      alt="Prayer taking place at Sita Samahit Sthal"
      className="w-full aspect-[16/10] object-cover rounded-[8px]"
    />
    
  </figure>
</div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 9. Faith and living traditions */
const PRACTICES = [
  { title: "Daily Worship", note: "Add verified daily worship information" },
  { title: "Prayer and Reflection", note: "Add verified programme details" },
  { title: "Offerings", note: "Add verified offering guidance" },
  { title: "Family Visits", note: "Add verified visitor guidance" },
  { title: "Community Ceremonies", note: "Add verified ceremony details" },
  { title: "Religious Discourses", note: "Add verified religious programme" },
  { title: "Cultural Programmes", note: "Add verified programme details" },
  { title: "Special Observances", note: "Add verified observance details" },
];

function LivingTraditions() {
  return (
    <Section id="living-traditions">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <Eyebrow tone={SITA}>A Living Place of Devotion</Eyebrow>
          <H2>Faith Expressed Through Everyday Practice</H2>
          <Body className="mt-7 max-w-xl">
            <p>
              The spiritual life of the Sthal is experienced not only during major festivals, but
              also through everyday prayer, family visits, offerings, reflection and community
              participation.
            </p>
          </Body>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <img
  src="https://static2.tripoto.com/media/filter/tst/img/2173352/SpotDocument/1632650184_1632650378049.jpg.webp"
  alt="Prayer at Sita Samahit Sthal"
  className="w-full aspect-[4/3] object-cover rounded-[8px]"
/>

<img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-Azgp0QkwJyaC1QFyr9to2aU3S2JBqESRY1wl18KpPidE16iT8__f2s&s=10"
  alt="Families visiting Sita Samahit Sthal"
  className="w-full aspect-[4/3] object-cover rounded-[8px]"
/>
          </div>
        </Reveal>

        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {PRACTICES.map((p) => (
              <li
                key={p.title}
                className="rounded-[6px] bg-[color:var(--card)]/65 p-6 ring-1 ring-[color:var(--border)] backdrop-blur-sm"
              >
                <h3 className="font-serif text-[21px] leading-tight text-[color:var(--charcoal)]">
                  {p.title}
                </h3>
                <p className="mt-3">
                  <Pending>{p.note}</Pending>
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
           <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzCAWaAlx9f74rAipAJv-I9iPvviccZZds1xW9dsPiaSxx1qpi3X9mgOK&s=10"
  alt="Offerings at Sita Samahit Sthal"
  className="w-full aspect-[16/10] object-cover rounded-[8px]"
/>

<img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYNYXu9-2ce_vSQY1rgVK7w1OkjLLXcDT3jsQSqOOaz-Cjf1wZNo1TbI&s=10"
  alt="Pilgrims at Sita Samahit Sthal"
  className="w-full aspect-[16/10] object-cover rounded-[8px]"
/>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 10. Festivals */
const FESTIVAL_FIELDS = [
  "Significance",
  "Date",
  "Time",
  "Expected attendance",
  "Visitor guidance",
  "Programme schedule",
  "Facilities",
  "Traffic and access",
  "Contact",
];

const FESTIVAL_CARDS = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzy12ETxR68DojdeR6GFxhuoqYd9B_D_b1ElQYKkqKv2FHKHj8IRSxck&s=10",
    alt: "Procession during a gathering at Sita Samahit Sthal",
    label: "Procession",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gpfLZNhHVmPRNwzAWn1CXyTNa34ZU9YQWZXRGOrAcd1_JMXrGK2x_h78&s=10",
    alt: "Festival worship at Sita Samahit Sthal",
    label: "Festival worship",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZeZD7D3hXwu88AeyBtuDgMXySe2eU-rLeR6YzXgUcyneLp9VNe--zlJTF&s=10",
    alt: "Cultural programme at Sita Samahit Sthal",
    label: "Cultural programme",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8ctHKch5dX6cQZhXdcPjo-BxTKGIIie_tQQbQkuCJHp5qNdWU_hvSxHs&s=10",
    alt: "Evening festival illumination at Sita Samahit Sthal",
    label: "Evening gathering",
  },
];

function Festivals() {
  return (
    <Section id="festivals" tint="oklch(0.97 0.018 66 / 0.5)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SITA}>Festivals and Gatherings</Eyebrow>

        <H2>When the Sthal Becomes a Shared Celebration</H2>

        <Body className="mt-6">
          <p>
            Festivals and major gatherings bring together devotion, culture,
            family participation and community service.
          </p>

          <p>
            Each occasion is documented with clarity and dignity, helping
            visitors understand its meaning as well as the practical
            arrangements associated with it.
          </p>
        </Body>
      </Reveal>

      {/* Featured Gathering */}
      <Reveal>
        <article className="mt-12 grid overflow-hidden rounded-[8px] ring-1 ring-[color:var(--border)] lg:grid-cols-[1.1fr_0.9fr]">
          <img
            src="https://images.bhaskarassets.com/thumb/1200x900/web2images/521/2025/05/08/66be6397-13d6-40e6-98f8-9135b415d1b9_1746688195935.jpg"
            alt="Pilgrims gathered during a festival at Sita Samahit Sthal"
            className="w-full aspect-[4/3] object-cover"
          />

          <div className="bg-[color:var(--offwhite)]/80 p-7 md:p-10">
            <Eyebrow tone={SITA}>Featured Gathering</Eyebrow>

            <h3 className="mt-4 font-serif text-[30px] leading-tight text-[color:var(--charcoal)]">
              <Pending>Add verified festival information</Pending>
            </h3>

            <dl className="mt-6">
              {FESTIVAL_FIELDS.map((f) => (
                <InfoRow key={f} label={f} />
              ))}
            </dl>

            <p className="mt-6 font-sans text-[13px] leading-[1.7] text-muted-foreground">
              Festival names, dates, schedules and attendance figures are
              published only after verification with the site management.
            </p>
          </div>
        </article>
      </Reveal>

      {/* Festival Cards */}
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FESTIVAL_CARDS.map((c) => (
          <li key={c.label}>
            <Reveal>
              <article className="h-full overflow-hidden rounded-[6px] ring-1 ring-[color:var(--border)]">
                <img
                  src={c.image}
                  alt={c.alt}
                  className="w-full aspect-[4/3] object-cover"
                />

                <div className="bg-[color:var(--card)]/60 p-5">
                  <h4 className="font-serif text-[20px] leading-tight text-[color:var(--charcoal)]">
                    {c.label}
                  </h4>

                  <p className="mt-3">
                    <Pending>Add verified festival information</Pending>
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* 11. Visitor experience */
const VISITOR_AREAS = [
  {
    title: "Arrival",
    text: "How to reach the entrance and where visitors begin their experience.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGG9bH1QAzZKkapT26B7mi0MY7hL6s8Zz-46CsQxdY4vCUu_fl2tGrpUPX&s=10",
    alt: "Entrance to Sita Samahit Sthal",
    note: "Add verified arrival information",
  },
  {
    title: "Movement Through the Site",
    text: "Pathways, queues, accessibility and important visitor routes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOZfDfMVPH4lZ9diZ2zR7nN7dir0f975NE0JqxFU9uj0OrV8Acdj8GwE&s=10",
    alt: "Visitor pathway at Sita Samahit Sthal",
    note: "Add verified accessibility information",
  },
  {
    title: "Worship and Reflection",
    text: "Guidance for sacred spaces and expected conduct.",
    image: "https://www.vidhantravels.com/img/tour-package/Sita-Samahit-Sthal-Sitamarhi-temple.jpg",
    alt: "Sacred area within Sita Samahit Sthal",
    note: "Add approved conduct guidance",
  },
  {
    title: "Family and Elderly Visitors",
    text: "Information about seating, assistance and access where verified.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgrp5-2t0scYVAhXLC6cD2w57Uasa9UxlZwDhLzF5Tv4DBLu7NJzS3qef&s=10",
    alt: "Elderly visitors at Sita Samahit Sthal",
    note: "Add verified assistance information",
  },
  {
    title: "Facilities",
    text: "Verified information about water, sanitation, parking, footwear, rest areas or other facilities.",
    image: "https://holaciti.com/assets/place/1766572746place.webp",
    alt: "Families visiting Sita Samahit Sthal",
    note: "Add verified restroom information",
  },
  {
    title: "Help and Enquiries",
    text: "Where visitors can seek assistance.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsYqX1Km4Rxgfg0jgDmbVzuUTefAtXdvjQBrYcBBZuOZXiSXNKRIzyTXg&s=10",
    alt: "Visitor assistance at Sita Samahit Sthal",
    note: "Add verified visitor-help contact",
  },
];

function VisitorExperience() {
  return (
    <Section id="visitor-experience">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SITA}>Visiting the Sthal</Eyebrow>

        <H2>A Welcoming and Respectful Visitor Experience</H2>

        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          The visitor experience should help people approach the Sthal with
          clarity, comfort and respect for its sacred character.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {VISITOR_AREAS.map((v, i) => (
          <li key={v.title}>
            <Reveal>
              <article className="flex h-full flex-col overflow-hidden rounded-[8px] bg-[color:var(--card)]/60 ring-1 ring-[color:var(--border)]">

                {/* Image */}
                <img
                  src={v.image}
                  alt={v.alt}
                  className="w-full aspect-[16/10] object-cover"
                />

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <span
                    className="font-sans text-[11px] font-medium uppercase tracking-[0.24em]"
                    style={{ color: SITA }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 font-serif text-[22px] leading-tight text-[color:var(--charcoal)]">
                    {v.title}
                  </h3>

                  <p className="mt-3 font-sans text-[14px] leading-[1.75] text-muted-foreground">
                    {v.text}
                  </p>

                  <p className="mt-4">
                    <Pending>{v.note}</Pending>
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}


/* 12. Community connection */
const COMMUNITY = [
  {
    title: "Local Participation",
    text: "Residents of the surrounding region take part in the everyday life of the Sthal in different ways and to different degrees.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sM1u743Yctr7jTil9W4OYsxM50JdiQCLnlAiyI15-BV1y67HJK9ulSZi&s=10",
    alt: "Community gathering at Sita Samahit Sthal",
  },
  {
    title: "Volunteer and Service Activity",
    text: "Volunteers and service groups contribute during gatherings, upkeep activity and visitor-support work.",
    image: "https://travelocity59.wordpress.com/wp-content/uploads/2019/10/77_big.jpg",
    alt: "Volunteers serving at Sita Samahit Sthal",
  },
  {
    title: "Cultural Programmes",
    text: "Cultural events connect the Sthal with regional artistic, musical and devotional traditions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-Np3m5viOgv4KJx13rYxcY4gnnkrN0SJ03riXbSutPIvu0HeCLcfgc4u&s=10",
    alt: "Cultural programme at Sita Samahit Sthal",
  },
  {
    title: "Intergenerational Memory",
    text: "Families carry memories of visits, ceremonies and gatherings across generations.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT19cRnx6eVXbqNXE0r0ndp9LfjHAKk2RrMzTfAG36X94QDd6XXuLwwm_Q&s=10",
    alt: "Elderly visitors at Sita Samahit Sthal",
  },
];

function CommunityConnection() {
  return (
    <Section id="community" tint="oklch(0.972 0.016 72 / 0.5)">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        
        {/* Community Introduction */}
        <Reveal>
          <Eyebrow tone={SITA}>The Sthal and Its Community</Eyebrow>

          <H2>A Sacred Institution Rooted in Local Life</H2>

          <Body className="mt-7 max-w-xl">
            <p>
              Sita Samahit Sthal is closely connected with the surrounding
              community.
            </p>

            <p>
              Its role extends beyond those who visit occasionally. The Sthal
              forms part of local memory, family traditions, cultural life,
              livelihoods and collective identity.
            </p>

            <p>
              The Foundation’s stewardship therefore remains connected with
              the people who live around the site and participate in its
              continuing life.
            </p>
          </Body>

          {/* Community Ceremony Image */}
          <div className="mt-8">
            <figure className="overflow-hidden rounded-[8px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yTsHfiwv1AsWM3UFuJJ_Oa1xfigYl65Bigwq2HGKrg&s=10"
                alt="Women participating in a ceremony at Sita Samahit Sthal"
                className="w-full aspect-[16/10] object-cover"
              />

              <figcaption className="mt-3 font-sans text-[12px] leading-relaxed text-muted-foreground">
                Published with consent.
              </figcaption>
            </figure>
          </div>
        </Reveal>

        {/* Community Cards */}
        <Reveal>
          <ul className="grid gap-6 sm:grid-cols-2">
            {COMMUNITY.map((c) => (
              <li
                key={c.title}
                className="overflow-hidden rounded-[8px] ring-1 ring-[color:var(--border)]"
              >
                <img
                  src={c.image}
                  alt={c.alt}
                  className="w-full aspect-[4/3] object-cover"
                />

                <div className="bg-[color:var(--card)]/60 p-5">
                  <h3 className="font-serif text-[20px] leading-tight text-[color:var(--charcoal)]">
                    {c.title}
                  </h3>

                  <p className="mt-2 font-sans text-[13.5px] leading-[1.7] text-muted-foreground">
                    {c.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

/* 13. Preservation */
const PRESERVATION_AREAS = [
  "Structural maintenance",
  "Surface and architectural care",
  "Landscape upkeep",
  "Cleanliness and waste management",
  "Visitor facilities",
  "Safety",
  "Archival documentation",
  "Future conservation priorities",
];

function Preservation() {
  return (
    <Section id="preservation">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <Reveal>
          <Eyebrow tone={SITA}>Preserving for the Future</Eyebrow>
          <H2>Stewardship Requires Continuous Care</H2>
          <Body className="mt-7 max-w-xl">
            <p>Sacred and cultural institutions require regular care.</p>
            <p>
              Preservation involves attention to architecture, cleanliness, visitor facilities,
              landscapes, documentation, safety and the integrity of sacred spaces.
            </p>
            <p>
              The Foundation’s preservation work is presented as a continuing responsibility rather
              than a one-time restoration exercise, and is documented as it is carried out.
            </p>
          </Body>

          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {PRESERVATION_AREAS.map((a) => (
              <li
                key={a}
                className="flex items-baseline gap-3 border-b border-[color:var(--border)] pb-3 font-sans text-[14.5px] text-[color:var(--charcoal)]/85"
              >
                <span aria-hidden="true" style={{ color: SITA }}>
                  —
                </span>
                {a}
              </li>
            ))}
          </ul>

        </Reveal>

        <Reveal>
  <div className="grid gap-5">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZFIrUPocKolSVjPKdMaSjqWbieZAMLao4H0nV_6yyFD4p_o_EWyDuun7&s=10"
      alt="Preservation work at Sita Samahit Sthal"
      className="w-full aspect-[4/3] object-cover rounded-[8px]"
    />

    <div className="grid gap-5 sm:grid-cols-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_-LHytMM-UsfxM1pGTp648Lwjmt-ArVniXCMmAdY5sDQCflrPAQf3od-&s=10"
        alt="Foundation team supporting site maintenance"
        className="w-full aspect-square object-cover rounded-[8px]"
      />

      <img
        src="https://holaciti.com/assets/place/1766573288place.webp"
        alt="Foundation site-management team"
        className="w-full aspect-square object-cover rounded-[8px]"
      />
    </div>
  </div>
</Reveal>
      </div>
    </Section>
  );
}

/* 14. Visit with respect */
const GUIDELINES = [
  "Respect prayer and worship areas",
  "Follow photography restrictions",
  "Maintain cleanliness",
  "Use designated waste points",
  "Follow footwear guidance",
  "Avoid obstructing pathways",
  "Support elderly visitors and children",
  "Follow event-day instructions",
  "Avoid damage to structures and landscaping",
  "Use authorised service channels only",
];

function VisitWithRespect() {
  return (
    <Section id="visit-with-respect" tint="oklch(0.968 0.02 60 / 0.45)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SITA}>Visit With Respect</Eyebrow>
        <H2>Protecting the Sacred Character of the Sthal</H2>
        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          These guidance points are shared to help every visitor experience the Sthal peacefully.
          Each item is confirmed with the site management before publication.
        </p>
      </Reveal>

      <ul className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-2">
        {GUIDELINES.map((g) => (
          <li
            key={g}
            className="flex items-baseline gap-3 border-b border-[color:var(--border)] pb-4 font-sans text-[15px] leading-[1.7] text-[color:var(--charcoal)]/85"
          >
            <span aria-hidden="true" style={{ color: SITA }}>
              ·
            </span>
            <span>
              {g} <Pending>Approved guideline pending</Pending>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* 15. Interactive site exploration */
const SITE_SPACES = [
  { name: "Main entrance", note: "Add verified description" },
  { name: "Principal sacred space", note: "Add verified structure name" },
  { name: "Important architecture", note: "Add verified structure name" },
  { name: "Gathering areas", note: "Add verified description" },
  { name: "Visitor assistance", note: "Add verified visitor-help contact" },
  { name: "Parking", note: "Add verified parking information" },
  { name: "Restrooms", note: "Add verified restroom information" },
  { name: "Drinking water", note: "Add verified facility information" },
  { name: "Accessibility routes", note: "Add verified accessibility information" },
  { name: "Festival areas", note: "Add verified festival information" },
];

function SiteExploration() {
  const [view, setView] = useState<"map" | "list">("list");
  const [selected, setSelected] = useState(SITE_SPACES[0]!.name);
  const current = SITE_SPACES.find((s) => s.name === selected) ?? SITE_SPACES[0]!;

  return (
    <Section id="site-exploration">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SITA}>Explore Before You Visit</Eyebrow>
        <H2>Discover the Spaces of Sita Samahit Sthal</H2>
        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          A verified site plan will be published here. Until then, the principal spaces are listed
          below with the information confirmed so far.
        </p>
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Choose map or list view">
        {(["map", "list"] as const).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setView(v)}
            aria-pressed={view === v}
            className={`min-h-11 rounded-full border px-5 py-2 font-sans text-[12px] uppercase tracking-[0.16em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-sita)] ${
              view === v
                ? "border-transparent bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
                : "border-[color:var(--charcoal)]/20 text-[color:var(--charcoal)]/80"
            }`}
          >
            {v === "map" ? "Map view" : "List of spaces"}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className={view === "map" ? "" : "hidden lg:block"}>
          <div className="overflow-hidden rounded-[8px] ring-1 ring-[color:var(--border)]">
            <img
  src="https://static2.tripoto.com/media/filter/tst/img/2173352/SpotDocument/1632644765_1632644952670.jpg.webp"
  alt="Verified site map of Sita Samahit Sthal"
  className="w-full aspect-[4/3] object-cover rounded-[8px]"
/>
          </div>
          <Caption>
            A site plan is shown only once a verified map has been supplied. No plan has been drawn
            or estimated.
          </Caption>
          <div className="mt-6 overflow-hidden rounded-[8px] ring-1 ring-[color:var(--border)]">
            <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMu7dRYC4hHnlnDmqKg9G4biguWXNvO0wihH3xkZVXJItPE5rJ3wyLmpy&s=10"
  alt="Aerial view of Sita Samahit Sthal"
  className="w-full aspect-[16/9] object-cover rounded-[8px]"
/>
          </div>
        </div>

        <div className={view === "list" ? "" : "hidden lg:block"}>
          <ul className="grid gap-2">
            {SITE_SPACES.map((s) => {
              const on = s.name === selected;
              return (
                <li key={s.name}>
                  <button
                    type="button"
                    onClick={() => setSelected(s.name)}
                    aria-pressed={on}
                    className={`min-h-11 w-full rounded-[5px] border px-5 py-3 text-left font-sans text-[14.5px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-sita)] ${
                      on
                        ? "border-transparent bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
                        : "border-[color:var(--border)] text-[color:var(--charcoal)]/85 hover:border-[color:var(--accent-sita)]"
                    }`}
                  >
                    {s.name}
                  </button>
                </li>
              );
            })}
          </ul>

          <div
            className="mt-6 rounded-[8px] p-6 ring-1 ring-[color:var(--border)]"
            style={{ background: "oklch(0.972 0.02 62 / 0.55)" }}
            aria-live="polite"
          >
            <h3 className="font-serif text-[24px] leading-tight text-[color:var(--charcoal)]">
              {current.name}
            </h3>
            <p className="mt-3">
              <Pending>{current.note}</Pending>
            </p>
            <p className="mt-4 font-sans text-[13px] leading-[1.7] text-muted-foreground">
              Photograph, visitor guidance and accessibility notes will be added once confirmed with
              the site management.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* 16. Visitor information */
const VISIT_INFO: { group: string; rows: string[] }[] = [
  { group: "Location and Access", rows: ["Location", "Road access", "Rail access", "Nearest major transport point"] },
  { group: "Timings", rows: ["Opening hours", "Worship or programme timings", "Best time to visit", "Festival-day guidance"] },
  { group: "On Site", rows: ["Parking", "Accessibility", "Footwear guidance", "Photography policy", "Facilities"] },
  { group: "Enquiries", rows: ["Group visits", "Contact number", "Email"] },
];

function VisitorInformation() {
  return (
    <Section id="plan-your-visit" tint="oklch(0.97 0.018 68 / 0.5)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SITA}>Plan Your Visit</Eyebrow>
        <H2>Everything You Need Before Arriving</H2>
        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          Practical details are published only once confirmed with the site management, so that no
          visitor travels on the basis of unverified information.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-8 sm:grid-cols-2">
          {VISIT_INFO.map((g) => (
            <div
              key={g.group}
              className="rounded-[8px] bg-[color:var(--card)]/65 p-6 ring-1 ring-[color:var(--border)] backdrop-blur-sm"
            >
              <h3 className="font-serif text-[22px] leading-tight text-[color:var(--charcoal)]">
                {g.group}
              </h3>
              <dl className="mt-4">
                {g.rows.map((r) => (
                  <InfoRow key={r} label={r} />
                ))}
              </dl>
            </div>
          ))}
        </div>

        <div>
          <figure className="overflow-hidden rounded-[8px]">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCPtQQAUpi1-v_CdojTmZUeMESH1EKYL-PkLh4w27GlnYJA6LtQaxQm5R&s=10"
    alt="Regional location map showing access to Sita Samahit Sthal"
    className="w-full aspect-[4/3] object-cover"
  />

  
</figure>
          <div className="mt-7 flex flex-wrap gap-3">
            <PrimaryBtn href="#site-exploration">Get Directions</PrimaryBtn>
            <GhostBtn href="#events">View Upcoming Events</GhostBtn>
            <GhostBtn href="/contact">Visitor Enquiry</GhostBtn>
          </div>
          <p className="mt-5 font-sans text-[13px] leading-[1.7] text-muted-foreground">
            Directions and click-to-call will be enabled once a verified location and contact number
            are supplied.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* 17. Events calendar */
const EVENT_CATEGORIES = [
  "All",
  "Festival",
  "Religious Observance",
  "Community Gathering",
  "Cultural Programme",
  "Discourse",
  "Foundation Event",
  "Visitor Advisory",
];

function EventsCalendar() {
  const [filter, setFilter] = useState("All");
  return (
    <Section id="events">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SITA}>Events and Observances</Eyebrow>
        <H2>Upcoming at Sita Samahit Sthal</H2>
      </Reveal>

      <FilterBar
        options={EVENT_CATEGORIES}
        value={filter}
        onChange={setFilter}
        label="Filter events by category"
      />

      <div
        className="mt-10 rounded-[8px] border border-dashed border-[color:var(--border)] p-10 text-center"
        aria-live="polite"
      >
        <p className="font-serif text-[24px] text-[color:var(--charcoal)]">
          Upcoming event information will be added here
        </p>
        <p className="mx-auto mt-4 max-w-xl font-sans text-[14px] leading-[1.75] text-muted-foreground">
          Each published event will carry its title, date, time, location within the site,
          description, significance, programme schedule, visitor instructions, contact and status —
          Upcoming, Schedule Announced, Completed, Postponed or Cancelled.
        </p>
      </div>
    </Section>
  );
}


/* 19. Gallery */
type GalleryItem = { asset: string; alt: string; caption: string; filters: string[] };

const GALLERY: GalleryItem[] = [
  { asset: "sita-architecture-main", alt: "Wide architectural view of Sita Samahit Sthal", caption: "Principal architecture", filters: ["Architecture"] },
  { asset: "sita-architecture-detail-01", alt: "Architectural detail at Sita Samahit Sthal", caption: "Architectural detail", filters: ["Architecture"] },
  { asset: "sita-architecture-detail-02", alt: "Architectural detail at Sita Samahit Sthal", caption: "Architectural detail", filters: ["Architecture"] },
  { asset: "sita-architecture-detail-03", alt: "Architectural detail at Sita Samahit Sthal", caption: "Architectural detail", filters: ["Architecture"] },
  { asset: "sita-entry", alt: "Entrance to Sita Samahit Sthal", caption: "The approach", filters: ["Architecture"] },
  { asset: "sita-sacred-space-main", alt: "Sacred area within Sita Samahit Sthal", caption: "Sacred space", filters: ["Sacred Spaces"] },
  { asset: "sita-sacred-detail", alt: "Sacred detail at Sita Samahit Sthal", caption: "Sacred detail", filters: ["Sacred Spaces"] },
  { asset: "sita-offerings", alt: "Offerings at Sita Samahit Sthal", caption: "Offerings", filters: ["Sacred Spaces"] },
  { asset: "sita-pilgrims", alt: "Pilgrims at Sita Samahit Sthal", caption: "Pilgrims", filters: ["Visitors"] },
  { asset: "sita-families", alt: "Families visiting Sita Samahit Sthal", caption: "Family visit", filters: ["Visitors"] },
  { asset: "sita-elderly-visitors", alt: "Elderly visitors at Sita Samahit Sthal", caption: "Elderly visitors", filters: ["Visitors"] },
  { asset: "sita-festival-main", alt: "Pilgrims gathered during a festival", caption: "Major gathering", filters: ["Festivals"] },
  { asset: "sita-festival-procession", alt: "Procession at Sita Samahit Sthal", caption: "Procession", filters: ["Festivals"] },
  { asset: "sita-festival-night", alt: "Evening festival at Sita Samahit Sthal", caption: "Evening gathering", filters: ["Festivals"] },
  { asset: "sita-community-gathering", alt: "Community gathering at Sita Samahit Sthal", caption: "Community life", filters: ["Community"] },
  { asset: "sita-community-service", alt: "Volunteers serving at Sita Samahit Sthal", caption: "Service activity", filters: ["Community"] },
  { asset: "sita-cultural-event", alt: "Cultural programme at Sita Samahit Sthal", caption: "Cultural programme", filters: ["Community"] },
  { asset: "sita-preservation", alt: "Preservation work at Sita Samahit Sthal", caption: "Preservation", filters: ["Preservation"] },
  { asset: "sita-maintenance", alt: "Site maintenance at Sita Samahit Sthal", caption: "Maintenance", filters: ["Preservation"] },
  { asset: "sita-archive-01", alt: "Archival photograph of Sita Samahit Sthal", caption: "Archive", filters: ["Archive"] },
  { asset: "sita-archive-02", alt: "Archival photograph of Sita Samahit Sthal", caption: "Archive", filters: ["Archive"] },
  { asset: "sita-historical-document", alt: "Archival document relating to Sita Samahit Sthal", caption: "Archival document", filters: ["Archive"] },
  { asset: "sita-video-poster", alt: "Poster image for the introductory film", caption: "Introductory film", filters: ["Video"] },
  { asset: "sita-documentary-poster", alt: "Poster image for the documentary film", caption: "Documentary film", filters: ["Video"] },
];

const GALLERY_FILTERS = [
  "All",
  "Architecture",
  "Sacred Spaces",
  "Visitors",
  "Festivals",
  "Community",
  "Preservation",
  "Archive",
  "Video",
];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const items = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((g) => g.filters.includes(filter))),
    [filter],
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <Section id="gallery">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SITA}>Gallery</Eyebrow>
        <H2>The Sthal Through Architecture, Faith and Community</H2>
        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          Images are published only where photography is permitted and where the necessary consent
          and usage permissions have been recorded.
        </p>
      </Reveal>

      <FilterBar options={GALLERY_FILTERS} value={filter} onChange={setFilter} label="Filter gallery" />

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((g) => (
          <li key={`${g.asset}-${g.caption}`}>
            <button
              type="button"
              onClick={() => setActive(g)}
              className="group block w-full overflow-hidden rounded-[5px] text-left ring-1 ring-[color:var(--border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-sita)]"
            >
              <AssetPlaceholder name={g.asset} label={g.alt} aspect="4 / 3" />
              <span className="block bg-[color:var(--offwhite)] p-4">
                <span className="block font-sans text-[13px] text-[color:var(--charcoal)]">
                  {g.caption}
                </span>
                <span className="mt-1 block font-sans text-[12px] text-muted-foreground">
                  {g.filters[0]} · Date, source and permission to be verified
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {[
          { asset: "sita-video-poster", title: "Introductory film", alt: "Poster image for the introductory film" },
          { asset: "sita-documentary-poster", title: "Heritage and stewardship film", alt: "Poster image for the documentary film" },
        ].map((v) => (
          <article
            key={v.title}
            className="overflow-hidden rounded-[8px] ring-1 ring-[color:var(--border)]"
          >
            <AssetPlaceholder name={v.asset} label={v.alt} aspect="16 / 9" />
            <div className="bg-[color:var(--card)]/60 p-6">
              <h3 className="font-serif text-[22px] text-[color:var(--charcoal)]">{v.title}</h3>
              <p className="mt-3 font-sans text-[13.5px] leading-[1.7] text-muted-foreground">
                Films are published without autoplay, with captions and, where available, a
                transcript. Filming in sacred spaces follows the site’s restrictions.
              </p>
              <p className="mt-4">
                <Pending>Add approved film</Pending>
              </p>
            </div>
          </article>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[80] flex items-center justify-center p-5"
        >
          <div
            className="absolute inset-0 bg-[color:var(--charcoal)]/70 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[6px] bg-[color:var(--ivory)]">
            <AssetPlaceholder name={active.asset} label={active.alt} aspect="16 / 10" />
            <div className="flex items-start justify-between gap-6 p-6">
              <div>
                <p className="font-serif text-[20px] text-[color:var(--charcoal)]">
                  {active.caption}
                </p>
                <p className="mt-1 font-sans text-[13px] text-muted-foreground">
                  {active.alt} · Date, photographer and usage permission to be verified
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setActive(null)}
                className="min-h-11 rounded-full border border-[color:var(--border)] px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] text-[color:var(--charcoal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent-sita)]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}

/* 20. The Sthal in numbers */
const METRICS = [
  "Years of Foundation stewardship",
  "Annual visitors",
  "Major gatherings hosted",
  "Cultural programmes",
  "Volunteer participation",
  "Preservation initiatives",
  "Visitor-support activities",
  "Community-service programmes",
];

function Numbers() {
  return (
    <Section id="numbers" tint="oklch(0.97 0.018 66 / 0.5)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SITA}>The Sthal in Numbers</Eyebrow>
        <H2>Figures Published Only Once Verified</H2>
        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          Every figure will be dated, clearly defined and supported by an institutional or programme
          source.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((m) => (
          <li
            key={m}
            className="rounded-[8px] bg-[color:var(--card)]/65 p-6 ring-1 ring-[color:var(--border)] backdrop-blur-sm"
          >
            <p className="font-serif text-[26px] leading-tight text-[color:var(--charcoal)]/45">
              Data being compiled
            </p>
            <h3 className="mt-4 font-sans text-[13px] font-medium uppercase tracking-[0.18em] text-[color:var(--charcoal)]">
              {m}
            </h3>
            <dl className="mt-4">
              <InfoRow label="Reporting period" />
              <InfoRow label="Data source" />
              <InfoRow label="Verification status" />
            </dl>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* 21. Documentation and reports */
const REPORT_CATEGORIES = [
  "Foundation stewardship reports",
  "Preservation and maintenance reports",
  "Festival reports",
  "Visitor-service reports",
  "Historical documentation",
  "Photo archives",
  "Media coverage",
  "Cultural research",
  "Policies and visitor guidelines",
];

function Documentation() {
  return (
    <Section id="reports">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <Eyebrow tone={SITA}>Documenting the Sthal</Eyebrow>
          <H2>Preserving Institutional and Cultural Memory</H2>
          <Body className="mt-7 max-w-xl">
            <p>
              Records, photographs, reports and archival material form part of the Sthal’s
              continuing memory and of the Foundation’s accountability for its stewardship.
            </p>
          </Body>
          <div className="mt-8">
           <figure className="overflow-hidden rounded-[8px]">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmR1aA6Y3qdQZGwujCZy6IhxDMJx1I_Rnmrj4zQVXCHaP1Tt6FkTIZldhh&s=10"
    alt="Archival document relating to Sita Samahit Sthal"
    className="w-full aspect-[4/3] object-cover"
  />

</figure>
          </div>
        </Reveal>

        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {REPORT_CATEGORIES.map((r) => (
              <li
                key={r}
                className="rounded-[6px] border border-[color:var(--border)] p-5"
              >
                <h3 className="font-serif text-[19px] leading-tight text-[color:var(--charcoal)]">
                  {r}
                </h3>
                <dl className="mt-3">
                  <InfoRow label="Year" />
                  <InfoRow label="Publication date" />
                  <InfoRow label="File" />
                </dl>
                <p className="mt-3">
                  <Pending>Add verified Sthal report</Pending>
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Pending>Add approved media coverage</Pending>
            <Pending>Add archival document</Pending>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 22. Dedicated website */
function DedicatedWebsite() {
  return (
    <Section id="dedicated-website" tint="oklch(0.968 0.022 60 / 0.5)">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
        <Reveal>
          <Eyebrow tone={SITA}>Explore Further</Eyebrow>
          <H2>Visit the Dedicated Sita Samahit Sthal Website</H2>
          <Body className="mt-7 max-w-xl">
            <p>
              The Foundation website presents Sita Samahit Sthal as one of its principal pillars of
              work and explains its institutional role in the site’s stewardship.
            </p>
            <p>
              For more detailed information about visits, festivals, worship schedules,
              site-specific announcements and cultural content, visitors may continue to the
              dedicated Sita Samahit Sthal website.
            </p>
          </Body>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="inline-flex min-h-11 items-center rounded-full border border-dashed border-[color:var(--border)] px-6 py-3 font-sans text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
              Add verified Sita Samahit Sthal website link
            </span>
          </div>
          <p className="mt-4 font-sans text-[13px] text-muted-foreground">
            The external link will open in a new tab and be clearly identified as an external site.
          </p>
        </Reveal>
        <Reveal>
          <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCf1ZmM1nKtOuyW3XkZjwpUykKOmV3zudn95_gZgorg3WKAYz3UL0dXkQ&s=10"
  alt="Identity mark of Sita Samahit Sthal"
  className="w-full aspect-[4/3] object-contain rounded-[8px]"
/>
        </Reveal>
      </div>
    </Section>
  );
}

/* 23. Closing */
function Closing() {
  return (
    <section className="relative">
      <div className="relative">
      <img
  src="https://scontent.fbom40-1.fna.fbcdn.net/v/t39.99422-6/742111198_790323114105265_745605560625900402_n.png?stp=dst-jpg_tt6&cstp=mx1080x1258&ctp=s1080x1258&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XlBDsltmFUIQ7kNvwFcbKht&_nc_oc=AdqyH06wvnO7PIyFlQePbWgF1ymYD_PVMzxC7ltCpM3-lCFPBCN9hTd4vnaiCJX76Pc&_nc_zt=14&_nc_ht=scontent.fbom40-1.fna&_nc_gid=Wva5W2wpfNI6t05E43HxBg&_nc_ss=7b289&oh=00_AQJ3uFd4R7PJcEG5DM6YW1skjWW8Tn8Q9PFostntoZ0ZqQ&oe=6A9B410F"
  alt="Evening view of Sita Samahit Sthal"
  className="w-full aspect-[21/9] object-cover rounded-[8px]"
/>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, oklch(0.24 0.012 60 / 0.35) 60%, oklch(0.24 0.012 60 / 0.6) 100%)",
          }}
        />
      </div>
      <div className="px-5 py-16 md:px-10 md:py-24" style={{ background: "oklch(0.966 0.024 58 / 0.6)" }}>
        <div className="mx-auto w-full max-w-[820px] text-center">
          <Eyebrow tone={SITA}>A Living Heritage</Eyebrow>
          <h2 className="mt-5 font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
            Preserving a Sacred Place for Generations to Come
          </h2>
          <p className="mt-7 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
            Sita Samahit Sthal continues to bring together faith, heritage, family memory and
            community participation.
          </p>
          <p className="mt-4 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
            Through careful stewardship, the Foundation seeks to protect the site’s sacred
            character, support those who visit and sustain its cultural significance for future
            generations.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <PrimaryBtn href="#plan-your-visit">Plan Your Visit</PrimaryBtn>
            <GhostBtn href="#events">View Upcoming Events</GhostBtn>
            <GhostBtn href="#foundation-stewardship">Explore the Foundation’s Stewardship</GhostBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
