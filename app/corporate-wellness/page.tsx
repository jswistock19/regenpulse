import type { Metadata } from "next";
import Link from "next/link";
import { ServiceVideoHero } from "@/components/sections/service-video-hero";
import { CorporateTierComparison } from "@/components/solutions/CorporateTierComparison";
import { Footer } from "@/components/layout/footer";

const CORPORATE_WELLNESS_HERO_VIDEO = "/videos/corporate-wellness-hero.mp4";

export const metadata: Metadata = {
  title: "Corporate Wellness | REAL PT & Wellness",
  description:
    "Corporate wellness programs that drive engagement, reduce claims, and close in 30 days.",
};

export default function CorporateWellnessPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden bg-neutral-950">
      <ServiceVideoHero
        title="Employer programs that drive engagement, reduce claims, and close in 30 days."
        description="Boost participation, integrate with your benefits, and get ROI projections—with a structured rollout from audit to contract."
        videoSrc={CORPORATE_WELLNESS_HERO_VIDEO}
        videoType="video/mp4"
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 shadow-lg transition-all hover:bg-white/95 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Get a Proposal
        </Link>
        <Link
          href="#corporate-wellness-content"
          className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        >
          View Programs
        </Link>
        <p className="w-full text-center text-sm text-slate-200/80 md:w-auto md:text-left md:text-base">
          Free wellness audit • Custom dashboards • 3-year contracts
        </p>
      </ServiceVideoHero>
      <CorporateTierComparison />
      <Footer />
    </div>
  );
}
