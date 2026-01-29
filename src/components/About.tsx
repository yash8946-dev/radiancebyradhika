import { CheckCircle, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ProtectedImage } from "@/components/ProtectedImage";
import gallery1 from "@/assets/gallery-1.webp";

const About = () => {
  const { t } = useTranslation();
  const highlightKeys = [
    "clients",
    "locations",
    "trials",
    "consultations",
    "products",
    "expertise",
    "styling",
    "destination",
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ProtectedImage
                src={gallery1}
                alt="Radhika Nitin Borse - Professional Makeup Artist"
                watermarkText="© Radiance by Radhika"
                className="w-full h-[550px] object-cover"
                style={{ objectPosition: "center 35%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">2+ Years</div>
                  <div className="text-sm text-muted-foreground">of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div itemScope itemType="https://schema.org/Person">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t('about.title')}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
              {t('about.title')} <span className="text-primary" itemProp="name">Radhika Nitin Borse</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg" itemProp="description">
              {t('about.description')}
            </p>

            {/* Internal Links for SEO */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Explore our comprehensive <a href="#services" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); document.querySelector('#services')?.scrollIntoView({behavior:'smooth'});}}>makeup services</a> including bridal, party, and editorial looks. Check out our competitive <a href="#pricing" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); document.querySelector('#pricing')?.scrollIntoView({behavior:'smooth'});}}>pricing packages</a> and view our <a href="#gallery" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); document.querySelector('#gallery')?.scrollIntoView({behavior:'smooth'});}}>stunning portfolio</a>. Ready to book? <a href="#contact" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});}}>Contact us today</a>!
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlightKeys.map((key, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{t(`about.highlights.${key}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
