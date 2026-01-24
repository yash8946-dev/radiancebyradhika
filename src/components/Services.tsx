import { Heart, Crown, Sparkles, Camera, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: "Bridal Makeup",
      description:
        "Complete bridal transformation including HD makeup, hairstyling, saree draping, and accessory setting for your special day.",
      features: ["HD Makeup", "Hair Styling", "Saree Draping", "Accessory Setting"],
    },
    {
      icon: Heart,
      title: "Pre-Wedding Events",
      description:
        "Look stunning at your engagement, mehendi, sangeet, and haldi ceremonies with customized looks for each occasion.",
      features: ["Engagement Look", "Mehendi Look", "Sangeet Look", "Haldi Look"],
    },
    {
      icon: Sparkles,
      title: "Party & Events",
      description:
        "Glamorous party makeup for cocktails, receptions, birthdays, and corporate events that make you stand out.",
      features: ["Cocktail Party", "Reception", "Birthday Events", "Corporate Events"],
    },
    {
      icon: Camera,
      title: "Editorial & Photoshoot",
      description:
        "Professional makeup for fashion shoots, portfolio building, and editorial work with camera-ready finishes.",
      features: ["Fashion Shoots", "Portfolio Makeup", "Editorial Looks", "Camera Ready"],
    },
    {
      icon: Users,
      title: "Family Package",
      description:
        "Makeup services for mother of bride/groom, bridesmaids, and family members with coordinated looks.",
      features: ["Mother of Bride", "Bridesmaids", "Family Members", "Group Discounts"],
    },
    {
      icon: Star,
      title: "Trial Session",
      description:
        "Pre-wedding trial sessions to finalize your perfect bridal look with adjustments and consultations.",
      features: ["Personalized Consultation", "Look Finalization", "Product Testing", "Style Discussion"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground">
            From bridal transformations to editorial shoots, I offer comprehensive
            beauty services tailored to make you look and feel your absolute best.
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
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
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
