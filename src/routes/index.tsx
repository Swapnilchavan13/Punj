import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { PillarSlider } from "@/components/PillarSlider";
import { FoundationSection } from "@/components/FoundationSection";
import { ImpactSection } from "@/components/ImpactSection";
import { PillarsSection } from "@/components/PillarsSection";
import { OurWorkSection } from "@/components/OurWorkSection";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pt. Kanahya Lal Dayawanti Punj Foundation" },
      {
        name: "description",
        content:
          "A legacy of service rooted in community — education, healthcare, social welfare, Sita Samahit Sthal and environment.",
      },
      { property: "og:title", content: "Pt. Kanahya Lal Dayawanti Punj Foundation" },
      {
        property: "og:description",
        content:
          "Serving communities in and around Sitamarhi across education, healthcare, social welfare, cultural stewardship and rural regeneration.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-dvh bg-[color:var(--ivory)]">
      <Header />
      <main>
        <PillarSlider />
        <FoundationSection />
        <ImpactSection />
        <OurWorkSection />
        <PillarsSection />
        <div className="h-24" aria-hidden="true" />
      </main>
    </div>
  );
}

//  <img
//                 src="/foundation-logo.png"
//                 alt="Punj Foundation Logo"
//                 className="h-full w-full object-contain"
//               />