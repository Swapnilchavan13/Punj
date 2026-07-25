import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AssetPlaceholder } from "./AssetPlaceholder";

const NAV = [
  { label: "Home", to: "/", num: "01" },
  { label: "About Foundation", to: "/about-foundation", num: "02" },
  { label: "Education", to: "/education", num: "03" },
  { label: "Healthcare & Social Welfare", to: "/healthcare-social-welfare", num: "04" },
  { label: "Sita Samahit Sthal", to: "/sita-samahit-sthal", num: "05" },
  { label: "Environment & Rural Regeneration", to: "/environment-rural-regeneration", num: "06" },
  { label: "Contact Us", to: "/contact", num: "07" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-[color:var(--ivory)]/85 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1360px] items-center justify-between px-5 transition-all duration-500 md:px-10 ${
            scrolled ? "h-[64px]" : "h-[84px]"
          }`}
        >
          <Link to="/" className="group flex items-center gap-3" aria-label="Home">
            <div
              className={`overflow-hidden transition-all duration-500 ${
                scrolled ? "h-9 w-9" : "h-11 w-11"
              }`}
            >
              <AssetPlaceholder name="foundation-logo" />
            </div>
            <span className="hidden font-serif text-[13px] leading-[1.15] tracking-wide text-[color:var(--charcoal)] sm:block md:text-[14px]">
              <span className="block italic text-[color:var(--charcoal)]/60 text-[10px] uppercase tracking-[0.2em] mb-0.5">
                Est. 1990
              </span>
              Punj Foundation
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="group flex items-center gap-3 rounded-full px-4 py-2 text-[color:var(--charcoal)] transition-colors hover:text-[color:var(--accent-sita)]"
          >
            <span className="hidden font-sans text-[11px] font-medium uppercase tracking-[0.25em] sm:block">
              Menu
            </span>
            <span className="flex flex-col gap-[5px]" aria-hidden="true">
              <span className="h-[1.5px] w-6 bg-current transition-all duration-300 group-hover:w-7" />
              <span className="h-[1.5px] w-4 bg-current transition-all duration-300 group-hover:w-7" />
            </span>
          </button>
        </div>
      </header>

      {/* Full overlay menu */}
      <div
        className={`fixed inset-0 z-[70] transition-all duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-[color:var(--charcoal)]/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`absolute right-0 top-0 flex h-dvh w-full max-w-[560px] flex-col bg-[color:var(--ivory)] shadow-[-20px_0_60px_-20px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-8 py-6 md:px-12">
            <span className="font-serif text-[13px] italic text-[color:var(--charcoal)]/60 tracking-wide">
              Navigate
            </span>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="group flex items-center gap-3 text-[color:var(--charcoal)] hover:text-[color:var(--accent-sita)] transition-colors"
            >
              <span className="font-sans text-[11px] font-medium uppercase tracking-[0.25em]">
                Close
              </span>
              <span className="relative flex h-4 w-4 items-center justify-center" aria-hidden="true">
                <span className="absolute h-[1.5px] w-5 rotate-45 bg-current" />
                <span className="absolute h-[1.5px] w-5 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--border)] to-transparent" />

          <nav aria-label="Primary" className="flex-1 overflow-y-auto px-8 py-10 md:px-12 md:py-14">
            <ul className="flex flex-col gap-1">
              {NAV.map((item, i) => (
                <li
                  key={item.to}
                  className={`transition-all duration-500 ${
                    open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-5 py-3 md:py-4"
                    activeProps={{ className: "text-[color:var(--accent-sita)]" }}
                    activeOptions={{ exact: true }}
                  >
                    <span className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-[color:var(--charcoal)]/40 group-hover:text-[color:var(--accent-sita)] transition-colors">
                      {item.num}
                    </span>
                    <span className="relative font-serif text-[26px] leading-[1.15] text-[color:var(--charcoal)] transition-colors group-hover:text-[color:var(--accent-sita)] md:text-[32px]">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[color:var(--accent-sita)] transition-all duration-500 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-8 pb-8 md:px-12 md:pb-10">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--border)] to-transparent mb-6" />
            <p className="font-serif text-[13px] italic leading-relaxed text-[color:var(--charcoal)]/60">
              "Service to humanity is service to the divine."
            </p>
            <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.25em] text-[color:var(--charcoal)]/50">
              Pt. Kanahya Lal Dayawanti Punj Foundation
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
