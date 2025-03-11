
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-serif font-bold mb-8 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            About the Artist
          </h1>
          
          <div className={`aspect-[16/9] rounded-xl overflow-hidden mb-8 transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <img
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80"
              alt="Landscape photographer at work"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className={`prose prose-lg dark:prose-invert max-w-none transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h2>Capturing Nature's Finest Moments</h2>
            <p>
              As a dedicated landscape photographer with over 15 years of experience, I've traveled to some of the most remote and beautiful locations on Earth in search of extraordinary light and compelling compositions.
            </p>
            <p>
              My passion for landscapes began in my early twenties during a backpacking trip through the American Southwest. Witnessing the golden light of sunset illuminate the sandstone formations of the desert sparked a lifelong pursuit to capture and share nature's most spectacular moments.
            </p>
            
            <h2>My Approach</h2>
            <p>
              I believe that the most compelling landscape photographs combine technical excellence with emotional impact. Each image in my portfolio represents countless hours of planning, exploration, and often waiting patiently for the perfect moment when light and landscape come together in harmony.
            </p>
            <p>
              While I use modern digital equipment, my photographic philosophy remains rooted in traditional principles: finding extraordinary light, creating balanced compositions, and conveying the emotional experience of being present in these magnificent landscapes.
            </p>
            
            <h2>Print Philosophy</h2>
            <p>
              Each photograph in my collection is offered as a museum-quality fine art print. I personally oversee the printing process to ensure exceptional color accuracy, contrast, and detail. Every print is produced using archival papers and inks that will maintain their beauty for generations.
            </p>
            <p>
              When you purchase a print, you're not just acquiring a photograph – you're bringing home a window to some of nature's most extraordinary moments, carefully crafted to inspire and uplift for years to come.
            </p>
            
            <h2>Environmental Commitment</h2>
            <p>
              I am deeply committed to conservation efforts and sustainable practices. A portion of all print sales is donated to environmental organizations working to protect the wild places that inspire my work. Additionally, all packaging materials are eco-friendly and recyclable.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
