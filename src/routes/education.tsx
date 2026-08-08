import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { AssetPlaceholder } from "@/components/AssetPlaceholder";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education | Punj Foundation, Sitamarhi" },
      {
        name: "description",
        content:
          "Dayawanti Punj Model School and Dayawanti Punj Degree College — the Punj Foundation's educational mission in Sitamarhi: learning, inclusion, student support and opportunity.",
      },
      { property: "og:title", content: "Learning That Creates Opportunity" },
      {
        property: "og:description",
        content:
          "School education, higher learning and student development in and around Sitamarhi through the Pt. Kanahya Lal Dayawanti Punj Foundation.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducationPage,
});

/* ---------------- helpers ---------------- */

const OCHRE = "var(--accent-education)";

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
      { threshold: 0.12 },
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

function Section({
  id,
  children,
  className = "",
  tint,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tint?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-5 py-20 md:px-10 md:py-28 ${className}`}
      style={tint ? { background: tint } : undefined}
    >
      <div className="mx-auto w-full max-w-[1360px]">{children}</div>
    </section>
  );
}

function Pending({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-[3px] border border-dashed border-[color:var(--border)] bg-[color:var(--muted)]/50 px-2 py-[3px] font-sans text-[10.5px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
      {children}
    </span>
  );
}

function Caption({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 font-sans text-[12px] italic leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

const btnBase =
  "inline-flex items-center justify-center rounded-full px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.18em] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-education)]";

function PrimaryBtn({
  children,
  href,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const cls = `${btnBase} bg-[color:var(--charcoal)] text-[color:var(--ivory)] hover:bg-[color:var(--brown)]`;
  return href ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

function GhostBtn({ children, href }: { children: ReactNode; href?: string }) {
  const cls = `${btnBase} border border-[color:var(--charcoal)]/25 text-[color:var(--charcoal)] hover:border-[color:var(--accent-education)] hover:text-[color:var(--accent-education)]`;
  return (
    <a href={href ?? "#"} className={cls}>
      {children}
    </a>
  );
}

function Figure({
  asset,
  alt,
  aspect = "4 / 3",
  caption,
  className = "",
}: {
  asset: string;
  alt: string;
  aspect?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-[4px] ring-1 ring-[color:var(--border)]">
        <AssetPlaceholder name={asset} label={alt} aspect={aspect} />
      </div>
      {caption ? <figcaption><Caption>{caption}</Caption></figcaption> : null}
    </figure>
  );
}

/* ---------------- page ---------------- */

function EducationPage() {
  return (
    <div className="min-h-dvh bg-[color:var(--ivory)]">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Ecosystem />
        <SchoolFeature />
        <CollegeFeature />
        <ConnectedJourney />
        <BeyondClassroom />
        <Inclusion />
        <Scholarships />
        <StudentJourney />
        <Facilities />
        <Educators />
        <Achievements />
        <Stories />
        <ImpactNumbers />
        <Admissions />
        <Gallery />
        <Updates />
        <Closing />
      </main>
      <SiteFooter />
    </div>
  );
}

/* 1. Hero */
function Hero() {
  return (
    <section
      className="px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.98 0.018 85) 0%, oklch(0.975 0.012 100) 55%, var(--ivory) 100%)",
      }}
    >
      <div className="mx-auto grid w-full max-w-[1360px] items-center gap-12 md:grid-cols-[0.92fr_1.08fr] md:gap-16">
        <Reveal>
          <Eyebrow tone={OCHRE}>Education</Eyebrow>
          <h1 className="mt-5 font-serif text-[42px] leading-[1.06] text-[color:var(--charcoal)] md:text-[64px]">
            Learning That Creates Opportunity
          </h1>
          <p className="mt-7 max-w-xl font-sans text-[15.5px] leading-[1.75] text-muted-foreground">
            The Foundation believes that education is one of the strongest foundations of long-term
            community development.
          </p>
          <p className="mt-4 max-w-xl font-sans text-[15.5px] leading-[1.75] text-muted-foreground">
            Through Dayawanti Punj Model School, Dayawanti Punj Degree College and its wider
            student-support initiatives, the Foundation works to bring learning, confidence,
            aspiration and opportunity closer to young people in and around Sitamarhi.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <PrimaryBtn href="#ecosystem">Explore Our Institutions</PrimaryBtn>
            <GhostBtn href="#admissions">Admissions &amp; Enquiries</GhostBtn>
          </div>
          <a
            href="#student-stories"
            className="mt-6 inline-block font-serif text-[16px] italic text-[color:var(--charcoal)]/70 underline-offset-4 hover:text-[color:var(--accent-education)] hover:underline"
          >
            Discover Student Stories →
          </a>
        </Reveal>

        <Reveal>
          <div className="relative">
            <div
  style={{
    aspectRatio: "16 / 11",
    overflow: "hidden",
    borderRadius: "12px", // optional
  }}
>
  <img
    src="https://dpms.in/wp-content/uploads/2025/08/0F2A2035.jpg" // Update with your image path
    alt="Students participating in a classroom activity at Dayawanti Punj Model School"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>
            <div className="absolute -bottom-8 -left-6 hidden w-[190px] md:block">
              <div className="overflow-hidden rounded-[4px] ring-1 ring-[color:var(--border)] shadow-[0_18px_50px_-24px_rgba(0,0,0,0.4)]">
                <div
  style={{
    aspectRatio: "4 / 3",
    overflow: "hidden",
  }}
>
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvbYBp7WXi8H5HL-IdnSon0U2MYvDYx5m545an4HlXqk_Ev71COB1nd4&s=10" // Update with your image path
    alt="Students participating in a classroom activity at Dayawanti Punj Model School"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 2. Philosophy */
function Philosophy() {
  return (
    <Section>
      <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <Reveal>
          <Eyebrow tone={OCHRE}>Our Education Philosophy</Eyebrow>
          <h2 className="mt-5 max-w-lg font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
            Education Beyond the Classroom
          </h2>
          <div className="mt-7 max-w-xl space-y-5 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
            <p>
              The Foundation’s approach to education extends beyond examinations and formal
              qualifications.
            </p>
            <p>
              It seeks to create learning environments in which students can develop academic
              ability, confidence, discipline, curiosity, character and the capacity to participate
              meaningfully in society.
            </p>
            <p>
              For rural students, access to quality education can influence not only an individual
              future, but the direction of an entire family and community.
            </p>
            <p>
              The Foundation therefore approaches education as long-term institution-building —
              creating places where generations of students can learn, grow and imagine wider
              possibilities.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="rounded-[6px] p-6 md:p-8"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.97 0.02 95 / 0.75), oklch(0.97 0.015 200 / 0.55))",
            }}
          >
           <div
  style={{
    aspectRatio: "5 / 4",
    overflow: "hidden",
    borderRadius: "12px",
  }}
>
  <img
    src="https://dpms.in/wp-content/uploads/2025/08/0F2A6204.jpg" // Replace with your image path
    alt="Early photograph from the Foundation's educational work in Sitamarhi"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>

<p
  style={{
    marginTop: "8px",
    fontSize: "14px",
    color: "#6b7280",
    textAlign: "center",
  }}
>
  Archival image from the Foundation’s educational work. ADD VERIFIED CAPTION AND DATE.
</p>

            <p className="mt-6 border-l-2 pl-5 font-serif text-[20px] italic leading-[1.45] text-[color:var(--charcoal)]" style={{ borderColor: OCHRE }}>
              “Education creates the confidence to imagine a different future.”
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 3. Ecosystem */
const SCHOOL_FOCUS = [
  "Academic learning",
  "Student confidence",
  "Science and practical learning",
  "Digital education",
  "Sports",
  "Arts and culture",
  "Girl-child education",
  "Character and discipline",
];

const COLLEGE_FOCUS = [
  "Access to higher education",
  "Academic development",
  "Faculty guidance",
  "Career awareness",
  "Student confidence",
  "Skills and participation",
  "Rural access to opportunity",
];

function InstitutionPanel({
  asset,
  image,
  alt,
  name,
  blurb,
  focus,
  exploreHref,
  admissionsHref,
  exploreLabel,
  admissionsLabel,
}: {
  asset?: string;
  image?: string;
  alt: string;
  name: string;
  blurb: string;
  focus: string[];
  exploreHref: string;
  admissionsHref: string;
  exploreLabel: string;
  admissionsLabel: string;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[6px] bg-[color:var(--offwhite)] ring-1 ring-[color:var(--border)]">
      {image ? (
        <img
          src={image}
          alt={alt}
          className="h-[280px] w-full object-cover"
        />
      ) : (
        <AssetPlaceholder
          name={asset ?? ""}
          label={alt}
          aspect="16 / 10"
        />
      )}

      <div className="flex flex-1 flex-col p-7 md:p-9">
        <h3 className="font-serif text-[27px] leading-tight text-[color:var(--charcoal)] md:text-[31px]">
          {name}
        </h3>

        <p className="mt-4 font-sans text-[14.5px] leading-[1.75] text-muted-foreground">
          {blurb}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {focus.map((f) => (
            <li
              key={f}
              className="rounded-full bg-[color:var(--muted)]/70 px-3 py-[6px] font-sans text-[11.5px] tracking-wide text-[color:var(--charcoal)]/80"
            >
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <PrimaryBtn href={exploreHref}>{exploreLabel}</PrimaryBtn>
          <GhostBtn href={admissionsHref}>{admissionsLabel}</GhostBtn>
        </div>
      </div>
    </article>
  );
}

function Ecosystem() {
  return (
    <Section id="ecosystem" tint="oklch(0.975 0.01 200 / 0.45)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={OCHRE}>The Foundation’s Education Ecosystem</Eyebrow>

        <h2 className="mt-5 font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
          From School Education to Higher Learning
        </h2>

        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          The Foundation’s educational work supports students at different stages of their
          development — from foundational school learning to higher education, personal growth and
          preparation for adult life.
        </p>
      </Reveal>

      <Reveal className="mt-14">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <InstitutionPanel
            image="https://content.jdmagicbox.com/comp/bhadohi/g9/9999p5414.5414.110223220140.w9g9/catalogue/dayawanti-punj-model-school-khamaria-srn-bhadohi-schools-qy2ch7jclj.jpg"
            alt="Exterior of Dayawanti Punj Model School"
            name="Dayawanti Punj Model School"
            blurb="School education rooted in Sitamarhi, combining a strong academic foundation with confidence, creativity, physical development and social awareness."
            focus={SCHOOL_FOCUS}
            exploreHref="#school"
            admissionsHref="#admissions"
            exploreLabel="Explore the School"
            admissionsLabel="School Admissions"
          />

          <InstitutionPanel
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQTfv44SVHwdP1FmHlHjWiIqxhhH81lowvee58dXdkhxfDfIxF0mgYiAy&s=10"
            alt="Exterior of Dayawanti Punj Degree College"
            name="Dayawanti Punj Degree College"
            blurb="Higher learning closer to home — bringing college education, guidance and wider professional possibilities within reach of students from Sitamarhi and surrounding communities."
            focus={COLLEGE_FOCUS}
            exploreHref="#college"
            admissionsHref="#admissions"
            exploreLabel="Explore the College"
            admissionsLabel="College Admissions"
          />
        </div>
      </Reveal>
    </Section>
  );
}

/* 4. School feature */
function SchoolFeature() {
  return (
    <Section id="school">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <Reveal>
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-6">
            <div className="overflow-hidden rounded-[6px]">
  <img
    src="https://skoodos.com/public/uploads/optimized/1682671917.png"
    alt="Students at Dayawanti Punj Model School during school life"
    className="h-full w-full object-cover"
    style={{ aspectRatio: "16 / 9" }}
  />
</div>
            </div>
            <div className="col-span-3">
             <div className="overflow-hidden rounded-[6px]">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYw5yc-4BFS0FqZK7eKzPHddYm17mBwBCN4LXWgzAk5aGHpCzrOrxtqyA&s=10"
    alt="Students and a teacher in a classroom at Dayawanti Punj Model School"
    className="h-full w-full object-cover"
    style={{ aspectRatio: "4 / 3" }}
  />
</div>
            </div>
            <div className="col-span-3">
             <div className="overflow-hidden rounded-[6px]">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNATaRa5W-3CRKLCCEk2-GTUhBO2yuJb3Mgd8XHzX0p8WijYulqbTj6xE&s=10"
    alt="Students reading in the school library"
    className="h-full w-full object-cover"
    style={{ aspectRatio: "4 / 3" }}
  />
</div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <Eyebrow tone={OCHRE}>School Education</Eyebrow>
          <h2 className="mt-5 font-serif text-[32px] leading-[1.12] text-[color:var(--charcoal)] md:text-[42px]">
            Dayawanti Punj Model School
          </h2>
          <div className="mt-6 space-y-5 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
            <p>
              Dayawanti Punj Model School reflects the Foundation’s commitment to creating access to
              high-quality school education in Sitamarhi.
            </p>
            <p>
              The school aims to provide students with a strong academic foundation while supporting
              discipline, confidence, creativity, physical development and social awareness.
            </p>
          </div>

          <h3 className="mt-9 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Key focus areas
          </h3>
          <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {SCHOOL_FOCUS.map((f) => (
              <li
                key={f}
                className="flex items-baseline gap-2 font-sans text-[14.5px] text-[color:var(--charcoal)]/85"
              >
                <span aria-hidden="true" className="text-[color:var(--accent-education)]">
                  —
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            <Pending>Add verified school affiliation</Pending>
            <Pending>Add verified classes offered</Pending>
            <Pending>Add verified student enrolment</Pending>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryBtn href="/education/dayawanti-punj-model-school">Explore the School</PrimaryBtn>
            <GhostBtn href="/education/dayawanti-punj-model-school/admissions">
              School Admissions
            </GhostBtn>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 5. College feature */
function CollegeFeature() {
  return (
    <Section id="college" tint="oklch(0.975 0.012 150 / 0.4)">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <Reveal>
          <Eyebrow tone={OCHRE}>Higher Learning</Eyebrow>
          <h2 className="mt-5 font-serif text-[32px] leading-[1.12] text-[color:var(--charcoal)] md:text-[42px]">
            Dayawanti Punj Degree College
          </h2>
          <div className="mt-6 space-y-5 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
            <p>
              Dayawanti Punj Degree College extends the Foundation’s educational mission into higher
              learning.
            </p>
            <p>
              Its purpose is to bring college education and wider professional possibilities closer
              to students from Sitamarhi and surrounding communities — a bridge between school
              education, higher studies, personal development and future opportunity.
            </p>
          </div>

          <h3 className="mt-9 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Key focus areas
          </h3>
          <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {COLLEGE_FOCUS.map((f) => (
              <li
                key={f}
                className="flex items-baseline gap-2 font-sans text-[14.5px] text-[color:var(--charcoal)]/85"
              >
                <span aria-hidden="true" className="text-[color:var(--accent-education)]">
                  —
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            <Pending>Add verified course list</Pending>
            <Pending>Add verified university affiliation</Pending>
            <Pending>Add verified eligibility</Pending>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryBtn href="/education/dayawanti-punj-degree-college">
              Explore the College
            </PrimaryBtn>
            <GhostBtn href="/education/dayawanti-punj-degree-college/admissions">
              College Admissions
            </GhostBtn>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-6">
             <div className="aspect-video overflow-hidden rounded-[6px]">
  <img
    src="https://cache.careers360.mobi/media/schools/social-media/media-gallery/17550/2026/5/7/Classroom.jpg"
    alt="Students studying at Dayawanti Punj Degree College"
    className="h-full w-full object-cover"
  />
</div>
            </div>
            <div className="col-span-3">
              <div className="aspect-[4/3] overflow-hidden rounded-[6px]">
  <img
    src="https://dpms.in/wp-content/uploads/2025/08/0F2A0858.jpg"
    alt="Students in a college classroom"
    className="h-full w-full object-cover"
  />
</div>
            </div>
            <div className="col-span-3">
             <div className="aspect-[4/3] overflow-hidden rounded-[6px]">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGy2sLw5l99B7RNAK0kov7_B_8lKX7jj2Dh5m4I95W52KIHPg8fdUw6Xw&s=10"
    alt="Students at a seminar or workshop at the college"
    className="h-full w-full object-cover"
  />
</div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 6. Connected journey bridge */
const FLOW = [
  "School Learning",
  "Student Development",
  "Higher Education",
  "Skills and Opportunity",
  "Community Contribution",
];

function ConnectedJourney() {
  return (
    <Section>
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-[30px] leading-[1.12] text-[color:var(--charcoal)] md:text-[40px]">
          A Connected Educational Journey
        </h2>
        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          The Foundation’s educational institutions represent different stages of one wider purpose:
          helping students move from foundational learning to higher education with confidence,
          continuity and support.
        </p>
      </Reveal>

      <Reveal className="mt-14">
        <ol className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between">
          {FLOW.map((step, i) => (
            <li key={step} className="flex flex-1 items-center gap-3 md:flex-col md:gap-4">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full md:order-1"
                style={{ background: OCHRE }}
              />
              <span className="font-serif text-[19px] leading-tight text-[color:var(--charcoal)] md:order-2 md:text-center md:text-[20px]">
                {step}
              </span>
              {i < FLOW.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="ml-auto hidden h-px flex-1 md:block"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--border), transparent)",
                  }}
                />
              ) : null}
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

/* 7. Learning beyond the classroom */
const PROGRAMMES = [
  {
    title: "Sports and Physical Development",
    copy: "Supporting teamwork, discipline, fitness and confidence.",
    image: "https://dpms.in/wp-content/uploads/2025/08/0F2A1941-2.jpg",
    alt: "Students taking part in a sports activity",
    feature: true,
  },
  {
    title: "Arts and Cultural Activities",
    copy: "Encouraging creativity, expression and cultural participation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFIaZCgsZefAX1N-I09A52lZ8CxAgZlEAzrdSLkIG-sXbn2Myd6p2-C08&s=10",
    alt: "Students in a cultural or music activity",
    feature: true,
  },
  {
    title: "Science and Practical Learning",
    copy: "Helping students connect classroom concepts with observation and experimentation.",
    image: "https://images.hindustantimes.com/img/2024/07/06/400x225/A-student-presenting-his-project-on-the-Second-day_1720283934003.jpg",
    alt: "Students participating in a school science activity",
  },
  {
    title: "Digital Learning",
    copy: "Building familiarity with computers, technology and modern learning tools.",
    image: "https://dpms.in/wp-content/uploads/2025/08/0F2A6044.jpg",
    alt: "Students using computers in a digital-learning session",
  },
  {
    title: "Skills and Career Readiness",
    copy: "Preparing students for future education, employment and wider opportunity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi05EQaRE3m2uOdoIcrs3Dpyds5-XkEbBdxNjhRfJj2jTLXvYS8vKwy7c&s=10",
    alt: "Students in a practical skills or career-preparation workshop",
  },
  {
    title: "Leadership and Community Participation",
    copy: "Encouraging responsibility, communication and constructive participation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGkG7FlhWgBt8e7fYdkPJSNrtnyz0TAQLqjga6WUt3oZwdz0fNVty6H4&s=10",
    alt: "Students taking part in a leadership or public-speaking activity",
  },
];

function BeyondClassroom() {
  const features = PROGRAMMES.filter((p) => p.feature);
  const rest = PROGRAMMES.filter((p) => !p.feature);
  return (
    <Section tint="oklch(0.975 0.014 95 / 0.5)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={OCHRE}>Student Development</Eyebrow>
        <h2 className="mt-5 font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
          Learning Beyond Textbooks and Examinations
        </h2>
        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          Education is strengthened when students are given opportunities to explore, participate,
          collaborate and take responsibility. The Foundation’s educational institutions should
          provide space for academic learning alongside sports, culture, practical skills, digital
          access, leadership and community participation.
        </p>
      </Reveal>

      <Reveal className="mt-14">
        <div className="grid gap-6 lg:grid-cols-2">
          {features.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-[6px] bg-[color:var(--offwhite)] ring-1 ring-[color:var(--border)]">
              <div className="aspect-video overflow-hidden">
  <img
    src={p.image}
    alt={p.alt}
    className="h-full w-full object-cover"
  />
</div>
              <div className="p-7">
                <h3 className="font-serif text-[24px] leading-tight text-[color:var(--charcoal)]">
                  {p.title}
                </h3>
                <p className="mt-3 font-sans text-[14.5px] leading-[1.75] text-muted-foreground">
                  {p.copy}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-[6px] bg-[color:var(--offwhite)] ring-1 ring-[color:var(--border)]">
              <div className="aspect-[4/3] overflow-hidden">
  <img
    src={p.image}
    alt={p.alt}
    className="h-full w-full object-cover"
  />
</div>
              <div className="p-5">
                <h3 className="font-serif text-[20px] leading-tight text-[color:var(--charcoal)]">
                  {p.title}
                </h3>
                <p className="mt-2 font-sans text-[13.5px] leading-[1.7] text-muted-foreground">
                  {p.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* 8. Inclusion */
const INCLUSION = [
  { title: "Access", copy: "Helping students enter formal education." },
  { title: "Participation", copy: "Creating environments in which students can engage fully." },
  {
    title: "Retention",
    copy: "Supporting students so that education can continue through important stages.",
  },
  { title: "Aspiration", copy: "Helping young people imagine and prepare for wider futures." },
];

function Inclusion() {
  return (
    <Section>
      <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
        <Reveal>
         <div className="overflow-hidden rounded-[6px]">
  <img
    src="https://content.jdmagicbox.com/v2/comp/bhadohi/a9/9999p5414.5414.110123122915.q2a9/catalogue/dayawanti-punj-model-school-bhadohi-ho-bhadohi-cbse-schools-8ksnow3id6-250.jpg"
    alt="Girls participating in a classroom lesson"
    className="h-full w-full object-cover"
    style={{ aspectRatio: "4 / 5" }}
  />
</div>
        </Reveal>
        <Reveal>
          <Eyebrow tone={OCHRE}>Access and Inclusion</Eyebrow>
          <h2 className="mt-5 font-serif text-[32px] leading-[1.12] text-[color:var(--charcoal)] md:text-[44px]">
            Expanding Opportunity for Girls and Rural Students
          </h2>
          <div className="mt-6 space-y-5 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
            <p>
              Access to education is shaped by more than the availability of a classroom. Distance,
              family circumstances, social expectations, financial pressure and confidence can all
              influence whether a student is able to continue learning.
            </p>
            <p>
              The Foundation’s educational work should therefore support not only enrolment, but
              also participation, continuity and aspiration — particularly for girls and students
              from rural communities.
            </p>
          </div>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {INCLUSION.map((i) => (
              <div
                key={i.title}
                className="rounded-[5px] border-l-2 bg-[color:var(--offwhite)]/70 p-5"
                style={{ borderColor: OCHRE }}
              >
                <dt className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-[color:var(--charcoal)]">
                  {i.title}
                </dt>
                <dd className="mt-2 font-sans text-[14px] leading-[1.7] text-muted-foreground">
                  {i.copy}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

/* 9. Scholarships */
const SUPPORT_AREAS = [
  { title: "Scholarships", note: "Add verified scholarship programme" },
  { title: "Fee Support", note: "Add eligibility criteria" },
  { title: "Learning Materials", note: "Add verified details" },
  { title: "Mentoring", note: "Add verified details" },
  { title: "Career Guidance", note: "Add verified details" },
  { title: "Emergency Educational Assistance", note: "Add verified details" },
];

function Scholarships() {
  return (
    <Section id="scholarships" tint="oklch(0.972 0.014 210 / 0.5)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={OCHRE}>Scholarships and Student Support</Eyebrow>
        <h2 className="mt-5 font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
          Helping Students Continue Their Education
        </h2>
        <div className="mt-6 space-y-5 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          <p>
            For some students, academic ability alone is not enough to ensure educational
            continuity. Financial constraints, personal circumstances or limited access to guidance
            can interrupt an otherwise promising educational journey.
          </p>
          <p>
            The Foundation’s student-support initiatives are presented here as a means of helping
            deserving students remain connected with learning and opportunity. Programme details are
            published only once verified.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-12">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORT_AREAS.map((s) => (
            <li
              key={s.title}
              className="rounded-[5px] bg-[color:var(--offwhite)] p-6 ring-1 ring-[color:var(--border)]"
            >
              <h3 className="font-serif text-[21px] text-[color:var(--charcoal)]">{s.title}</h3>
              <div className="mt-3">
                <Pending>{s.note}</Pending>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          <Pending>Add application timeline</Pending>
          <Pending>Add number of students supported</Pending>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryBtn href="/education/scholarships">Scholarship Information</PrimaryBtn>
          <GhostBtn href="/education/student-support-enquiry">Student Support Enquiry</GhostBtn>
        </div>
      </Reveal>
    </Section>
  );
}

/* 10. Student journey */
const JOURNEY = [
  {
    n: "01",
    title: "Entering Education",
    copy: "A welcoming beginning and access to structured learning.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjpSYLUNZYvSBiHeSQ-QTT_MWG2eZX22cx3eNqANGWGq_YrAwWIxqhhY&s=10",
  },
  {
    n: "02",
    title: "Building Foundations",
    copy: "Literacy, numeracy, knowledge, discipline and curiosity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_i92nXIxIfxQruswy9mnxIF2HdswXGESN-N9_ezmuUi-bRsANmN-Ek5o&s=10",
  },
  {
    n: "03",
    title: "Discovering Strengths",
    copy: "Sports, science, culture, technology and participation.",
    image: "https://content.jdmagicbox.com/v2/comp/bhadohi/a9/9999p5414.5414.110123122915.q2a9/catalogue/dayawanti-punj-model-school-bhadohi-ho-bhadohi-cbse-schools-fh03q7jyr3-250.jpg",
  },
  {
    n: "04",
    title: "Preparing for Higher Learning",
    copy: "Academic guidance, confidence and informed choices.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJfQ1MY3vOnKIcN3_DNs36vBFkDfUsaZLaYWsMTBcPhg9nwv8vraE1rs&s=10",
  },
  {
    n: "05",
    title: "Accessing College Education",
    copy: "Opportunities for continued study closer to home.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGy2sLw5l99B7RNAK0kov7_B_8lKX7jj2Dh5m4I95W52KIHPg8fdUw6Xw&s=10",
  },
  {
    n: "06",
    title: "Moving Forward",
    copy: "Skills, careers, higher education and community contribution.",
    image: "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/17332/2022/4/8/Campus%20Side%20View%20of%20Dayawanti%20Punj%20Training%20Institute%20Bhadohi_Campus-View.png",
  },
];

function StudentJourney() {
  return (
    <Section>
      <Reveal className="max-w-3xl">
        <Eyebrow tone={OCHRE}>A Student’s Journey</Eyebrow>
        <h2 className="mt-5 font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
          From the First Classroom to Future Possibility
        </h2>
        <p className="mt-6 font-sans text-[14.5px] leading-[1.8] text-muted-foreground">
          Every student’s path is different. The stages below describe the kinds of support an
          educational institution can offer, not a guaranteed or identical route.
        </p>
      </Reveal>

      <Reveal className="mt-14">
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {JOURNEY.map((s) => (
            <li key={s.n} className="relative">
              <div className="overflow-hidden rounded-[4px] ring-1 ring-[color:var(--border)]">
<div className="aspect-[4/3] overflow-hidden">
  <img
    src={s.image}
    alt={s.title}
    className="h-full w-full object-cover"
  />
</div>              </div>
              <p
                className="mt-4 font-sans text-[10.5px] font-medium uppercase tracking-[0.28em]"
                style={{ color: OCHRE }}
              >
                {s.n}
              </p>
              <h3 className="mt-2 font-serif text-[19px] leading-tight text-[color:var(--charcoal)]">
                {s.title}
              </h3>
              <p className="mt-2 font-sans text-[13px] leading-[1.7] text-muted-foreground">
                {s.copy}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

/* 11. Facilities */
const FACILITIES = [
  {
    title: "Classrooms",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT189FV8dnd7TQzkx2X5crvcOw96Tr7ppFNgblGlcdGf1rIMjl-aDlLz2a&s=10",
    alt: "Students and a teacher in a classroom at Dayawanti Punj Model School",
  },
  {
    title: "Science Laboratories",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMI4SpPDJWCGDnYi1jvbsxujYhAy8DNxVPX7Ol5BLSqw&s",
    alt: "Students participating in a school science activity",
  },
  {
    title: "Computer Facilities",
    image: "https://cache.careers360.mobi/media/schools/social-media/media-gallery/17550/2026/5/7/Computer%20Lab.jpg",
    alt: "Students using computers in a digital-learning session",
  },
  {
    title: "Libraries",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlnqVzLjcHop7ylNo6lGO579zQrrLWBJgHXNy_XZiujNSJiiFNaieZoo&s=10",
    alt: "Students reading in the school library",
  },
  {
    title: "Sports Spaces",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Pc26fbfwhkwjqgGihz7meWWKUIrIKLlYM2vqEJH62omC7JPjRHS3g8c&s=10",
    alt: "Students taking part in a sports activity",
  },
  {
    title: "Cultural and Activity Spaces",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvdxRAO22kTxuBUoBp4v1xpSH4juNmZvb0N8HqUs1gfe-v6Cgym5hO-0&s=10",
    alt: "Students in a cultural or music activity",
  },
  {
    title: "College Classrooms",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgsH4Pf8xMNyUrXB4lOvwsQ5mdh2DXFsuiM4HqiIYUTGo0qaavzPKxuKs&s=10",
    alt: "Students in a college classroom",
  },
  {
    title: "College Library",
    image: "https://content3.jdmagicbox.com/comp/bhadohi/g9/9999p5414.5414.110223220140.w9g9/catalogue/dayawanti-punj-model-school-khamaria-srn-bhadohi-cbse-schools-6qgvg0y50e.jpg",
    alt: "Students in the college library",
  },
];

function Facilities() {
  return (
    <Section tint="oklch(0.974 0.012 150 / 0.45)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={OCHRE}>Places That Support Learning</Eyebrow>
        <h2 className="mt-5 font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
          Educational Facilities and Learning Environments
        </h2>
        <p className="mt-6 font-sans text-[14.5px] leading-[1.8] text-muted-foreground">
          Facilities are listed here as areas of the Foundation’s educational environment. Each entry
          is published only once confirmed by the institution.
        </p>
      </Reveal>

      <Reveal className="mt-12">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((f) => (
            <li
              key={f.title}
              className="overflow-hidden rounded-[5px] bg-[color:var(--offwhite)] ring-1 ring-[color:var(--border)]"
            >
<div className="aspect-[4/3] overflow-hidden">
  <img
    src={f.image}
    alt={f.alt}
    className="h-full w-full object-cover"
  />
</div>              <div className="p-5">
                <h3 className="font-serif text-[19px] text-[color:var(--charcoal)]">{f.title}</h3>
                <div className="mt-3">
                  <Pending>Facility details to be verified</Pending>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

/* 12. Educators */
function Educators() {
  return (
    <Section>
      <Reveal className="max-w-3xl">
        <Eyebrow tone={OCHRE}>Educators</Eyebrow>
        <h2 className="mt-5 font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
          Teachers Who Guide, Encourage and Inspire
        </h2>
        <div className="mt-6 space-y-5 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          <p>
            Institutions are shaped not only by buildings and curricula, but by the teachers and
            faculty members who work with students every day.
          </p>
          <p>
            The Foundation’s educational mission depends on educators who can combine subject
            knowledge with patience, discipline, encouragement and a belief in student potential.
          </p>
        </div>
      </Reveal>

     <Reveal className="mt-12">
  <div className="grid gap-8 md:grid-cols-2">
    {[
      {
        title: "School Teachers",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9NXwd-R-foX7BdXQO-dxkGIqM7k9exuTvL5t72Nd20CjP5xyemJhiEcI&s=10",
        alt: "A teacher working with students in a school classroom",
      },
      {
        title: "College Faculty",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU76M3zfzVKmVscdeb3MMddNaQRDDIja8G60EBEHkyqL07WI6FgpFaASEi&s=10",
        alt: "Faculty member interacting with college students",
      },
    ].map((e) => (
      <article
        key={e.title}
        className="overflow-hidden rounded-[6px] bg-[color:var(--offwhite)] ring-1 ring-[color:var(--border)]"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={e.image}
            alt={e.alt}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-7">
          <h3 className="font-serif text-[23px] text-[color:var(--charcoal)]">
            {e.title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pending>Add verified educator profiles</Pending>
            <Pending>Add verified qualifications</Pending>
          </div>
        </div>
      </article>
    ))}
  </div>

  <div className="mt-8">
    <GhostBtn href="/education/educators">Meet Our Educators</GhostBtn>
  </div>
</Reveal>
    </Section>
  );
}

/* 13. Achievements */
const ACHIEVEMENTS = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwejsqg0VR7B1jEZuPtdY_Htqt0Tp49ylnUKzKpt0WJ0A2Be42klRWQBg&s=10",
    area: "Academics",
    title: "CBSE Class X & XII Board Performance",
    student: "School Merit List",
    institution: "Dayawanti Punj Model School",
    date: "Academic Session 2025–26",
    description:
      "Students demonstrated strong performance in the CBSE board examinations, with several securing distinction grades across Science, Commerce and Humanities streams.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvbYBp7WXi8H5HL-IdnSon0U2MYvDYx5m545an4HlXqk_Ev71COB1nd4&s=10",
    area: "Sports",
    title: "District Sports Championship",
    student: "School Athletics Team",
    institution: "Dayawanti Punj Model School",
    date: "2025",
    description:
      "Students participated in district-level athletics and indoor sports, earning medals and representing the school across multiple events.",
  },
  {
    image:
      "https://images.jdmagicbox.com/v2/comp/bhadohi/a9/9999p5414.5414.110123122915.q2a9/catalogue/dayawanti-punj-model-school-bhadohi-ho-bhadohi-cbse-schools-irpypaxou2.jpg",
    area: "Culture",
    title: "Annual Cultural & Literary Festival",
    student: "Music, Dance & Debate Teams",
    institution: "Dayawanti Punj Model School",
    date: "2025",
    description:
      "Students showcased their talents through cultural performances, debates, music, drama and art exhibitions during the annual school festival.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1QnztuBuHxHGIrdhI-tEfcAkDBjfUSgVkxcwfrJOV9rbz2H98zWDg-idt&s=10",
    area: "Higher Education",
    title: "University Examination Success",
    student: "Degree College Students",
    institution: "Dayawanti Punj Degree College",
    date: "2025–26",
    description:
      "Students successfully completed undergraduate examinations, with many progressing to postgraduate studies and professional career opportunities.",
  },
];

function Achievements() {
  return (
    <Section tint="oklch(0.975 0.014 95 / 0.45)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={OCHRE}>Achievement and Participation</Eyebrow>

        <h2 className="mt-5 font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
          Recognising Student Effort and Growth
        </h2>

        <p className="mt-6 font-sans text-[14.5px] leading-[1.8] text-muted-foreground">
          This gallery holds academic results, board and university outcomes,
          sports and cultural recognition, competitions and student leadership
          as they are confirmed by the institutions.
        </p>
      </Reveal>

      <Reveal className="mt-12">
  <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {ACHIEVEMENTS.map((a) => (
      <li
        key={a.title}
        className="overflow-hidden rounded-[5px] bg-[color:var(--offwhite)] shadow-sm ring-1 ring-[color:var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={a.image}
            alt={a.title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="p-5">
          <p
            className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em]"
            style={{ color: OCHRE }}
          >
            {a.area}
          </p>

          <h3 className="mt-2 font-serif text-[20px] leading-tight text-[color:var(--charcoal)]">
            {a.title}
          </h3>

          <p className="mt-3 font-sans text-[13.5px] leading-6 text-muted-foreground">
            {a.description}
          </p>

          <dl className="mt-5 space-y-3 border-t border-[color:var(--border)] pt-4">
            <div className="flex justify-between gap-3 text-[13px]">
              <dt className="font-medium text-[color:var(--charcoal)]/70">
                Student / Team
              </dt>
              <dd className="text-right">{a.student}</dd>
            </div>

            <div className="flex justify-between gap-3 text-[13px]">
              <dt className="font-medium text-[color:var(--charcoal)]/70">
                Institution
              </dt>
              <dd className="text-right">{a.institution}</dd>
            </div>

            <div className="flex justify-between gap-3 text-[13px]">
              <dt className="font-medium text-[color:var(--charcoal)]/70">
                Academic Year
              </dt>
              <dd>{a.date}</dd>
            </div>
          </dl>
        </div>
      </li>
    ))}
  </ul>
</Reveal>
    </Section>
  );
}
/* 14. Stories */
const STORIES = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUg7xqxylrRnmwRI02LcNKfBJg1HiCjZ-eu2BTMgFhERoRubT-6eGIREY&s=10",
    name: "Ananya Kumari",
    institution: "Dayawanti Punj Model School",
    course: "Class XII (Science)",
    location: "Sitamarhi, Bihar",
    story:
      "The encouragement I received from my teachers helped me develop confidence in mathematics and science. Participating in school activities improved my communication skills and prepared me for engineering entrance examinations.",
  },
  {
    image:
      "https://dpms.in/wp-content/uploads/2025/08/IMG_1076-scaled-1-768x512.jpg",
    name: "Rahul Kumar",
    institution: "Dayawanti Punj Degree College",
    course: "B.Com.",
    location: "Sitamarhi, Bihar",
    story:
      "Studying close to home gave me the opportunity to continue higher education while supporting my family. The faculty encouraged practical learning and career planning, helping me prepare for competitive examinations.",
  },
  {
    image:
      "https://dpms.in/wp-content/uploads/2025/08/IMG_0820-768x512.jpg",
    name: "Pavan Singh",
    institution: "Dayawanti Punj Model School",
    course: "Class X",
    location: "Sitamarhi, Bihar",
    story:
      "Beyond academics, I enjoyed participating in cultural programmes and sports competitions. These experiences helped me become more confident, disciplined and ready to pursue my future goals.",
  },
];

function Stories() {
  return (
    <Section id="student-stories">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={OCHRE}>Student Voices</Eyebrow>

        <h2 className="mt-5 font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
          Journeys Shaped by Education
        </h2>

        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          The meaning of an educational institution is best understood through
          the students whose confidence, opportunities and choices have been
          shaped by it.
        </p>
      </Reveal>

      <Reveal className="mt-12">
        <div className="grid gap-8 md:grid-cols-3">
          {STORIES.map((story) => (
            <article
              key={story.name}
              className="flex flex-col overflow-hidden rounded-[6px] bg-[color:var(--offwhite)] shadow-sm ring-1 ring-[color:var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-[23px] text-[color:var(--charcoal)]">
                  {story.name}
                </h3>

                <p className="mt-4 font-sans text-[14px] leading-7 text-muted-foreground">
                  {story.story}
                </p>

                <dl className="mt-6 space-y-3 border-t border-[color:var(--border)] pt-4 text-[13px]">
                  <div className="flex justify-between gap-3">
                    <dt className="font-medium text-[color:var(--charcoal)]/70">
                      Institution
                    </dt>
                    <dd className="text-right">{story.institution}</dd>
                  </div>

                  <div className="flex justify-between gap-3">
                    <dt className="font-medium text-[color:var(--charcoal)]/70">
                      Class / Course
                    </dt>
                    <dd>{story.course}</dd>
                  </div>

                  <div className="flex justify-between gap-3">
                    <dt className="font-medium text-[color:var(--charcoal)]/70">
                      Location
                    </dt>
                    <dd>{story.location}</dd>
                  </div>
                </dl>

                <a
                  href="#"
                  className="mt-6 text-[13px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: OCHRE }}
                >
                  Read Full Story →
                </a>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* 15. Impact */
const METRICS = [
  { label: "Students currently enrolled", scope: "School and College", period: "Reporting period to be confirmed", basis: "Annual" },
  { label: "Students educated cumulatively", scope: "School and College", period: "Since inception", basis: "Cumulative" },
  { label: "Girls currently enrolled", scope: "School and College", period: "Reporting period to be confirmed", basis: "Annual" },
  { label: "Scholarships awarded", scope: "Foundation", period: "Reporting period to be confirmed", basis: "Annual" },
  { label: "Graduates", scope: "Degree College", period: "Since inception", basis: "Cumulative" },
  { label: "Years of educational service", scope: "Foundation", period: "Since inception", basis: "Cumulative" },
  { label: "Teachers and faculty", scope: "School and College", period: "Reporting period to be confirmed", basis: "Annual" },
  { label: "Higher-education progression", scope: "School", period: "Reporting period to be confirmed", basis: "Annual" },
];

function ImpactNumbers() {
  return (
    <Section tint="oklch(0.97 0.016 210 / 0.55)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={OCHRE}>Education in Numbers</Eyebrow>
        <h2 className="mt-5 font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
          Figures Published Only When Verified
        </h2>
        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          Every figure should be dated, clearly defined and connected to a verifiable institutional
          source. Metrics below are awaiting confirmed data.
        </p>
      </Reveal>

      <Reveal className="mt-12">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => (
            <li
              key={m.label}
              className="rounded-[6px] bg-[color:var(--card)]/70 p-6 ring-1 ring-[color:var(--border)] backdrop-blur-sm"
            >
              <p className="font-serif text-[22px] leading-tight text-[color:var(--charcoal)]/45">
                Data being compiled
              </p>
              <h3 className="mt-3 font-sans text-[13.5px] font-medium leading-snug text-[color:var(--charcoal)]">
                {m.label}
              </h3>
              <dl className="mt-4 space-y-1 font-sans text-[12px] text-muted-foreground">
                <div className="flex gap-2">
                  <dt className="text-[color:var(--charcoal)]/55">Scope:</dt>
                  <dd>{m.scope}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-[color:var(--charcoal)]/55">Period:</dt>
                  <dd>{m.period}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-[color:var(--charcoal)]/55">Basis:</dt>
                  <dd>{m.basis}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-[color:var(--charcoal)]/55">Status:</dt>
                  <dd>Awaiting verification</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

/* 16. Admissions */
type FieldDef = { name: string; label: string; type?: string; textarea?: boolean };

const SCHOOL_FIELDS: FieldDef[] = [
  { name: "student", label: "Student name" },
  { name: "guardian", label: "Parent or guardian name" },
  { name: "currentClass", label: "Current class" },
  { name: "seekingClass", label: "Class seeking admission" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "email", label: "Email", type: "email" },
  { name: "location", label: "Location" },
  { name: "message", label: "Message", textarea: true },
];

const COLLEGE_FIELDS: FieldDef[] = [
  { name: "student", label: "Student name" },
  { name: "qualification", label: "Current qualification" },
  { name: "interest", label: "Area of study interest" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "email", label: "Email", type: "email" },
  { name: "location", label: "Location" },
  { name: "message", label: "Message", textarea: true },
];

function EnquiryForm({ id, fields, title }: { id: string; fields: FieldDef[]; title: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const required = useMemo(() => new Set(["student", "phone"]), []);

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const next: Record<string, string> = {};
        fields.forEach((f) => {
          const v = String(data.get(f.name) ?? "").trim();
          if (required.has(f.name) && !v) next[f.name] = `${f.label} is required.`;
          if (f.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
            next[f.name] = "Enter a valid email address.";
          if (v.length > 1000) next[f.name] = "This entry is too long.";
        });
        if (!data.get(`${id}-consent`)) next[`${id}-consent`] = "Please confirm consent to continue.";
        setErrors(next);
        setDone(Object.keys(next).length === 0);
      }}
      className="mt-8 space-y-4"
      aria-labelledby={`${id}-heading`}
    >
      <h4 id={`${id}-heading`} className="sr-only">
        {title}
      </h4>
      {fields.map((f) => {
        const errId = `${id}-${f.name}-error`;
        const err = errors[f.name];
        return (
          <div key={f.name}>
            <label
              htmlFor={`${id}-${f.name}`}
              className="block font-sans text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted-foreground"
            >
              {f.label}
              {required.has(f.name) ? <span aria-hidden="true"> *</span> : null}
            </label>
            {f.textarea ? (
              <textarea
                id={`${id}-${f.name}`}
                name={f.name}
                rows={3}
                maxLength={1000}
                aria-invalid={!!err}
                aria-describedby={err ? errId : undefined}
                className="mt-2 w-full rounded-[4px] border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-2 font-sans text-[14px] text-[color:var(--charcoal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent-education)]"
              />
            ) : (
              <input
                id={`${id}-${f.name}`}
                name={f.name}
                type={f.type ?? "text"}
                maxLength={200}
                aria-invalid={!!err}
                aria-describedby={err ? errId : undefined}
                className="mt-2 w-full rounded-[4px] border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-2 font-sans text-[14px] text-[color:var(--charcoal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent-education)]"
              />
            )}
            {err ? (
              <p id={errId} className="mt-1 font-sans text-[12px] text-[color:var(--accent-sita)]">
                {err}
              </p>
            ) : null}
          </div>
        );
      })}

      <div className="flex items-start gap-3">
        <input
          id={`${id}-consent`}
          name={`${id}-consent`}
          type="checkbox"
          className="mt-1 h-4 w-4 accent-[color:var(--accent-education)]"
          aria-describedby={errors[`${id}-consent`] ? `${id}-consent-error` : undefined}
        />
        <label htmlFor={`${id}-consent`} className="font-sans text-[13px] leading-relaxed text-muted-foreground">
          I consent to the Foundation contacting me about this enquiry.
        </label>
      </div>
      {errors[`${id}-consent`] ? (
        <p id={`${id}-consent-error`} className="font-sans text-[12px] text-[color:var(--accent-sita)]">
          {errors[`${id}-consent`]}
        </p>
      ) : null}

      <div className="pt-2">
        <PrimaryBtn type="submit">Submit Enquiry</PrimaryBtn>
      </div>

      <p aria-live="polite" className="font-sans text-[13px] text-muted-foreground">
        {done
          ? "Thank you — your enquiry has been recorded locally. ADD VERIFIED ENQUIRY DESTINATION."
          : ""}
      </p>
    </form>
  );
}

function AdmissionPanel({
  title,
  rows,
  fields,
  id,
  buttons,
}: {
  title: string;
  rows: string[];
  fields: FieldDef[];
  id: string;
  buttons: [string, string];
}) {
  return (
    <article className="rounded-[6px] bg-[color:var(--offwhite)] p-7 ring-1 ring-[color:var(--border)] md:p-9">
      <h3 className="font-serif text-[26px] text-[color:var(--charcoal)]">{title}</h3>
      <dl className="mt-6 divide-y divide-[color:var(--border)]">
        {rows.map((r) => (
          <div key={r} className="flex flex-wrap items-center justify-between gap-3 py-3">
            <dt className="font-sans text-[13.5px] text-[color:var(--charcoal)]/80">{r}</dt>
            <dd>
              <Pending>To be verified</Pending>
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-7 flex flex-wrap gap-3">
        <PrimaryBtn href={`#${id}-heading`}>{buttons[0]}</PrimaryBtn>
        <GhostBtn href="/contact">{buttons[1]}</GhostBtn>
      </div>
      <EnquiryForm id={id} fields={fields} title={buttons[0]} />
    </article>
  );
}

