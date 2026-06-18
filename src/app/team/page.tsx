"use client";

import FadeIn from "@/components/FadeIn";
import { leadership, analysts, siteConfig } from "@/data/content";
import type { TeamMember } from "@/data/content";

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <FadeIn delay={0.05 + index * 0.04}>
      <div className="group p-5 sm:p-6 border border-border rounded-xl hover:border-accent/30 transition-all duration-300">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/8 flex items-center justify-center mb-4 sm:mb-5">
          <span className="text-xs sm:text-sm font-semibold text-accent">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <h3 className="text-base sm:text-lg font-semibold tracking-tight text-foreground">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-accent mt-0.5">{member.role}</p>
        <p className="text-xs text-muted mt-1">{member.school}</p>
        <p className="text-xs sm:text-sm text-muted leading-relaxed mt-3 sm:mt-4">
          {member.bio}
        </p>
      </div>
    </FadeIn>
  );
}

export default function TeamPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-28 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-accent mb-4">
            Our Team
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl">
            50+ students. Multiple colleges. One standard.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            Our team brings together diverse academic backgrounds -- economics,
            data science, engineering, international relations -- to deliver
            well-rounded market intelligence.
          </p>
        </FadeIn>

        <div className="mt-14 sm:mt-20">
          <FadeIn>
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted mb-6 sm:mb-8">
              Leadership
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {leadership.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-14 sm:mt-20">
          <FadeIn>
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted mb-6 sm:mb-8">
              Analysts
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {analysts.map((member, i) => (
              <MemberCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-14 sm:mt-20 p-8 sm:p-10 bg-surface rounded-2xl text-center">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Want to join Ridgeview?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-muted max-w-md mx-auto">
              We recruit from colleges nationwide. If you have a passion for
              research and analytical thinking, we want to hear from you.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-flex items-center justify-center px-7 py-3.5 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-light transition-colors duration-200"
            >
              Get in touch
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
