
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { cart } = useCart();
  const itemCount = cart.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== "/"
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-serif font-bold tracking-tighter"
          >
            StunningScapes
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/portfolio/mountains"
              className="text-sm font-medium hover:text-primary/80 transition-colors"
            >
              Mountains
            </Link>
            <Link
              to="/portfolio/seascapes"
              className="text-sm font-medium hover:text-primary/80 transition-colors"
            >
              Seascapes
            </Link>
            <Link
              to="/portfolio/rivers"
              className="text-sm font-medium hover:text-primary/80 transition-colors"
            >
              Rivers
            </Link>
            <Link
              to="/portfolio/intimate"
              className="text-sm font-medium hover:text-primary/80 transition-colors"
            >
              Intimate
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium hover:text-primary/80 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium hover:text-primary/80 transition-colors"
            >
              Contact
            </Link>
          </div>
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
