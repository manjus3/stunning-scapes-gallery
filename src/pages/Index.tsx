
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getFeaturedPhotos, categories } from "@/data/photos";
import { PhotoType } from "@/types";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const featuredPhotos = getFeaturedPhotos();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-image relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className={`relative text-center px-4 max-w-3xl mx-auto transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
            Stunning Landscape Photography
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Capturing the world's most beautiful places in extraordinary light
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="text-lg">
              <Link to="/portfolio/mountains">View Gallery</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Link to="/about">About the Artist</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Photos */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPhotos.map((photo: PhotoType) => (
              <div 
                key={photo.id} 
                className={`group relative overflow-hidden rounded-lg aspect-[4/3] transition-all duration-700 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${featuredPhotos.indexOf(photo) * 100}ms` }}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl text-white font-medium">{photo.title}</h3>
                  <p className="text-sm text-white/80">{photo.location}</p>
                  <Link 
                    to={`/portfolio/${photo.id.split('-')[0]}s/${photo.id}`} 
                    className="mt-3 inline-flex items-center text-sm text-white hover:underline"
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Explore Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/portfolio/${category.id}`}
                className={`relative h-80 rounded-lg overflow-hidden shadow-md transition-all duration-700 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl text-white font-medium">{category.title}</h3>
                  <p className="text-sm text-white/80 mt-1">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
