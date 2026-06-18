"use client";

import FadeIn from "./FadeIn";
import { caseStudies } from "@/data/content";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-28 md:py-36 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-accent mb-4">
            Selected Work
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight max-w-xl">
            Research that shapes decisions
          </h2>
        </FadeIn>

        <div className="mt-12 sm:mt-16 space-y-0 divide-y divide-border">
          {caseStudies.map((study, i) => (
            <FadeIn key={study.title} delay={0.1 + i * 0.08}>
              <div className="group py-8 sm:py-10 first:pt-0 last:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12">
                  <div className="lg:col-span-2">
                    <p className="text-xs font-medium uppercase tracking-wider text-accent">
                      {study.category}
                    </p>
                  </div>
                  <div className="lg:col-span-6">
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                      {study.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted leading-relaxed">
                      {study.summary}
                    </p>
                  </div>
                  <div className="lg:col-span-4 mt-2 lg:mt-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted mb-1.5 sm:mb-2">
                      Outcome
                    </p>
                    <p className="text-sm font-medium text-foreground leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
