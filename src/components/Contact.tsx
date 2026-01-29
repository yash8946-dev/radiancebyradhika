import { useMemo, useState } from "react";
import { Phone, Mail, MapPin, Send, Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    services: "",
    message: "",
  });

  // Validation functions
  const validatePhone = (phone: string): string => {
    const phoneDigits = phone.replace(/\D/g, "");
    if (!phoneDigits) return "Phone number is required";
    if (phoneDigits.length !== 10) return "Phone number must be exactly 10 digits";
    return "";
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return "Email is required";
    if (!/[\w.-]+@[\w.-]+\.\w+/.test(email)) {
      return "Email must contain @ and a valid domain (e.g., .com or .co.in)";
    }
    return "";
  };

  const validateForm = (): boolean => {
    const newErrors = {
      name: !formData.name.trim() ? "Name is required" : "",
      phone: validatePhone(formData.phone),
      email: validateEmail(formData.email),
      services: !formData.services ? "Please select a service" : "",
      message: !formData.message.trim() ? "Message is required" : "",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const canSubmit = useMemo(() => {
    return !!(
      formData.name.trim() &&
      formData.phone.trim() &&
      formData.email.trim() &&
      formData.services &&
      formData.message.trim()
    );
  }, [formData.name, formData.phone, formData.email, formData.services, formData.message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Form Validation Error",
        description: "Please check all fields and correct the errors.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create email body with form data
      const emailBody = `Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Email: ${formData.email.trim() || 'Not provided'}
Service: ${formData.services}
Event Date: ${formData.date || 'Not specified'}
Message: ${formData.message.trim() || 'No additional message'}`;

      // Open mailto link with pre-filled data
      const mailtoLink = `mailto:radhikaborse1819@gmail.com?subject=Radiance by Radhika - ${formData.services} Inquiry&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Opening Email Client",
        description: "Your form data has been prepared. Please send the email to confirm your inquiry.",
      });

      // Reset form after a brief delay
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          services: "",
          date: "",
          message: "",
        });
        setErrors({
          name: "",
          phone: "",
          email: "",
          services: "",
          message: "",
        });
      }, 500);
    } catch (error) {
      console.error("Form submission error:", error);
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
      href: "https://www.youtube.com/@Radianceby.radhika",
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
            {t('contact.info.title')}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Book Your <span className="text-primary">Makeup Consultation</span>
          </h2>
          <p className="text-muted-foreground">
            Ready to look absolutely gorgeous? Fill out the form below or reach out directly.
            Radhika responds to all inquiries within 24 hours. Available for bridal, party, and editorial makeup in Burhanpur, Khandwa, and Madhya Pradesh.
          </p>
          <p className="text-muted-foreground mt-3">
            Review our <a href="#services" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); document.querySelector('#services')?.scrollIntoView({behavior:'smooth'});}}>makeup services</a>, view <a href="#pricing" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); document.querySelector('#pricing')?.scrollIntoView({behavior:'smooth'});}}>package pricing</a>, or check <a href="#testimonials" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); document.querySelector('#testimonials')?.scrollIntoView({behavior:'smooth'});}}>client testimonials</a> before booking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (e.target.value.trim()) setErrors({ ...errors, name: "" });
                    }}
                    required
                    className={`bg-background ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    placeholder="Phone Number (10 digits) *"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setFormData({ ...formData, phone: value });
                      if (value) setErrors({ ...errors, phone: "" });
                    }}
                    required
                    maxLength={10}
                    className={`bg-background ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <Input
                  placeholder="Email Address (with .com or .) *"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (e.target.value.trim()) setErrors({ ...errors, email: "" });
                  }}
                  required
                  className={`bg-background ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <Select
                  value={formData.services}
                  onValueChange={(value) => {
                    setFormData({ ...formData, services: value });
                    setErrors({ ...errors, services: "" });
                  }}
                >
                  <SelectTrigger className={`bg-background ${errors.services ? "border-red-500" : ""}`}>
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
                {errors.services && <p className="text-red-500 text-xs mt-1">{errors.services}</p>}
              </div>
              <Input
                placeholder="Event Date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                className="bg-background"
              />
              <div>
                <Textarea
                  placeholder="Tell me about your requirements... *"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (e.target.value.trim()) setErrors({ ...errors, message: "" });
                  }}
                  rows={4}
                  required
                  className={`bg-background resize-none ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <Button
                type="submit"
                className="w-full gap-2"
                disabled={isSubmitting || !canSubmit}
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
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+919009064426"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
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
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <div className="font-medium text-foreground">+91 9284182410</div>
                </div>
              </a>
              <a
                href="mailto:radhikaborse1819@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium text-foreground break-all">radhikaborse1819@gmail.com</div>
                </div>
              </a>
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Service Area</div>
                  <div className="font-medium text-foreground">
                    Home visits & venue services
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Maharashtra & nearby regions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground">
              Follow Me
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 bg-card rounded-full border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg ${social.color}`}
              >
                <social.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Studio Location Map */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground">
              Studio Location
            </h3>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.8!2d76.2236607217704!3d21.23863713456132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE0JzE5LjEiTiA3NsKwMTMnMjUuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
