import About from "@/components/home/About";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Navbar from "@/components/layout/Navbar";
import WhatsappButton from "@/components/shared/WhatsappButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
      </main>

      <WhatsappButton />
    </>
  );
}