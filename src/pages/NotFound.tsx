import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center max-w-xl px-6">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <p className="mb-6 text-sm text-muted-foreground">
          The page you’re looking for doesn’t exist. Try one of the links below to get back on track.
        </p>
        <div className="flex flex-col items-center gap-3 mb-6">
          <a href="/#home" className="text-primary underline hover:text-primary/90">Home</a>
          <a href="/#services" className="text-primary underline hover:text-primary/90">Makeup Services</a>
          <a href="/#pricing" className="text-primary underline hover:text-primary/90">Pricing Packages</a>
          <a href="/#gallery" className="text-primary underline hover:text-primary/90">Portfolio Gallery</a>
          <a href="/#contact" className="text-primary underline hover:text-primary/90">Contact & Booking</a>
        </div>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
