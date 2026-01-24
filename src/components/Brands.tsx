const Brands = () => {
  const makeupBrands = [
    { name: "MAC", logo: "MAC" },
    { name: "Bobbi Brown", logo: "Bobbi Brown" },
    { name: "Charlotte Tilbury", logo: "Charlotte Tilbury" },
    { name: "NARS", logo: "NARS" },
    { name: "Huda Beauty", logo: "Huda Beauty" },
    { name: "PAC Cosmetics", logo: "PAC" },
    { name: "Kryolan", logo: "Kryolan" },
    { name: "Makeup Forever", logo: "MUFE" },
    { name: "Urban Decay", logo: "Urban Decay" },
    { name: "Fenty Beauty", logo: "Fenty" },
  ];

  const hairBrands = [
    { name: "GHD", logo: "GHD" },
    { name: "Dyson", logo: "Dyson" },
    { name: "Toni & Guy", logo: "Toni & Guy" },
    { name: "Schwarzkopf", logo: "Schwarzkopf" },
    { name: "L'Oréal Professionnel", logo: "L'Oréal Pro" },
    { name: "Wella", logo: "Wella" },
  ];

  return (
    <section id="brands" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Quality Products
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Professional <span className="text-primary">Brands I Use</span>
          </h2>
          <p className="text-muted-foreground">
            I believe in using only the finest quality products to ensure
            flawless, long-lasting results for your special day.
          </p>
        </div>

        {/* Makeup Brands */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Makeup Brands
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {makeupBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-xl p-6 flex items-center justify-center hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="text-foreground/70 font-medium text-center group-hover:text-primary transition-colors">
                  {brand.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hair Styling Brands */}
        <div>
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Hair Styling Tools & Products
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {hairBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-xl p-6 flex items-center justify-center hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="text-foreground/70 font-medium text-center group-hover:text-primary transition-colors">
                  {brand.logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          All products used are 100% authentic, hypoallergenic, and suitable for all skin types.
        </p>
      </div>
    </section>
  );
};

export default Brands;
