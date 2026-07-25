import { useEffect, useState } from "react";

type Founder = {
  key: string;
  name: string;
  bio: string;
  image: string;
};

const FOUNDERS: Founder[] = [
  {
    key: "kanahya",
    name: "Late Pt. Kanahya Lal Punj",
    bio: "A man of vision and integrity, he built his legacy on honesty, sincerity, and hard work. His life continues to inspire generations.",
    image: "/founders/kanahya.jpg", // Maps to kanahya.jpg[cite: 3]
  },
  {
    key: "dayawanti",
    name: "Late Smt. Dayawanti Punj",
    bio: "A noble and idealistic woman, she embodied wisdom, devotion, and grace. Her values remain the guiding light of the Foundation.",
    image: "/founders/dayawanti.jpg", // Maps to dayawanti.jpg[cite: 1]
  },
  {
    key: "snp",
    name: "Late Shri S. N. P. Punj",
    bio: "A visionary entrepreneur and educationist, he founded DPMS to bring world-class learning to Sitamarhi. His mission lives on through every student's success.",
    image: "/founders/snp.jpg", // Maps to snp.jpg[cite: 4]
  },
  {
    key: "indu",
    name: "Late Smt. Indu Punj",
    bio: "A compassionate and inspiring soul, she worked tirelessly for the upliftment of the poor and underprivileged. Her kindness is woven into every initiative of the Foundation.",
    image: "/founders/indu.jpg", // Maps to indu.jpg[cite: 2]
  },
];

function FounderTile({
  founder,
  onOpen,
}: {
  founder: Founder;
  onOpen: () => void;
}) {
  return (
    <div className="group relative">
      <div
        className="relative rounded-[6px] p-[3px] shadow-[0_2px_10px_rgba(60,40,20,0.08)] ring-1 ring-[color:var(--accent-sita)]/25 transition-all duration-500 group-hover:shadow-[0_6px_24px_rgba(60,40,20,0.18)] group-hover:ring-[color:var(--accent-sita)]/55"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.94 0.03 60) 0%, oklch(0.88 0.05 40) 50%, oklch(0.94 0.03 60) 100%)",
        }}
      >
        <button
          type="button"
          onClick={onOpen}
          className="relative block w-full overflow-hidden rounded-[4px] bg-[color:var(--card)] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-sita)]"
          aria-label={`View biography of ${founder.name}`}
        >
          <div className="aspect-[4/5] w-full overflow-hidden">
            <div className="h-full w-full grayscale transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0">
              <img
                src={founder.image}
                alt={founder.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </button>
      </div>
      <p className="mt-2.5 text-center font-serif text-[12px] leading-tight text-[color:var(--charcoal)]/85 md:text-[13px]">
        {founder.name}
      </p>
    </div>
  );
}

