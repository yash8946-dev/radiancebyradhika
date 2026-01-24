import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Bride",
      content:
        "Radhika made my wedding day absolutely magical! Her attention to detail and understanding of what I wanted was perfect. I felt like a princess!",
      rating: 5,
    },
    {
      name: "Ananya Desai",
      role: "Reception Client",
      content:
        "The reception look was stunning! So many compliments from guests. Radhika is incredibly talented and professional. Highly recommend!",
      rating: 5,
    },
    {
      name: "Sneha Patil",
      role: "Engagement Client",
      content:
        "From the trial session to the final look, everything was seamless. Radhika listened to all my preferences and delivered beyond expectations.",
      rating: 5,
    },
    {
      name: "Meera Kulkarni",
      role: "Bridal Client",
      content:
        "I was nervous about my bridal makeup but Radhika put me at ease. The HD makeup lasted the entire day and looked amazing in photos!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            What My <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground">
            Don't just take my word for it - hear from some of my happy clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                {/* Content */}
                <p className="text-foreground/80 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Author */}
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
