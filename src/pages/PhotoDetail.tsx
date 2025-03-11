
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddToCartButton";
import PrintOptions from "@/components/PrintOptions";
import { Button } from "@/components/ui/button";
import { getPhotoById, getPhotoCategory, printOptions } from "@/data/photos";
import { PrintOption, PhotoType } from "@/types";

const PhotoDetail = () => {
  const { categoryId, photoId } = useParams<{ categoryId: string; photoId: string }>();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<PrintOption>(printOptions[1]); // Default to medium
  const [isLoaded, setIsLoaded] = useState(false);

  const photo = photoId ? getPhotoById(photoId) : undefined;
  const category = photoId ? getPhotoCategory(photoId) : undefined;

  useEffect(() => {
    if (!photo || (categoryId && category !== categoryId)) {
      navigate("/404");
    }
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, [photo, category, categoryId, navigate]);

  if (!photo) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6 flex items-center"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Gallery
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className={`transition-all duration-500 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">{photo.title}</h1>
            <p className="text-lg text-muted-foreground mb-4">{photo.location}</p>
            
            <div className="border-t border-b py-4 my-6">
              <p className="text-muted-foreground mb-4">{photo.description}</p>
              <p className="text-sm text-muted-foreground">Captured: {photo.date}</p>
            </div>
            
            <PrintOptions 
              options={printOptions} 
              selectedOption={selectedOption}
              onSelect={setSelectedOption}
            />
            
            <AddToCartButton photo={photo} selectedOption={selectedOption} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PhotoDetail;
