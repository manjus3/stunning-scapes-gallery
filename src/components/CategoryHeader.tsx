
import { useEffect, useState } from "react";

interface CategoryHeaderProps {
  title: string;
  description: string;
  image: string;
}

const CategoryHeader = ({ title, description, image }: CategoryHeaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden mb-12"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className={`relative text-center p-6 max-w-3xl mx-auto transition-all duration-700 ease-out ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">{description}</p>
      </div>
    </div>
  );
};

export default CategoryHeader;
