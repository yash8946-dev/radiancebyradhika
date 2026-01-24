import { useState } from "react";
import { Phone, Mail, MapPin, Send, Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: "",
    date: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Google Sheets Web App URL - User needs to set this up
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxxxxxxxxxxx/exec";

    try {
      // Submit to Google Sheets via Apps Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Phone: formData.phone,
          Email: formData.email,
          Services: formData.services,
          Date: formData.date,
          Message: formData.message,
        }),
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        services: "",
        date: "",
        message: "",
      });
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try calling or WhatsApp directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/radianceby.radhika/",
      color: "hover:text-pink-500",
    },
    {
      icon: Instagram,
      label: "Personal",
      href: "https://www.instagram.com/radhikanitinborse?igsh=ZTkyYzBqbmxtM3hr",
      color: "hover:text-pink-500",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@radhikamakeovers_2000",
      color: "hover:text-red-500",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "#",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Book Your <span className="text-primary">Consultation</span>
          </h2>
          <p className="text-muted-foreground">
            Ready to transform? Fill out the form below or reach out directly.
            I respond to all inquiries within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
                <Input
                  placeholder="Phone Number *"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <Input
                placeholder="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background"
              />
              <Select
                value={formData.services}
                onValueChange={(value) => setFormData({ ...formData, services: value })}
              >
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select Service *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bridal">Bridal Makeup</SelectItem>
                  <SelectItem value="engagement">Engagement Look</SelectItem>
                  <SelectItem value="reception">Reception Glam</SelectItem>
                  <SelectItem value="mehendi">Mehendi/Haldi Look</SelectItem>
                  <SelectItem value="party">Party Makeup</SelectItem>
                  <SelectItem value="photoshoot">Photoshoot/Editorial</SelectItem>
                  <SelectItem value="trial">Trial Session</SelectItem>
                  <SelectItem value="package">Full Wedding Package</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Event Date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="bg-background"
              />
              <Textarea
                placeholder="Tell me about your requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="bg-background resize-none"
              />
              <Button
                type="submit"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+919009064426"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium text-foreground">+91 9009064426</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/919284182410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">WhatsApp</div>
                    <div className="font-medium text-foreground">+91 9284182410</div>
                  </div>
                </a>
                <a
                  href="mailto:radhikaborse1819@gmail.com"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium text-foreground">radhikaborse1819@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50 hover:border-primary/30 transition-colors ${social.color}`}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Studio Location */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Studio Location
              </h3>
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Address</div>
                  <div className="font-medium text-foreground">
                    Available for home visits and venue services
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Serving Maharashtra & nearby regions
                  </div>
                </div>
              </div>
              {/* Map Embed */}
              <div className="rounded-xl overflow-hidden border border-border/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.8!2d76.2236607217704!3d21.23863713456132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE0JzE5LjEiTiA3NsKwMTMnMjUuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
