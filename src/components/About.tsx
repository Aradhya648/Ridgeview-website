"use client";

import FadeIn from "./FadeIn";

const stats = [
  { value: "50+", label: "Student Analysts" },
  { value: "Multi", label: "College Network" },
  { value: "B2B", label: "Focused Research" },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 md:py-36 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          <div>
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-widest text-accent mb-4">
                About Ridgeview
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                A consulting firm built
                by students, for the real world
              </h2>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.15}>
              <p className="text-muted leading-relaxed text-base sm:text-lg">
                Ridgeview Consulting is a student-led organization spanning
                multiple colleges, bringing together 50+ students across diverse
                academic backgrounds. We deliver market intelligence and
                competitive research for B2B companies.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="mt-5 sm:mt-6 text-muted leading-relaxed text-sm sm:text-base">
                We handle specific requests -- acquisition due diligence, market
                entry analysis, competitive positioning -- with rigorous research
                and actionable insights. We also identify opportunities
                independently and bring research directly to companies that need
                it.
              </p>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-14 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-14 sm:mt-20 h-px bg-border" />
        </FadeIn>
      </div>
    </section>
  );
}
