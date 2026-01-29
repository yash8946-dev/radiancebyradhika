import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href: string;
  }>;
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
            Home
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={`${
                index === items.length - 1
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-primary"
              } transition-colors`}
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
