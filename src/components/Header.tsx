import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar when scrolled more than 100px (to get past the hero section)
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t('nav.home') },
    { href: "#about", label: t('nav.about') },
    { href: "#services", label: t('nav.services') },
    { href: "#pricing", label: t('nav.pricing') },
    { href: "#gallery", label: t('nav.gallery') },
    { href: "#contact", label: t('nav.contact') },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border/50 translate-y-0 opacity-100"
          : "bg-transparent -translate-y-2 opacity-0 pointer-events-none"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2"
            aria-label="Radiance by Radhika - Makeup Artist in Burhanpur"
          >
            <img 
              src="/logo.png" 
              alt="Radiance by Radhika Logo" 
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              width="128"
              height="128"
            />
            {/* <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-primary leading-tight">
                Radiance
              </span>
              <span className="text-xs text-muted-foreground -mt-0.5">
                by Radhika
              </span>
            </div> */}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher and CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <a href="tel:+919009064426">
              <Button variant="default" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile: Language Switcher + Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background backdrop-blur-lg border-b border-border shadow-xl">
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 px-2 rounded hover:bg-secondary/50"
                >
                  {link.label}
                </a>
              ))}

              <div className="px-2 flex justify-center">
                <LanguageSwitcher />
              </div>

              <a href="tel:+919009064426" className="mt-2">
                <Button variant="default" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Book Now
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
