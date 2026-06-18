"use client";

import { useState, FormEvent } from "react";
import FadeIn from "./FadeIn";
import { siteConfig } from "@/data/content";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-36 px-5 sm:px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-widest text-accent mb-4">
                Get in Touch
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                Have a research need?
                <br />
                Let&apos;s talk.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-5 sm:mt-6 text-muted leading-relaxed text-base sm:text-lg">
                Whether you have a specific project in mind or want to explore
                how we can help, reach out. We typically respond within 24 hours.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 sm:mt-10">
                <p className="text-sm text-muted">Email us directly</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 text-foreground font-medium hover:text-accent transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            {submitted ? (
              <div className="flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <p className="text-2xl font-semibold tracking-tight">
                    Thank you.
                  </p>
                  <p className="mt-2 text-muted">
                    We&apos;ll be in touch shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-border rounded-lg text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-border rounded-lg text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-border rounded-lg text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-border rounded-lg text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                    placeholder="Tell us about your research needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-light transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
