import About from "@/components/home/About";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhatsappButton from "@/components/shared/WhatsappButton";

export default function Home() {
  return (
    <>
    

      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
      </main>

      <Footer />

      <WhatsappButton />
    </>
  );
}