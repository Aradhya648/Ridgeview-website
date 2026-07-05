const clients = [
  "Kotak",
  "IDBI Capital",
  "PhysicsWallah",
  "Columbia Sportswear",
  "IOC",
  "Bajari",
  "Drufiy",
  "Convanto",
];

const all = [...clients, ...clients];

export default function ClientLogos() {
  return (
    <section className="py-10 sm:py-14 border-y border-border overflow-hidden marquee-wrapper">
      <p className="text-center text-xs font-medium uppercase tracking-widest text-muted mb-8 sm:mb-10 px-5">
        Trusted by leading organizations
      </p>
      <div className="relative">
        <div className="flex gap-0 animate-marquee" style={{ width: "max-content" }}>
          {all.map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-10 sm:px-14"
              style={{ minWidth: "max-content" }}
            >
              <span className="text-sm sm:text-base font-semibold tracking-tight text-muted/60 hover:text-foreground transition-colors duration-300 whitespace-nowrap select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
