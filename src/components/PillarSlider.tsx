import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AssetPlaceholder } from "./AssetPlaceholder";

type Slide = {
  key: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  asset: string;
  accentVar: string;
  panelBg: string;
};

const SLIDES: Slide[] = [
  {
    key: "education",
    title: "Education",
    description:
      "Building pathways to opportunity through school education, higher education and the all-round development of rural students.",
    href: "/education",
    linkLabel: "Explore Education",
    asset: "slider-education",
    accentVar: "--accent-education",
    panelBg: "oklch(0.97 0.022 85 / 0.75)",
  },
  {
    key: "healthcare",
    title: "Healthcare & Social Welfare",
    description:
      "Extending compassionate healthcare and practical support to families and communities during times of need.",
    href: "/healthcare-social-welfare",
    linkLabel: "Explore Healthcare & Social Welfare",
    asset: "slider-healthcare-social-welfare",
    accentVar: "--accent-healthcare",
    panelBg: "oklch(0.955 0.022 230 / 0.75)",
  },
  {
    key: "sita",
    title: "Sita Samahit Sthal",
    description:
      "Preserving and serving a sacred centre of faith, heritage and community belonging.",
    href: "/sita-samahit-sthal",
    linkLabel: "Explore Sita Samahit Sthal",
    asset: "slider-sita-samahit-sthal",
    accentVar: "--accent-sita",
    panelBg: "oklch(0.96 0.024 45 / 0.75)",
  },
  {
    key: "environment",
    title: "Environment and Rural Regeneration",
    description:
      "Restoring soil, strengthening water systems and supporting resilient agriculture through community-led environmental action.",
    href: "/environment-rural-regeneration",
    linkLabel: "Explore Environment and Rural Regeneration",
    asset: "slider-environment-rural-regeneration",
    accentVar: "--accent-environment",
    panelBg: "oklch(0.96 0.024 145 / 0.75)",
  },
];

const AUTOPLAY_MS = 8000;

export function PillarSlider() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const touchStart = useRef<number | null>(null);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const on = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const paused = hovered || focused || prefersReduced;

  const goTo = useCallback((i: number) => {
    setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [index, paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!rootRef.current?.contains(document.activeElement)) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const current = SLIDES[index];

  return (
    <section
      ref={rootRef}
      aria-roledescription="carousel"
      aria-label="Foundation programme pillars"
      className="relative w-full overflow-hidden bg-[color:var(--ivory)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false);
      }}
      onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart.current == null) return;
        const dx = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchStart.current = null;
      }}
    >
      <div className="relative min-h-[560px] md:min-h-[640px] lg:min-h-[calc(80vh-92px)] lg:max-h-[780px]">
        {SLIDES.map((s, i) => {
          const active = i === index;
          return (
            <div
              key={s.key}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${SLIDES.length}: ${s.title}`}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-[800ms] ease-out ${
                active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <div className="grid h-full min-h-[560px] grid-cols-1 md:min-h-[640px] lg:grid-cols-[40%_60%]">
                {/* Text panel */}
                <div
                  className="order-2 flex flex-col justify-center px-6 py-10 backdrop-blur-sm md:px-12 lg:order-1 lg:px-14 lg:py-16"
                  style={{ backgroundColor: s.panelBg }}
                >
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3">
                      <span
                        className="h-[2px] w-8"
                        style={{ backgroundColor: `var(${s.accentVar})` }}
                      />
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--charcoal)]/70">
                        Our Programme Pillars
                      </span>
                    </div>
                    <h2
                      className="mt-5 font-serif text-[34px] leading-[1.1] md:text-[46px] lg:text-[54px]"
                      style={{ color: `var(${s.accentVar})` }}
                    >
                      {s.title}
                    </h2>
                    <p className="mt-5 font-sans text-[15.5px] leading-relaxed text-[color:var(--charcoal)]/80 md:text-[17px]">
                      {s.description}
                    </p>
                    <a
                      href={s.href}
                      className="mt-8 inline-flex items-center gap-2 font-sans text-[13.5px] font-medium uppercase tracking-[0.18em] text-[color:var(--charcoal)] transition-colors hover:opacity-70"
                    >
                      <span
                        className="border-b pb-1"
                        style={{ borderColor: `var(${s.accentVar})` }}
                      >
                        {s.linkLabel}
                      </span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>

                {/* Visual panel */}
                <div className="order-1 h-[280px] w-full md:h-[420px] lg:order-2 lg:h-full">
                  <AssetPlaceholder name={s.asset} />
                </div>
              </div>
            </div>
          );
        })}

        {/* Side arrows */}
        <button
          type="button"
          aria-label="Previous programme"
          onClick={prev}
          className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--ivory)]/70 text-[color:var(--charcoal)] backdrop-blur transition hover:bg-[color:var(--ivory)]/95 md:left-5 md:h-12 md:w-12"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next programme"
          onClick={next}
          className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--ivory)]/70 text-[color:var(--charcoal)] backdrop-blur transition hover:bg-[color:var(--ivory)]/95 md:right-5 md:h-12 md:w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Minimal dot pagination */}
        <div
          role="tablist"
          aria-label="Slides"
          className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2"
        >
          {SLIDES.map((s, i) => (
            <button
              key={s.key}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to ${s.title} slide`}
              onClick={() => goTo(i)}
              className={`h-[3px] rounded-full transition-all ${
                i === index
                  ? "w-8 bg-[color:var(--charcoal)]"
                  : "w-4 bg-[color:var(--charcoal)]/30 hover:bg-[color:var(--charcoal)]/60"
              }`}
            />
          ))}
        </div>
      </div>

      <span className="sr-only" aria-live="polite">
        {current.title}
      </span>
    </section>
  );
}
