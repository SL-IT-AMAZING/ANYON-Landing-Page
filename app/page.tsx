import { AnyonHero } from "@/components/anyon-hero";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <AnyonHero />
      <ContactSection />
    </main>
  );
}
