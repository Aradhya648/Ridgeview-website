"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { articles } from "@/data/content";

export default function InsightsPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-28 px-5 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-widest text-accent mb-4">
            Insights
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Thinking on markets,
            <br className="hidden sm:block" />
            research, and strategy
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
            Perspectives from our team on competitive intelligence, market
            dynamics, and the craft of research.
          </p>
        </FadeIn>

        <div className="mt-12 sm:mt-16 divide-y divide-border">
          {articles.map((article, i) => (
            <FadeIn key={article.slug} delay={0.1 + i * 0.06}>
              <article className="group py-8 sm:py-10 first:pt-0 cursor-pointer">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted">{article.date}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors duration-200 leading-snug">
                  {article.title}
                </h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
                  {article.excerpt}
                </p>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted">
                  {article.readTime}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-sm sm:text-base text-muted">
              Want to contribute?{" "}
              <Link
                href="/#contact"
                className="text-accent font-medium hover:underline"
              >
                Reach out to us
              </Link>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