function Admissions() {
  return (
    <Section id="admissions">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={OCHRE}>Admissions and Enquiries</Eyebrow>
        <h2 className="mt-5 font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
          Begin the Next Stage of Learning
        </h2>
      </Reveal>

      <Reveal className="mt-12">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <AdmissionPanel
            id="school-enquiry"
            title="School Admissions"
            rows={[
              "Admission period",
              "Classes accepting applications",
              "Eligibility",
              "Documents required",
              "Admission process",
              "Contact number",
              "Email",
              "Campus location",
            ]}
            fields={SCHOOL_FIELDS}
            buttons={["School Admission Enquiry", "Contact the School"]}
          />
          <AdmissionPanel
            id="college-enquiry"
            title="College Admissions"
            rows={[
              "Admission period",
              "Courses",
              "Eligibility",
              "Documents required",
              "Application process",
              "Contact number",
              "Email",
              "Campus location",
            ]}
            fields={COLLEGE_FIELDS}
            buttons={["College Admission Enquiry", "Contact the College"]}
          />
        </div>
      </Reveal>
    </Section>
  );
}

/* 17. Gallery */
type GalleryItem = {
  image: string;
  alt: string;
  institution: string;
  activity: string;
  filters: string[];
};

const GALLERY: GalleryItem[] = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYeXGukCaygdez8qb3-zdmqL5B1hyrme3WOj3pytr4lG-Vt7e8UNon4g&s=10",
    alt: "Exterior of Dayawanti Punj Model School",
    institution: "Dayawanti Punj Model School",
    activity: "Campus",
    filters: ["School", "Student Life"],
  },
  {
    image: "https://dpms.in/wp-content/uploads/2025/08/0F2A0825.jpg",
    alt: "School Classroom",
    institution: "Dayawanti Punj Model School",
    activity: "Classroom",
    filters: ["School", "Academics"],
  },
  {
    image: "https://content.jdmagicbox.com/comp/bhadohi/a9/9999p5414.5414.110123122915.q2a9/catalogue/dayawanti-punj-model-school-bhadohi-ho-bhadohi-schools-1g4wqg9-250.jpg",
    alt: "Science Laboratory",
    institution: "Dayawanti Punj Model School",
    activity: "Laboratory",
    filters: ["School", "Academics"],
  },
  {
    image: "https://dpms.in/wp-content/uploads/2025/08/0F2A1053.jpg",
    alt: "Library",
    institution: "Dayawanti Punj Model School",
    activity: "Library",
    filters: ["School", "Academics"],
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HaqNskvuTGCMYgkGR6u01FbybUPUIMDPE_VggEuH3fesC6SpLvJ2xjkI&s=10",
    alt: "Sports",
    institution: "Dayawanti Punj Model School",
    activity: "Sports",
    filters: ["School", "Sports"],
  },
  {
    image: "https://images.jdmagicbox.com/v2/comp/bhadohi/a9/9999p5414.5414.110123122915.q2a9/catalogue/dayawanti-punj-model-school-bhadohi-ho-bhadohi-cbse-schools-irpypaxou2.jpg",
    alt: "Cultural Activity",
    institution: "Dayawanti Punj Model School",
    activity: "Cultural Activity",
    filters: ["School", "Culture"],
  },
  {
    image: "https://images.jdmagicbox.com/v2/comp/bhadohi/a9/9999p5414.5414.110123122915.q2a9/catalogue/dayawanti-punj-model-school-bhadohi-ho-bhadohi-cbse-schools-zdtbqs54ri.jpg",
    alt: "Girls Education",
    institution: "Dayawanti Punj Model School",
    activity: "Girls Education",
    filters: ["School", "Academics", "Student Life"],
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQTfv44SVHwdP1FmHlHjWiIqxhhH81lowvee58dXdkhxfDfIxF0mgYiAy&s=10",
    alt: "College Campus",
    institution: "Dayawanti Punj Degree College",
    activity: "Campus",
    filters: ["College", "Student Life"],
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrsHdBaI1RIvzhWSVRzuBvd1HyCrj0tUeEi7n7SlC6pc45lfqfi7LV4E&s=10",
    alt: "College Classroom",
    institution: "Dayawanti Punj Degree College",
    activity: "Classroom",
    filters: ["College", "Academics"],
  },
  {
    image: "https://dpms.in/wp-content/uploads/2025/08/0F2A1055.jpg",
    alt: "College Library",
    institution: "Dayawanti Punj Degree College",
    activity: "Library",
    filters: ["College", "Academics"],
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3crP5HnZGNNdx6H33pb7CB64sFVcvMlYVGoST8d2Nek5JLzN9B4jKl4A&s=10",
    alt: "Seminar",
    institution: "Dayawanti Punj Degree College",
    activity: "Seminar",
    filters: ["College", "Student Life"],
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1QnztuBuHxHGIrdhI-tEfcAkDBjfUSgVkxcwfrJOV9rbz2H98zWDg-idt&s=10",
    alt: "College Students",
    institution: "Dayawanti Punj Degree College",
    activity: "Student Life",
    filters: ["College", "Student Life"],
  },
];


