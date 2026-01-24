import { CheckCircle, Sparkles } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";

const About = () => {
  const highlights = [
    "Certified professional training",
    "300+ satisfied clients",
    "Strict hygiene standards",
    "Personalized consultations",
    "Trial sessions available",
    "Traditional & modern techniques",
    "HD makeup expertise",
    "Complete styling services",
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={gallery1}
                alt="Radhika Nitin Borse - Professional Makeup Artist"
                className="w-full h-[500px] object-cover object-top"
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
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
              Meet <span className="text-primary">Radhika Nitin Borse</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Welcome to Radiance By Radhika! I am a passionate and certified makeup
              artist dedicated to making every client feel confident and beautiful.
              With over 2 years of experience and 300+ satisfied clients, I specialize
              in bridal, party, and editorial makeup.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My approach combines traditional Indian beauty techniques with modern HD
              makeup artistry, ensuring you look flawless both in person and on camera.
              I believe every face tells a unique story, and my job is to enhance your
              natural beauty while reflecting your personal style.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
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
