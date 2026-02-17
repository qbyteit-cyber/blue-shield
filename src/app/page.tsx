import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { IndustrySplit } from "@/components/sections/industry-split";
import { Lifecycle } from "@/components/sections/lifecycle";
import { ContactMapSection } from "@/components/sections/contact-map-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <IndustrySplit />
        <Lifecycle />
        <ContactMapSection />
      </main>
      <Footer />
    </>
  );
}