function FounderModal({
  founder,
  onClose,
}: {
  founder: Founder;
  onClose: () => void;
}) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="founder-modal-title"
    >
      <div
        className="absolute inset-0 bg-[color:var(--charcoal)]/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative z-10 w-full max-w-[720px] overflow-hidden rounded-[10px] p-[3px] shadow-[0_20px_60px_rgba(30,20,10,0.35)]"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.9 0.06 60) 0%, oklch(0.78 0.09 40) 50%, oklch(0.9 0.06 60) 100%)",
        }}
      >
        <div className="relative grid grid-cols-1 gap-0 rounded-[7px] bg-[color:var(--card)] sm:grid-cols-[42%_58%]">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-[color:var(--charcoal)] shadow hover:bg-white"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              ×
            </span>
          </button>
          <div className="aspect-[4/5] w-full overflow-hidden sm:aspect-auto sm:min-h-[420px]">
            <img
              src={founder.image}
              alt={founder.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-8 md:px-9 md:py-10">
            <span className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-sita)]/85">
              In Loving Memory
            </span>
            <h3
              id="founder-modal-title"
              className="mt-3 font-serif text-[24px] leading-tight text-[color:var(--charcoal)] md:text-[28px]"
            >
              {founder.name}
            </h3>
            <div className="mt-4 h-px w-12 bg-[color:var(--accent-sita)]/60" />
            <p className="mt-5 font-sans text-[14.5px] leading-[1.8] text-[color:var(--charcoal)]/85 md:text-[15.5px]">
              {founder.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FoundationSection() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenKey(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const openFounder = FOUNDERS.find((f) => f.key === openKey) ?? null;

  return (
    <section
      aria-labelledby="foundation-heading"
      className="relative px-5 py-20 md:px-8 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, var(--ivory) 0%, oklch(0.965 0.014 160 / 0.55) 45%, oklch(0.97 0.016 220 / 0.5) 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[color:var(--accent-sita)]/60" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--charcoal)]/65">
              The Foundation
            </span>
            <span className="h-px w-8 bg-[color:var(--accent-sita)]/60" />
          </div>
          <h2
            id="foundation-heading"
            className="mt-5 font-serif text-[32px] leading-[1.1] text-[color:var(--charcoal)] md:text-[44px] lg:text-[52px]"
          >
            A Legacy of Service Rooted in Community
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-[46%_54%] lg:gap-16">
          <div className="lg:pt-2">
            <div
              className="rounded-2xl border border-white/60 px-7 py-8 shadow-[0_2px_18px_rgba(60,80,90,0.06)] backdrop-blur-sm md:px-9 md:py-10"
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.98 0.014 220 / 0.75) 0%, oklch(0.97 0.02 160 / 0.6) 100%)",
              }}
            >
              <div className="border-l-2 border-[color:var(--accent-sita)]/70 pl-5">
                <p className="font-sans text-[15px] leading-[1.85] text-[color:var(--charcoal)]/85 md:text-[16px]">
                  The Pt. Kanahya Lal Dayawanti Punj Foundation was established
                  with a deep commitment to community service and
                  institution-building.
                </p>
                <p className="mt-4 font-sans text-[15px] leading-[1.85] text-[color:var(--charcoal)]/85 md:text-[16px]">
                  Over the years, the Foundation has worked to create meaningful
                  and enduring support across education, healthcare, social
                  welfare and cultural stewardship.
                </p>
                <p className="mt-4 font-sans text-[15px] leading-[1.85] text-[color:var(--charcoal)]/85 md:text-[16px]">
                  Its institutions and programmes are closely connected with
                  the lives of families and communities in and around
                  Sitamarhi.
                </p>
                <p className="mt-4 font-sans text-[15px] leading-[1.85] text-[color:var(--charcoal)]/85 md:text-[16px]">
                  Today, this legacy of service continues through its
                  educational institutions, healthcare initiatives,
                  social-welfare programmes, stewardship of Sita Samahit Sthal
                  and its emerging work in environment and rural regeneration.
                </p>
              </div>
              <a
                href="/about-foundation"
                className="mt-8 inline-flex items-center gap-2 border border-[color:var(--charcoal)] px-6 py-3 font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-[color:var(--charcoal)] transition-colors hover:bg-[color:var(--charcoal)] hover:text-[color:var(--ivory)]"
              >
                Know More About the Foundation
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-6 bg-[color:var(--accent-sita)]/60" />
                <span className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[color:var(--charcoal)]/60">
                  Our Founders
                </span>
              </div>
              <p className="mb-5 font-sans text-[12.5px] italic text-[color:var(--charcoal)]/60">
                Tap a portrait to read their story.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-3.5">
                {FOUNDERS.map((f) => (
                  <FounderTile
                    key={f.key}
                    founder={f}
                    onOpen={() => setOpenKey(f.key)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {openFounder ? (
        <FounderModal founder={openFounder} onClose={() => setOpenKey(null)} />
      ) : null}
    </section>
  );
}