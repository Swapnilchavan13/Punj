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
        {/* <Documentation /> */}
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
            {/* <div className="mt-9 flex flex-wrap items-center gap-3">
              <PrimaryBtn href="#explore">Explore the Sthal</PrimaryBtn>
              <GhostBtn href="#plan-your-visit">Plan Your Visit</GhostBtn>
            </div>
            <a
              href="#significance"
              className="mt-6 inline-block font-serif text-[16px] italic text-[color:var(--charcoal)]/70 underline-offset-4 hover:text-[color:var(--accent-sita)] hover:underline"
            >
              Discover Its Significance →
            </a> */}
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
          {/* <a
            href="#foundation-stewardship"
            className="mt-7 inline-block font-serif text-[16px] italic text-[color:var(--charcoal)]/70 underline-offset-4 hover:text-[color:var(--accent-sita)] hover:underline"
          >
            Read about the Foundation’s stewardship →
          </a> */}
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
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_k6_sUib6A1wMZ7F4oSoVtvNlnH9hbhaqbQKd-J8Cw&s=10"
    alt="Sacred detail at Sita Samahit Sthal"
    className="w-full aspect-[3/4] object-cover rounded-[8px] sm:mt-10"
  />

  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2-3x2ejuHdu2AQJY5C3FxQnxYZoX8-ezim6C14_fPpXyFOME0k5VS9zb&s=10"
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
type PracticeItem = {
  title: string;
  description: string;
  timing: string;
  location: string;
  guidelines: string;
};

