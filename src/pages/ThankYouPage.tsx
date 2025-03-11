
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

const ThankYouPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
    
    // If the user manually navigates to this page without checking out,
    // redirect them to the home page
    if (cart.length > 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className={`max-w-2xl mx-auto text-center py-12 transition-all duration-700 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Thank You for Your Purchase!</h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            Your order has been successfully placed. We've sent a confirmation email with all the details.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-medium mb-4">What Happens Next?</h2>
            <ul className="text-left space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>We'll carefully prepare and package your prints</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>You'll receive a shipping confirmation email with tracking information</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Your beautiful new prints will arrive safely at your door</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">Continue Shopping</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ThankYouPage;
