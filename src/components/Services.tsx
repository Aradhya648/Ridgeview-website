"use client";

import FadeIn from "./FadeIn";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 md:py-36 px-5 sm:px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-accent mb-4">
            What We Do
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight max-w-xl">
            Flexible scope, rigorous output
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-4 sm:mt-5 text-muted text-base sm:text-lg max-w-xl leading-relaxed">
            We take on defined engagements and proactively surface opportunities.
            Fast turnaround when needed, depth when it matters.
          </p>
        </FadeIn>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={0.1 + i * 0.08}>
              <div className="group p-6 sm:p-7 border border-border rounded-xl hover:border-accent/30 hover:shadow-sm bg-white transition-all duration-200">
                <p className="text-xs font-mono text-accent/60 mb-3">
                  {service.number}
                </p>
                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-200 mb-3">
                  {service.title}
                </h3>
                <div className="w-8 h-px bg-accent/20 mb-4 group-hover:w-14 transition-all duration-300" />
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
