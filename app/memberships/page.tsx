import type { Metadata } from "next";
import { MembershipsVideoHero } from "@/components/memberships/MembershipsVideoHero";
import { MembershipComparison } from "@/components/memberships/MembershipComparison";
import PricingMemberships from "@/components/departments/PricingMemberships";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Memberships | REAL PT & Wellness",
  description:
    "Learn how REAL PT & Wellness memberships work — benefits, tiers, and what to expect at every level.",
};

export default function MembershipsPage() {
  return (
    <div className="brand-page min-h-screen overflow-x-hidden bg-neutral-950">
      <MembershipsVideoHero />
      <MembershipComparison />
      <PricingMemberships ctaHrefOverride="/contact" showDepartmentAccess={false} />
      <Footer />
    </div>
  );
}
