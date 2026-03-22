"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Star,
  CheckCircle2,
  Zap,
  Globe2,
  Activity,
  Heart,
  Tv,
  Gift,
  MonitorPlay,
  ChevronRight,
  Dumbbell,
  Pill,
  Beaker,
  Smartphone,
  Shirt,
  Home,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";

/* ──────────────────────────── HERO ──────────────────────────── */

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32 md:py-40">
      {/* Faint gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(34,211,238,.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
          The Future of Health Commerce
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Shop Smarter. Live&nbsp;Better.{" "}
          <span className="text-cyan-400">REAL&nbsp;Mart.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
          America&rsquo;s premier health &amp; wellness superstore &mdash;
          clinically validated products, unbeatable prices, and a shopping
          experience Amazon can&rsquo;t match.
        </p>

        {/* Stats bar */}
        <div className="mt-10 flex flex-wrap gap-10 sm:gap-14">
          {[
            { value: "7", label: "Product Categories" },
            { value: "12K+", label: "Verified Purchases" },
            { value: "50K+", label: "Prime Members" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-neutral-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── WHY REAL MART ─────────────────────── */

const WHY_CARDS = [
  {
    icon: CheckCircle2,
    title: "Clinically Validated",
    text: "Every product vetted by health professionals. No junk, no guesswork. Only science-backed solutions make it to our shelves.",
  },
  {
    icon: Zap,
    title: "Amazon-Parity Speed",
    text: "2-day delivery, easy returns, and a checkout experience that rivals the best in e-commerce. Fast, reliable, seamless.",
  },
  {
    icon: Globe2,
    title: "Full Ecosystem",
    text: "From $12 supplements to $15,000 HBOT chambers — one platform, one account, one community. Everything your health journey needs.",
  },
];

function WhySection() {
  return (
    <section className="bg-neutral-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400">
          Why REAL Mart
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Not Just Another Online Store
        </h2>
        <p className="mt-4 max-w-2xl text-neutral-400">
          We built what Amazon never could — a health-first marketplace with
          clinically validated products, expert-backed recommendations, and a
          community that keeps you accountable.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CARDS.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/[0.06] bg-neutral-800/50 p-8 transition-colors hover:border-cyan-500/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950/60 text-cyan-400">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── 7 CATEGORIES ──────────────────────── */

const CATEGORIES = [
  {
    icon: Dumbbell,
    name: "Recovery Hardware",
    description: "HBOT chambers, red light therapy, recovery backpacks.",
    price: "$299 — $15,000",
  },
  {
    icon: Beaker,
    name: "Biologics & Exosomes",
    description: "Proprietary formulations. Clinic-grade, direct to you.",
    price: "$28 — $2,000",
  },
  {
    icon: Pill,
    name: "Supplements",
    description: "Science-backed stacks for performance, longevity & recovery.",
    price: "From $24",
  },
  {
    icon: Smartphone,
    name: "Health Devices",
    description: "Wearables, diagnostics, and monitoring tools.",
    price: "From $49",
  },
  {
    icon: Shirt,
    name: "Apparel",
    description: "Performance wear built for the REAL lifestyle.",
    price: "From $12",
  },
  {
    icon: Sparkles,
    name: "Real Cost Plus Generics",
    description: "Prescription-grade generics at transparent prices.",
    price: "From $8",
  },
  {
    icon: Home,
    name: "Home Wellness",
    description: "Saunas, air purifiers, sleep systems & more. Transform your home into a wellness sanctuary.",
    price: "From $199",
  },
];

function CategoriesSection() {
  return (
    <section className="bg-neutral-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400">
          Shop REAL Mart
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          7 Categories. One&nbsp;Ecosystem.
        </h2>
        <p className="mt-4 max-w-2xl text-neutral-400">
          From daily supplements to cutting-edge recovery hardware — everything
          your health journey needs, in one place.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <div
              key={c.name}
              className="group rounded-2xl border border-white/[0.06] bg-neutral-900/70 p-7 transition-all hover:border-cyan-500/20 hover:bg-neutral-800/60"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950/60 text-cyan-400">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{c.name}</h3>
              <p className="mt-1.5 text-sm text-neutral-400">{c.description}</p>
              <p className="mt-3 text-sm font-semibold text-cyan-400">{c.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── BESTSELLERS ────────────────────────── */

const BESTSELLERS = [
  {
    id: "bestseller-recovery-backpack",
    name: "Carbon Fiber Recovery Backpack",
    description:
      "The #1 recovery tool for serious athletes. Includes compression, heat therapy & more.",
    price: 299,
    image: null as string | null,
  },
  {
    id: "bestseller-exosome-kit",
    name: "Exosome Therapy Starter Kit",
    description:
      "Clinic-grade biologics, now direct to your door. 70—85% margin savings vs. clinic pricing.",
    price: 149,
    image: null as string | null,
  },
  {
    id: "bestseller-red-light",
    name: "Red Light Therapy Panel",
    description:
      "Full-body photobiomodulation. FDA-cleared. 660nm + 850nm wavelengths.",
    price: 399,
    image: null as string | null,
  },
];

function BestsellersSection() {
  const { addItem } = useCart();

  return (
    <section className="bg-neutral-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400">
          Bestsellers
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Top Picks This Week
        </h2>
        <p className="mt-4 text-neutral-400">
          Clinically validated. Community approved. Delivered fast.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BESTSELLERS.map((p) => (
            <div
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-neutral-800/50 transition-colors hover:border-cyan-500/20"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] w-full bg-neutral-800">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                  <ShoppingCart className="h-12 w-12" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {p.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-cyan-400">
                    ${p.price}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-cyan-700/40 bg-cyan-950/40 text-cyan-300 hover:bg-cyan-900/60 hover:text-cyan-200"
                    onClick={() =>
                      addItem({
                        id: p.id,
                        sku: null,
                        name: p.name,
                        price: p.price,
                        image_url: p.image,
                      })
                    }
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating bar */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-neutral-800/50 px-5 py-2.5 text-sm text-neutral-300">
          <div className="flex gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          4.8/5 average rating across 12,000+ verified purchases
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── REAL TV ────────────────────────── */

function RealTVSection() {
  return (
    <section className="bg-neutral-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left text */}
          <div>
            <span className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400">
              REAL TV
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Shop Live. Win Big. Only on Real&nbsp;TV.
            </h2>
            <p className="mt-5 text-lg text-neutral-400">
              Real TV is our live commerce channel — part QVC, part Netflix, all
              health. Watch expert demos, exclusive drops, and live Q&amp;As
              with top health influencers. Buy in real time. Never miss a deal.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  icon: Tv,
                  title: "Live Health Programming",
                  text: "New programming every day featuring top health experts and product demos.",
                },
                {
                  icon: Gift,
                  title: "Exclusive Live Drops",
                  text: "Products only available during live broadcasts — up to 40% off retail.",
                },
                {
                  icon: MonitorPlay,
                  title: "Watch Anywhere",
                  text: "Stream on web, mobile, or smart TV. Free with Prime Elite membership.",
                },
              ].map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-950/60 text-cyan-400">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{f.title}</h3>
                    <p className="mt-0.5 text-sm text-neutral-400">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-8 bg-cyan-600 text-white hover:bg-cyan-500">
              Watch Now — Free with Prime Elite
            </Button>
          </div>

          {/* Right visual placeholder */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-neutral-800/50">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-neutral-500">
              <Tv className="h-16 w-16" />
              <span className="text-sm">REAL TV Live Stream</span>
            </div>
            {/* Live badge */}
            <div className="absolute left-4 bottom-4 z-10 flex items-center gap-2 rounded-full bg-red-600/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              LIVE · 12.4K watching
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── PRIME ELITE ────────────────────────── */

const COMPARISON_ROWS = [
  { feature: "Price/mo", realmart: "$9.99", amazon: "$14.99", walmart: "$12.95", highlight: true },
  { feature: "Health-focused", realmart: true, amazon: false, walmart: false, highlight: false },
  { feature: "Live Health TV", realmart: true, amazon: false, walmart: false, highlight: false },
  { feature: "Clinical Products", realmart: true, amazon: false, walmart: false, highlight: false },
  { feature: "2-Day Shipping", realmart: true, amazon: true, walmart: true, highlight: false },
  { feature: "Cost-Plus Generics", realmart: true, amazon: false, walmart: false, highlight: false },
  { feature: "Health Dashboard", realmart: true, amazon: false, walmart: false, highlight: false },
  { feature: "Loyalty Points", realmart: true, amazon: false, walmart: false, highlight: false },
];

function PrimeEliteSection() {
  return (
    <section className="bg-neutral-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400">
              Prime Elite
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your Health. Upgraded. $9.99/Month.
            </h2>
            <p className="mt-5 text-neutral-400">
              Prime Elite is the membership that pays for itself on your first
              order. Built for the health-obsessed, the performance-driven, and
              anyone who refuses to settle.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Full Real TV access — live & on-demand",
                "Early access to new product launches",
                "3x loyalty points on every purchase",
                "Real Score health dashboard access",
                "Priority customer support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-neutral-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>

            <Button className="mt-8 bg-cyan-600 text-white hover:bg-cyan-500">
              Join 50,000+ Prime Elite Members
            </Button>
          </div>

          {/* Right — comparison table */}
          <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] bg-neutral-800/80">
                  <th className="py-3.5 pl-5 text-left font-medium text-neutral-400" />
                  <th className="py-3.5 text-center font-semibold text-cyan-400">
                    REAL Mart
                  </th>
                  <th className="py-3.5 text-center font-medium text-neutral-400">
                    Amazon
                  </th>
                  <th className="py-3.5 pr-5 text-center font-medium text-neutral-400">
                    Walmart+
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/[0.04] ${
                      i % 2 === 0 ? "bg-neutral-900/50" : "bg-neutral-800/30"
                    }`}
                  >
                    <td className="py-3 pl-5 font-medium text-neutral-300">
                      {row.feature}
                    </td>
                    <td className="py-3 text-center">
                      {row.highlight ? (
                        <span className="font-bold text-cyan-400">
                          {row.realmart as string}
                        </span>
                      ) : row.realmart === true ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-cyan-400" />
                      ) : (
                        <span className="text-neutral-500">✗</span>
                      )}
                    </td>
                    <td className="py-3 text-center">
                      {row.highlight ? (
                        <span className="text-neutral-400">{row.amazon as string}</span>
                      ) : row.amazon === true ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        <span className="text-neutral-500">✗</span>
                      )}
                    </td>
                    <td className="py-3 pr-5 text-center">
                      {row.highlight ? (
                        <span className="text-neutral-400">{row.walmart as string}</span>
                      ) : row.walmart === true ? (
                        <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        <span className="text-neutral-500">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── REAL SCORE ─────────────────────────── */

function RealScoreSection() {
  return (
    <section className="bg-neutral-950 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400">
          Real Score™
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Your Health Score. Your Shopping&nbsp;Guide.
        </h2>
        <p className="mt-4 text-neutral-400">
          Real Score is your personalized health intelligence dashboard. Take a
          5-minute assessment, get your score, and receive a curated product
          roadmap built specifically for your body, goals, and budget.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: Activity,
              title: "5-Minute Assessment",
              text: "Complete the health intake quickly and easily.",
            },
            {
              icon: Heart,
              title: "Personalized Picks",
              text: "Users find products they wouldn't have discovered alone.",
            },
            {
              icon: Star,
              title: "Better Outcomes",
              text: "Higher satisfaction vs. browsing without a score.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/[0.06] bg-neutral-800/50 p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950/60 text-cyan-400">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{c.title}</h3>
              <p className="mt-1.5 text-sm text-neutral-400">{c.text}</p>
            </div>
          ))}
        </div>

        <Button className="mt-10 bg-cyan-600 text-white hover:bg-cyan-500">
          Get Your Real Score Free → Start Now
        </Button>
      </div>
    </section>
  );
}

/* ──────────────────────── REVIEWS ────────────────────────────── */

const REVIEWS = [
  {
    quote:
      "I've tried every supplement brand on Amazon. REAL Mart's clinically validated catalog is on another level. My recovery time dropped by 40% in 6 weeks.",
    name: "Marcus T.",
    role: "NFL Strength Coach",
  },
  {
    quote:
      "Prime Elite pays for itself every single month. The exclusive pricing on biologics alone saves me $200+. I'll never go back to Amazon for health products.",
    name: "Dr. Sarah K.",
    role: "Functional Medicine",
  },
  {
    quote:
      "Real TV is addictive. I've discovered products I never would have found on my own, and the live drops are insane value. Bought a red light panel for 35% off.",
    name: "Jordan M.",
    role: "Biohacker",
  },
];

function ReviewsSection() {
  return (
    <section className="bg-neutral-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400">
          Real Reviews
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          What Our Customers Are&nbsp;Saying
        </h2>
        <p className="mt-4 text-neutral-400">
          Over 12,000 verified purchases. Real results. Real people.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-white/[0.06] bg-neutral-800/50 p-7"
            >
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300 italic">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-5">
                <p className="font-semibold text-white">{r.name}</p>
                <p className="text-sm text-neutral-500">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── P2P MARKETPLACE ────────────────────────── */

const PLANS = [
  {
    name: "Free Plan",
    price: "$0",
    features: ["5 listings/month", "10% commission", "Basic listing & chat", "Standard search placement"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro Plan",
    price: "$9.99",
    features: [
      "Unlimited listings",
      "8% commission",
      "Featured placement",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Start Pro",
    popular: true,
  },
  {
    name: "Elite Plan",
    price: "$29.99",
    features: [
      "Unlimited listings",
      "6% commission",
      "Homepage features",
      "Real TV auction slots",
      "Verified seller badge",
    ],
    cta: "Go Elite",
    popular: false,
  },
];

function MarketplaceSection() {
  return (
    <section className="bg-neutral-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400">
          Marketplace
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          REAL Mart P2P Marketplace
        </h2>
        <p className="mt-4 max-w-2xl text-neutral-400">
          A peer-to-peer marketplace for new and used wellness equipment —
          creating a self-sustaining commerce ecosystem around the REAL brand.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 ${
                plan.popular
                  ? "border-cyan-500/40 bg-neutral-800/70"
                  : "border-white/[0.06] bg-neutral-900/70"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-600 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-2">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-sm text-neutral-500">/mo</span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-neutral-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 w-full ${
                  plan.popular
                    ? "bg-cyan-600 text-white hover:bg-cyan-500"
                    : "border border-white/10 bg-transparent text-white hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── TRUST BAR ─────────────────────────────── */

function TrustBar() {
  return (
    <div className="bg-neutral-900 py-5">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 text-sm text-neutral-400">
        {[
          { icon: "🔒", text: "Secure Checkout" },
          { icon: "🚀", text: "Free 2-Day Shipping" },
          { icon: "🔄", text: "Easy Returns" },
          { icon: "✅", text: "Clinically Validated" },
        ].map((item) => (
          <span key={item.text} className="flex items-center gap-2">
            <span>{item.icon}</span>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────── FINAL CTA ─────────────────────────────── */

function FinalCTA() {
  return (
    <section className="bg-neutral-950 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <span className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400">
          Ready?
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Start Your Health Journey&nbsp;Today
        </h2>
        <p className="mt-4 text-neutral-400">
          Join 50,000+ members who shop smarter, recover faster, and live better
          with REAL Mart.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/real-mart/checkout">
            <Button className="bg-cyan-600 text-white hover:bg-cyan-500">
              Shop Now
            </Button>
          </Link>
          <Button
            variant="outline"
            className="border-white/10 text-white hover:bg-white/5"
          >
            Join Prime Elite — $9.99/mo
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── MAIN EXPORT ────────────────────────────── */

export function RealMartFull() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <CategoriesSection />
      <BestsellersSection />
      <TrustBar />
      <RealTVSection />
      <PrimeEliteSection />
      <RealScoreSection />
      <ReviewsSection />
      <MarketplaceSection />
      <FinalCTA />
    </>
  );
}
