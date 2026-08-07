import kanahyaAsset from "@/assets/founders/kanahya.jpg.asset.json";
import dayawantiAsset from "@/assets/founders/dayawanti.jpg.asset.json";
import snpAsset from "@/assets/founders/snp.jpg.asset.json";
import induAsset from "@/assets/founders/indu.jpg.asset.json";
import logoAsset from "@/assets/foundation-logo.png.asset.json";
import sliderEducation from "@/assets/generated/slider-education.png";
import sliderHealthcare from "@/assets/generated/slider-healthcare.png";
import sliderSita from "@/assets/generated/slider-sita.png";
import sliderEnvironment from "@/assets/generated/slider-environment.jpg";
import workEducation from "@/assets/generated/work-education.jpg";
import workHealthcare from "@/assets/generated/work-healthcare.jpg";
import workSocialWelfare from "@/assets/generated/work-social-welfare.jpg";
import workSita from "@/assets/generated/work-sita.jpg";
import workEnvironment from "@/assets/generated/work-environment.jpg";

const ASSETS: Record<string, string> = {
  "foundation-logo": logoAsset.url,
  "founder-kanahya-lal-punj": kanahyaAsset.url,
  "founder-dayawanti-punj": dayawantiAsset.url,
  "founder-snp-punj": snpAsset.url,
  "founder-indu-punj": induAsset.url,
  "slider-education": sliderEducation,
  "slider-healthcare-social-welfare": sliderHealthcare,
  "slider-sita-samahit-sthal": sliderSita,
  "slider-environment-rural-regeneration": sliderEnvironment,
  "foundation-work-education": workEducation,
  "foundation-work-healthcare": workHealthcare,
  "foundation-work-social-welfare": workSocialWelfare,
  "foundation-work-sita-samahit-sthal": workSita,
  "foundation-work-environment": workEnvironment,
  "archive-education-beginnings": workEducation,
  "archive-healthcare-growth": workHealthcare,
  "archive-social-welfare": workSocialWelfare,
  "archive-sita-samahit-sthal": sliderSita,
  "archive-environment-expansion": workEnvironment,
};

type Props = {
  name: string;
  className?: string;
  aspect?: string;
  label?: string;
};

export function AssetPlaceholder({ name, className = "", aspect, label }: Props) {
  const src = ASSETS[name];
  if (src) {
    return (
      <div
        className={`relative h-full w-full overflow-hidden bg-[color:var(--muted)] ${className}`}
        style={aspect ? { aspectRatio: aspect } : undefined}
      >
        <img
          src={src}
          alt={label ?? name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    );
  }
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-[color:var(--muted)] text-center ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
      role="img"
      aria-label={`Upload asset: ${name}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 12px, rgba(0,0,0,0.04) 12px 13px)",
        }}
      />
      <div className="relative px-4 py-6">
        <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Upload asset
        </p>
        <p className="mt-2 font-serif text-base text-foreground">{name}</p>
        {label ? (
          <p className="mt-1 font-sans text-xs text-muted-foreground">{label}</p>
        ) : null}
      </div>
    </div>
  );
}
