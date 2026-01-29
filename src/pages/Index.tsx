import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { useSEO } from "@/hooks/use-seo";

const Index = () => {
  useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <Hero />
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Makeup Services", href: "#services" }]} />
        </div>
        <About />
        <Services />
        <Brands />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
