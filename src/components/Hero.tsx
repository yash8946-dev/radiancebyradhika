import { Button } from "@/components/ui/button";
import { Sparkles, Star, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Radiance By Radhika - Professional Makeup Artist"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-30">
        <Sparkles className="w-12 h-12 text-gold" />
      </div>
      <div className="absolute bottom-40 right-20 animate-float opacity-30" style={{ animationDelay: "1s" }}>
        <Star className="w-8 h-8 text-primary" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Certified Professional Makeup Artist
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Radiance{" "}
            <span className="text-primary">By Radhika</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Transform your special moments with expert bridal and occasion makeup
          </p>

          {/* Description */}
          <p
            className="text-foreground/70 mb-8 max-w-lg animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Blending traditional elegance with modern HD techniques to make you
            glow on your most memorable days. 300+ happy brides and counting.
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
              Book Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#pricing")}
              className="text-lg px-8"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
