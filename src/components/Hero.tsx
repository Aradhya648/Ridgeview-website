"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center px-5 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,58,95,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(226,232,240,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.35)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_75%)]" />

      <div className="relative mx-auto max-w-4xl text-center pt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs sm:text-sm font-medium tracking-widest uppercase text-muted mb-5 sm:mb-6"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight lg:leading-[1.08] text-foreground"
        >
          Research that moves
          <br />
          <span className="text-accent">markets forward</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed px-2"
        >
          We deliver competitive intelligence and market research for B2B
          companies. 50+ analysts across multiple colleges. Flexible scope,
          fast turnaround when needed, depth when it matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-light transition-colors duration-200"
          >
            Work with us
          </Link>
          <Link
            href="/#services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-foreground border border-border rounded-full hover:bg-surface transition-colors duration-200"
          >
            What we do
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 sm:h-12 bg-gradient-to-b from-transparent via-border to-border"
        />
      </motion.div>
    </section>
  );
}