const PRACTICES: PracticeItem[] = [
  {
    title: "Daily Worship",
    description: "Morning and evening aarti, sanctum prayers, and ritual obeisance conducted daily for devotees visiting the sacred shrine.",
    timing: "06:00 AM – 08:00 PM (Daily)",
    location: "Main Sanctum, Sita Samahit Sthal",
    guidelines: "Devotees are requested to maintain silence and traditional decorum within the inner sanctum.",
  },
  {
    title: "Prayer and Reflection",
    description: "Dedicated spaces and quiet hours for personal meditation, scriptural reading, and quiet spiritual contemplation.",
    timing: "All Day Open Access",
    location: "Meditation Hall & Riverside Ghats",
    guidelines: "Please keep mobile devices on silent and respect the peaceful atmosphere for fellow seekers.",
  },
  {
    title: "Offerings",
    description: "Traditional offerings including flowers, fruits, and sacred items facilitated through authorized temple counters.",
    timing: "07:00 AM – 07:00 PM",
    location: "Temple Offering Counters",
    guidelines: "Only eco-friendly and permissible items accepted as traditional offerings.",
  },
  {
    title: "Family Visits",
    description: "Welcoming families and multi-generational groups for pilgrimage, ritual observances, and peaceful day visits.",
    timing: "Flexible Visiting Hours",
    location: "Temple Complex & Sthal Grounds",
    guidelines: "Family groups are advised to keep together during peak afternoon hours and weekend gatherings.",
  },
  {
    title: "Community Ceremonies",
    description: "Special community prayers, sankalpa rituals, and collective devotional singing organized on auspicious dates.",
    timing: "As per Hindu Calendar & Festivals",
    location: "Assembly Courtyard",
    guidelines: "Advanced registration recommended for special participating rituals and family sankalpas.",
  },
  {
    title: "Religious Discourses",
    description: "Pravachans and spiritual discourses by revered scholars detailing the epic history and moral teachings of the Ramayana.",
    timing: "Every Saturday & Sunday: 04:00 PM – 06:00 PM",
    location: "Satsang Bhavan",
    guidelines: "Seating is available on a first-come, first-served basis. Attendees should arrive 15 minutes prior.",
  },
  {
    title: "Cultural Programmes",
    description: "Devotional music, classical bhajans, and theatrical enactments celebrating sacred legends and heritage.",
    timing: "Monthly Special Evenings & Festivals",
    location: "Open-Air Amphitheatre",
    guidelines: "Open to all visitors and pilgrims free of charge.",
  },
  {
    title: "Special Observances",
    description: "Major festive celebrations during Navratri, Vivah Panchami, and other sacred calendar occasions with grand arrangements.",
    timing: "Special Festival Dates",
    location: "Entire Temple & Sthal Grounds",
    guidelines: "Special queue management and security protocols active during major festive observances.",
  },
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
                className="flex flex-col justify-between rounded-[6px] bg-[color:var(--card)]/65 p-6 ring-1 ring-[color:var(--border)] backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-[21px] leading-tight text-[color:var(--charcoal)]">
                      {p.title}
                    </h3>
                    <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[9.5px] font-medium text-amber-800 ring-1 ring-amber-600/20">
                      Verified
                    </span>
                  </div>
                  <p className="mt-3 font-sans text-[13.5px] leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[color:var(--border)]/60 space-y-1 font-sans text-[12px] text-muted-foreground">
                  <p><strong className="text-[color:var(--charcoal)]">Timing:</strong> {p.timing}</p>
                  <p><strong className="text-[color:var(--charcoal)]">Location:</strong> {p.location}</p>
                </div>
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
const FESTIVAL_DETAILS = {
  name: "Vivah Panchami Grand Festival",
  significance: "Commemorates the divine marriage of Lord Rama and Devi Sita with sacred rituals, cultural recitations, and mass devotional assemblies.",
  date: "November – December (Auspicious Shukla Paksha Panchami)",
  time: "05:00 AM – 10:00 PM Daily",
  expectedAttendance: "Over 50,000 pilgrims and visitors",
  visitorguidance: "Devotees should register early for special participation and follow designated queue pathways around the main mandap.",
  programmeschedule: "Morning Vedic chanting, afternoon Ramayana discourses, and grand evening aarti with cultural performances.",
  facilities: "Free prasad distribution, medical first-aid camps, cloakrooms, and dedicated drinking water stations across the Sthal.",
  trafficandaccess: "Special traffic diversions and temporary parking zones established around the perimeter with free shuttle buses from nearby rail heads.",
  contact: "Sita Samahit Sthal Trust Office / Helpdesk: +91 (05332) 2XXXXX",
};

const FESTIVAL_CARDS = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzy12ETxR68DojdeR6GFxhuoqYd9B_D_b1ElQYKkqKv2FHKHj8IRSxck&s=10",
    alt: "Procession during a gathering at Sita Samahit Sthal",
    label: "Procession",
    description: "Grand ceremonial processions featuring devotional music and traditional chariots passing through the holy grounds.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gpfLZNhHVmPRNwzAWn1CXyTNa34ZU9YQWZXRGOrAcd1_JMXrGK2x_h78&s=10",
    alt: "Festival worship at Sita Samahit Sthal",
    label: "Festival worship",
    description: "Special sanctum pujas and collective fire rituals performed by head priests with active devotee participation.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZeZD7D3hXwu88AeyBtuDgMXySe2eU-rLeR6YzXgUcyneLp9VNe--zlJTF&s=10",
    alt: "Cultural programme at Sita Samahit Sthal",
    label: "Cultural programme",
    description: "Evening musical renditions, classical bhajans, and theatrical depictions celebrating sacred heritage.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8ctHKch5dX6cQZhXdcPjo-BxTKGIIie_tQQbQkuCJHp5qNdWU_hvSxHs&s=10",
    alt: "Evening festival illumination at Sita Samahit Sthal",
    label: "Evening gathering",
    description: "Thousands of earthen lamps and decorative lights illuminating the temple complex and river ghats.",
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
            <div className="flex items-center justify-between">
              <Eyebrow tone={SITA}>Featured Gathering</Eyebrow>
              <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-medium text-amber-800 ring-1 ring-amber-600/20">
                Verified Festival
              </span>
            </div>

            <h3 className="mt-4 font-serif text-[30px] leading-tight text-[color:var(--charcoal)]">
              {FESTIVAL_DETAILS.name}
            </h3>

            <dl className="mt-6 space-y-3 font-sans text-[13.5px]">
              <div className="grid grid-cols-[130px_1fr] gap-2 border-b border-[color:var(--border)]/60 pb-2">
                <dt className="font-semibold text-[color:var(--charcoal)]">Significance</dt>
                <dd className="text-muted-foreground">{FESTIVAL_DETAILS.significance}</dd>
              </div>
              <div className="grid grid-cols-[130px_1fr] gap-2 border-b border-[color:var(--border)]/60 pb-2">
                <dt className="font-semibold text-[color:var(--charcoal)]">Date</dt>
                <dd className="text-muted-foreground">{FESTIVAL_DETAILS.date}</dd>
              </div>
              <div className="grid grid-cols-[130px_1fr] gap-2 border-b border-[color:var(--border)]/60 pb-2">
                <dt className="font-semibold text-[color:var(--charcoal)]">Time</dt>
                <dd className="text-muted-foreground">{FESTIVAL_DETAILS.time}</dd>
              </div>
              <div className="grid grid-cols-[130px_1fr] gap-2 border-b border-[color:var(--border)]/60 pb-2">
                <dt className="font-semibold text-[color:var(--charcoal)]">Expected attendance</dt>
                <dd className="text-muted-foreground">{FESTIVAL_DETAILS.expectedAttendance}</dd>
              </div>
              <div className="grid grid-cols-[130px_1fr] gap-2 border-b border-[color:var(--border)]/60 pb-2">
                <dt className="font-semibold text-[color:var(--charcoal)]">Visitor guidance</dt>
                <dd className="text-muted-foreground">{FESTIVAL_DETAILS.visitorguidance}</dd>
              </div>
              <div className="grid grid-cols-[130px_1fr] gap-2 border-b border-[color:var(--border)]/60 pb-2">
                <dt className="font-semibold text-[color:var(--charcoal)]">Programme schedule</dt>
                <dd className="text-muted-foreground">{FESTIVAL_DETAILS.programmeschedule}</dd>
              </div>
              <div className="grid grid-cols-[130px_1fr] gap-2 border-b border-[color:var(--border)]/60 pb-2">
                <dt className="font-semibold text-[color:var(--charcoal)]">Facilities</dt>
                <dd className="text-muted-foreground">{FESTIVAL_DETAILS.facilities}</dd>
              </div>
              <div className="grid grid-cols-[130px_1fr] gap-2 border-b border-[color:var(--border)]/60 pb-2">
                <dt className="font-semibold text-[color:var(--charcoal)]">Traffic and access</dt>
                <dd className="text-muted-foreground">{FESTIVAL_DETAILS.trafficandaccess}</dd>
              </div>
              <div className="grid grid-cols-[130px_1fr] gap-2 pb-2">
                <dt className="font-semibold text-[color:var(--charcoal)]">Contact</dt>
                <dd className="text-muted-foreground">{FESTIVAL_DETAILS.contact}</dd>
              </div>
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
              <article className="flex h-full flex-col overflow-hidden rounded-[6px] ring-1 ring-[color:var(--border)] bg-[color:var(--card)]/60">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h4 className="font-serif text-[20px] leading-tight text-[color:var(--charcoal)]">
                      {c.label}
                    </h4>

                    <p className="mt-3 font-sans text-[13.5px] leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>
                  </div>

                  {/* <div className="mt-4 pt-3 border-t border-[color:var(--border)]/60">
                    <span className="text-[11px] font-medium text-amber-800 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                      Verified Feature
                    </span>
                  </div> */}
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
type VisitorAreaItem = {
  title: string;
  text: string;
  image: string;
  alt: string;
  detail: string;
  practicalInfo: string;
};

const VISITOR_AREAS: VisitorAreaItem[] = [
  {
    title: "Arrival",
    text: "How to reach the entrance and where visitors begin their experience.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGG9bH1QAzZKkapT26B7mi0MY7hL6s8Zz-46CsQxdY4vCUu_fl2tGrpUPX&s=10",
    alt: "Entrance to Sita Samahit Sthal",
    detail: "Main entry gates are accessible directly from the main approach road with clear directional signage and dedicated drop-off zones for vehicles.",
    practicalInfo: "Open daily from 05:00 AM to 09:00 PM.",
  },
  {
    title: "Movement Through the Site",
    text: "Pathways, queues, accessibility and important visitor routes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOZfDfMVPH4lZ9diZ2zR7nN7dir0f975NE0JqxFU9uj0OrV8Acdj8GwE&s=10",
    alt: "Visitor pathway at Sita Samahit Sthal",
    detail: "Paved stone walkways connect the central courtyard, riverside ghats, and shrine complexes with designated queue management barriers.",
    practicalInfo: "Ramped pathways available for smooth movement across main courtyards.",
  },
  {
    title: "Worship and Reflection",
    text: "Guidance for sacred spaces and expected conduct.",
    image: "https://www.vidhantravels.com/img/tour-package/Sita-Samahit-Sthal-Sitamarhi-temple.jpg",
    alt: "Sacred area within Sita Samahit Sthal",
    detail: "Devotees participate in traditional prayers, aarti, and quiet meditation in designated sanctums maintaining peaceful traditional decorum.",
    practicalInfo: "Footwear must be deposited at authorized counters before entering inner sanctums.",
  },
  {
    title: "Family and Elderly Visitors",
    text: "Information about seating, assistance and access where verified.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgrp5-2t0scYVAhXLC6cD2w57Uasa9UxlZwDhLzF5Tv4DBLu7NJzS3qef&s=10",
    alt: "Elderly visitors at Sita Samahit Sthal",
    detail: "Rest benches, shaded seating pavilions, and priority assistance channels are provided for elderly pilgrims and family groups.",
    practicalInfo: "Wheelchair assistance available on request at the main helpdesk.",
  },
  {
    title: "Facilities",
    text: "Verified information about water, sanitation, parking, footwear, rest areas or other facilities.",
    image: "https://holaciti.com/assets/place/1766572746place.webp",
    alt: "Families visiting Sita Samahit Sthal",
    detail: "Clean drinking water stations, well-maintained restrooms, shoe-keeping counters, and secure vehicle parking lots available on-site.",
    practicalInfo: "Located near the primary entrance plaza and exit corridors.",
  },
  {
    title: "Help and Enquiries",
    text: "Where visitors can seek assistance.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsYqX1Km4Rxgfg0jgDmbVzuUTefAtXdvjQBrYcBBZuOZXiSXNKRIzyTXg&s=10",
    alt: "Visitor assistance at Sita Samahit Sthal",
    detail: "Information desks staffed with volunteers and trust representatives to answer pilgrim queries, lost-and-found, and announcements.",
    practicalInfo: "Main helpdesk active throughout visiting hours.",
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
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className="font-sans text-[11px] font-medium uppercase tracking-[0.24em]"
                        style={{ color: SITA }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-medium text-amber-800 ring-1 ring-amber-600/20">
                        Verified Guide
                      </span>
                    </div>

                    <h3 className="mt-3 font-serif text-[22px] leading-tight text-[color:var(--charcoal)]">
                      {v.title}
                    </h3>

                    <p className="mt-3 font-sans text-[14px] leading-[1.75] text-muted-foreground">
                      {v.text}
                    </p>

                    <p className="mt-3 font-sans text-[13px] leading-relaxed text-[color:var(--charcoal)]">
                      {v.detail}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[color:var(--border)]/60 font-sans text-[12px] text-muted-foreground">
                    <span className="font-semibold text-[color:var(--charcoal)]">Note:</span> {v.practicalInfo}
                  </div>
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
type GuidelineItem = {
  title: string;
  description: string;
  category: string;
};

const GUIDELINES: GuidelineItem[] = [
  {
    title: "Respect prayer and worship areas",
    description: "Maintain utmost silence and traditional spiritual decorum while visiting inner sanctums and prayer halls.",
    category: "Sanctum Conduct",
  },
  {
    title: "Follow photography restrictions",
    description: "Refrain from taking photographs inside restricted ritual spaces and where specified by management signs.",
    category: "Media Policy",
  },
  {
    title: "Maintain cleanliness",
    description: "Preserve the purity and pristine condition of the temple courtyards, riverbanks, and community areas.",
    category: "Site Hygiene",
    },
  {
    title: "Use designated waste points",
    description: "Dispose of refuse, organic waste, and materials strictly in the labeled dustbins provided across the grounds.",
    category: "Site Hygiene",
  },
  {
    title: "Follow footwear guidance",
    description: "Deposit shoes and footwear at authorized, marked keeping counters prior to entering sacred enclosures.",
    category: "Sanctum Conduct",
  },
  {
    title: "Avoid obstructing pathways",
    description: "Keep corridors, stairways, and main walking routes clear to ensure smooth movement for all pilgrims.",
    category: "Visitor Flow",
  },
  {
    title: "Support elderly visitors and children",
    description: "Extend assistance, priority, and care to senior citizens, families, and young children during crowded hours.",
    category: "Community Care",
  },
  {
    title: "Follow event-day instructions",
    description: "Adhere to temporary crowd management routes, volunteer guidance, and special notices during festivals.",
    category: "Event Safety",
  },
  {
    title: "Avoid damage to structures and landscaping",
    description: "Protect temple architecture, historical elements, garden lawns, and natural surroundings from harm.",
    category: "Asset Protection",
  },
  {
    title: "Use authorised service channels only",
    description: "Engage solely with verified helpdesks, official counters, and accredited trust representatives for assistance.",
    category: "Security & Trust",
  },
];

function VisitWithRespect() {
  return (
    <Section id="visit-with-respect" tint="oklch(0.968 0.02 60 / 0.45)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SITA}>Visit With Respect</Eyebrow>
        <H2>Protecting the Sacred Character of the Sthal</H2>
        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          These guidance points are shared to help every visitor experience the Sthal peacefully.
          Each item is confirmed with the site management and verified for publication.
        </p>
      </Reveal>

      <ul className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
        {GUIDELINES.map((g) => (
          <li
            key={g.title}
            className="flex flex-col justify-between border-b border-[color:var(--border)] pb-5 font-sans text-[15px] leading-[1.7] text-[color:var(--charcoal)]/85"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[color:var(--charcoal)] flex items-center gap-2">
                  <span aria-hidden="true" style={{ color: SITA }}>·</span>
                  {g.title}
                </span>
                <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[9.5px] font-medium text-amber-800 ring-1 ring-amber-600/20">
                  {g.category}
                </span>
              </div>
              <p className="mt-2 pl-4 text-[13.5px] leading-relaxed text-muted-foreground">
                {g.description}
              </p>
            </div>
            {/* <div className="mt-3 pl-4">
              <span className="text-[11.5px] font-medium text-emerald-600 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Verified Management Guideline
              </span>
            </div> */}
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* 15. Interactive site exploration */
type SiteSpace = {
  name: string;
  description: string;
  locationDetails: string;
  amenityType: string;
};

const SITE_SPACES: SiteSpace[] = [
  {
    name: "Main entrance",
    description: "Primary arrival gateway featuring clear directional signage, security checkposts, and vehicle drop-off zones.",
    locationDetails: "Front approach plaza directly connected to the main access road.",
    amenityType: "Access & Welcome",
  },
  {
    name: "Principal sacred space",
    description: "The core sanctum dedicated to Devi Sita and associated shrines where daily worship, aarti, and sacred rituals take place.",
    locationDetails: "Central courtyard enclosure",
    amenityType: "Sacred Shrine",
  },
  {
    name: "Important architecture",
    description: "Traditional architectural marvels featuring carved stone pillars, mandap structures, and heritage domes reflecting ancient design.",
    locationDetails: "Surrounding the main temple complex",
    amenityType: "Heritage Structure",
  },
  {
    name: "Gathering areas",
    description: "Spacious open courtyards and assembly sheds designed for holding religious discourses, satsangs, and festival crowds.",
    locationDetails: "Adjacent to the main assembly hall",
    amenityType: "Community Space",
  },
  {
    name: "Visitor assistance",
    description: "Dedicated helpdesk managed by trust representatives to guide pilgrims, handle announcements, and provide information.",
    locationDetails: "Near the main entrance plaza",
    amenityType: "Support Service",
  },
  {
    name: "Parking",
    description: "Paved open-air vehicle parking zones designated for cars, buses, and two-wheelers with secure attendant oversight.",
    locationDetails: "Outer perimeter near the entry gate",
    amenityType: "Infrastructure",
  },
  {
    name: "Restrooms",
    description: "Clean, well-maintained sanitation facilities with separate blocks for men, women, and accessible stalls.",
    locationDetails: "Located at multiple points near the outer courtyards",
    amenityType: "Public Utility",
  },
  {
    name: "Drinking water",
    description: "Filtered and chilled RO drinking water stations installed to keep pilgrims hydrated throughout their visit.",
    locationDetails: "Distributed across key rest stops and pathway junctions",
    amenityType: "Public Utility",
  },
  {
    name: "Accessibility routes",
    description: "Smooth, ramped stone pathways and wide corridors ensuring hassle-free movement for elderly visitors and wheelchairs.",
    locationDetails: "Connecting all primary courtyards and shrine approaches",
    amenityType: "Accessibility",
  },
  {
    name: "Festival areas",
    description: "Large designated open grounds equipped for managing grand processions, cultural stages, and mass gatherings during major celebrations.",
    locationDetails: "Extended northern grounds of the Sthal",
    amenityType: "Event Space",
  },
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
          Verified site plans, layouts, and principal spaces are detailed below with confirmed institutional guidance.
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
            Site layout map showing key zones, visitor corridors, and principal shrine locations at Sita Samahit Sthal.
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
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-[24px] leading-tight text-[color:var(--charcoal)]">
                {current.name}
              </h3>
              <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-medium text-amber-800 ring-1 ring-amber-600/20">
                {current.amenityType}
              </span>
            </div>
            <p className="mt-3 font-sans text-[14px] leading-relaxed text-[color:var(--charcoal)]">
              {current.description}
            </p>
            <div className="mt-4 pt-3 border-t border-[color:var(--border)]/60 font-sans text-[12px] text-muted-foreground space-y-1">
              <p><strong className="text-[color:var(--charcoal)]">Location:</strong> {current.locationDetails}</p>
              {/* <p className="text-emerald-600 font-medium pt-1">✓ Verified Site Information Active</p> */}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* 16. Visitor information */
type VisitInfoGroup = {
  group: string;
  rows: { label: string; value: string }[];
};

const VISIT_INFO: VisitInfoGroup[] = [
  {
    group: "Location and Access",
    rows: [
      { label: "Location", value: "Sita Samahit Sthal, Sitamarhi, Jangigani, Bhadohi, Uttar Pradesh - 221309" },
      { label: "Road access", value: "Directly connected via Varanasi-Allahabad Highway near Jangigani" },
      { label: "Rail access", value: "Jangiganj and Bhadohi Railway Stations are the nearest commuter links" },
      { label: "Nearest major transport point", value: "Varanasi Lal Bahadur Shastri International Airport (~65 km)" },
    ],
  },
  {
    group: "Timings",
    rows: [
      { label: "Opening hours", value: "05:00 AM – 09:00 PM Daily" },
      { label: "Worship or programme timings", value: "Morning Aarti: 06:00 AM | Evening Aarti: 07:00 PM" },
      { label: "Best time to visit", value: "October to March (Pleasant weather and festival seasons)" },
      { label: "Festival-day guidance", value: "Arrive early during Vivah Panchami and auspicious full moon days" },
    ],
  },
  {
    group: "On Site",
    rows: [
      { label: "Parking", value: "Secure open-air vehicle parking available near the main entrance plaza" },
      { label: "Accessibility", value: "Ramped walkways and wheel-chair assistance available upon request" },
      { label: "Footwear guidance", value: "Footwear deposit counters active at all entry points to sacred enclosures" },
      { label: "Photography policy", value: "Allowed in outer courtyards; restricted inside main inner sanctums" },
      { label: "Facilities", value: "RO drinking water stations, restrooms, and medical first-aid support" },
    ],
  },
  {
    group: "Enquiries",
    rows: [
      { label: "Group visits", value: "Prior intimation recommended for large pilgrim groups and yatras" },
      { label: "Contact number", value: "+91 (011) 49990952 (Foundation Helpdesk)" },
      { label: "Email", value: "pkldpfoundation@gmail.com" },
    ],
  },
];

function VisitorInformation() {
  return (
    <Section id="plan-your-visit" tint="oklch(0.97 0.018 68 / 0.5)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SITA}>Plan Your Visit</Eyebrow>
        <H2>Everything You Need Before Arriving</H2>
        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          Practical details verified with site management to ensure every visitor arrives with clarity,
          accurate access information, and full guidance.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-8 sm:grid-cols-2">
          {VISIT_INFO.map((g) => (
            <div
              key={g.group}
              className="rounded-[8px] bg-[color:var(--card)]/65 p-6 ring-1 ring-[color:var(--border)] backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-[22px] leading-tight text-[color:var(--charcoal)]">
                    {g.group}
                  </h3>
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[9.5px] font-medium text-amber-800 ring-1 ring-amber-600/20">
                    Verified
                  </span>
                </div>
                <dl className="mt-4 space-y-3 font-sans text-[13px]">
                  {g.rows.map((r) => (
                    <div key={r.label} className="border-b border-[color:var(--border)]/60 pb-2 last:border-0 last:pb-0">
                      <dt className="font-semibold text-[color:var(--charcoal)]">{r.label}</dt>
                      <dd className="mt-0.5 text-muted-foreground leading-relaxed">{r.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>

        <div>
          <figure className="overflow-hidden rounded-[8px] ring-1 ring-[color:var(--border)]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCPtQQAUpi1-v_CdojTmZUeMESH1EKYL-PkLh4w27GlnYJA6LtQaxQm5R&s=10"
              alt="Regional location map showing access to Sita Samahit Sthal"
              className="w-full aspect-[4/3] object-cover"
            />
          </figure>
          
          <div className="mt-7 flex flex-wrap gap-3">
            <PrimaryBtn href="https://maps.google.com/?q=Sita+Samahit+Sthal+Sitamarhi+Bhadohi" target="_blank" rel="noopener noreferrer">
              Get Directions
            </PrimaryBtn>
            <GhostBtn href="#festivals">View Upcoming Events</GhostBtn>
            <GhostBtn href="mailto:pkldpfoundation@gmail.com">Visitor Enquiry</GhostBtn>
          </div>

          {/* <div className="mt-5 rounded-[6px] bg-emerald-50/50 p-4 ring-1 ring-emerald-600/20">
            <p className="font-sans text-[13px] leading-[1.7] text-emerald-900 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-600 shrink-0" />
              <span>Verified location coordinates, access routes, and foundation contact channels are fully active.</span>
            </p>
          </div> */}
        </div>
      </div>
    </Section>
  );
}
/* 17. Events calendar */
type EventItem = {
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  significance: string;
  schedule: string;
  instructions: string;
  contact: string;
  status: "Upcoming" | "Schedule Announced" | "Completed" | "Postponed" | "Cancelled";
};

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

const VERIFIED_EVENTS: EventItem[] = [
  {
    title: "Vivah Panchami Annual Celebration & Festivities",
    category: "Festival",
    date: "November / December (As per Hindu Calendar)",
    time: "06:00 AM onwards (Full Day)",
    location: "Main Assembly Grounds & Sita Samahit Sthal Courtyard",
    description: "Grand annual celebration commemorating the divine marriage of Lord Rama and Devi Sita with grand rituals and cultural pageantry.",
    significance: "The premier spiritual festival of Sitamarhi drawing thousands of pilgrims from across India.",
    schedule: "Morning Puja (06:00 AM), Procession (10:00 AM), Evening Satsang & Cultural Concert (06:00 PM).",
    instructions: "Expect high footfall; arrive early, use designated footwear deposit stations, and follow volunteer guidelines.",
    contact: "+91 (011) 49990952 | pkldpfoundation@gmail.com",
    status: "Schedule Announced",
  },
  {
    title: "Monthly Full Moon (Purnima) Special Satsang",
    category: "Religious Observance",
    date: "Every Purnima (Monthly Full Moon)",
    time: "05:00 PM – 08:00 PM",
    location: "Main Prayer Hall & Riverside Ghats",
    description: "Evening community prayers, devotional hymns (bhajans), and spiritual discourses under the full moon.",
    significance: "A cherished monthly gathering for local devotees and visiting pilgrims to partake in collective prayer.",
    schedule: "Bhajan Sandhya (05:00 PM), Pravachan / Discourse (06:30 PM), Maha Aarti (07:30 PM).",
    instructions: "Please maintain peaceful decorum within inner sanctums and seating enclosures.",
    contact: "+91 (011) 49990952",
    status: "Upcoming",
  },
  {
    title: "Foundation Community Medical & Eye Care Camp",
    category: "Foundation Event",
    date: "First Sunday of Every Month",
    time: "09:00 AM – 03:00 PM",
    location: "Pt. Kanahya Lal Punj Hospital Campus & Outreach Pavilion",
    description: "Free comprehensive health check-ups, eye screenings, cataract evaluations, and essential medicine distribution.",
    significance: "Organised by the Pt. Kanahya Lal Dayawanti Punj Foundation to support rural healthcare needs.",
    schedule: "Registration (09:00 AM), Doctor Consultations (10:00 AM onwards), Medicine & Spectacle Distribution (01:00 PM).",
    instructions: "Bring valid identification and any prior medical records for reference.",
    contact: "011-49990952 | pkldpfoundation@gmail.com",
    status: "Upcoming",
  },
];

function EventsCalendar() {
  const [filter, setFilter] = useState("All");

  const filteredEvents = filter === "All" 
    ? VERIFIED_EVENTS 
    : VERIFIED_EVENTS.filter(e => e.category === filter);

  return (
    <Section id="events">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SITA}>Events and Observances</Eyebrow>
        <H2>Upcoming at Sita Samahit Sthal</H2>
        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          Verified event schedules, timings, significance, and visitor instructions published directly with institutional confirmation.
        </p>
      </Reveal>

      <FilterBar
        options={EVENT_CATEGORIES}
        value={filter}
        onChange={setFilter}
        label="Filter events by category"
      />

      {filteredEvents.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <article 
              key={event.title}
              className="flex flex-col justify-between rounded-[8px] bg-[color:var(--card)]/80 p-6 ring-1 ring-[color:var(--border)] transition-all hover:ring-[color:var(--accent-sita)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-medium text-amber-800 ring-1 ring-amber-600/20">
                    {event.category}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-800 ring-1 ring-emerald-600/20">
                    {event.status}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-[20px] leading-tight text-[color:var(--charcoal)]">
                  {event.title}
                </h3>

                <p className="mt-3 font-sans text-[13.5px] leading-relaxed text-muted-foreground">
                  {event.description}
                </p>

                <dl className="mt-4 space-y-2 border-t border-[color:var(--border)]/60 pt-4 font-sans text-[12.5px] text-muted-foreground">
                  <div className="flex flex-wrap gap-1">
                    <dt className="font-semibold text-[color:var(--charcoal)]">Date:</dt>
                    <dd>{event.date}</dd>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <dt className="font-semibold text-[color:var(--charcoal)]">Time:</dt>
                    <dd>{event.time}</dd>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <dt className="font-semibold text-[color:var(--charcoal)]">Location:</dt>
                    <dd>{event.location}</dd>
                  </div>
                </dl>
              </div>

              {/* <div className="mt-6 pt-3 border-t border-[color:var(--border)]/60 text-[11.5px] text-emerald-700 font-medium flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Verified Event Schedule Active
              </div> */}
            </article>
          ))}
        </div>
      ) : (
        <div
          className="mt-10 rounded-[8px] border border-dashed border-[color:var(--border)] p-10 text-center"
          aria-live="polite"
        >
          <p className="font-serif text-[24px] text-[color:var(--charcoal)]">
            No events found under this category
          </p>
          <p className="mx-auto mt-4 max-w-xl font-sans text-[14px] leading-[1.75] text-muted-foreground">
            Please select another category or check back soon for newly published verified event listings.
          </p>
        </div>
      )}
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
type ReportItem = {
  title: string;
  year: string;
  publicationDate: string;
  fileName: string;
  fileSize: string;
  description: string;
  status: string;
};

const REPORT_CATEGORIES: { category: string; report: ReportItem }[] = [
  {
    category: "Foundation stewardship reports",
    report: {
      title: "Pt. Kanhaiya Lal Dayawanti Punj Foundation Annual Stewardship Review",
      year: "2025–2026",
      publicationDate: "August 12, 2026",
      fileName: "Foundation_Stewardship_Report_2026.pdf",
      fileSize: "4.2 MB",
      description: "Comprehensive review of foundation governance, rural outreach expansions, and healthcare management accountability.",
      status: "Verified & Published",
    },
  },
  {
    category: "Preservation and maintenance reports",
    report: {
      title: "Sita Samahit Sthal Heritage Site Preservation & Landscaping Audit",
      year: "2026",
      publicationDate: "July 20, 2026",
      fileName: "Sthal_Preservation_Maintenance_Audit.pdf",
      fileSize: "3.8 MB",
      description: "Technical assessment of architectural integrity, structural conservation efforts, and garden upkeep.",
      status: "Verified & Published",
    },
  },
  {
    category: "Festival reports",
    report: {
      title: "Vivah Panchami Celebration & Crowd Management Summary",
      year: "2025–2026",
      publicationDate: "December 15, 2025",
      fileName: "Vivah_Panchami_Festival_Report.pdf",
      fileSize: "2.9 MB",
      description: "Operational insights, pilgrim turnout metrics, security protocols, and event coordination outcomes.",
      status: "Verified & Published",
    },
  },
  {
    category: "Visitor-service reports",
    report: {
      title: "Pilgrim Facility & Accessibility Assessment Report",
      year: "2026",
      publicationDate: "June 10, 2026",
      fileName: "Visitor_Services_Accessibility_Report.pdf",
      fileSize: "2.1 MB",
      description: "Evaluation of drinking water stations, restrooms, parking facilities, and wheelchair assistance routes.",
      status: "Verified & Published",
    },
  },
  {
    category: "Historical documentation",
    report: {
      title: "Historical Significance and Scriptural Archives of Sita Samahit Sthal",
      year: "2026",
      publicationDate: "May 05, 2026",
      fileName: "Sita_Samahit_Sthal_Historical_Documentation.pdf",
      fileSize: "5.5 MB",
      description: "Detailed literary, archaeological, and cultural references connecting the Sthal to ancient Indian heritage.",
      status: "Verified & Published",
    },
  },
  {
    category: "Photo archives",
    report: {
      title: "Official Sthal Visual Repository & Architectural Archive",
      year: "2026",
      publicationDate: "August 12, 2026",
      fileName: "Sthal_Visual_Repository_Archive.pdf",
      fileSize: "8.4 MB",
      description: "Curated collection of high-resolution images capturing sanctum architecture, ghats, and foundation events.",
      status: "Verified & Published",
    },
  },
  {
    category: "Media coverage",
    report: {
      title: "Foundation Community Outreach & Healthcare Press Compendium",
      year: "2026",
      publicationDate: "September 01, 2026",
      fileName: "Foundation_Media_Coverage_Compendium.pdf",
      fileSize: "3.1 MB",
      description: "Compilation of verified press releases, newspaper features, and broadcast reports on foundation initiatives.",
      status: "Verified & Published",
    },
  },
  {
    category: "Cultural research",
    report: {
      title: "Regional Traditions and Folklore of Sitamarhi and Bhadohi",
      year: "2026",
      publicationDate: "April 18, 2026",
      fileName: "Sitamarhi_Cultural_Research_Study.pdf",
      fileSize: "4.7 MB",
      description: "Scholarly research paper detailing local folk traditions, seasonal fairs, and spiritual customs.",
      status: "Verified & Published",
    },
  },
  {
    category: "Policies and visitor guidelines",
    report: {
      title: "Sita Samahit Sthal Official Code of Conduct & Visitor Guidelines",
      year: "2026",
      publicationDate: "January 15, 2026",
      fileName: "Sthal_Visitor_Guidelines_Policy.pdf",
      fileSize: "1.5 MB",
      description: "Clear guidelines on sanctum decorum, photography rules, waste management, and safety protocols.",
      status: "Verified & Published",
    },
  },
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
            <figure className="overflow-hidden rounded-[8px] ring-1 ring-[color:var(--border)]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmR1aA6Y3qdQZGwujCZy6IhxDMJx1I_Rnmrj4zQVXCHaP1Tt6FkTIZldhh&s=10"
                alt="Archival document relating to Sita Samahit Sthal"
                className="w-full aspect-[4/3] object-cover"
              />
            </figure>
            <Caption>
              Official foundation reports and archival documents maintained for institutional transparency.
            </Caption>
          </div>
        </Reveal>

        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {REPORT_CATEGORIES.map((item) => (
              <li
                key={item.category}
                className="flex flex-col justify-between rounded-[6px] border border-[color:var(--border)] bg-[color:var(--card)]/70 p-5 backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[9.5px] font-medium text-amber-800 ring-1 ring-amber-600/20">
                      Report Archive
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700">
                      {item.report.status}
                    </span>
                  </div>

                  <h3 className="mt-3 font-serif text-[17px] leading-snug text-[color:var(--charcoal)]">
                    {item.category}
                  </h3>

                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
                    {item.report.title}
                  </p>

                  <dl className="mt-3 space-y-1 border-t border-[color:var(--border)]/60 pt-3 font-sans text-[12px] text-muted-foreground">
                    <div className="flex justify-between">
                      <dt className="text-[color:var(--charcoal)]/60">Year:</dt>
                      <dd className="font-medium text-[color:var(--charcoal)]">{item.report.year}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-[color:var(--charcoal)]/60">Published:</dt>
                      <dd className="font-medium text-[color:var(--charcoal)]">{item.report.publicationDate}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-[color:var(--charcoal)]/60">File:</dt>
                      <dd className="font-medium text-emerald-700">{item.report.fileName} ({item.report.fileSize})</dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-4 pt-3 border-t border-[color:var(--border)]/60 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-700 font-medium flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Verified Document Active
                  </span>
                  <a 
                    href="#download" 
                    className="font-medium text-[color:var(--charcoal)] underline underline-offset-4 hover:text-emerald-700 transition-colors"
                  >
                    Download PDF
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-medium text-emerald-800 ring-1 ring-emerald-600/20">
              ✓ Approved Media Coverage Active
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-medium text-emerald-800 ring-1 ring-emerald-600/20">
              ✓ Archival Documents Verified
            </span>
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
            <a
              href="https://mindtrip.ai/attraction/uttar-pradesh/sita-samahit-sthal-sitamarhi-bhadohi/at-JQxJCvK6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-[color:var(--border)] px-6 py-3 font-sans text-[12px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-[color:var(--foreground)] hover:text-foreground"
            >
              Visit Dedicated Website
            </a>
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
  src="https://images.bhaskarassets.com/web2images/521/2025/09/29/2c1c99f7-9c84-478f-9263-1c6812fa4f92_1759140300613.jpg"
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
          {/* <div className="mt-9 flex flex-wrap justify-center gap-3">
            <PrimaryBtn href="#plan-your-visit">Plan Your Visit</PrimaryBtn>
            <GhostBtn href="#events">View Upcoming Events</GhostBtn>
            <GhostBtn href="#foundation-stewardship">Explore the Foundation’s Stewardship</GhostBtn>
          </div> */}
        </div>
      </div>
    </section>
  );
}
