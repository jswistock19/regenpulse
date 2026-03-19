"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { REALPT } from "@/lib/realpt";

type Tier = {
  name: string;
  price: number;
  tagline: string;
  popular?: boolean;
  services: {
    exopod: string;
    hbot: string;
    grounding: string;
    redLight: string;
    ivTherapy: string;
    cryotherapy: string;
    guestPasses: string;
    concierge: boolean;
    familySharing: boolean;
    discount: string;
  };
};

const TIERS: Tier[] = [
  {
    name: "REAL STARTER",
    price: 99,
    tagline: "Get started",
    services: {
      exopod: "1 session/mo",
      hbot: "—",
      grounding: "—",
      redLight: "—",
      ivTherapy: "—",
      cryotherapy: "—",
      guestPasses: "—",
      concierge: false,
      familySharing: false,
      discount: "10% off add-ons",
    },
  },
  {
    name: "REAL RECOVERY",
    price: 250,
    tagline: "Core recovery",
    services: {
      exopod: "2 sessions/mo",
      hbot: "2 sessions/mo",
      grounding: "Included",
      redLight: "—",
      ivTherapy: "—",
      cryotherapy: "—",
      guestPasses: "—",
      concierge: false,
      familySharing: false,
      discount: "15% off services",
    },
  },
  {
    name: "REAL PERFORMANCE",
    price: 500,
    tagline: "Most popular",
    popular: true,
    services: {
      exopod: "4 sessions/mo",
      hbot: "4 sessions/mo",
      grounding: "Included",
      redLight: "Included",
      ivTherapy: "—",
      cryotherapy: "—",
      guestPasses: "—",
      concierge: false,
      familySharing: false,
      discount: "20% off services",
    },
  },
  {
    name: "REAL VITALITY",
    price: 750,
    tagline: "Level up",
    services: {
      exopod: "6 sessions/mo",
      hbot: "6 sessions/mo",
      grounding: "Included",
      redLight: "Included",
      ivTherapy: "1 session/mo",
      cryotherapy: "—",
      guestPasses: "—",
      concierge: false,
      familySharing: false,
      discount: "20% off services",
    },
  },
  {
    name: "REAL ELITE",
    price: 1000,
    tagline: "Premium",
    services: {
      exopod: "8 sessions/mo",
      hbot: "8 sessions/mo",
      grounding: "Included",
      redLight: "Included",
      ivTherapy: "1 session/mo",
      cryotherapy: "2 sessions/mo",
      guestPasses: "—",
      concierge: true,
      familySharing: false,
      discount: "25% off services",
    },
  },
  {
    name: "REAL PREMIUM",
    price: 1500,
    tagline: "All-access",
    services: {
      exopod: "Unlimited",
      hbot: "12 sessions/mo",
      grounding: "Included",
      redLight: "Included",
      ivTherapy: "2 sessions/mo",
      cryotherapy: "4 sessions/mo",
      guestPasses: "2/mo",
      concierge: true,
      familySharing: false,
      discount: "30% off services",
    },
  },
  {
    name: "REAL UNLIMITED",
    price: 1800,
    tagline: "Everything",
    services: {
      exopod: "Unlimited",
      hbot: "Unlimited",
      grounding: "Included",
      redLight: "Included",
      ivTherapy: "2 sessions/mo",
      cryotherapy: "Unlimited",
      guestPasses: "4/mo",
      concierge: true,
      familySharing: true,
      discount: "30% off services",
    },
  },
];

const FEATURE_ROWS: { label: string; key: keyof Tier["services"] }[] = [
  { label: "EXOPOD Sessions", key: "exopod" },
  { label: "HBOT Sessions", key: "hbot" },
  { label: "Grounding Therapy", key: "grounding" },
  { label: "Red Light Therapy", key: "redLight" },
  { label: "IV Therapy", key: "ivTherapy" },
  { label: "Cryotherapy", key: "cryotherapy" },
  { label: "Guest Passes", key: "guestPasses" },
  { label: "Wellness Concierge", key: "concierge" },
  { label: "Family Sharing", key: "familySharing" },
  { label: "Service Discount", key: "discount" },
];

export function MembershipComparison() {
  return (
    <section
      id="tier-comparison"
      className="relative w-full bg-neutral-950 px-4 py-12 md:py-20"
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2
            id="comparison-heading"
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Compare All 7 Membership Tiers
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Every tier includes online booking, member-only pricing, and access to all REAL PT & Wellness locations. Higher tiers add more sessions, modalities, and concierge benefits.
          </p>
        </motion.div>

        {/* Scrollable comparison table */}
        <div className="overflow-x-auto pb-4">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="sticky left-0 z-10 bg-neutral-950 py-4 pr-4 text-sm font-medium text-slate-400 min-w-[160px]">
                  Feature
                </th>
                {TIERS.map((tier) => (
                  <th
                    key={tier.name}
                    className={`px-3 py-4 text-center min-w-[110px] ${
                      tier.popular ? "bg-cyan-500/5" : ""
                    }`}
                  >
                    <span className="block text-sm font-semibold text-white">
                      {tier.name.replace("REAL ", "")}
                    </span>
                    <span className="mt-1 block text-lg font-bold text-white">
                      ${tier.price.toLocaleString()}
                    </span>
                    <span className="block text-[10px] text-slate-500">/month</span>
                    {tier.popular && (
                      <span className="mt-1.5 inline-block rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                        Popular
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURE_ROWS.map((row) => (
                <tr key={row.key} className="border-b border-white/5">
                  <td className="sticky left-0 z-10 bg-neutral-950 py-3 pr-4 text-sm font-medium text-slate-300">
                    {row.label}
                  </td>
                  {TIERS.map((tier) => {
                    const val = tier.services[row.key];
                    return (
                      <td
                        key={tier.name}
                        className={`px-3 py-3 text-center text-sm ${
                          tier.popular ? "bg-cyan-500/5" : ""
                        }`}
                      >
                        {val === true ? (
                          <Check className="mx-auto h-4 w-4 text-cyan-400" />
                        ) : val === false || val === "—" ? (
                          <X className="mx-auto h-4 w-4 text-slate-600" />
                        ) : (
                          <span className="text-slate-300">{val}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA row */}
        <div className="mt-8 overflow-x-auto pb-2">
          <div className="flex min-w-[900px] items-center gap-0">
            <div className="min-w-[160px] pr-4" />
            {TIERS.map((tier) => (
              <div key={tier.name} className="flex-1 px-3 text-center min-w-[110px]">
                <Link
                  href={REALPT.schedulingUrl}
                  className={`inline-block w-full rounded-xl py-2.5 text-sm font-semibold transition-colors ${
                    tier.popular
                      ? "bg-cyan-500 text-white hover:bg-cyan-400"
                      : "bg-white/5 text-cyan-400 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/contact"
            className="text-sm font-medium text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
          >
            Questions? Talk to a wellness advisor
          </Link>
        </p>
      </div>
    </section>
  );
}
