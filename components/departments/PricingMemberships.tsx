"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { REALPT } from "@/lib/realpt";

type Plan = {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
};

type PricingMembershipsProps = {
  ctaHrefOverride?: string;
  showDepartmentAccess?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "REAL STARTER",
    price: 99,
    description: "Entry-level access with 1 EXOPOD session per month and member-only pricing.",
    features: [
      "1 EXOPOD session/mo",
      "10% off add-ons",
      "Online booking access",
      "Member-only pricing on services",
    ],
  },
  {
    name: "REAL RECOVERY",
    price: 250,
    description: "Core recovery with HBOT, EXOPOD, and grounding therapy bundled together.",
    features: [
      "2 HBOT sessions/mo",
      "2 EXOPOD sessions/mo",
      "Grounding therapy included",
      "15% off all services",
    ],
  },
  {
    name: "REAL PERFORMANCE",
    price: 500,
    description: "Our most popular tier — full recovery stack with red light therapy and quarterly assessments.",
    features: [
      "4 HBOT sessions/mo",
      "4 EXOPOD sessions/mo",
      "Red light therapy",
      "Quarterly wellness assessment",
      "20% off all services",
    ],
    popular: true,
  },
  {
    name: "REAL VITALITY",
    price: 750,
    description: "Enhanced access with IV therapy, priority scheduling, and 6 sessions of each modality.",
    features: [
      "6 HBOT sessions/mo",
      "6 EXOPOD sessions/mo",
      "1 IV therapy session/mo",
      "Priority scheduling",
      "20% off all services",
    ],
  },
  {
    name: "REAL ELITE",
    price: 1000,
    description: "Premium tier with cryotherapy, dedicated wellness concierge, and 8 sessions per modality.",
    features: [
      "8 HBOT sessions/mo",
      "8 EXOPOD sessions/mo",
      "2 cryotherapy sessions/mo",
      "Wellness concierge",
      "25% off all services",
    ],
  },
  {
    name: "REAL PREMIUM",
    price: 1500,
    description: "All-access recovery — unlimited EXOPOD, 12 HBOT sessions, and full add-on access.",
    features: [
      "12 HBOT sessions/mo",
      "Unlimited EXOPOD",
      "2 IV therapy sessions/mo",
      "All add-ons included",
      "2 guest passes/mo",
      "30% off all services",
    ],
  },
  {
    name: "REAL UNLIMITED",
    price: 1800,
    description: "Everything unlimited — HBOT, EXOPOD, cryotherapy, concierge care, and family sharing.",
    features: [
      "Unlimited HBOT",
      "Unlimited EXOPOD",
      "Unlimited cryotherapy",
      "Full add-on access",
      "Concierge care",
      "Family sharing (2 members)",
      "4 guest passes/mo",
    ],
  },
];

export default function PricingMemberships({
  ctaHrefOverride,
  showDepartmentAccess = true,
}: PricingMembershipsProps = {}) {
  const ctaHref = ctaHrefOverride ?? REALPT.schedulingUrl;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section
      id="memberships"
      className="relative z-10 w-full bg-neutral-950 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-12 space-y-4 text-center">
          <p className="inline-block rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Membership Plans
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Seven tiers built for every goal and budget.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-400">
            From a single EXOPOD session to unlimited everything — pick the level that matches your recovery, performance, or wellness goals.
          </p>
        </div>

        {/* Top row: first 4 tiers */}
        <motion.div
          className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {PLANS.slice(0, 4).map((plan) => (
            <PlanCard key={plan.name} plan={plan} ctaHref={ctaHref} variants={itemVariants} />
          ))}
        </motion.div>

        {/* Bottom row: last 3 tiers */}
        <motion.div
          className="mt-5 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {PLANS.slice(4).map((plan) => (
            <PlanCard key={plan.name} plan={plan} ctaHref={ctaHref} variants={itemVariants} />
          ))}
        </motion.div>

        <p className="mt-10 max-w-2xl mx-auto text-center text-sm text-slate-500">
          Not sure which plan fits?{" "}
          <Link
            href="/contact"
            className="underline underline-offset-4 hover:text-cyan-400 text-slate-400"
          >
            Book a quick consult
          </Link>{" "}
          and we&apos;ll recommend a protocol based on your goals.
        </p>
      </div>
    </section>
  );
}

function PlanCard({
  plan,
  ctaHref,
  variants,
}: {
  plan: Plan;
  ctaHref: string;
  variants: any;
}) {
  return (
    <motion.div
      variants={variants}
      className={`relative flex flex-col rounded-2xl p-5 ${
        plan.popular
          ? "bg-gradient-to-b from-cyan-500/10 to-neutral-900 border border-cyan-500/30 ring-1 ring-cyan-500/20"
          : "border border-white/10 bg-neutral-900"
      }`}
    >
      <div className="mb-3 flex items-center justify-between">
        <h3
          className={`text-lg font-semibold ${
            plan.popular ? "text-cyan-400" : "text-slate-400"
          }`}
        >
          {plan.name}
        </h3>
        {plan.popular && (
          <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400">
            Popular
          </span>
        )}
      </div>

      <div className="mb-2 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-white">
          ${plan.price.toLocaleString()}
        </span>
        <span className="text-sm text-slate-500">/mo</span>
      </div>

      <p className="mb-5 text-sm leading-relaxed text-slate-400">
        {plan.description}
      </p>

      <Link
        href={ctaHref}
        className={`mb-5 block w-full rounded-xl py-3 text-center text-sm font-semibold transition-all ${
          plan.popular
            ? "bg-cyan-500 text-white hover:bg-cyan-400"
            : "bg-white/5 border border-white/10 text-cyan-400 hover:bg-white/10"
        }`}
      >
        Get Started
      </Link>

      <div className="space-y-2.5">
        <p className="text-xs font-medium text-white">What&apos;s included:</p>
        <ul className="space-y-2">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                  plan.popular
                    ? "bg-cyan-500 text-white"
                    : "bg-white/10 text-cyan-400"
                }`}
              >
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              <span className="text-sm text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
