import { Button } from "@/components/ui/button";
import { Sparkles, Star, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroVideo from "@/assets/videoplayback.mp4";
import heroImage from "@/assets/hero-image.webp";

const Hero = () => {
  const { t } = useTranslation();
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-screen h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/logo.png"
          className="w-full h-full object-cover"
          aria-label="Radiance by Radhika makeup artist portfolio showcase video"
        >
          <source src={heroVideo} type="video/webm" />
        </video>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-30 z-5">
        <Sparkles className="w-12 h-12 text-gold" />
      </div>
      <div className="absolute bottom-40 right-20 animate-float opacity-30 z-5" style={{ animationDelay: "1s" }}>
        <Star className="w-8 h-8 text-primary" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-2 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
            itemProp="name"
          >
            <span className="text-primary">{t('hero.title')}</span> {t('hero.location')}
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-serif mb-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Radhika Nitin Borse
          </p>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
            itemProp="description"
          >
            {t('hero.subtitle')}
          </p>
          
          {/* Internal Links for SEO */}
          <p
            className="text-base text-muted-foreground mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Explore our <a href="#services" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); scrollToSection('#services');}}>professional services</a>, view our <a href="#gallery" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); scrollToSection('#gallery');}}>stunning portfolio</a>, and read <a href="#testimonials" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); scrollToSection('#testimonials');}}>client reviews</a>.
          </p>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">300+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="text-lg px-8"
            >
              {t('hero.bookBtn')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#pricing")}
              className="text-lg px-8"
            >
              {t('hero.pricingBtn')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
