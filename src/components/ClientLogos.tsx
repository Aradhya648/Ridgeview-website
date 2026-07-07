import Image from "next/image";

const clients = [
  { name: "Kotak", img: "/logos/kotak.svg", width: 100, height: 32 },
  { name: "IDBI Capital", img: null, width: 0, height: 0 },
  { name: "PhysicsWallah", img: "/logos/physicswallah.webp", width: 120, height: 36 },
  { name: "Columbia Sportswear", img: "/logos/columbia.png", width: 120, height: 28 },
  { name: "IOC", img: "/logos/ioc.png", width: 110, height: 42 },
  { name: "Bajari", img: "/logos/bajari.png", width: 100, height: 34 },
  { name: "Drufiy", img: "/logos/drufiy.svg", width: 90, height: 28 },
  { name: "Convanto", img: "/logos/convanto.png", width: 110, height: 36 },
];

const all = [...clients, ...clients];

function LogoItem({ client }: { client: typeof clients[0] }) {
  if (client.img) {
    return (
      <Image
        src={client.img}
        alt={client.name}
        width={client.width}
        height={client.height}
        className="h-8 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        unoptimized
      />
    );
  }
  return (
    <span className="text-sm font-semibold tracking-tight text-muted/50 hover:text-foreground transition-colors duration-300 whitespace-nowrap select-none">
      {client.name}
    </span>
  );
}

export default function ClientLogos() {
  return (
    <section className="py-10 sm:py-14 border-y border-border overflow-hidden marquee-wrapper">
      <p className="text-center text-xs font-medium uppercase tracking-widest text-muted mb-8 px-5">
        Trusted by leading organizations
      </p>
      <div className="relative">
        <div className="flex items-center animate-marquee" style={{ width: "max-content" }}>
          {all.map((client, i) => (
            <div key={i} className="flex items-center justify-center px-10 sm:px-14">
              <LogoItem client={client} />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}
