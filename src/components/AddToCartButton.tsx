
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { PhotoType, PrintOption } from "@/types";
import { useToast } from "@/components/ui/use-toast";

interface AddToCartButtonProps {
  photo: PhotoType;
  selectedOption: PrintOption;
}

const AddToCartButton = ({ photo, selectedOption }: AddToCartButtonProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    setIsAdding(true);
    
    // Simulate a delay to show the loading state
    setTimeout(() => {
      addToCart({
        id: `${photo.id}-${selectedOption.id}`,
        photoId: photo.id,
        title: photo.title,
        image: photo.src,
        price: selectedOption.price,
        option: selectedOption.label,
        optionId: selectedOption.id,
        quantity: 1
      });
      
      toast({
        title: "Added to cart",
        description: `${photo.title} - ${selectedOption.label} has been added to your cart.`,
      });
      
      setIsAdding(false);
    }, 500);
  };

  return (
    <Button 
      onClick={handleAddToCart} 
      className="w-full mt-6"
      disabled={isAdding}
    >
      {isAdding ? (
        <Check className="mr-2 h-4 w-4" />
      ) : (
        <ShoppingCart className="mr-2 h-4 w-4" />
      )}
      {isAdding ? "Added to Cart" : "Add to Cart"}
    </Button>
  );
};

export default AddToCartButton;
