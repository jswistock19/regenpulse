import type { Metadata } from "next";
import { RealMartFull } from "@/components/sections/real-mart-full";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "REAL Mart | REAL PT & Wellness",
  description:
    "America's premier health & wellness superstore — clinically validated products, unbeatable prices, and a shopping experience Amazon can't match.",
};

export default function RealMartPage() {
  return (
    <div className="brand-page">
      <RealMartFull />
      <Footer />
    </div>
  );
}
