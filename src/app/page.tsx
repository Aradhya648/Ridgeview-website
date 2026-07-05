import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <About />
      <Services />
      <CaseStudies />
      <ContactForm />
    </>
  );
}
