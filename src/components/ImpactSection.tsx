import { useEffect, useRef, useState, type ReactNode } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  accent: string;
  icon: ReactNode;
};

const STATS: Stat[] = [
  {
    value: 1500,
    suffix: "+",
    label: "Students educated every year",
    accent: "var(--accent-education)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <path d="M4 18L24 8l20 10-20 10L4 18z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 22v10c0 3 5.5 6 12 6s12-3 12-6V22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M40 20v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: 700,
    suffix: "+",
    label: "Couples united in group weddings",
    accent: "var(--accent-sita)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <path d="M24 40s-13-8.5-13-18a8 8 0 0114-5.3A8 8 0 0137 22c0 9.5-13 18-13 18z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: 12000,
    suffix: "+",
    label: "Treated every year in free medical camps",
    accent: "var(--accent-healthcare)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <rect x="8" y="14" width="32" height="26" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M24 22v10M19 27h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18 14V9h12v5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    value: 35,
    suffix: "+",
    label: "Years of community service",
    accent: "var(--accent-environment)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.6" />
        <path d="M24 14v10l7 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return n;
}

function StatCard({ stat, active, delayMs }: { stat: Stat; active: boolean; delayMs: number }) {
  const n = useCountUp(stat.value, active);
  const formatted = n.toLocaleString("en-IN");
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/50 bg-white/55 px-6 py-8 shadow-[0_2px_18px_rgba(40,50,70,0.06)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(40,50,70,0.15)] md:px-8 md:py-10"
      style={{
        transitionDelay: `${delayMs}ms`,
        background:
          "linear-gradient(160deg, oklch(0.985 0.012 220 / 0.72) 0%, oklch(0.975 0.02 160 / 0.55) 100%)",
      }}
    >
      {/* corner ornament glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: stat.accent }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${stat.accent}, transparent)`,
        }}
      />

      <div
        className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full ring-1"
        style={{
          color: stat.accent,
          background: "oklch(1 0 0 / 0.55)",
          boxShadow: `0 4px 14px -6px ${stat.accent}`,
        }}
      >
        {stat.icon}
      </div>

      <div className="flex items-baseline gap-1">
        <span
          className="font-serif text-[46px] leading-none tracking-tight md:text-[56px] lg:text-[64px]"
          style={{ color: stat.accent }}
        >
          {formatted}
        </span>
        <span
          className="font-serif text-[28px] leading-none md:text-[34px]"
          style={{ color: stat.accent }}
        >
          {stat.suffix}
        </span>
      </div>

      <div className="mt-3 h-px w-10 bg-[color:var(--charcoal)]/25" />
      <p className="mt-4 font-sans text-[13.5px] leading-relaxed text-[color:var(--charcoal)]/75 md:text-[14.5px]">
        {stat.label}
      </p>
    </div>
  );
}

export function ImpactSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(true);
        });
      },
      { threshold: 0.25 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="impact-heading"
      className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.97 0.016 220 / 0.5) 0%, oklch(0.965 0.03 160 / 0.7) 50%, oklch(0.96 0.028 60 / 0.55) 100%)",
      }}
    >
      {/* Ambient decorative shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--accent-healthcare)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--accent-environment)" }}
      />

      <div className="relative mx-auto w-full max-w-[1240px]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[color:var(--accent-sita)]/60" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--charcoal)]/65">
              By the Numbers
            </span>
            <span className="h-px w-8 bg-[color:var(--accent-sita)]/60" />
          </div>
          <h2
            id="impact-heading"
            className="mt-5 font-serif text-[32px] leading-[1.1] text-[color:var(--charcoal)] md:text-[44px] lg:text-[52px]"
          >
            Our Impact in Numbers
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-[15px] leading-[1.8] text-[color:var(--charcoal)]/70 md:text-[16px]">
            Three and a half decades of quiet, consistent service — measured not just in
            figures, but in the lives touched across Sitamarhi and beyond.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-20 md:gap-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} active={active} delayMs={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
