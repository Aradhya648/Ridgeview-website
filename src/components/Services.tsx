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

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-10 sm:gap-y-14">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={0.1 + i * 0.08}>
              <div className="group">
                <p className="text-xs font-mono text-muted mb-2 sm:mb-3">
                  {service.number}
                </p>
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted leading-relaxed">
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
