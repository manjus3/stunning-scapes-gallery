
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckoutForm from "@/components/CheckoutForm";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";

const CheckoutPage = () => {
  const { cart, getTotalPrice } = useCart();
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
    
    if (cart.length === 0) {
      navigate("/cart");
    }
  }, [cart.length, navigate]);

  const totalPrice = getTotalPrice();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6 flex items-center"
          onClick={() => navigate("/cart")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Cart
        </Button>
        
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Checkout</h1>
        
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-10 transition-all duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}>
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>
          
          <div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-medium mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.option}</p>
                      <div className="flex justify-between mt-1">
                        <p className="text-xs">{item.quantity} × ${item.price.toFixed(2)}</p>
                        <p className="text-sm">${(item.quantity * item.price).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="mb-4" />
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;
