import { AssetPlaceholder } from "./AssetPlaceholder";

const MENU = [
  { label: "Home", href: "/" },
  { label: "About Foundation", href: "/about-foundation" },
  { label: "Education", href: "/education" },
  { label: "Healthcare & Social Welfare", href: "/healthcare-social-welfare" },
  { label: "Sita Samahit Sthal", href: "/sita-samahit-sthal" },
  { label: "Environment and Rural Regeneration", href: "/environment-rural-regeneration" },
  { label: "Contact Us", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--offwhite)]">
      <div className="mx-auto grid w-full max-w-[1360px] gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden">
              {/* <AssetPlaceholder name="foundation-logo" label="Foundation logo"  /> */}
              <img src="/foundation-logo.png" alt="" />
            </div>
            <p className="font-serif text-[18px] leading-tight text-[color:var(--charcoal)]">
              Pt. Kanahya Lal Dayawanti Punj Foundation
            </p>
          </div>
          <p className="mt-5 max-w-md font-sans text-[14px] leading-relaxed text-muted-foreground">
            A legacy of service across education, healthcare and social welfare, cultural
            stewardship, and environment and rural regeneration.
          </p>
          <p className="mt-6 font-sans text-[12px] uppercase tracking-[0.2em] text-muted-foreground">
            ADD VERIFIED CONTACT DETAILS
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Explore
          </h2>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {MENU.map((m) => (
              <li key={m.href}>
                <a
                  href={m.href}
                  className="font-serif text-[17px] text-[color:var(--charcoal)] underline-offset-4 transition-colors hover:text-[color:var(--accent-sita)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent-sita)]"
                >
                  {m.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-[color:var(--border)]">
        <p className="mx-auto w-full max-w-[1360px] px-5 py-6 font-sans text-[12px] text-muted-foreground md:px-10">
          © {new Date().getFullYear()} Pt. Kanahya Lal Dayawanti Punj Foundation. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