const FILTERS = ["All", "School", "College", "Academics", "Sports", "Culture", "Student Life"];

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
    <Section tint="oklch(0.974 0.012 95 / 0.45)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={OCHRE}>Gallery</Eyebrow>
        <h2 className="mt-5 font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
          Life Across Our Educational Institutions
        </h2>
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full border px-4 py-2 font-sans text-[11.5px] font-medium uppercase tracking-[0.16em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-education)] ${
              filter === f
                ? "border-transparent bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
                : "border-[color:var(--border)] text-[color:var(--charcoal)]/75 hover:border-[color:var(--accent-education)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((g) => (
          <li key={`${g.alt}-${g.activity}`}>
            <button
              type="button"
              onClick={() => setActive(g)}
              className="group block w-full overflow-hidden rounded-[5px] text-left ring-1 ring-[color:var(--border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-education)]"
            >
<div className="aspect-[4/3] overflow-hidden">
  <img
    src={g.image}
    alt={g.alt}
    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>              <span className="block bg-[color:var(--offwhite)] p-4">
                <span className="block font-sans text-[13px] text-[color:var(--charcoal)]">
                  {g.activity}
                </span>
                <span className="mt-1 block font-sans text-[12px] text-muted-foreground">
                  {g.institution} · Date to be verified
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

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
<div className="aspect-[16/10] overflow-hidden">
  <img
    src={active.image}
    alt={active.alt}
    className="h-full w-full object-cover"
  />
</div>            <div className="flex items-start justify-between gap-6 p-6">
              <div>
                <p className="font-serif text-[20px] text-[color:var(--charcoal)]">
                  {active.activity}
                </p>
                <p className="mt-1 font-sans text-[13px] text-muted-foreground">
                  {active.institution} · Date to be verified
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setActive(null)}
                className="rounded-full border border-[color:var(--border)] px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] text-[color:var(--charcoal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent-education)]"
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

