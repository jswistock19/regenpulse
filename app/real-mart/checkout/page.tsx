import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Footer } from "@/components/layout/footer";
import { RealMartCheckoutClient } from "./checkout-client";

export const metadata: Metadata = {
  title: "Checkout | REAL Mart",
  description: "Complete your REAL Mart order.",
};

export default function RealMartCheckoutPage() {
  return (
    <div className="brand-page">
      <PageHero
        title="Checkout"
        description="Review your cart and complete your order."
      />
      <div className="container mx-auto px-4 py-12">
        <div className="brand-panel p-4 sm:p-6">
          <RealMartCheckoutClient />
        </div>
      </div>
      <Footer />
    </div>
  );
}
