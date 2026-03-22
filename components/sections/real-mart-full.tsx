"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  Shield,
  Truck,
  RotateCcw,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";

/* ──────────────────────────── HERO ──────────────────────────── */

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-neutral-950">
      {/* Background image */}
      <Image
        src="/images/services/recovery-tools.jpg"
        alt="Recovery tools"
        fill
        priority
        className="object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/60 to-neutral-950" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-32 md:py-40">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400"
        >
          The Future of Health Commerce
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-4xl font-serif text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Shop Smarter. Live&nbsp;Better.{" "}
          <span className="text-cyan-400">REAL&nbsp;Mart.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl"
        >
          America&rsquo;s premier health &amp; wellness superstore &mdash;
          clinically validated products, unbeatable prices, and a shopping
          experience Amazon can&rsquo;t match.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link href="/real-mart/checkout">
            <Button size="lg" className="bg-cyan-600 text-white hover:bg-cyan-500">
              Shop Now
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            Join Prime Elite
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-wrap gap-10 sm:gap-14"
        >
          {[
            { value: "7", label: "Product Categories" },
            { value: "12K+", label: "Verified Purchases" },
            { value: "50K+", label: "Prime Members" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-neutral-400">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
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
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400"
        >
          Why REAL Mart
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Not Just Another Online Store
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="mt-4 max-w-2xl text-neutral-400"
        >
          We built what Amazon never could — a health-first marketplace with
          clinically validated products, expert-backed recommendations, and a
          community that keeps you accountable.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CARDS.map((c, index) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950/60 text-cyan-400">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{c.text}</p>
            </motion.div>
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
    image: "/images/services/recovery-tools-2.jpg",
    href: "/services/recovery-backpacks",
  },
  {
    icon: Beaker,
    name: "Biologics & Exosomes",
    description: "Proprietary formulations. Clinic-grade, direct to you.",
    price: "$28 — $2,000",
    image: "/images/services/b12-peptides.jpg",
    href: "/services/b12-peptides",
  },
  {
    icon: Pill,
    name: "Supplements",
    description: "Science-backed stacks for performance, longevity & recovery.",
    price: "From $24",
    image: "/images/services/iv-therapy-2.jpg",
    href: "/services/supplements",
  },
  {
    icon: Smartphone,
    name: "Health Devices",
    description: "Wearables, diagnostics, and monitoring tools.",
    price: "From $49",
    image: "/images/services/wearable-hardware.jpg",
    href: "/services/wearable-hardware",
  },
  {
    icon: Shirt,
    name: "Apparel",
    description: "Performance wear built for the REAL lifestyle.",
    price: "From $12",
    image: "/images/services/apparel.jpg",
    href: "/services/apparel",
  },
  {
    icon: Sparkles,
    name: "Real Cost Plus Generics",
    description: "Prescription-grade generics at transparent prices.",
    price: "From $8",
    image: "/images/services/glp1-weight-loss.jpg",
    href: "/services/cost-plus-generics",
  },
  {
    icon: Home,
    name: "Home Wellness",
    description: "Saunas, air purifiers, sleep systems & more.",
    price: "From $199",
    image: "/images/services/pemf-2.jpg",
    href: "/services/home-wellness",
  },
];

function CategoriesSection() {
  return (
    <section className="bg-neutral-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400"
        >
          Shop REAL Mart
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          7 Categories. One&nbsp;Ecosystem.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="mt-4 max-w-2xl text-neutral-400"
        >
          From daily supplements to cutting-edge recovery hardware — everything
          your health journey needs, in one place.
        </motion.p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, index) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <Link href={c.href} className="block">
                <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-950/60 text-cyan-400">
                        <c.icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{c.name}</h3>
                    </div>
                    <p className="mt-2 text-sm text-neutral-400">{c.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-sm font-semibold text-cyan-400">{c.price}</p>
                      <ChevronRight className="h-4 w-4 text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:text-cyan-400" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── FEATURED BRANDS ─────────────────────────── */

const BRANDS = [
  { name: "SwimEx", image: "/images/partners/swimex.jpg", href: "/services/swimex" },
  { name: "EXOPOD", image: "/images/partners/exopod.png", href: "/services/hbot-exopod" },
  { name: "ExoSkin", image: "/images/partners/exoskin.jpg", href: "/services/exoskin" },
  { name: "Storz Medical", image: "/images/partners/storz.jpg", href: "/services/shockwave-therapy" },
  { name: "Speediance", image: "/images/partners/speediance.jpg", href: "/services/speediance" },
  { name: "PNOE", image: "/images/partners/pnoe.jpg", href: "/services/pnoe" },
  { name: "Oxy Chambers", image: "/images/partners/oxychambers.jpg", href: "/services/oxy-chambers" },
  { name: "Plunge Pools", image: "/images/partners/plunge-pools.png", href: "/services/plunge-pools" },
  { name: "Cost Plus", image: "/images/partners/costplus.jpg", href: "/services/cost-plus-generics" },
];

function FeaturedBrandsSection() {
  return (
    <section className="overflow-hidden bg-neutral-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400"
        >
          Featured Brands
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Trusted Partners. Premium&nbsp;Products.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="mt-4 max-w-2xl text-neutral-400"
        >
          We partner with the world&rsquo;s leading health and wellness brands
          to bring you clinically validated products at unbeatable prices.
        </motion.p>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="relative mt-12">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-neutral-900 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-neutral-900 to-transparent" />

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate brands for infinite scroll effect */}
          {[...BRANDS, ...BRANDS].map((brand, index) => (
            <Link
              key={`${brand.name}-${index}`}
              href={brand.href}
              className="shrink-0"
            >
              <div className="group w-56 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-800">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-4 py-3 text-center">
                  <p className="text-sm font-semibold text-white">{brand.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
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
    image: "/images/services/compression-therapy.jpg",
  },
  {
    id: "bestseller-exosome-kit",
    name: "Exosome Therapy Starter Kit",
    description:
      "Clinic-grade biologics, now direct to your door. 70—85% margin savings vs. clinic pricing.",
    price: 149,
    image: "/images/services/b12-peptides-2.jpg",
  },
  {
    id: "bestseller-red-light",
    name: "Red Light Therapy Panel",
    description:
      "Full-body photobiomodulation. FDA-cleared. 660nm + 850nm wavelengths.",
    price: 399,
    image: "/images/services/red-light-therapy.jpg",
  },
];

function BestsellersSection() {
  const { addItem } = useCart();

  return (
    <section className="bg-neutral-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400"
        >
          Bestsellers
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Top Picks This Week
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="mt-4 text-neutral-400"
        >
          Clinically validated. Community approved. Delivered fast.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BESTSELLERS.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
            >
              {/* Product image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
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
            </motion.div>
          ))}
        </div>

        {/* Rating bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.3 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-neutral-300 backdrop-blur-sm"
        >
          <div className="flex gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          4.8/5 average rating across 12,000+ verified purchases
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────── TRUST BAR ─────────────────────────────── */

function TrustBar() {
  return (
    <div className="border-t border-white/[0.06] bg-white/[0.02] py-5 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 text-sm text-neutral-400">
        {[
          { icon: Shield, text: "Secure Checkout" },
          { icon: Truck, text: "Free 2-Day Shipping" },
          { icon: RotateCcw, text: "Easy Returns" },
          { icon: BadgeCheck, text: "Clinically Validated" },
        ].map((item) => (
          <span key={item.text} className="flex items-center gap-2">
            <item.icon className="h-4 w-4 text-cyan-400" />
            {item.text}
          </span>
        ))}
      </div>
    </div>
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
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400"
            >
              REAL TV
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Shop Live. Win Big. Only on Real&nbsp;TV.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="mt-5 text-lg text-neutral-400"
            >
              Real TV is our live commerce channel — part QVC, part Netflix, all
              health. Watch expert demos, exclusive drops, and live Q&amp;As
              with top health influencers. Buy in real time. Never miss a deal.
            </motion.p>

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
              ].map((f, index) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + index * 0.08 }}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-950/60 text-cyan-400">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{f.title}</h3>
                    <p className="mt-0.5 text-sm text-neutral-400">{f.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.5 }}
            >
              <Button className="mt-8 bg-cyan-600 text-white hover:bg-cyan-500">
                Watch Now — Free with Prime Elite
              </Button>
            </motion.div>
          </div>

          {/* Right visual — real image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <Image
              src="/images/services/device-leasing.jpg"
              alt="REAL TV Live Stream"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-neutral-950/30" />
            {/* Live badge */}
            <div className="absolute left-4 bottom-4 z-10 flex items-center gap-2 rounded-full bg-red-600/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              LIVE · 12.4K watching
            </div>
            {/* TV overlay text */}
            <div className="absolute right-4 top-4 z-10 rounded-lg bg-neutral-950/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              REAL TV
            </div>
          </motion.div>
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
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400"
            >
              Prime Elite
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Your Health. Upgraded. $9.99/Month.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="mt-5 text-neutral-400"
            >
              Prime Elite is the membership that pays for itself on your first
              order. Built for the health-obsessed, the performance-driven, and
              anyone who refuses to settle.
            </motion.p>

            <ul className="mt-8 space-y-3">
              {[
                "Full Real TV access — live & on-demand",
                "Early access to new product launches",
                "3x loyalty points on every purchase",
                "Real Score health dashboard access",
                "Priority customer support",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  className="flex items-start gap-3 text-neutral-300"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.5 }}
            >
              <Button className="mt-8 bg-cyan-600 text-white hover:bg-cyan-500">
                Join 50,000+ Prime Elite Members
              </Button>
            </motion.div>
          </div>

          {/* Right — comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/5">
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
                      i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
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
          </motion.div>
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
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400"
        >
          Real Score™
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Your Health Score. Your Shopping&nbsp;Guide.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="mt-4 text-neutral-400"
        >
          Real Score is your personalized health intelligence dashboard. Take a
          5-minute assessment, get your score, and receive a curated product
          roadmap built specifically for your body, goals, and budget.
        </motion.p>

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
          ].map((c, index) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950/60 text-cyan-400">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{c.title}</h3>
              <p className="mt-1.5 text-sm text-neutral-400">{c.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.3 }}
        >
          <Button className="mt-10 bg-cyan-600 text-white hover:bg-cyan-500">
            Get Your Real Score Free → Start Now
          </Button>
        </motion.div>
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
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400"
        >
          Real Reviews
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          What Our Customers Are&nbsp;Saying
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="mt-4 text-neutral-400"
        >
          Over 12,000 verified purchases. Real results. Real people.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, index) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex gap-0.5 text-amber-400"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </motion.div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300 italic">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-5">
                <p className="font-semibold text-white">{r.name}</p>
                <p className="text-sm text-neutral-500">{r.role}</p>
              </div>
            </motion.div>
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
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400"
        >
          Marketplace
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          REAL Mart P2P Marketplace
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="mt-4 max-w-2xl text-neutral-400"
        >
          A peer-to-peer marketplace for new and used wellness equipment —
          creating a self-sustaining commerce ecosystem around the REAL brand.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className={`relative rounded-2xl border p-7 backdrop-blur-sm transition-all ${
                plan.popular
                  ? "border-cyan-500/40 bg-cyan-950/20 hover:border-cyan-500/60"
                  : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── FINAL CTA ─────────────────────────────── */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 sm:py-28">
      {/* Background image */}
      <Image
        src="/images/services/cryotherapy-2.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/80 to-neutral-950" />

      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="brand-kicker border-cyan-800/60 bg-cyan-950/40 text-cyan-400"
        >
          Ready?
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Start Your Health Journey&nbsp;Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="mt-4 text-neutral-400"
        >
          Join 50,000+ members who shop smarter, recover faster, and live better
          with REAL Mart.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/real-mart/checkout">
            <Button size="lg" className="bg-cyan-600 text-white hover:bg-cyan-500">
              Shop Now
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            Join Prime Elite — $9.99/mo
          </Button>
        </motion.div>
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
      <FeaturedBrandsSection />
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
