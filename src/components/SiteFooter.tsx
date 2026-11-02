import { AssetPlaceholder } from "./AssetPlaceholder";

const MENU = [
  { label: "Home", href: "/" },
  { label: "About Foundation", href: "/about-foundation" },
  { label: "Education", href: "/education" },
  { label: "Healthcare & Social Welfare", href: "/healthcare-social-welfare" },
  { label: "Sita Samahit Sthal", href: "/sita-samahit-sthal" },
  { label: "Environment and Rural Regeneration", href: "/environment-rural-regeneration" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--offwhite)]">
      <div className="mx-auto grid w-full max-w-[1360px] gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-24 w-24 overflow-hidden">
              <img 
                src="/foundation-logo.png" 
                alt="Pt. Kanhaiya Lal Dayawanti Punj Foundation Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <p className="font-serif text-[22px] leading-tight text-[color:var(--charcoal)]">
              Pt. Kanahya Lal Dayawanti Punj Foundation
            </p>
          </div>
          
          <div className="mt-6 space-y-1.5 font-sans text-[13px] text-muted-foreground">
            <p className="font-medium text-[color:var(--charcoal)]">Contact Information:</p>
            <p>Phones: +91 9450238251 / +91 6392239480 / 011-49990952</p>
            <p>Emails: sitadham@gmail.com / info@sitasamahittemple.com / pkldpfoundation@gmail.com</p>
            <p>Registered Office / Project Region: Sitamarhi, Jangiganj, Bhadohi, Uttar Pradesh - 221309</p>
          </div>

          {/* LinkedIn Link */}
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/company/pkldpf/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Pt. Kanahya Lal Dayawanti Punj Foundation LinkedIn Page"
              className="inline-flex items-center gap-2 font-sans text-[13px] font-medium text-[color:var(--charcoal)] transition-colors hover:text-[#0A66C2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0A66C2]"
            >
              <svg 
                className="h-5 w-5 fill-current" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>Follow us on LinkedIn</span>
            </a>
          </div>
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
          © {new Date().getFullYear()} Pt. Kanahya Lal Dayawanti Punj Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}