/* 18. Updates */
const EDUCATION_UPDATES = [
  {
    category: "School News",
    title: "Building a Stronger Learning Environment",
    date: "12 June 2026",
    image:
      "https://content.jdmagicbox.com/comp/bhadohi/g9/9999p5414.5414.110223220140.w9g9/catalogue/dayawanti-punj-model-school-khamaria-srn-bhadohi-schools-qy2ch7jclj.jpg",
    description:
      "Dayawanti Punj Model School continues to focus on academic learning, student development and a supportive school environment.",
  },
  {
    category: "College News",
    title: "Supporting Higher Learning and Student Development",
    date: "05 June 2026",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1QnztuBuHxHGIrdhI-tEfcAkDBjfUSgVkxcwfrJOV9rbz2H98zWDg-idt&s=10",
    description:
      "The college provides students with opportunities for higher education, academic guidance and preparation for future careers.",
  },
  {
    category: "Admissions",
    title: "Admissions and Enrolment Information",
    date: "28 May 2026",
    image:
      "https://skoodos.com/public/uploads/optimized/1682671906.png",
    description:
      "Information for students and families exploring educational opportunities at the Foundation's school and college institutions.",
  },
  {
    category: "Student Achievement",
    title: "Recognising Student Effort and Achievement",
    date: "18 May 2026",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwejsqg0VR7B1jEZuPtdY_Htqt0Tp49ylnUKzKpt0WJ0A2Be42klRWQBg&s=10",
    description:
      "Students are encouraged to pursue academic excellence while developing confidence, creativity and a sense of responsibility.",
  },
  {
    category: "Sports",
    title: "Learning Through Sports and Teamwork",
    date: "10 May 2026",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvbYBp7WXi8H5HL-IdnSon0U2MYvDYx5m545an4HlXqk_Ev71COB1nd4&s=10",
    description:
      "Sports activities provide students with opportunities to develop fitness, discipline, teamwork and leadership.",
  },
  {
    category: "Cultural Activity",
    title: "Encouraging Creativity and Cultural Participation",
    date: "02 May 2026",
    image:
      "https://images.jdmagicbox.com/v2/comp/bhadohi/a9/9999p5414.5414.110123122915.q2a9/catalogue/dayawanti-punj-model-school-bhadohi-ho-bhadohi-cbse-schools-irpypaxou2.jpg",
    description:
      "Cultural programmes and creative activities give students a platform to express themselves and participate in the wider school community.",
  },
];

