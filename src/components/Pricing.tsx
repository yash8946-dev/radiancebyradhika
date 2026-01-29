import { Check, Star, Crown, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const { t } = useTranslation();
  const packages = [
    {
      name: "Engagement Look",
      key: "engagement",
      icon: Sparkles,
      popular: false,
    },
    {
      name: "Reception Glam",
      key: "reception",
      icon: Star,
      popular: false,
    },
    {
      name: "Bridal Package",
      key: "bridal",
      icon: Crown,
      popular: true,
    },
    {
      name: "Full Wedding Package",
      key: "fullWedding",
      icon: Crown,
      popular: false,
    },
  ];

  const additionalServices = t('pricing.additionalServices.services', { returnObjects: true }) as Array<{ name: string; price: string }>;

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-secondary/30" itemScope itemType="https://schema.org/PriceSpecification">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4" itemProp="name">
            {t('pricing.title')}
          </h2>
          <p className="text-muted-foreground" itemProp="description">
            {t('pricing.subtitle')}
          </p>
          <p className="text-muted-foreground mt-3">
            View our <a href="#services" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); document.querySelector('#services')?.scrollIntoView({behavior:'smooth'});}}>complete service offerings</a> and <a href="#gallery" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); document.querySelector('#gallery')?.scrollIntoView({behavior:'smooth'});}}>portfolio gallery</a> to see our work.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                pkg.popular
                  ? "border-primary shadow-lg scale-105 lg:scale-110"
                  : "border-border/50 hover:border-primary/30"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                    pkg.popular ? "bg-primary" : "bg-primary/10"
                  }`}
                >
                  <pkg.icon
                    className={`w-6 h-6 ${
                      pkg.popular ? "text-primary-foreground" : "text-primary"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground" itemProp="name">{t(`pricing.packages.${pkg.key}.name`)}</h3>
                <p className="text-sm text-muted-foreground" itemProp="description">{t(`pricing.packages.${pkg.key}.duration`)}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary" itemProp="price">{t(`pricing.packages.${pkg.key}.price`)}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {(t(`pricing.packages.${pkg.key}.includes`) as unknown as string).split(', ').map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className="w-full"
                  variant={pkg.popular ? "default" : "outline"}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-8">
            {t('pricing.additionalServices.heading')}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {additionalServices.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
              >
                <span className="text-foreground">{item.name}</span>
                <span className="font-semibold text-primary">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">
            {t('pricing.additionalServices.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
