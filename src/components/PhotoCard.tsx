
import { Link } from "react-router-dom";
import { PhotoType } from "@/types";

interface PhotoCardProps {
  photo: PhotoType;
  category: string;
}

const PhotoCard = ({ photo, category }: PhotoCardProps) => {
  return (
    <Link to={`/portfolio/${category}/${photo.id}`} className="photo-item group rounded-lg overflow-hidden">
      <div className="relative h-full w-full">
        <img
          src={photo.src}
          alt={photo.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-lg font-medium">{photo.title}</h3>
          <p className="text-sm">{photo.location}</p>
        </div>
      </div>
    </Link>
  );
};

export default PhotoCard;
