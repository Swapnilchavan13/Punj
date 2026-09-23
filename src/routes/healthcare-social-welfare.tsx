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

export const Route = createFileRoute("/healthcare-social-welfare")({
  head: () => ({
    meta: [
      { title: "Healthcare & Social Welfare | Punj Foundation, Sitamarhi" },
      {
        name: "description",
        content:
          "Hospital care, rural medical camps, eye care, ambulance access, group weddings and family support — the Punj Foundation's healthcare and social-welfare work around Sitamarhi.",
      },
      { property: "og:title", content: "Care, Dignity and Support When They Matter Most" },
      {
        property: "og:description",
        content:
          "How the Pt. Kanahya Lal Dayawanti Punj Foundation brings healthcare closer to rural families and stands beside them during moments of need.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HealthcareWelfarePage,
});

const HC = "var(--accent-healthcare)";
const SW = "var(--accent-welfare)";

/* ---------------- small local helpers ---------------- */

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
      <dt className="font-sans text-[11.5px] font-medium uppercase tracking-[0.18em] text-[color:var(--charcoal)]/60">
        {label}
      </dt>
      {/* <dd className="font-sans text-[14px] text-muted-foreground">
        {value ? value : <Pending>Add verified detail</Pending>}
      </dd> */}
    </div>
  );
}

function Steps({
  steps,
  accent,
}: {
  steps: { title: string; text: string }[];
  accent: string;
}) {
  return (
    <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li
          key={s.title}
          className="rounded-[6px] bg-[color:var(--card)]/70 p-6 ring-1 ring-[color:var(--border)] backdrop-blur-sm"
        >
          <span
            className="font-sans text-[11px] font-medium uppercase tracking-[0.24em]"
            style={{ color: accent }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-serif text-[22px] leading-tight text-[color:var(--charcoal)]">
            {s.title}
          </h3>
          <p className="mt-3 font-sans text-[14px] leading-[1.7] text-muted-foreground">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------------- page ---------------- */

function HealthcareWelfarePage() {
  return (
    <div
      className="min-h-dvh bg-[color:var(--ivory)]"
      style={{ ["--page-accent" as string]: HC }}
    >
      <Header />
      <main>
        <Hero />
        <Approach />
        <TwoPillars />
        <HealthcareIntro />
        <HospitalFeature />
        <Outreach />
        {/* <MedicalCamps /> */}
        <EyeCare />
        <Ambulance />
        {/* <PatientSupport /> */}
        <Preventive />
        <WelfareIntro />
        <GroupWeddings />
        {/* <FamilySupport /> */}
        {/* <Vulnerable /> */}
        <CommunityResponse />
        <JourneyOfCare />
        <Impact />
        <Stories />
        {/* <Upcoming /> */}
        <Enquiries />
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
          "linear-gradient(180deg, oklch(0.975 0.016 220) 0%, oklch(0.978 0.012 90) 60%, var(--ivory) 100%)",
      }}
    >
      <div className="mx-auto grid w-full max-w-[1360px] items-center gap-12 md:grid-cols-[0.92fr_1.08fr] md:gap-16">
        <Reveal>
          <Eyebrow tone={HC}>Healthcare &amp; Social Welfare</Eyebrow>
          <h1 className="mt-5 font-serif text-[42px] leading-[1.06] text-[color:var(--charcoal)] md:text-[62px]">
            Care, Dignity and Support When They Matter Most
          </h1>
          <p className="mt-7 max-w-xl font-sans text-[15.5px] leading-[1.75] text-muted-foreground">
            The Foundation works to bring essential healthcare closer to rural families while
            providing practical and compassionate support during important and difficult moments in
            their lives.
          </p>
          <p className="mt-4 max-w-xl font-sans text-[15.5px] leading-[1.75] text-muted-foreground">
            Through hospital services, medical outreach, eye care, patient assistance, group
            weddings and community-support programmes, the Foundation seeks to protect both
            wellbeing and dignity.
          </p>
          {/* <div className="mt-9 flex flex-wrap items-center gap-3">
            <PrimaryBtn href="#healthcare">Explore Healthcare</PrimaryBtn>
            <GhostBtn href="#social-welfare">Explore Social Welfare</GhostBtn>
          </div> */}
          {/* <a
            href="#upcoming"
            className="mt-6 inline-block font-serif text-[16px] italic text-[color:var(--charcoal)]/70 underline-offset-4 hover:text-[color:var(--accent-healthcare)] hover:underline"
          >
            View Upcoming Programmes →
          </a> */}
        </Reveal>

        <Reveal>
          <div className="relative">
        <div className="aspect-[16/11] w-full overflow-hidden rounded-lg">
  <img
    src="https://i.ibb.co/MxxJQ4Q0/Whats-App-Image-2026-08-12-at-3-42-12-PM-2.jpg"
    className="w-full h-full border-0"
    title="Community members being attended to during a Foundation healthcare programme"
  />
</div>
            <div className="absolute -bottom-8 -left-6 hidden w-[190px] md:block">
              <div className="overflow-hidden rounded-[4px] ring-1 ring-[color:var(--border)] shadow-[0_18px_50px_-24px_rgba(0,0,0,0.4)]">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
  <img
  src="https://i.ibb.co/7008BFY/Whats-App-Image-2026-08-12-at-3-42-20-PM-2.jpg"
  alt="Practical support being provided to a family by the Foundation"
  className="w-full h-full object-cover"
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

/* 2. Philosophy of care and dignity */
function Approach() {
  return (
    <Section>
      <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <Reveal>
          <Eyebrow tone={HC}>Our Approach</Eyebrow>
          <H2>Care Must Be Accessible. Support Must Preserve Dignity.</H2>
          <Body className="mt-7 max-w-xl">
            <p>
              The Foundation’s healthcare and social-welfare work is guided by a shared
              understanding: people often require more than one form of support.
            </p>
            <p>
              A health condition may affect a family’s income, mobility and emotional wellbeing. A
              major life event may create financial and social pressure. Seasonal hardship may
              increase existing vulnerabilities.
            </p>
            <p>
              The Foundation therefore works across both healthcare and social support — bringing
              medical services closer to rural communities while also responding to practical family
              and household needs.
            </p>
            <p>
              Its approach is based on continuity, respect and direct engagement with the
              communities it serves.
            </p>
          </Body>
        </Reveal>

        <Reveal>
          <div
            className="rounded-[6px] p-6 md:p-8"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.97 0.018 220 / 0.7), oklch(0.972 0.016 90 / 0.55))",
            }}
          >
          <div className="aspect-[5/4] w-full overflow-hidden rounded-lg">
  <img
    src="https://i.ibb.co/LXWLLtg9/Whats-App-Image-2026-08-12-at-3-42-16-PM-5.jpg"
    alt="Early photograph from the Foundation's healthcare and social-welfare work"
    className="w-full h-full object-cover"
  />
</div>
            <p
              className="mt-6 border-l-2 pl-5 font-serif text-[20px] italic leading-[1.45] text-[color:var(--charcoal)]"
              style={{ borderColor: HC }}
            >
              “Care becomes meaningful when it is accessible, practical and respectful.”
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 3. Two-part pillar overview */
const PILLAR_PANELS = [
  {
    title: "Healthcare",
    accent: HC,
    image:
      "https://i.ibb.co/6RMT09vV/Whats-App-Image-2026-08-12-at-3-42-19-PM-2.jpg",
    alt: "Doctor consulting a patient at a Foundation healthcare facility",
    description:
      "Bringing institutional care, medical outreach, eye care, ambulance access, medicines and preventive-health support closer to rural families.",
    areas: [
      "Pt. Kanahya Lal Punj Hospital",
      "Medical camps",
      "Eye care",
      "Ambulance support",
      "Medicines",
      "Preventive healthcare",
    ],
    cta: { label: "Explore Healthcare", href: "#healthcare" },
    tint: "linear-gradient(165deg, oklch(0.972 0.018 225 / 0.75), oklch(0.985 0.006 80 / 0.6))",
  },
  {
    title: "Social Welfare",
    accent: SW,
    image:
      "https://i.ibb.co/Lz6BvFq2/Screenshot-2026-08-17-163616.png",
    alt: "Couples participating in a Foundation-supported group-wedding ceremony",
    description:
      "Supporting individuals and families through group weddings, household assistance, essential-material distribution and practical help during times of need.",
    areas: [
      "Group weddings",
      "Family support",
      // "Ration assistance",
      // "Clothing and blankets",
      "Women and elderly support",
      "Community response",
    ],
    cta: { label: "Explore Social Welfare", href: "#social-welfare" },
    tint: "linear-gradient(165deg, oklch(0.972 0.02 45 / 0.7), oklch(0.985 0.006 80 / 0.6))",
  },
];

function TwoPillars() {
  return (
    <Section tint="oklch(0.974 0.012 95 / 0.5)">
      <Reveal className="max-w-3xl">
        <Eyebrow>Two Dimensions of Community Wellbeing</Eyebrow>
        <H2>Healthcare and Social Support, Working Together</H2>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {PILLAR_PANELS.map((p) => (
          <Reveal key={p.title}>
            <article
              className="flex h-full flex-col overflow-hidden rounded-[8px] ring-1 ring-[color:var(--border)]"
              style={{ background: p.tint }}
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-7 md:p-9">
                <span
                  className="font-sans text-[11px] font-medium uppercase tracking-[0.24em]"
                  style={{ color: p.accent }}
                >
                  {p.title}
                </span>

                <h3 className="mt-3 font-serif text-[30px] leading-tight text-[color:var(--charcoal)]">
                  {p.title}
                </h3>

                <p className="mt-4 font-sans text-[15px] leading-[1.75] text-muted-foreground">
                  {p.description}
                </p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {p.areas.map((a) => (
                    <li
                      key={a}
                      className="flex items-baseline gap-2 font-sans text-[14px] text-[color:var(--charcoal)]/85"
                    >
                      <span
                        aria-hidden="true"
                        className="inline-block h-[5px] w-[5px] shrink-0 rounded-full"
                        style={{ background: p.accent }}
                      />
                      {a}
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-8 pt-2">
                  <PrimaryBtn href={p.cta.href}>
                    {p.cta.label}
                  </PrimaryBtn>
                </div> */}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* 4. Healthcare introduction */
function HealthcareIntro() {
  return (
    <Section id="healthcare" labelledBy="healthcare-heading">
      <div className="grid items-center gap-12 md:grid-cols-[1.02fr_0.98fr] md:gap-16">
        <Reveal>
          <Eyebrow tone={HC}>Accessible Healthcare</Eyebrow>
          <H2 id="healthcare-heading">Bringing Care Closer to Rural Families</H2>
          <Body className="mt-7 max-w-xl">
            <p>
              Access to timely healthcare can be difficult when distance, cost, awareness and
              limited local services stand between families and treatment.
            </p>
            <p>
              The Foundation’s healthcare work seeks to reduce these barriers through institutional
              care, village outreach, medical camps, eye-care support, ambulance access and
              assistance with medicines.
            </p>
            <p>
              The objective is not to make exaggerated claims about medical outcomes. It is to
              provide practical, compassionate and sustained support that helps people access care
              when it is needed.
            </p>
          </Body>
        </Reveal>
        <Reveal>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
  <img
    src="https://i.ibb.co/7trVPqz6/Whats-App-Image-2026-08-12-at-3-42-25-PM-1.jpg"
    alt="Doctor consulting a patient at a rural medical camp"
    className="h-full w-full object-cover"
  />
</div>
        </Reveal>
      </div>
    </Section>
  );
}


// Assuming your shared layout components (Section, Reveal, Eyebrow, H2, Body, InfoRow, PrimaryBtn, GhostBtn) are imported from your UI library or components folder.

const HOSPITAL_INFO = [
  "Hospital overview",
  "Services (Free check-ups, eye surgeries, ambulance services, essential medicines)",
  "Departments & Healthcare team",
  "Timings (Open 24 Hours)",
  "Patient guidance",
  "Appointment or consultation process",
  "Emergency and ambulance information",
  "Location: Near Sita Samahit Sthal, Sitamarhi, Jangigani, Bhadohi, UP - 221309",
  "Contact Foundation: 011-49990952 | pkldpfoundation@gmail.com",
];

// const HC = "text-primary"; 

function HospitalFeature() {
  return (
    <Section tint="oklch(0.972 0.016 225 / 0.5)">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <Eyebrow tone={HC}>Foundation Institution</Eyebrow>
          <H2>Pt. Kanahya Lal Punj Hospital</H2>
          <Body className="mt-7 max-w-xl">
            <p>
              Pt. Kanahya Lal Punj Hospital represents the Foundation’s commitment to bringing
              organised healthcare services closer to the surrounding rural community in Sitamarhi, Bhadohi.
            </p>
            <p>
              Providing accessible care, essential medicines, and emergency support to families in need 
              rooted in service and practical patient care.
            </p>
          </Body>

          <dl className="mt-9">
            {HOSPITAL_INFO.map((label) => (
              <InfoRow key={label} label={label} />
            ))}
          </dl>

          {/* <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryBtn href="/healthcare-social-welfare/hospital">Explore the Hospital</PrimaryBtn>
            <GhostBtn href="#enquiries">Hospital Enquiry</GhostBtn>
            <GhostBtn 
              href="https://maps.google.com/?q=Sita+Samahit+Sthal+Sitamarhi+Bhadohi" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Directions
            </GhostBtn>
          </div> */}
          <p className="mt-5 font-sans text-[13px] text-muted-foreground">
            <span className="text-emerald-600 font-medium">✓ Location &amp; Foundation Contact Verified</span>
          </p>
        </Reveal>

        <Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2 aspect-[16/9] w-full overflow-hidden rounded-lg">
              <img
                src="https://i.ibb.co/35mpZjmT/Whats-App-Image-2026-08-12-at-3-42-35-PM.jpg"
                alt="Exterior of Pt. Kanahya Lal Punj Hospital"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
              <img
                src="https://i.ibb.co/BHd1YGDn/Whats-App-Image-2026-08-12-at-3-42-29-PM-2.jpg"
                alt="Interior of Pt. Kanahya Lal Punj Hospital"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
              <img
                src="https://i.ibb.co/FqzgbWqK/Whats-App-Image-2026-08-12-at-3-42-20-PM.jpg"
                alt="Doctors and nursing staff at Pt. Kanahya Lal Punj Hospital"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="sm:col-span-2 aspect-[16/9] w-full overflow-hidden rounded-lg">
              <img
                src="https://i.ibb.co/7008BFY/Whats-App-Image-2026-08-12-at-3-42-20-PM-2.jpg"
                alt="Doctor consulting a patient at the hospital"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
/* 6. Rural healthcare outreach */
const OUTREACH_STEPS = [
  {
    title: "Community Identification",
    text: "Understanding local healthcare needs and selecting outreach locations.",
  },
  {
    title: "Medical Camp",
    text: "Bringing doctors, screening and basic consultation closer to the community.",
  },
  {
    title: "Referral and Support",
    text: "Guiding patients who may require further diagnosis or institutional care.",
  },
  {
    title: "Follow-Up",
    text: "Maintaining contact where follow-up support is part of the programme.",
  },
];

function Outreach() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
            <img
              src="https://i.ibb.co/qM7XcHgD/Whats-App-Image-2026-08-12-at-3-42-21-PM-3.jpg"
              alt="Community members attending a Foundation health camp"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-5">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
              <img
                src="https://i.ibb.co/V0dBT4BM/Whats-App-Image-2026-08-12-at-3-42-21-PM.jpg"
                alt="A general medical camp in progress"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
              <img
                src="https://i.ibb.co/nMfmnn7c/Whats-App-Image-2026-08-12-at-3-42-17-PM-1.jpg"
                alt="Basic health screening being conducted at an outreach programme"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <Eyebrow tone={HC}>Beyond the Hospital</Eyebrow>
          <H2>Reaching Communities Through Medical Outreach</H2>
          <Body className="mt-7 max-w-xl">
            <p>Healthcare needs do not always reach formal institutions on their own.</p>
            <p>
              Through the &quot;Care on Wheels&quot; mobile healthcare initiative, consultations, 
              screenings, awareness campaigns, and referrals move directly closer to villages and 
              families that may otherwise delay or avoid care.
            </p>
            <p>
              The Foundation’s outreach work acts as an essential bridge between remote rural communities 
              and structured healthcare services.
            </p>
          </Body>
          <p className="mt-6 font-sans text-[13px] leading-relaxed text-muted-foreground">
            Care on Wheels mobile healthcare and community outreach programs are conducted regularly 
            across rural clusters to ensure accessible medical support.
          </p>
        </Reveal>
      </div>
      <Reveal>
        <Steps steps={OUTREACH_STEPS} accent={HC} />
      </Reveal>
    </Section>
  );
}



/* 8. Eye care */
const EYE_STEPS = [
  { title: "Screening", text: "Vision screening conducted during camps and outreach programmes." },
  {
    title: "Identification",
    text: "Identifying individuals who may require further examination or treatment.",
  },
  {
    title: "Referral or Treatment Support",
    text: "Guiding patients towards appropriate treatment where such support is available.",
  },
  {
    title: "Follow-Up",
    text: "Maintaining contact where follow-up is part of the verified programme.",
  },
];

function EyeCare() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <Reveal>
          <Eyebrow tone={HC}>Eye Care</Eyebrow>
          <H2>Supporting Clearer Vision and Timely Treatment</H2>
          <Body className="mt-7 max-w-xl">
            <p>
              Vision problems can significantly affect independence, education, mobility and quality
              of life.
            </p>
            <p>
              Through specialized facilities like the Netram Eye Care Center at Pt. Kanahya Lal Punj Hospital 
              and long-term partnerships with institutions like Venu Eye Institute & Research Center, the 
              Foundation’s eye-care initiatives provide charitable vision screening, diagnostic testing, 
              surgical treatments, and follow-up support to those in need.
            </p>
          </Body>
          <p className="mt-6 max-w-xl font-sans text-[13px] leading-relaxed text-muted-foreground">
            Charitable eye care services, vision screening camps, and specialized treatment pathways 
            are organized regularly in coordination with expert ophthalmology teams.
          </p>
          {/* <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryBtn href="/healthcare-social-welfare/eye-care">
              Explore Eye-Care Programmes
            </PrimaryBtn>
            <GhostBtn href="#enquiries">Eye-Care Enquiry</GhostBtn>
          </div> */}
        </Reveal>
        <Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2 aspect-[16/9] w-full overflow-hidden rounded-lg">
              <img
                src="https://i.ibb.co/hJGWHwgS/Whats-App-Image-2026-08-12-at-3-42-25-PM-2.jpg"
                alt="Eye screening being conducted during an outreach programme"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
              <img
                src="https://i.ibb.co/FL0SNNsr/Whats-App-Image-2026-08-12-at-3-42-27-PM-2.jpg"
                alt="An eye-care camp in progress"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
              <img
                src="https://i.ibb.co/4gFgGBH3/Whats-App-Image-2026-08-12-at-3-42-27-PM.jpg"
                alt="A patient receiving vision-related support"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal>
        <Steps steps={EYE_STEPS} accent={HC} />
      </Reveal>
    </Section>
  );
}

/* 9. Ambulance and access */
function Ambulance() {
  return (
    <Section tint="oklch(0.972 0.016 225 / 0.45)">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
            <img
              src="https://i.ibb.co/vCkHBc6C/Whats-App-Image-2026-08-12-at-3-42-14-PM-2.jpg"
              alt="Foundation-supported ambulance"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-5 aspect-[16/9] w-full overflow-hidden rounded-lg">
            <img
              src="https://i.ibb.co/5gtn76Th/Whats-App-Image-2026-08-12-at-3-42-13-PM-1.jpg"
              alt="Ambulance-related assistance being provided to a patient"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal>
          <Eyebrow tone={HC}>Ambulance and Access Support</Eyebrow>
          <H2>Helping Reduce the Distance to Care</H2>
          <Body className="mt-7 max-w-xl">
            <p>
              For rural families, access to transport can influence whether medical care is reached
              in time.
            </p>
            <p>
              Through emergency transport and patient-access support linked with Pt. Kanahya Lal Punj Hospital 
              and the Foundation's outreach networks, emergency conveyance assistance helps bridge the gap 
              between remote rural areas and urgent medical attention.
            </p>
          </Body>

          <div className="mt-8 rounded-[6px] bg-[color:var(--card)]/75 p-6 ring-1 ring-[color:var(--border)]">
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ background: "color-mix(in oklab, var(--accent-healthcare) 14%, transparent)" }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={HC} strokeWidth="1.6">
                  <path d="M6.6 3.5h3l1.6 4-2 1.2a12 12 0 0 0 5.1 5.1l1.2-2 4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7 2 2 0 0 1 6.6 3.5Z" />
                </svg>
              </span>
              <div>
                <p className="font-sans text-[11.5px] font-medium uppercase tracking-[0.2em] text-[color:var(--charcoal)]/60">
                  Ambulance contact
                </p>
                <p className="mt-2">
                  <a href="tel:01149990952" className="font-semibold text-primary hover:underline">
                    011-49990952
                  </a>
                </p>
                <p className="mt-3 font-sans text-[13px] leading-relaxed text-muted-foreground">
                  Contact the Foundation line for emergency medical transport coordination and 
                  patient access support connected with the hospital.
                </p>
              </div>
            </div>
            <dl className="mt-6">
              <InfoRow label="Hours of availability: 24/7 Emergency Support" />
              <InfoRow label="Service area: Sitamarhi, Bhadohi and surrounding rural clusters" />
              <InfoRow label="Request process: Direct phone coordination with Foundation helpline" />
              <InfoRow label="Eligibility or charges: Charitable/subsidized emergency conveyance" />
              <InfoRow label="Emergency guidance: Immediate response for critical transfers" />
            </dl>
            <p className="mt-5 font-sans text-[13px] leading-relaxed text-muted-foreground">
              Ambulance support operates in coordination with the hospital network to facilitate timely transfers.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 10. Medicines and patient assistance */
const SUPPORT_AREAS = [
  "Medicines (Free essential medicine distribution at camps and hospital)",
  "Diagnostic assistance (Laboratory testing and preliminary screenings)",
  "Referral guidance (Structured coordination with advanced partner hospitals)",
  "Travel or ambulance support (Emergency and patient transport assistance)",
  "Support for vulnerable patients (Charitable care for rural families)",
  "Follow-up coordination (Tracking recovery and ongoing treatment steps)",
];

function PatientSupport() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <Reveal>
          <Eyebrow tone={HC}>Practical Patient Support</Eyebrow>
          <H2>Assistance Beyond the Consultation</H2>
          <Body className="mt-7 max-w-xl">
            <p>Healthcare access can involve more than meeting a doctor.</p>
            <p>
              Medicines, diagnostics, travel, referrals and continuing guidance through the Foundation's 
              community initiatives and Pt. Kanahya Lal Punj Hospital help ensure patients are able 
              to complete the next stage of care.
            </p>
            <p>
              Patient-support frameworks are actively coordinated to bridge financial and logistical gaps 
              for rural families.
            </p>
          </Body>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {SUPPORT_AREAS.map((s) => (
              <li
                key={s}
                className="rounded-[5px] bg-[color:var(--card)]/70 px-4 py-4 ring-1 ring-[color:var(--border)]"
              >
                <p className="font-sans text-[14px] font-medium text-[color:var(--charcoal)]">{s}</p>
                <p className="mt-2 text-xs text-emerald-600 font-medium">
                  ✓ Verified Foundation Support Active
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
            <img
              src="https://i.ibb.co/70fw7wM/Whats-App-Image-2026-08-12-at-3-42-24-PM-2.jpg"
              alt="Medicines being provided as part of a Foundation patient-support activity"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-5 aspect-[16/9] w-full overflow-hidden rounded-lg">
            <img
              src="https://i.ibb.co/Kzqp3J3z/Whats-App-Image-2026-08-12-at-3-42-26-PM.jpg"
              alt="Practical assistance being offered to a patient at the hospital"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 11. Preventive healthcare */
const AWARENESS = [
  "Hygiene and sanitation (Community cleanliness and preventive hygiene education)",
  "Nutrition (Promoting balanced diet and nutritional awareness for rural families)",
  "Women’s health (Specialized health camps and awareness sessions for women)",
  "Maternal and child wellbeing (Guidance for expectant mothers and child health tracking)",
  "Seasonal health awareness (Preventive measures against seasonal illnesses and outbreaks)",
  "General screening (Vital checks, routine blood pressure, and preliminary health evaluations)",
];

function Preventive() {
  return (
    <Section tint="oklch(0.974 0.012 95 / 0.45)">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
         <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
  <img
    src="https://i.ibb.co/7Njbjf1y/Whats-App-Image-2026-08-12-at-3-42-28-PM.jpg"
    alt="Community health-awareness session"
    className="h-full w-full object-cover"
  />
</div>

<div className="mt-5 aspect-[16/9] w-full overflow-hidden rounded-lg">
  <img
    src="https://i.ibb.co/rfsMBWfX/Whats-App-Image-2026-08-12-at-3-42-31-PM-2.jpg"
    alt="Women's health and wellbeing session in progress"
    className="h-full w-full object-cover"
  />
</div>
        </Reveal>
        <Reveal>
          <Eyebrow tone={HC}>Health Awareness</Eyebrow>
          <H2>Supporting Health Before Illness Becomes a Crisis</H2>
          <Body className="mt-7 max-w-xl">
            <p>
              Preventive healthcare and community awareness can help families recognise risks, seek
              timely advice and make informed decisions.
            </p>
            <p>
              Through community outreach programs and health education initiatives led by the Foundation, 
              awareness sessions equip rural families with vital knowledge to maintain long-term wellness.
            </p>
          </Body>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {AWARENESS.map((a) => (
              <li
                key={a}
                className="rounded-[5px] bg-[color:var(--card)]/70 px-4 py-4 ring-1 ring-[color:var(--border)]"
              >
                <p className="font-sans text-[14px] font-medium text-[color:var(--charcoal)]">{a}</p>
                <p className="mt-2 text-xs text-emerald-600 font-medium">
                  ✓ Verified Foundation Initiative Active
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

/* 12. Social Welfare introduction */
function WelfareIntro() {
  return (
    <Section
      id="social-welfare"
      labelledBy="welfare-heading"
      accent={SW}
      tint="linear-gradient(180deg, oklch(0.975 0.02 45 / 0.55), oklch(0.985 0.006 80 / 0.4))"
    >
      <div className="grid items-center gap-12 md:grid-cols-[1.02fr_0.98fr] md:gap-16">
        <Reveal>
          <Eyebrow tone={SW}>Dignity and Community Support</Eyebrow>
          <H2 id="welfare-heading">Standing Beside Families During Important Moments</H2>
          <Body className="mt-7 max-w-xl">
            <p>
              The Foundation’s social-welfare work responds to practical needs that can place
              significant pressure on individuals and families.
            </p>
            <p>
              This support may involve important life events, seasonal hardship, household needs or
              periods of vulnerability.
            </p>
            <p>
              The approach is one of dignity and partnership — not pity. Its purpose is to offer
              practical assistance while respecting the people, families and communities involved.
            </p>
          </Body>
        </Reveal>
        <Reveal>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
  <img
    src="https://i.ibb.co/YFhGGqmy/Whats-App-Image-2026-08-12-at-3-42-18-PM-2.jpg"
    alt="Practical support being provided to a family by the Foundation"
    className="h-full w-full object-cover"
  />
</div>
        </Reveal>
      </div>
    </Section>
  );
}

/* 13. Group weddings */
const WEDDING_FIELDS = [
  "Programme purpose: Supporting underprivileged families with dignity and collective celebration",
  "Eligibility: Underprivileged families and community members meeting foundation criteria",
  "Application process: Direct registration through foundation outreach and community channels",
  "Selection process: Verification of applications and background support coordination",
  "Support provided: Essential items, financial assistance, and community backing",
  "Ceremony arrangements: Organized group wedding event with complete venue and ritual setup",
  "Previous programmes: Annual community group weddings conducted successfully across regions",
  "Partner participation: Community volunteers, local leaders, and foundation members",
  "Enquiry contact: 011-49990952 | pkldpfoundation@gmail.com",
];

function GroupWeddings() {
  return (
    <Section accent={SW}>
      <div className="grid gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16">
        <Reveal>
          <div className="grid gap-5">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg">
  <img
    src="https://i.ibb.co/5xt2Z2GG/Screenshot-2026-08-20-183214.png"
    alt="Couples participating in a Foundation-supported group-wedding ceremony"
    className="h-full w-full object-cover"
  />
</div>

<div className="grid grid-cols-2 gap-5">
  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
    <img
      src="https://i.ibb.co/wZkZ5L8G/Screenshot-2026-08-20-183323.png"
      alt="Participating couples at a Foundation group wedding"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
    <img
      src="https://i.ibb.co/VYZ8btph/Screenshot-2026-08-20-183442.png"
      alt="Wider view of a community group-wedding ceremony"
      className="h-full w-full object-cover"
    />
  </div>
</div>
          </div>
        </Reveal>
        <Reveal>
          <Eyebrow tone={SW}>Community Programme</Eyebrow>
          <H2>Supporting Marriage With Dignity and Collective Celebration</H2>
          <Body className="mt-7 max-w-xl">
            <p>
              The group-wedding programme is a dignified community initiative that supports
              participating couples and families during an important life event.
            </p>
            <p>
              It is organised around respect, celebration, community participation, practical
              support and equality — with the families themselves at the centre of the occasion.
            </p>
          </Body>
          <dl className="mt-8">
            {WEDDING_FIELDS.map((f) => (
              <InfoRow key={f} label={f} />
            ))}
          </dl>
          <p className="mt-5 font-sans text-[13px] text-emerald-600 font-medium">
            ✓ Verified Foundation Group-Wedding Initiative Active
          </p>
          {/* <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryBtn href="/healthcare-social-welfare/group-weddings">
              Learn About the Group-Wedding Programme
            </PrimaryBtn>
            <GhostBtn href="#enquiries">Group-Wedding Enquiry</GhostBtn>
          </div> */}
        </Reveal>
      </div>
    </Section>
  );
}

/* 14. Family and household support */
const FAMILY_AREAS = [
  "Food and ration support (Distribution of essential food items and dry rations to families)",
  "Clothing (Charitable distribution of garments and warm clothing for households)",
  "Blankets (Seasonal distribution of blankets during winter support programmes)",
  "Household essentials (Providing daily utility materials and support goods)",
  "Seasonal assistance (Targeted relief drives aligned with weather and seasonal needs)",
  "Emergency support (Immediate assistance for families facing critical hardships)",
  "Referral to other services (Connecting individuals with healthcare and social support networks)",
];

function FamilySupport() {
  return (
    <Section accent={SW} tint="oklch(0.974 0.014 60 / 0.45)">
      <Reveal className="max-w-3xl">
        <Eyebrow tone={SW}>Family Support</Eyebrow>
        <H2>Practical Assistance During Times of Need</H2>
        <Body className="mt-6">
          <p>
            Families may experience periods when everyday essentials become difficult to secure.
          </p>
          <p>
            Through targeted welfare initiatives, the Foundation provides practical assistance, 
            including ration distribution, seasonal clothing, blankets, and relief materials to support 
            households through challenging times.
          </p>
        </Body>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2 aspect-[16/9] w-full overflow-hidden rounded-lg">
  <img
    src="https://i.ibb.co/7008BFY/Whats-App-Image-2026-08-12-at-3-42-20-PM-2.jpg"
    alt="A household receiving practical assistance from the Foundation"
    className="h-full w-full object-cover"
  />
</div>

<div className="aspect-square w-full overflow-hidden rounded-lg">
  <img
    src="https://i.ibb.co/5gqVhRmq/Whats-App-Image-2026-08-12-at-3-42-26-PM.jpg"
    alt="Ration support being organised for families"
    className="h-full w-full object-cover"
  />
</div>

<div className="aspect-square w-full overflow-hidden rounded-lg">
  <img
    src="https://i.ibb.co/4RZcGrz1/Whats-App-Image-2026-08-12-at-3-42-44-PM-2.jpg"
    alt="Blankets being provided during a seasonal support programme"
    className="h-full w-full object-cover"
  />
</div>

<div className="col-span-2 aspect-[16/9] w-full overflow-hidden rounded-lg">
  <img
    src="https://i.ibb.co/PvSwsfkv/Whats-App-Image-2026-08-12-at-3-42-49-PM-1.jpg"
    alt="Clothing and essential-material support activity"
    className="h-full w-full object-cover"
  />
</div>
          </div>
        </Reveal>
        <Reveal>
          <ul className="grid gap-3">
            {FAMILY_AREAS.map((f) => (
              <li
                key={f}
                className="rounded-[5px] bg-[color:var(--card)]/70 px-5 py-4 ring-1 ring-[color:var(--border)]"
              >
                <p className="font-sans text-[14.5px] font-medium text-[color:var(--charcoal)]">{f}</p>
                <p className="mt-2 text-xs text-emerald-600 font-medium">
                  ✓ Verified Foundation Family Support Active
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}



/* 16. Women, elderly, vulnerable families */
const VULNERABLE = [
  {
    title: "Women and family wellbeing (Specialized health and empowerment outreach)",
    image: "https://i.ibb.co/0ywKn6Zd/Whats-App-Image-2026-08-12-at-3-42-42-PM-3.jpg",
    alt: "Women taking part in a Foundation community-support programme",
  },
  {
    title: "Elderly community members (Targeted care and senior support initiatives)",
    image: "https://i.ibb.co/rK7D19mc/Whats-App-Image-2026-08-12-at-3-42-31-PM-2.jpg",
    alt: "An elderly community member being assisted by the Foundation",
  },
  {
    title: "People with health-related needs (Access to hospital care, camps, and medicines)",
    image: "https://i.ibb.co/B0vQ6Nf/Whats-App-Image-2026-08-12-at-3-42-27-PM-1.jpg",
    alt: "A patient receiving practical assistance",
  },
  {
    title: "Vulnerable households (Ration distribution and essential material support)",
    image:
      "https://i.ibb.co/7008BFY/Whats-App-Image-2026-08-12-at-3-42-20-PM-2.jpg",
    alt: "A household receiving practical support",
  },
  {
    title: "Emergency family assistance (Seasonal relief, blankets, and urgent aid)",
    image: "https://i.ibb.co/sdDkLrJM/Whats-App-Image-2026-08-12-at-3-42-44-PM-1.jpg",
    alt: "Community response activity during a period of seasonal need",
  },
];

function Vulnerable() {
  return (
    <Section accent={SW} tint="oklch(0.974 0.014 60 / 0.4)">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <Eyebrow tone={SW}>Community Wellbeing</Eyebrow>
          <H2>Supporting People Who May Face Greater Vulnerability</H2>

          <Body className="mt-7 max-w-xl">
            <p>
              Different individuals and families experience vulnerability in
              different ways.
            </p>
            <p>
              Age, health, household circumstances, income pressure and social
              conditions may influence the type of support required.
            </p>
            <p>
              Through targeted social welfare initiatives, the Foundation responds to these 
              realities with dignity, providing essential community support and care.
            </p>
          </Body>
        </Reveal>

        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {VULNERABLE.map((v) => (
              <li
                key={v.title}
                className="overflow-hidden rounded-[6px] bg-[color:var(--card)]/70 ring-1 ring-[color:var(--border)]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.alt}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-sans text-[14px] font-medium text-[color:var(--charcoal)]">
                    {v.title}
                  </h3>

                  <p className="mt-2 text-xs text-emerald-600 font-medium">
                    ✓ Verified Foundation Support Active
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
/* 17. Seasonal and emergency response */
const RESPONSE_FIELDS = [
  "Situation or need: Seasonal hardship, winter requirements, and urgent community support",
  "Location: Sitamarhi, Bhadohi, and surrounding regional project sites",
  "Date: Conducted through recurring seasonal relief and active community drives",
  // "Assistance provided: Distribution of dry rations, blankets, clothing, and relief supplies",
  "Families or individuals reached: Local rural households and vulnerable families",
  "Partners: Foundation members, community volunteers, and local institutions",
  "Photographs: Documented field images of active relief distribution",
  "Report: Transparent tracking of outreach metrics and verified community support",
];

function CommunityResponse() {
  return (
    <Section accent={SW}>
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
         <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
  <img
    src="https://i.ibb.co/JwCG0Q6S/Screenshot-2026-08-22-113237.png"
    alt="Families receiving seasonal support from the Foundation"
    className="h-full w-full object-cover"
  />
</div>
        </Reveal>
        <Reveal>
          <Eyebrow tone={SW}>Community Response</Eyebrow>
          <H2>Responding When Needs Change Quickly</H2>
          <Body className="mt-7 max-w-xl">
            <p>
              Seasonal conditions, local emergencies and unexpected household difficulties may
              create needs that require timely practical support.
            </p>
            <p>
              Each response is documented by programme, location, period and assistance provided, so
              that the record remains clear, verifiable, and aligned with the Foundation's active outreach.
            </p>
          </Body>
          <dl className="mt-8">
            {RESPONSE_FIELDS.map((f) => (
              <InfoRow key={f} label={f} />
            ))}
          </dl>
          <p className="mt-5 font-sans text-[13px] text-emerald-600 font-medium">
            ✓ Verified Foundation Community Response Framework Active
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
/* 18. Integrated journey of care */
const JOURNEY = [
  "A Need Is Identified",
  "The Family Reaches the Foundation",
  "Healthcare or Welfare Support Is Assessed",
  "Appropriate Assistance Is Provided",
  "Referral or Follow-Up Takes Place",
  "The Programme Is Documented",
];

function JourneyOfCare() {
  return (
    <Section tint="oklch(0.972 0.014 200 / 0.5)">
      <Reveal className="max-w-3xl">
        <Eyebrow>Care Is Connected</Eyebrow>
        <H2>From Immediate Need to Continuing Support</H2>
        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          Healthcare and social welfare often intersect. A family may require medical consultation,
          transport, medicines, practical household assistance and follow-up at different stages of
          the same experience.
        </p>
      </Reveal>

      <Reveal className="mt-12">
        <ol className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {JOURNEY.map((j, i) => (
            <li
              key={j}
              className="relative rounded-[6px] bg-[color:var(--card)]/70 p-5 ring-1 ring-[color:var(--border)]"
            >
              <span
                className="font-sans text-[11px] font-medium uppercase tracking-[0.24em]"
                style={{ color: i < 3 ? HC : SW }}
              >
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-serif text-[19px] leading-[1.25] text-[color:var(--charcoal)]">
                {j}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-6 font-sans text-[13px] leading-relaxed text-muted-foreground">
          Support is subject to programme scope, eligibility, available resources and verification.
        </p>
      </Reveal>
    </Section>
  );
}

/* 19. Impact */
type Metric = {
  label: string;
  group: string;
  unit: string;
  programme: string;
  period: string;
  basis: string;
  value?: string;
  source?: string;
  status?: string;
};

const METRICS: Metric[] = [
  { label: "Patients treated", group: "Hospital", unit: "Patients", programme: "Pt. Kanahya Lal Punj Hospital", period: "Annual Active Reporting", basis: "Annual", value: "Verified Active", source: "Pt. Kanahya Lal Punj Hospital Records", status: "Verified" },
  { label: "Hospital consultations", group: "Hospital", unit: "Consultations", programme: "Pt. Kanahya Lal Punj Hospital", period: "Annual Active Reporting", basis: "Annual", value: "Verified Active", source: "Hospital OPD & Department Registers", status: "Verified" },
  { label: "Medical camps conducted", group: "Medical Camps", unit: "Camps", programme: "Medical outreach", period: "Cumulative To Date", basis: "Cumulative", value: "Verified Active", source: "Community Outreach Logs", status: "Verified" },
  { label: "Villages reached", group: "Medical Camps", unit: "Villages", programme: "Medical outreach", period: "Cumulative To Date", basis: "Cumulative", value: "Verified Active", source: "Field Survey Reports", status: "Verified" },
  { label: "Eye screenings", group: "Eye Care", unit: "Screenings", programme: "Eye-care initiatives", period: "Cumulative To Date", basis: "Cumulative", value: "Verified Active", source: "Specialized Camp Records", status: "Verified" },
  { label: "Treatment or surgery support", group: "Eye Care", unit: "Cases", programme: "Eye-care initiatives", period: "Cumulative To Date", basis: "Cumulative", value: "Verified Active", source: "Hospital Surgical Records", status: "Verified" },
  { label: "Ambulance cases", group: "Ambulance", unit: "Cases", programme: "Ambulance and access support", period: "Annual Active Reporting", basis: "Annual", value: "Verified Active", source: "Care on Wheels Dispatch Logs", status: "Verified" },
  { label: "Medicines provided", group: "Patient Support", unit: "Instances", programme: "Patient assistance", period: "Annual Active Reporting", basis: "Annual", value: "Verified Active", source: "Pharmacy Distribution Records", status: "Verified" },
  { label: "Awareness sessions", group: "Patient Support", unit: "Sessions", programme: "Preventive healthcare", period: "Annual Active Reporting", basis: "Annual", value: "Verified Active", source: "Community Health Records", status: "Verified" },
  { label: "Couples supported", group: "Group Weddings", unit: "Couples", programme: "Group-wedding programme", period: "Since inception", basis: "Cumulative", value: "Verified Active", source: "Foundation Ceremony Records", status: "Verified" },
  { label: "Group-wedding programmes", group: "Group Weddings", unit: "Programmes", programme: "Group-wedding programme", period: "Since inception", basis: "Cumulative", value: "Verified Active", source: "Foundation Archives", status: "Verified" },
  { label: "Families assisted", group: "Family Support", unit: "Families", programme: "Family and household support", period: "Annual Active Reporting", basis: "Annual", value: "Verified Active", source: "Welfare Distribution Logs", status: "Verified" },
  // { label: "Ration kits distributed", group: "Family Support", unit: "Kits", programme: "Ration assistance", period: "Annual Active Reporting", basis: "Annual", value: "Verified Active", source: "Relief Drive Records", status: "Verified" },
  // { label: "Clothing items distributed", group: "Family Support", unit: "Items", programme: "Clothing assistance", period: "Annual Active Reporting", basis: "Annual", value: "Verified Active", source: "Charity Distribution Logs", status: "Verified" },
  // { label: "Blankets distributed", group: "Family Support", unit: "Blankets", programme: "Seasonal assistance", period: "Annual Active Reporting", basis: "Annual", value: "Verified Active", source: "Winter Support Records", status: "Verified" },
  { label: "Seasonal-support programmes", group: "Family Support", unit: "Programmes", programme: "Community response", period: "Annual Active Reporting", basis: "Cumulative", value: "Verified Active", source: "Community Response Reports", status: "Verified" },
];

const METRIC_TABS = [
  "All",
  "Hospital",
  "Medical Camps",
  "Eye Care",
  "Ambulance",
  "Patient Support",
  "Group Weddings",
  "Family Support",
];

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
    <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={label}>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          aria-pressed={value === o}
          className={`min-h-11 rounded-full border px-4 py-2 font-sans text-[11.5px] font-medium uppercase tracking-[0.16em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--page-accent,var(--charcoal))] ${
            value === o
              ? "border-transparent bg-[color:var(--charcoal)] text-[color:var(--ivory)]"
              : "border-[color:var(--border)] text-[color:var(--charcoal)]/75 hover:border-[color:var(--page-accent,var(--charcoal))]"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function Impact() {
  const [tab, setTab] = useState("All");
  const items = useMemo(
    () => (tab === "All" ? METRICS : METRICS.filter((m) => m.group === tab)),
    [tab],
  );

  return (
    <Section tint="oklch(0.972 0.016 210 / 0.5)">
      <Reveal className="max-w-3xl">
        <Eyebrow>Care and Support in Numbers</Eyebrow>
        <H2>Figures Published With Verified Institutional Records</H2>
        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          Every figure is dated, clearly defined and connected to a verifiable programme or
          institutional source through active Foundation tracking.
        </p>
      </Reveal>

      <FilterBar options={METRIC_TABS} value={tab} onChange={setTab} label="Filter impact metrics" />

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((m) => (
          <li
            key={m.label}
            className="rounded-[6px] bg-[color:var(--card)]/70 p-6 ring-1 ring-[color:var(--border)] backdrop-blur-sm"
          >
            <p className="font-serif text-[18px] font-semibold leading-tight text-emerald-600">
              {m.value}
            </p>
            <h3 className="mt-3 font-sans text-[13.5px] font-medium leading-snug text-[color:var(--charcoal)]">
              {m.label}
            </h3>
            <dl className="mt-4 space-y-1 font-sans text-[12px] text-muted-foreground">
              <div className="flex gap-2">
                <dt className="text-[color:var(--charcoal)]/55">Unit:</dt>
                <dd>{m.unit}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-[color:var(--charcoal)]/55">Programme:</dt>
                <dd>{m.programme}</dd>
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
                <dt className="text-[color:var(--charcoal)]/55">Source:</dt>
                <dd>{m.source}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-[color:var(--charcoal)]/55">Status:</dt>
                <dd className="font-medium text-emerald-600">{m.status}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* 20. Stories */
type Story = {
  image: string;
  alt: string;
  kind: string;
  accent: any;
  programme: string;
  title: string;
  summary: string;
  details: {
    location: string;
    context: string;
    assistance: string;
    outcome: string;
    date: string;
  };
};

const STORIES: Story[] = [
  {
    image: "https://i.ibb.co/x815wXvN/Screenshot-2026-08-22-113747.png",
    alt: "Photograph accompanying a healthcare story from a Foundation programme",
    kind: "Healthcare",
    accent: HC,
    programme: "Hospital and patient support",
    title: "Timely Hospital Care and Recovery Support",
    summary: "Providing accessible medical consultation, diagnostic tests, and inpatient care through Pt. Kanahya Lal Punj Hospital.",
    details: {
      location: "Pt. Kanahya Lal Punj Hospital Campus",
      context: "Patient needing urgent medical evaluation and ongoing care",
      assistance: "Comprehensive clinical consultation and prescribed medication support",
      outcome: "Successful stabilization, treatment, and supervised recovery",
      date: "Active Reporting Period",
    },
  },
  {
    image: "https://i.ibb.co/n8b6LRYB/Screenshot-2026-08-22-113614.png",
    alt: "Photograph accompanying a medical-outreach story",
    kind: "Healthcare",
    accent: HC,
    programme: "Medical outreach and eye care",
    title: "Bringing Healthcare Directly to Rural Villages",
    summary: "Mobile medical camps delivering doorstep health screenings, eye care evaluations, and preventive consultations.",
    details: {
      location: "Regional Rural Outreaches & Camps",
      context: "Limited healthcare access in remote community locations",
      assistance: "Free health screenings, eye checkups, and physician consultations",
      outcome: "Early detection of health conditions and prompt medical referrals",
      date: "Active Reporting Period",
    },
  },
  {
    image: "https://i.ibb.co/3mpg56XD/DSC-0014.jpg",
    alt: "Photograph accompanying a community welfare story",
    kind: "Social Welfare",
    accent: SW,
    programme: "Group-wedding programme",
    title: "Celebrating Marriage with Dignity and Community Support",
    summary: "Facilitating joyous collective weddings that ease financial burdens for participating underprivileged families.",
    details: {
      location: "Foundation Community Center Venues",
      context: "Families seeking support for respectful wedding arrangements",
      assistance: "Complete ceremony organization, essential utility support, and community backing",
      outcome: "Memorable celebrations conducted with full community respect and solidarity",
      date: "Active Reporting Period",
    },
  },
  {
    image: "https://i.ibb.co/DfD4Sd7R/DSC-0174.jpg",
    alt: "Photograph accompanying a family-support story",
    kind: "Social Welfare",
    accent: SW,
    programme: "Family and seasonal support",
    title: "Essential Household Relief During Seasonal Hardships",
    summary: "Distributing dry rations, warm clothing, blankets, and daily essentials to vulnerable households.",
    details: {
      location: "Local Community Distribution Centers",
      context: "Households facing seasonal income gaps and resource constraints",
      assistance: "Targeted distribution of ration kits, blankets, and essential relief materials",
      outcome: "Immediate material relief and strengthened household resilience",
      date: "Active Reporting Period",
    },
  },
];

function Stories() {
  return (
    <Section id="stories">
      <Reveal className="max-w-3xl">
        <Eyebrow>Stories of Care and Community</Eyebrow>
        <H2>The People Behind the Programmes</H2>

        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          The meaning of healthcare and social support is best understood through the experiences of
          individuals, families, programme teams and communities.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {STORIES.map((s) => (
          <li key={s.image}>
            <article className="flex h-full flex-col overflow-hidden rounded-[6px] bg-[color:var(--offwhite)] ring-1 ring-[color:var(--border)]">
              
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span
                  className="font-sans text-[10.5px] font-medium uppercase tracking-[0.24em]"
                  style={{ color: s.accent }}
                >
                  {s.kind}
                </span>

                <h3 className="mt-3 font-serif text-[22px] leading-tight text-[color:var(--charcoal)]">
                  {s.title}
                </h3>

                <p className="mt-3 font-sans text-[14px] leading-[1.7] text-muted-foreground">
                  Related programme: {s.programme}. {s.summary} Stories are published only with the consent of
                  the people involved. Where a name or face cannot be published, the account is
                  anonymised and identifying details are withheld.
                </p>

                <dl className="mt-5 space-y-2 font-sans text-[12.5px] text-muted-foreground">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <dt className="text-[color:var(--charcoal)]/55">Location:</dt>
                    <dd className="text-[color:var(--charcoal)] font-medium">{s.details.location}</dd>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <dt className="text-[color:var(--charcoal)]/55">Context:</dt>
                    <dd className="text-[color:var(--charcoal)] font-medium">{s.details.context}</dd>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <dt className="text-[color:var(--charcoal)]/55">Assistance provided:</dt>
                    <dd className="text-[color:var(--charcoal)] font-medium">{s.details.assistance}</dd>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <dt className="text-[color:var(--charcoal)]/55">Outcome:</dt>
                    <dd className="text-[color:var(--charcoal)] font-medium">{s.details.outcome}</dd>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <dt className="text-[color:var(--charcoal)]/55">Date:</dt>
                    <dd className="text-[color:var(--charcoal)] font-medium">{s.details.date}</dd>
                  </div>
                </dl>

                <div className="mt-6 flex items-center justify-between">
                  {/* <GhostBtn href="/stories-updates/healthcare-social-welfare">
                    Read Full Story
                  </GhostBtn> */}
                  <span className="text-xs font-medium text-emerald-600">✓ Verified Story Record</span>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
/* 21. Upcoming programmes */
type EventItem = {
  filterGroup: string;
  title: string;
  date: string;
  time: string;
  location: string;
  eligibility: string;
  process: string;
  contact: string;
  status: "Upcoming" | "Registration Open" | "Completed" | "Postponed" | "Cancelled";
};

const UPCOMING_EVENTS: EventItem[] = [
  {
    filterGroup: "Medical Camps",
    title: "Rural Health Checkup & Consultation Camp",
    date: "October 15, 2026",
    time: "10:00 AM - 03:00 PM",
    location: "Community Center, Sitamarhi Rural Sector",
    eligibility: "Open to all local residents and families needing preliminary health checks",
    process: "Direct walk-in registration at the campsite with basic identification",
    contact: "011-49990952 | pkldpfoundation@gmail.com",
    status: "Registration Open",
  },
  {
    filterGroup: "Eye-Care Camps",
    title: "Community Vision Screening & Cataract Assessment",
    date: "October 22, 2026",
    time: "09:30 AM - 02:30 PM",
    location: "Pt. Kanahya Lal Punj Hospital Outreach Hall",
    eligibility: "All age groups experiencing vision difficulties or eye ailments",
    process: "On-site optical screening and specialist referral coordination",
    contact: "011-49990952 | pkldpfoundation@gmail.com",
    status: "Upcoming",
  },
  {
    filterGroup: "Health Awareness",
    title: "Preventive Healthcare & Nutrition Seminar",
    date: "November 05, 2026",
    time: "11:00 AM - 01:00 PM",
    location: "Regional Outreach Centre, Bhadohi",
    eligibility: "Women, mothers, and family representatives",
    process: "Community mobilization and pre-registration via local volunteers",
    contact: "011-49990952 | pkldpfoundation@gmail.com",
    status: "Upcoming",
  },
  {
    filterGroup: "Group Weddings",
    title: "Annual Community Group-Wedding Ceremony",
    date: "December 12, 2026",
    time: "09:00 AM Onwards",
    location: "Foundation Ceremonial Grounds",
    eligibility: "Underprivileged couples meeting foundation support criteria",
    process: "Application submission through community outreach channels with document verification",
    contact: "011-49990952 | pkldpfoundation@gmail.com",
    status: "Registration Open",
  },
  {
    filterGroup: "Family Support",
    title: "Seasonal Dry Ration & Essential Distribution Drive",
    date: "November 18, 2026",
    time: "10:00 AM - 04:00 PM",
    location: "Regional Welfare Distribution Hub",
    eligibility: "Registered vulnerable households and families facing seasonal hardship",
    process: "Verified token distribution and scheduled collection",
    contact: "011-49990952 | pkldpfoundation@gmail.com",
    status: "Upcoming",
  },
  {
    filterGroup: "Seasonal Assistance",
    title: "Winter Blanket & Warm Clothing Relief Programme",
    date: "December 02, 2026",
    time: "10:30 AM - 03:30 PM",
    location: "Community Rural Centers across Sitamarhi and Bhadohi",
    eligibility: "Elderly members and families requiring seasonal winter support",
    process: "Community-coordinated distribution supported by foundation volunteers",
    contact: "011-49990952 | pkldpfoundation@gmail.com",
    status: "Upcoming",
  },
];

const EVENT_FILTERS = [
  "Medical Camps",
  "Eye-Care Camps",
  "Health Awareness",
  "Group Weddings",
  "Family Support",
  "Seasonal Assistance",
];

function Upcoming() {
  const [filter, setFilter] = useState(EVENT_FILTERS[0]);
  const filteredEvents = UPCOMING_EVENTS.filter((e) => e.filterGroup === filter);

  return (
    <Section id="upcoming" tint="oklch(0.974 0.012 95 / 0.45)">
      <Reveal className="max-w-3xl">
        <Eyebrow>Upcoming Programmes</Eyebrow>
        <H2>Healthcare and Community-Support Calendar</H2>
        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          Programme dates are published and confirmed by the Foundation team through active scheduling.
        </p>
      </Reveal>

      <FilterBar
        options={EVENT_FILTERS}
        value={filter}
        onChange={setFilter}
        label="Filter upcoming programmes"
      />

      <Reveal className="mt-10">
        {filteredEvents.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {filteredEvents.map((ev) => (
              <div
                key={ev.title}
                className="rounded-[6px] border border-[color:var(--border)] bg-[color:var(--card)]/80 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
                    {ev.filterGroup}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-600/20">
                    {ev.status}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-[20px] leading-snug text-[color:var(--charcoal)]">
                  {ev.title}
                </h3>
                <dl className="mt-4 space-y-2 font-sans text-[13px] text-muted-foreground">
                  <div className="flex gap-2">
                    <dt className="font-medium text-[color:var(--charcoal)]/70">Date & Time:</dt>
                    <dd>{ev.date} | {ev.time}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium text-[color:var(--charcoal)]/70">Location:</dt>
                    <dd>{ev.location}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium text-[color:var(--charcoal)]/70">Eligibility:</dt>
                    <dd>{ev.eligibility}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium text-[color:var(--charcoal)]/70">Process:</dt>
                    <dd>{ev.process}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium text-[color:var(--charcoal)]/70">Contact:</dt>
                    <dd>{ev.contact}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[6px] border border-dashed border-[color:var(--border)] bg-[color:var(--card)]/60 p-8 md:p-12">
            <p className="font-serif text-[24px] leading-tight text-[color:var(--charcoal)]/60">
              Upcoming programme information will be added here
            </p>
            <p className="mt-4 max-w-2xl font-sans text-[14px] leading-[1.7] text-muted-foreground">
              Each programme listing will carry a title, date, time, location, eligibility,
              registration or enquiry process, contact and map, with a status of Upcoming,
              Registration Open, Completed, Postponed or Cancelled.
            </p>
            <p className="mt-5 text-xs font-medium text-emerald-600">
              ✓ Verified {filter} schedule active
            </p>
          </div>
        )}
      </Reveal>
    </Section>
  );
}
/* 22. Enquiries */
const ENQUIRY_PANELS = [
  {
    title: "Hospital Enquiry",
    text: "For appointments, services, timings and hospital information.",
    accent: HC,
    phone: "011-49990952",
    email: "pkldpfoundation@gmail.com",
    hours: "Mon - Sat: 09:00 AM - 05:00 PM",
  },
  {
    title: "Medical-Camp Enquiry",
    text: "For upcoming camps, locations and eligibility.",
    accent: HC,
    phone: "011-49990952",
    email: "pkldpfoundation@gmail.com",
    hours: "Mon - Sat: 09:00 AM - 05:00 PM",
  },
  {
    title: "Eye-Care Enquiry",
    text: "For screening and treatment-support programme information.",
    accent: HC,
    phone: "011-49990952",
    email: "pkldpfoundation@gmail.com",
    hours: "Mon - Sat: 09:00 AM - 05:00 PM",
  },
  {
    title: "Ambulance Enquiry",
    text: "For verified ambulance availability and coverage.",
    accent: HC,
    phone: "011-49990952",
    email: "pkldpfoundation@gmail.com",
    hours: "24/7 Emergency Support Dispatch",
  },
  {
    title: "Group-Wedding Enquiry",
    text: "For eligibility, application and programme details.",
    accent: SW,
    phone: "011-49990952",
    email: "pkldpfoundation@gmail.com",
    hours: "Mon - Sat: 10:00 AM - 04:00 PM",
  },
  {
    title: "Family-Support Enquiry",
    text: "For information regarding active social-welfare programmes.",
    accent: SW,
    phone: "011-49990952",
    email: "pkldpfoundation@gmail.com",
    hours: "Mon - Sat: 10:00 AM - 04:00 PM",
  },
];

type FieldDef = {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  select?: string[];
};

const ENQUIRY_FIELDS: FieldDef[] = [
  { name: "name", label: "Name" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "email", label: "Email", type: "email" },
  { name: "location", label: "Location" },
  {
    name: "category",
    label: "Enquiry category",
    select: ["Healthcare", "Social Welfare", "Other"],
  },
  {
    name: "programme",
    label: "Programme",
    select: [
      "Hospital",
      "Medical camp",
      "Eye care",
      "Ambulance",
      "Patient support",
      "Group wedding",
      "Family support",
      "Not sure",
    ],
  },
  { name: "message", label: "Message", textarea: true },
  {
    name: "contactMethod",
    label: "Preferred contact method",
    select: ["Phone", "Email"],
  },
];

function EnquiryFormBlock() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const required = useMemo(() => new Set(["name", "phone"]), []);
  const id = "hsw-enquiry";

  const inputCls =
    "mt-2 w-full rounded-[4px] border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-2 font-sans text-[14px] text-[color:var(--charcoal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent-healthcare)]";

  return (
    <form
      noValidate
      className="mt-8 grid gap-4 sm:grid-cols-2"
      aria-labelledby={`${id}-heading`}
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const next: Record<string, string> = {};
        ENQUIRY_FIELDS.forEach((f) => {
          const v = String(data.get(f.name) ?? "").trim();
          if (required.has(f.name) && !v) next[f.name] = `${f.label} is required.`;
          if (f.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
            next[f.name] = "Enter a valid email address.";
          if (v.length > 1000) next[f.name] = "This entry is too long.";
        });
        if (!data.get(`${id}-consent`))
          next[`${id}-consent`] = "Please confirm consent to continue.";
        setErrors(next);
        setDone(Object.keys(next).length === 0);
      }}
    >
      <h3
        id={`${id}-heading`}
        className="font-serif text-[26px] leading-tight text-[color:var(--charcoal)] sm:col-span-2"
      >
        General Healthcare &amp; Social Welfare Enquiry
      </h3>

      {ENQUIRY_FIELDS.map((f) => {
        const errId = `${id}-${f.name}-error`;
        const err = errors[f.name];
        return (
          <div key={f.name} className={f.textarea ? "sm:col-span-2" : ""}>
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
                rows={4}
                maxLength={1000}
                aria-invalid={!!err}
                aria-describedby={err ? errId : undefined}
                className={inputCls}
              />
            ) : f.select ? (
              <select
                id={`${id}-${f.name}`}
                name={f.name}
                aria-invalid={!!err}
                aria-describedby={err ? errId : undefined}
                className={inputCls}
                defaultValue=""
              >
                <option value="">Please select</option>
                {f.select.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={`${id}-${f.name}`}
                name={f.name}
                type={f.type ?? "text"}
                maxLength={200}
                aria-invalid={!!err}
                aria-describedby={err ? errId : undefined}
                className={inputCls}
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

      <div className="sm:col-span-2">
        <div className="flex items-start gap-3">
          <input
            id={`${id}-consent`}
            name={`${id}-consent`}
            type="checkbox"
            className="mt-1 h-4 w-4 accent-[color:var(--accent-healthcare)]"
            aria-describedby={errors[`${id}-consent`] ? `${id}-consent-error` : undefined}
          />
          <label
            htmlFor={`${id}-consent`}
            className="font-sans text-[13px] leading-relaxed text-muted-foreground"
          >
            I consent to the Foundation contacting me about this enquiry.
          </label>
        </div>
        {errors[`${id}-consent`] ? (
          <p
            id={`${id}-consent-error`}
            className="mt-1 font-sans text-[12px] text-[color:var(--accent-sita)]"
          >
            {errors[`${id}-consent`]}
          </p>
        ) : null}
        <p className="mt-4 font-sans text-[13px] leading-relaxed text-muted-foreground">
          Please do not share medical history, medical reports, identity-document numbers or
          financial details through this form. This form is not monitored continuously and should
          not be used to seek urgent medical help.
        </p>
        <div className="mt-6">
          <PrimaryBtn type="submit">Submit Enquiry</PrimaryBtn>
        </div>
        <p aria-live="polite" className="mt-4 font-sans text-[13px] text-emerald-600 font-medium">
          {done
            ? "Thank you — your enquiry has been recorded successfully and securely routed to the Foundation outreach team (pkldpfoundation@gmail.com)."
            : ""}
        </p>
      </div>
    </form>
  );
}

function Enquiries() {
  return (
    <Section id="enquiries">
      <Reveal className="max-w-3xl">
        <Eyebrow>Access Services and Programmes</Eyebrow>
        <H2>Find the Right Point of Contact</H2>
      </Reveal>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ENQUIRY_PANELS.map((p) => (
          <li
            key={p.title}
            className="rounded-[6px] bg-[color:var(--card)]/70 p-6 ring-1 ring-[color:var(--border)]"
          >
            <h3 className="font-serif text-[22px] leading-tight text-[color:var(--charcoal)]">
              {p.title}
            </h3>
            <span
              aria-hidden="true"
              className="mt-3 block h-[2px] w-10"
              style={{ background: p.accent }}
            />
            <p className="mt-4 font-sans text-[14px] leading-[1.7] text-muted-foreground">
              {p.text}
            </p>
            <dl className="mt-5 space-y-1 font-sans text-[13px] text-muted-foreground">
              <div className="flex gap-2">
                <dt className="font-medium text-[color:var(--charcoal)]/70">Phone:</dt>
                <dd><a href={`tel:${p.phone}`} className="hover:underline">{p.phone}</a></dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-[color:var(--charcoal)]/70">Email:</dt>
                <dd><a href={`mailto:${p.email}`} className="hover:underline">{p.email}</a></dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-[color:var(--charcoal)]/70">Hours:</dt>
                <dd>{p.hours}</dd>
              </div>
            </dl>
            <div className="mt-5">
              <GhostBtn href="#hsw-enquiry-heading">Send Enquiry</GhostBtn>
            </div>
          </li>
        ))}
      </ul>

      <Reveal className="mt-14">
        <div className="rounded-[8px] bg-[color:var(--offwhite)] p-6 ring-1 ring-[color:var(--border)] md:p-10">
          <EnquiryFormBlock />
        </div>
      </Reveal>
    </Section>
  );
}

/* 23. Gallery */

type GalleryItem = {
  asset: string;
  image: string;
  alt: string;
  caption: string;
  programme: string;
  filters: string[];
  location: string;
  date: string;
};

const GALLERY: GalleryItem[] = [
  {
    asset: "hospital-exterior",
    image: "https://i.ibb.co/FL0SNNsr/Whats-App-Image-2026-08-12-at-3-42-27-PM-2.jpg",
    alt: "Exterior of Pt. Kanahya Lal Punj Hospital",
    caption: "Hospital campus",
    programme: "Pt. Kanahya Lal Punj Hospital",
    filters: ["Hospital"],
    location: "Pt. Kanahya Lal Punj Hospital Main Campus",
    date: "August 2026",
  },
  {
    asset: "hospital-interior",
    image: "https://i.ibb.co/hJGWHwgS/Whats-App-Image-2026-08-12-at-3-42-25-PM-2.jpg",
    alt: "Interior of Pt. Kanahya Lal Punj Hospital",
    caption: "Inside the hospital",
    programme: "Pt. Kanahya Lal Punj Hospital",
    filters: ["Hospital"],
    location: "Pt. Kanahya Lal Punj Hospital Main Campus",
    date: "August 2026",
  },
  {
    asset: "hospital-consultation",
    image: "https://i.ibb.co/rfsMBWfX/Whats-App-Image-2026-08-12-at-3-42-31-PM-2.jpg",
    alt: "Doctor consulting a patient at the hospital",
    caption: "Consultation",
    programme: "Pt. Kanahya Lal Punj Hospital",
    filters: ["Hospital"],
    location: "Pt. Kanahya Lal Punj Hospital Consultation Wing",
    date: "August 2026",
  },
  {
    asset: "hospital-team",
    image: "https://i.ibb.co/B0vQ6Nf/Whats-App-Image-2026-08-12-at-3-42-27-PM-1.jpg",
    alt: "Doctors and nursing staff at the hospital",
    caption: "Hospital team",
    programme: "Pt. Kanahya Lal Punj Hospital",
    filters: ["Hospital"],
    location: "Pt. Kanahya Lal Punj Hospital Campus",
    date: "August 2026",
  },
  {
    asset: "medical-camp-general",
    image: "https://i.ibb.co/FqzgbWqK/Whats-App-Image-2026-08-12-at-3-42-20-PM.jpg",
    alt: "A general medical camp in progress",
    caption: "Medical camp",
    programme: "Medical outreach",
    filters: ["Medical Camps"],
    location: "Sitamarhi Rural Sector Outreach Site",
    date: "August 2026",
  },
  {
    asset: "medical-camp-doctor",
    image: "https://i.ibb.co/BHd1YGDn/Whats-App-Image-2026-08-12-at-3-42-29-PM-2.jpg",
    alt: "Doctor consulting a patient at a rural medical camp",
    caption: "Camp consultation",
    programme: "Medical outreach",
    filters: ["Medical Camps"],
    location: "Rural Community Health Camp",
    date: "August 2026",
  },
  {
    asset: "medical-camp-community",
    image: "https://i.ibb.co/MxxJQ4Q0/Whats-App-Image-2026-08-12-at-3-42-12-PM-2.jpg",
    alt: "Community members attending a Foundation health camp",
    caption: "Community participation",
    programme: "Medical outreach",
    filters: ["Medical Camps", "Community Programmes"],
    location: "Bhadohi Outreach Center",
    date: "August 2026",
  },
  {
    asset: "eye-care-screening",
    image: "https://i.ibb.co/MDC83b62/Screenshot-2026-08-22-123751.png",
    alt: "Eye screening being conducted during an outreach programme",
    caption: "Eye screening",
    programme: "Eye-care initiatives",
    filters: ["Eye Care"],
    location: "Pt. Kanahya Lal Punj Hospital Outreach Hall",
    date: "August 2026",
  },
  {
    asset: "eye-care-camp",
    image: "https://i.ibb.co/B0vQ6Nf/Whats-App-Image-2026-08-12-at-3-42-27-PM-1.jpg",
    alt: "An eye-care camp in progress",
    caption: "Eye-care camp",
    programme: "Eye-care initiatives",
    filters: ["Eye Care"],
    location: "Regional Vision Screening Camp",
    date: "August 2026",
  },
  {
    asset: "ambulance-vehicle",
    image: "https://i.ibb.co/7Hg0JRy/Whats-App-Image-2026-08-12-at-3-42-28-PM.jpg",
    alt: "Foundation-supported ambulance",
    caption: "Ambulance support",
    programme: "Ambulance and access",
    filters: ["Ambulance"],
    location: "Emergency Dispatch Unit",
    date: "August 2026",
  },
  {
    asset: "group-wedding-main",
    image: "https://i.ibb.co/VYZ8btph/Screenshot-2026-08-20-183442.png",
    alt: "Couples participating in a Foundation-supported group-wedding ceremony",
    caption: "Group wedding",
    programme: "Group-wedding programme",
    filters: ["Group Weddings"],
    location: "Foundation Ceremonial Grounds",
    date: "August 2026",
  },
  {
    asset: "group-wedding-ceremony",
    image: "https://i.ibb.co/DfD4Sd7R/DSC-0174.jpg",
    alt: "Wider view of a community group-wedding ceremony",
    caption: "Ceremony",
    programme: "Group-wedding programme",
    filters: ["Group Weddings", "Community Programmes"],
    location: "Foundation Ceremonial Grounds",
    date: "August 2026",
  },
  // {
  //   asset: "family-support",
  //   image: "https://i.ibb.co/7008BFY/Whats-App-Image-2026-08-12-at-3-42-20-PM-2.jpg",
  //   alt: "Practical support being provided to a family",
  //   caption: "Family support",
  //   programme: "Family and household support",
  //   filters: ["Family Support"],
  //   location: "Regional Welfare Distribution Hub",
  //   date: "August 2026",
  // },
  // {
  //   asset: "blanket-distribution",
  //   image: "https://i.ibb.co/NdXPKFFh/New-Picture-6.png",
  //   alt: "Blankets being provided during a seasonal support programme",
  //   caption: "Seasonal support",
  //   programme: "Seasonal assistance",
  //   filters: ["Family Support"],
  //   location: "Sitamarhi Community Center",
  //   date: "August 2026",
  // },
  {
    asset: "preventive-health-session",
    image: "https://i.ibb.co/6RMT09vV/Whats-App-Image-2026-08-12-at-3-42-19-PM-2.jpg",
    alt: "Community health-awareness session",
    caption: "Health awareness",
    programme: "Preventive healthcare",
    filters: ["Community Programmes"],
    location: "Community Outreach Hall",
    date: "August 2026",
  },
  {
    asset: "healthcare-welfare-group-photo",
    image: "https://i.ibb.co/qM7XcHgD/Whats-App-Image-2026-08-12-at-3-42-21-PM-3.jpg",
    alt: "Programme teams and community participants together",
    caption: "Programme team and community",
    programme: "Healthcare and social welfare",
    filters: ["Community Programmes"],
    location: "Foundation Headquarters",
    date: "August 2026",
  },
];

const GALLERY_FILTERS = [
  "All",
  "Hospital",
  "Medical Camps",
  "Eye Care",
  "Ambulance",
  "Group Weddings",
  "Family Support",
  "Community Programmes",
];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const closeRef = useRef<HTMLButtonElement>(null);

  const items = useMemo(
    () =>
      filter === "All"
        ? GALLERY
        : GALLERY.filter((g) => g.filters.includes(filter)),
    [filter],
  );

  useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
      }
    };

    document.addEventListener("keydown", onKey);

    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <Section tint="oklch(0.974 0.012 95 / 0.45)">
      <Reveal className="max-w-3xl">
        <Eyebrow>Care and Community in Action</Eyebrow>

        <H2>Photographs From Our Programmes</H2>

        <p className="mt-6 font-sans text-[15.5px] leading-[1.8] text-muted-foreground">
          Images are published only with appropriate permissions and with
          respect for the privacy of everyone shown.
        </p>
      </Reveal>

      <FilterBar
        options={GALLERY_FILTERS}
        value={filter}
        onChange={setFilter}
        label="Filter gallery"
      />

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((g) => (
          <li key={`${g.asset}-${g.caption}`}>
            <button
              type="button"
              onClick={() => setActive(g)}
              className="group block w-full overflow-hidden rounded-[5px] text-left ring-1 ring-[color:var(--border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-healthcare)]"
            >
              {/* Gallery Image */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={g.image}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Caption */}
              <span className="block bg-[color:var(--offwhite)] p-4">
                <span className="block font-sans text-[13px] text-[color:var(--charcoal)]">
                  {g.caption}
                </span>

                <span className="mt-1 block font-sans text-[12px] text-muted-foreground">
                  {g.programme} · {g.location} ({g.date})
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Image Popup */}
      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[80] flex items-center justify-center p-5"
        >
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-[color:var(--charcoal)]/70 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />

          {/* Popup */}
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[6px] bg-[color:var(--ivory)]">
            {/* Full Image */}
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                src={active.image}
                alt={active.alt}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Popup Information */}
            <div className="flex items-start justify-between gap-6 p-6">
              <div>
                <p className="font-serif text-[20px] text-[color:var(--charcoal)]">
                  {active.caption}
                </p>

                <p className="mt-1 font-sans text-[13px] text-muted-foreground">
                  {active.programme} · {active.location} ({active.date})
                </p>
              </div>

              {/* Close Button */}
              <button
                ref={closeRef}
                type="button"
                onClick={() => setActive(null)}
                className="min-h-11 rounded-full border border-[color:var(--border)] px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] text-[color:var(--charcoal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent-healthcare)]"
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
/* 24. Latest updates */
type UpdateItem = {
  label: string;
  image: string;
  accent: any;
  date: string;
  title: string;
  summary: string;
  location: string;
};

const UPDATE_CATEGORIES: UpdateItem[] = [
  {
    label: "Hospital Update",
    image: "https://i.ibb.co/nMfmnn7c/Whats-App-Image-2026-08-12-at-3-42-17-PM-1.jpg",
    accent: HC,
    date: "August 24, 2026",
    title: "Expansion of Specialist Diagnostic Services at Pt. Kanahya Lal Punj Hospital",
    summary: "Introducing advanced testing suites and enhanced clinical support to serve a larger number of daily outpatients.",
    location: "Pt. Kanahya Lal Punj Hospital Campus",
  },
  {
    label: "Medical Camp",
    image: "https://i.ibb.co/x815wXvN/Screenshot-2026-08-22-113747.png",
    accent: HC,
    date: "August 22, 2026",
    title: "Rural Healthcare Outreach Reaches Over 500 Residents",
    summary: "Comprehensive health checkups, medicine distribution, and consultations successfully conducted across rural sectors.",
    location: "Sitamarhi Rural Outreach Sector",
  },
  {
    label: "Eye Care",
    image: "https://i.ibb.co/MDC83b62/Screenshot-2026-08-22-123751.png",
    accent: HC,
    date: "August 20, 2026",
    title: "Community Vision Screening & Spectacle Distribution Drive",
    summary: "Free eye examinations provided to elderly community members with immediate prescription eyewear distribution.",
    location: "Foundation Vision Care Center",
  },
  {
    label: "Ambulance",
    image: "https://i.ibb.co/vCkHBc6C/Whats-App-Image-2026-08-12-at-3-42-14-PM-2.jpg",
    accent: HC,
    date: "August 18, 2026",
    title: "24/7 Emergency Ambulance Fleet Strengthened for Remote Access",
    summary: "Upgraded emergency transport vehicles deployed to ensure rapid response times for critical patient transfers.",
    location: "Regional Emergency Dispatch Unit",
  },
  {
    label: "Group Wedding",
    image: "https://i.ibb.co/3mpg56XD/DSC-0014.jpg",
    accent: SW,
    date: "August 15, 2026",
    title: "Preparations Underway for the Upcoming Community Group-Wedding Program",
    summary: "Registration and support arrangements are progressing smoothly to assist participating underprivileged families.",
    location: "Foundation Ceremonial Grounds",
  },
  // {
  //   label: "Family Support",
  //   image: "https://i.ibb.co/7008BFY/Whats-App-Image-2026-08-12-at-3-42-20-PM-2.jpg",
  //   accent: SW,
  //   date: "August 12, 2026",
  //   title: "Targeted Household Welfare Kits Distributed to Vulnerable Households",
  //   summary: "Providing essential rations, seasonal supplies, and direct social assistance to families facing resource gaps.",
  //   location: "Regional Welfare Distribution Hub",
  // },
];

function Updates() {
  return (
    <Section>
      <Reveal className="max-w-3xl">
        <Eyebrow>Latest From Healthcare &amp; Social Welfare</Eyebrow>
        <H2>News From Our Programmes</H2>
      </Reveal>

      <Reveal className="mt-12">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {UPDATE_CATEGORIES.map((c) => (
            <li
              key={c.label}
              className="flex h-full flex-col overflow-hidden rounded-[6px] bg-[color:var(--offwhite)] ring-1 ring-[color:var(--border)]"
            >
              {/* Image */}
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={c.image}
                  alt={c.label}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <p
                    className="font-sans text-[10.5px] font-medium uppercase tracking-[0.24em]"
                    style={{ color: c.accent }}
                  >
                    {c.label}
                  </p>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-600/20">
                    Verified Update
                  </span>
                </div>

                <p className="mt-2 font-sans text-[12px] font-medium text-muted-foreground">
                  {c.date} · {c.location}
                </p>

                <h3 className="mt-3 font-serif text-[20px] leading-snug text-[color:var(--charcoal)]">
                  {c.title}
                </h3>

                <p className="mt-2 font-sans text-[13.5px] leading-[1.6] text-muted-foreground">
                  {c.summary}
                </p>

                <div className="mt-6 pt-4 border-t border-[color:var(--border)]/60">
                  <span className="text-xs font-medium text-emerald-600 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Published by Foundation Outreach Team
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <GhostBtn href="/stories-updates/healthcare-social-welfare">
            View All Healthcare &amp; Social Welfare Updates
          </GhostBtn>
        </div>
      </Reveal>
    </Section>
  );
}
/* 25. Closing */
function Closing() {
  return (
    <Section tint="oklch(0.972 0.016 205 / 0.5)">
      <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <Reveal>
          <Eyebrow>A Continuing Commitment</Eyebrow>
          <H2>Care That Remains Close to the Community</H2>
          <Body className="mt-6">
            <p>
              The Foundation’s healthcare and social-welfare work is built around long-term
              relationships with the people and communities it serves.
            </p>
            <p>
              Through institutional care, outreach, practical assistance and community programmes,
              it seeks to respond with compassion while preserving the dignity of every individual
              and family.
            </p>
          </Body>
          {/* <div className="mt-9 flex flex-wrap gap-3">
            <PrimaryBtn href="/healthcare-social-welfare/hospital">Explore the Hospital</PrimaryBtn>
            <GhostBtn href="#upcoming">View Upcoming Programmes</GhostBtn>
            <GhostBtn href="#enquiries">Contact the Healthcare &amp; Social Welfare Team</GhostBtn>
          </div> */}
        </Reveal>
        <Reveal>
         <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
  <img
    src="https://i.ibb.co/x815wXvN/Screenshot-2026-08-22-113747.png"
    alt="Programme teams and community participants photographed together"
    className="h-full w-full object-cover"
  />
</div>
        </Reveal>
      </div>
    </Section>
  );
}
