import Link from "next/link";
import { siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          <div className="sm:col-span-2">
            <p className="text-lg font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-sm text-muted max-w-sm leading-relaxed">
              Student-led market intelligence and competitive research
              for B2B companies. Rigorous analysis, actionable insights.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted mb-3 sm:mb-4">
              Navigate
            </p>
            <div className="flex flex-col gap-2 sm:gap-2.5">
              <Link href="/#about" className="text-sm text-muted hover:text-foreground transition-colors">About</Link>
              <Link href="/#services" className="text-sm text-muted hover:text-foreground transition-colors">Services</Link>
              <Link href="/team" className="text-sm text-muted hover:text-foreground transition-colors">Team</Link>
              <Link href="/insights" className="text-sm text-muted hover:text-foreground transition-colors">Insights</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted mb-3 sm:mb-4">
              Get in Touch
            </p>
            <div className="flex flex-col gap-2 sm:gap-2.5">
              <Link href="/#contact" className="text-sm text-muted hover:text-foreground transition-colors">Contact Us</Link>
              <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted hover:text-foreground transition-colors break-all">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-muted">
            {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            A student-led initiative spanning multiple colleges.
          </p>
        </div>
      </div>
    </footer>
  );
}
