import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { AssetPlaceholder } from "@/components/AssetPlaceholder";

/* Shared editorial primitives for Foundation pillar pages.
   Accent colour is read from the CSS custom property --page-accent,
   set on the page root so each pillar can theme its own sections. */

export function useReveal<T extends HTMLElement>() {
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

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
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

export function Eyebrow({ children, tone }: { children: ReactNode; tone?: string }) {
  return (
    <p
      className="font-sans text-[11px] font-medium uppercase tracking-[0.28em]"
      style={{ color: tone ?? "var(--muted-foreground)" }}
    >
      {children}
    </p>
  );
}

export function Section({
  id,
  children,
  className = "",
  tint,
  accent,
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tint?: string;
  accent?: string;
  labelledBy?: string;
}) {
  const style: CSSProperties = {};
  if (tint) style.background = tint;
  if (accent) (style as Record<string, string>)["--page-accent"] = accent;
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-24 px-5 py-20 md:px-10 md:py-28 ${className}`}
      style={style}
    >
      <div className="mx-auto w-full max-w-[1360px]">{children}</div>
    </section>
  );
}

export function Pending({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-[3px] border border-dashed border-[color:var(--border)] bg-[color:var(--muted)]/50 px-2 py-[3px] font-sans text-[10.5px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
      {children}
    </span>
  );
}

export function Caption({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 font-sans text-[12px] italic leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

const btnBase =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-[0.18em] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--page-accent,var(--charcoal))]";

export function PrimaryBtn({
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

export function GhostBtn({ children, href }: { children: ReactNode; href?: string }) {
  const cls = `${btnBase} border border-[color:var(--charcoal)]/25 text-[color:var(--charcoal)] hover:border-[color:var(--page-accent,var(--charcoal))] hover:text-[color:var(--page-accent,var(--charcoal))]`;
  return (
    <a href={href ?? "#"} className={cls}>
      {children}
    </a>
  );
}

export function Figure({
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
      {caption ? (
        <figcaption>
          <Caption>{caption}</Caption>
        </figcaption>
      ) : null}
    </figure>
  );
}
