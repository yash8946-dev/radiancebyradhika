import { Heart, Crown, Sparkles, Camera, Users, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: Crown,
      key: 'bridal',
    },
    {
      icon: Heart,
      key: 'preWedding',
    },
    {
      icon: Sparkles,
      key: 'party',
    },
    {
      icon: Camera,
      key: 'editorial',
    },
    {
      icon: Users,
      key: 'family',
    },
    {
      icon: Star,
      key: 'trial',
    },
  ];

  return (
    <section id="services" className="py-20 bg-background" itemScope itemType="https://schema.org/BeautySalon">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground" itemProp="description">
            {t('services.subtitle')}
          </p>
          <p className="text-muted-foreground mt-3">
            <a href="#about" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); document.querySelector('#about')?.scrollIntoView({behavior:'smooth'});}}>Learn more about Radhika</a> and her expertise, or check our <a href="#pricing" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); document.querySelector('#pricing')?.scrollIntoView({behavior:'smooth'});}}>pricing plans</a> for detailed packages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-card"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3" itemProp="name">
                  {t(`services.${service.key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {t(`services.${service.key}.description`)}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {(t(`services.${service.key}.features`, { returnObjects: true }) as string[]).map((feature: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
