"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CorporateTier = {
  tier: string;
  price: string;
  period: string;
  employees: string;
  tagline: string;
  popular?: boolean;
  features: string[];
};

const CORPORATE_TIERS: CorporateTier[] = [
  {
    tier: "Starter",
    price: "$5,000",
    period: "/year",
    employees: "1 – 25 employees",
    tagline: "Small business wellness essentials",
    features: [
      "Monthly EXOPOD sessions for team",
      "Wellness challenge platform",
      "Basic usage reporting",
      "Dedicated onboarding call",
      "Employee wellness resources",
    ],
  },
  {
    tier: "Growth",
    price: "$12,000",
    period: "/year",
    employees: "25 – 75 employees",
    tagline: "Growing teams, real results",
    popular: true,
    features: [
      "Everything in Starter",
      "HBOT + EXOPOD session bundles",
      "Red light therapy access",
      "Quarterly wellness assessments",
      "Dedicated account manager",
      "Custom wellness challenges",
      "Monthly reporting dashboard",
    ],
  },
  {
    tier: "Professional",
    price: "$25,000",
    period: "/year",
    employees: "75 – 200 employees",
    tagline: "Full-service corporate wellness",
    features: [
      "Everything in Growth",
      "IV therapy & cryotherapy bundles",
      "On-site wellness events (2/year)",
      "Employee family access program",
      "Benefits integration support",
      "Quarterly ROI reports",
      "Priority scheduling for all staff",
    ],
  },
  {
    tier: "Enterprise",
    price: "$49,000",
    period: "/year",
    employees: "200+ employees",
    tagline: "Custom programs at scale",
    features: [
      "Everything in Professional",
      "Unlimited modality access",
      "On-site wellness days (monthly)",
      "White-label wellness portal",
      "API integration with HR platforms",
      "Dedicated wellness coordinator",
      "Custom SLA & reporting",
      "Multi-location support",
    ],
  },
];

const ROI_METRICS = [
  { value: "3.2x", label: "average ROI on wellness spend" },
  { value: "28%", label: "reduction in sick days" },
  { value: "91%", label: "employee participation rate" },
  { value: "17%", label: "lower healthcare claims" },
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Free Wellness Audit",
    desc: "We assess your team's needs, current benefits, and wellness gaps — no cost, no commitment.",
  },
  {
    step: "2",
    title: "Custom Proposal",
    desc: "You receive a tailored wellness package with pricing, projected ROI, and implementation timeline.",
  },
  {
    step: "3",
    title: "Launch & Onboard",
    desc: "We set up your portal, schedule kickoff events, and onboard your team in under 30 days.",
  },
  {
    step: "4",
    title: "Measure & Optimize",
    desc: "Quarterly reviews with usage data, satisfaction scores, and ROI tracking to prove the value.",
  },
];

export function CorporateTierComparison() {
  return (
    <section id="corporate-wellness-content" className="bg-neutral-950 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <p className="mb-3 inline-block rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Corporate Wellness Programs
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Packages from $5K to $49K/year
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            Scalable wellness programs for businesses of every size. From small teams to enterprise — every package includes HBOT, EXOPOD, and our full recovery stack.
          </p>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CORPORATE_TIERS.map((tier, i) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <Card
                className={cn(
                  "h-full border-neutral-800 bg-neutral-900",
                  tier.popular && "ring-2 ring-cyan-500/30 border-cyan-500/20"
                )}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-semibold text-lg text-white">
                        {tier.tier}
                      </div>
                      <p className="text-xs text-slate-500">{tier.tagline}</p>
                    </div>
                    {tier.popular && (
                      <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      {tier.price}
                    </span>
                    <span className="text-sm text-slate-500">{tier.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">
                    {tier.employees}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <Check className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={cn(
                      "mt-6 block w-full rounded-xl py-3 text-center text-sm font-semibold transition-all",
                      tier.popular
                        ? "bg-cyan-500 text-white hover:bg-cyan-400"
                        : "bg-white/5 border border-white/10 text-cyan-400 hover:bg-white/10"
                    )}
                  >
                    Get a Proposal
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            How It Works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-white/10 bg-neutral-900 p-5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-bold text-cyan-400 mb-3">
                  {step.step}
                </span>
                <p className="font-semibold text-white text-sm">{step.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ROI Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-14 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 md:p-10"
        >
          <h3 className="text-lg font-semibold text-white mb-6 text-center">
            Proven Results for Employers
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {ROI_METRICS.map((m) => (
              <div key={m.label}>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400">
                  {m.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-600">
            Based on aggregate corporate wellness program outcomes. Individual results may vary.
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">
            Need a custom package for your organization?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:scale-[1.02]"
          >
            Schedule a Free Wellness Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
