import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ProtectedImage } from "@/components/ProtectedImage";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import gallery5 from "@/assets/gallery-5.webp";
import heroImage from "@/assets/hero-image.webp";

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const images = [
    { src: gallery1, alt: "Professional bridal makeup look with traditional jewelry by Radiance by Radhika in Burhanpur", category: "Bridal", position: "center top" },
    { src: gallery2, alt: "Traditional saree makeup look with elegant styling by makeup artist Radhika in Burhanpur", category: "Traditional", position: "center top" },
    { src: gallery3, alt: "South Indian bridal makeup with classic gold jewelry and red saree in Burhanpur", category: "Bridal", position: "center top" },
    { src: gallery4, alt: "Wedding day bridal makeup and hair styling by professional makeup artist Radhika in Madhya Pradesh", category: "Wedding", position: "center top" },
    { src: gallery5, alt: "Glamorous party makeup look for special occasions by Radiance by Radhika in Burhanpur", category: "Party", position: "center top" },
    { src: heroImage, alt: "Evening glam editorial makeup photoshoot by professional makeup artist in Madhya Pradesh", category: "Editorial", position: "center 100%" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress based on container position
      const scrollStart = rect.top - windowHeight;
      const scrollEnd = rect.bottom;
      const scrollRange = scrollEnd - scrollStart;
      const scrolled = -scrollStart;
      const progress = Math.max(0, Math.min(1, scrolled / scrollRange));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") setSelectedImageIndex(null);
  };

  const cardWidth = 500;
  const cardGap = 30;
  const scrollStep = cardWidth + cardGap;
  const maxOffset = Math.max(0, scrollStep * (images.length - 1));
  const horizontalOffset = Math.min(scrollProgress * maxOffset, maxOffset);
  
  // Calculate which image is in focus based on scroll progress
  const focusIndex = scrollProgress * (images.length - 1);
  const activeFocusIndex = Math.round(focusIndex);

  return (
    <section id="gallery" className="bg-background">
      {/* Section Header */}
      <div className="container mx-auto px-4 pt-20 pb-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('gallery.subtitle')}
          </p>
          <p className="text-muted-foreground mt-3">
            Interested in these looks? <a href="#services" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); document.querySelector('#services')?.scrollIntoView({behavior:'smooth'});}}>Explore our services</a>, check <a href="#pricing" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); document.querySelector('#pricing')?.scrollIntoView({behavior:'smooth'});}}>pricing details</a>, or <a href="#contact" className="text-primary hover:underline font-medium" onClick={(e) => {e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});}}>book your session</a> today!
          </p>
        </div>
      </div>

      {/* Scroll-triggered Horizontal Gallery */}
      <div 
        ref={containerRef}
        className="relative"
        style={{ height: `${(images.length - 1) * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-background">
          <div className="w-full h-full flex items-center">
            <div className="relative w-full h-[600px] flex items-center">
              <div 
                className="flex gap-8"
                style={{ 
                  transform: `translateX(calc(min(0px, 50vw - 250px - ${horizontalOffset}px)))`,
                  willChange: 'transform'
                }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[500px] h-[550px] relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl transition-all duration-500"
                    onClick={() => setSelectedImageIndex(index)}
                    style={{
                      opacity: Math.abs(index - activeFocusIndex) > 1.5 ? 0.4 : Math.max(0.5, 1 - Math.abs(index - activeFocusIndex) * 0.25),
                      transform: `scale(${index === activeFocusIndex ? 1.1 : Math.max(0.85, 1 - Math.abs(index - activeFocusIndex) * 0.08)})`,
                      filter: Math.abs(index - activeFocusIndex) > 1.5 ? 'blur(2px)' : 'blur(0px)',
                    }}
                  >
                    <ProtectedImage
                      src={image.src}
                      alt={image.alt}
                      watermarkText="© Radiance by Radhika | +91 9009064426"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: image.position }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-full inline-block font-medium shadow-lg">
                        {image.category}
                      </span>
                      <p className="text-white font-semibold mt-3 text-base drop-shadow-lg">
                        {image.alt}
                      </p>
                    </div>
                    {/* Click indicator */}
                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                      Click to view
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Link */}
      <div className="container mx-auto px-4 pb-20">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Follow for more makeup inspiration
          </p>
          <a
            href="https://www.instagram.com/radianceby.radhika/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            @radianceby.radhika
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Fullscreen Lightbox with Navigation */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4 focus:outline-none"
          onClick={() => setSelectedImageIndex(null)}
          onKeyDown={handleKeyPress}
          tabIndex={0}
          role="dialog"
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-background hover:text-primary transition-colors z-10"
            onClick={() => setSelectedImageIndex(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Left Navigation */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-background hover:text-primary transition-colors z-10 p-2 hover:bg-foreground/20 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image Container with Smooth Transition */}
          <div className="relative w-full max-w-4xl h-[80vh] flex items-center justify-center overflow-hidden rounded-lg">
            <ProtectedImage
              key={selectedImageIndex}
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              watermarkText="© Radiance by Radhika | +91 9009064426"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right Navigation */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-background hover:text-primary transition-colors z-10 p-2 hover:bg-foreground/20 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-background/80 text-sm font-medium">
            {selectedImageIndex + 1} / {images.length}
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-4 text-background/80 text-sm">
            <span className="bg-primary/80 text-background px-3 py-1 rounded-full inline-block mb-2">
              {images[selectedImageIndex].category}
            </span>
            <p className="text-background/90">{images[selectedImageIndex].alt}</p>
          </div>

          {/* Keyboard Instructions */}
          <div className="absolute top-4 left-4 text-background/60 text-xs">
            Use arrow keys to navigate • ESC to close
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
