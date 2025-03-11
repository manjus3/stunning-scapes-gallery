
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoCard from "@/components/PhotoCard";
import CategoryHeader from "@/components/CategoryHeader";
import { getPhotosByCategory, categories } from "@/data/photos";
import { PhotoType, CategoryType } from "@/types";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!categoryId) {
    return <div>Category not found</div>;
  }

  const photos: PhotoType[] = getPhotosByCategory(categoryId);
  const category: CategoryType | undefined = categories.find(c => c.id === categoryId);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <CategoryHeader 
        title={category.title} 
        description={category.description} 
        image={category.image} 
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="photo-grid">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${photos.indexOf(photo) * 100}ms` }}
            >
              <PhotoCard photo={photo} category={categoryId} />
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