function Updates() {
  return (
    <Section tint="oklch(0.975 0.014 95 / 0.45)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={OCHRE}>Latest From Education</Eyebrow>

        <h2 className="mt-5 font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
          News From the School and College
        </h2>

        <p className="mt-6 font-sans text-[15px] leading-[1.8] text-muted-foreground">
          Stay informed about educational activities, student achievements,
          admissions, sports, cultural programmes and developments across the
          Foundation's educational institutions.
        </p>
      </Reveal>

      <Reveal className="mt-12">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EDUCATION_UPDATES.map((update) => (
            <li
              key={update.category}
              className="group flex h-full flex-col overflow-hidden rounded-[6px] bg-[color:var(--offwhite)] shadow-sm ring-1 ring-[color:var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={update.image}
                  alt={update.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <p
                  className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.24em]"
                  style={{ color: OCHRE }}
                >
                  {update.category}
                </p>

                <h3 className="mt-3 font-serif text-[22px] leading-tight text-[color:var(--charcoal)]">
                  {update.title}
                </h3>

                <p className="mt-3 font-sans text-[13.5px] leading-[1.75] text-muted-foreground">
                  {update.description}
                </p>

                <div className="mt-auto border-t border-[color:var(--border)] pt-4">
                  <p className="font-sans text-[11.5px] text-muted-foreground">
                    {update.date}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <GhostBtn href="/stories-updates/education">
            View All Education Updates
          </GhostBtn>
        </div>
      </Reveal>
    </Section>
  );
}

/* 19. Closing */
function Closing() {
  return (
    <Section tint="oklch(0.972 0.016 200 / 0.55)">
      <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <Reveal>
          <Eyebrow tone={OCHRE}>Education and Community</Eyebrow>
          <h2 className="mt-5 font-serif text-[34px] leading-[1.1] text-[color:var(--charcoal)] md:text-[46px]">
            Building Opportunity, One Student at a Time
          </h2>
          <div className="mt-6 space-y-5 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
            <p>
              The Foundation’s educational mission continues through the students, teachers,
              families and institutions that make learning possible every day.
            </p>
            <p>
              By supporting school education, higher learning and student development, the
              Foundation seeks to create opportunities that can influence individuals, families and
              communities across generations.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <PrimaryBtn href="/education/dayawanti-punj-model-school">
              Explore Dayawanti Punj Model School
            </PrimaryBtn>
            <GhostBtn href="/education/dayawanti-punj-degree-college">
              Explore Dayawanti Punj Degree College
            </GhostBtn>
            <GhostBtn href="/contact">Contact the Education Team</GhostBtn>
          </div>
        </Reveal>
        <Reveal>
          <div className="overflow-hidden rounded-[6px]">
  <img
    src="https://dpms.in/wp-content/uploads/2025/08/IMG_0818.jpg"
    alt="Group photograph of students and teachers at the Foundation's institutions"
    className="h-full w-full object-cover"
    style={{ aspectRatio: "4 / 3" }}
  />
  <p className="mt-3 font-sans text-[12px] leading-5 text-muted-foreground">
    Students and teachers at the Foundation's educational institutions.
  </p>
</div>
        </Reveal>
      </div>
    </Section>
  );
}
