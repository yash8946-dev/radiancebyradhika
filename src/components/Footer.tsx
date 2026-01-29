import { Heart, Instagram, Youtube, Facebook, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", key: "home" },
    { href: "#about", key: "about" },
    { href: "#services", key: "services" },
    { href: "#pricing", key: "pricing" },
    { href: "#gallery", key: "gallery" },
    { href: "#contact", key: "contact" },
  ];

  const services = t('footer.servicesList', { returnObjects: true }) as string[];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-serif font-bold bg-gradient-to-r from-primary to-pink-300 bg-clip-text text-transparent">
                Radiance
              </h3>
              <p className="text-sm text-background/60 italic">by Radhika</p>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              {t('footer.brandDescription')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/radianceby.radhika/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-pink-500 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.youtube.com/@radhikamakeovers_2000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-red-500 transition-all duration-300 group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-blue-500 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-5 text-background uppercase tracking-wider">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-background/70 hover:text-primary hover:translate-x-1 transition-all text-sm inline-block"
                  >
                    {t(`footer.links.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-5 text-background uppercase tracking-wider">{t('footer.servicesHeading')}</h4>
            <ul className="space-y-2.5">
              {services.map((service, idx) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#services");
                    }}
                    className="text-background/70 hover:text-primary hover:translate-x-1 transition-all text-sm inline-flex items-start"
                  >
                    <span className="mr-2 text-primary">•</span>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#pricing");
                  }}
                  className="text-primary hover:underline text-sm font-medium inline-block mt-2"
                >
                  View All Pricing →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-5 text-background uppercase tracking-wider">{t('footer.contactHeading')}</h4>
            <div className="space-y-4">
              <a
                href="tel:+919009064426"
                className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{t('footer.phone')}</span>
              </a>
              <a
                href="mailto:radhikaborse1819@gmail.com"
                className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm break-all">{t('footer.email')}</span>
              </a>
              <div className="flex items-start gap-3 text-background/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{t('footer.location')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
            <p className="text-background/50 text-sm">
              © {currentYear} {t('footer.copyright')}
            </p>
            {/* <p className="text-background/50 text-sm flex items-center gap-1.5">
              Made with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> for beauty
            </p> */}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-background rounded-full shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Back to Top"
      >
        <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;
