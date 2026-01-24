import { Check, Star, Crown, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const packages = [
    {
      name: "Engagement Look",
      price: "₹5,000",
      description: "Perfect for your engagement ceremony",
      icon: Sparkles,
      popular: false,
      features: [
        "HD Makeup Application",
        "Basic Hair Styling",
        "Eye Makeup (Smokey/Glitter)",
        "False Lashes",
        "Touch-up Kit",
      ],
    },
    {
      name: "Reception Glam",
      price: "₹8,000",
      description: "Glamorous look for your reception night",
      icon: Star,
      popular: false,
      features: [
        "Premium HD Makeup",
        "Advanced Hair Styling",
        "Contouring & Highlighting",
        "Premium Lashes",
        "Draping Assistance",
        "Touch-up Kit",
      ],
    },
    {
      name: "Bridal Package",
      price: "₹15,000",
      description: "Complete bridal transformation",
      icon: Crown,
      popular: true,
      features: [
        "Luxury HD Bridal Makeup",
        "Bridal Hair Styling",
        "Full Face Contouring",
        "Premium Lash Extensions",
        "Saree Draping",
        "Accessory Setting",
        "Touch-up Kit",
        "2 Hours Service",
      ],
    },
    {
      name: "Full Wedding Package",
      price: "₹35,000",
      description: "Mehendi + Sangeet + Wedding Day + Reception",
      icon: Crown,
      popular: false,
      features: [
        "4 Different Looks",
        "All Day Coverage",
        "Free Trial Session",
        "Premium Products Only",
        "Complete Styling",
        "Draping for All Events",
        "Personal Touch-up Kit",
        "Priority Booking",
      ],
    },
  ];

  const additionalServices = [
    { service: "Party Makeup", price: "₹3,500" },
    { service: "Mehendi/Haldi Look", price: "₹4,000" },
    { service: "Air Brush Makeup", price: "+₹2,000" },
    { service: "Saree Draping Only", price: "₹500" },
    { service: "Hair Styling Only", price: "₹1,500" },
    { service: "Trial Session", price: "₹2,000" },
    { service: "Outstation Travel", price: "As per distance" },
    { service: "Early Morning Charges", price: "+₹1,000" },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Service <span className="text-primary">Packages</span>
          </h2>
          <p className="text-muted-foreground">
            Transparent pricing for all occasions. Custom packages available based
            on your specific requirements.
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
                <h3 className="text-lg font-semibold text-foreground">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
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
            Additional Services
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {additionalServices.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
              >
                <span className="text-foreground">{item.service}</span>
                <span className="font-semibold text-primary">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">
            * Prices may vary based on specific requirements. Contact for custom quotes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
