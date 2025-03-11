
import { PhotoType, PrintOption, CategoryType } from "@/types";

export const printOptions: PrintOption[] = [
  {
    id: "small",
    label: "Small Print (8x12\")",
    description: "Perfect for small spaces or as a gift",
    price: 49.99,
    size: "8x12\"",
  },
  {
    id: "medium",
    label: "Medium Print (12x18\")",
    description: "Our most popular size for home display",
    price: 89.99,
    size: "12x18\"",
  },
  {
    id: "large",
    label: "Large Print (20x30\")",
    description: "Make a statement with this large format print",
    price: 149.99,
    size: "20x30\"",
  },
  {
    id: "xlarge",
    label: "Extra Large Print (30x45\")",
    description: "For premium gallery-style display",
    price: 249.99,
    size: "30x45\"",
  },
];

export const categories: CategoryType[] = [
  {
    id: "mountains",
    title: "Mountain Landscapes",
    description: "Majestic mountain vistas captured in perfect light",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80",
  },
  {
    id: "seascapes",
    title: "Seascapes",
    description: "Dramatic coastal scenes and ocean views",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80",
  },
  {
    id: "rivers",
    title: "Rivers & Waterfalls",
    description: "Serene rivers and powerful waterfalls from around the world",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80",
  },
  {
    id: "intimate",
    title: "Intimate Nature",
    description: "Close-up views of nature's smaller wonders",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80",
  },
];

// Mountain photos
const mountainPhotos: PhotoType[] = [
  {
    id: "mountain-1",
    title: "Alpine Majesty",
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80",
    location: "Swiss Alps",
    description: "Morning light illuminates these iconic Alpine peaks, creating a dramatic scene with perfect golden light reflecting off fresh snow.",
    date: "October 2023",
    featured: true,
  },
  {
    id: "mountain-2",
    title: "Dawn's First Light",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    location: "Dolomites, Italy",
    description: "The first rays of dawn create a magical atmospheric display in this rugged mountain landscape.",
    date: "September 2023",
  },
  {
    id: "mountain-3",
    title: "Misty Peaks",
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
    location: "Rocky Mountains, USA",
    description: "Layers of mountains fade into the distance as morning mist creates a dreamlike atmosphere.",
    date: "July 2023",
  },
  {
    id: "mountain-4",
    title: "Mountain Light",
    src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80",
    location: "Patagonia, Argentina",
    description: "Epic light conditions illuminate these dramatic peaks after a storm cleared at sunset.",
    date: "March 2023",
  },
  {
    id: "mountain-5",
    title: "Winter's Embrace",
    src: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&q=80",
    location: "Canadian Rockies",
    description: "Fresh winter snow blankets this mountain scene creating a minimalist landscape of exceptional beauty.",
    date: "January 2024",
  },
  {
    id: "mountain-6",
    title: "Ancient Sentinels",
    src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&q=80",
    location: "New Zealand",
    description: "Rugged peaks stand as ancient sentinels against a dramatic sky filled with alpenglow.",
    date: "December 2023",
  },
];

// Seascape photos
const seascapePhotos: PhotoType[] = [
  {
    id: "sea-1",
    title: "Ocean's Fury",
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80",
    location: "Oregon Coast, USA",
    description: "Powerful waves crash against ancient sea stacks as storm light breaks through the clouds.",
    date: "November 2023",
    featured: true,
  },
  {
    id: "sea-2",
    title: "Coastal Tranquility",
    src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80",
    location: "Big Sur, California",
    description: "Long exposure captures the serene beauty of this rugged coastline at sunset.",
    date: "August 2023",
  },
  {
    id: "sea-3",
    title: "Golden Shore",
    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80",
    location: "Maldives",
    description: "Golden hour light transforms this tropical paradise into a dream-like scene.",
    date: "June 2023",
  },
  {
    id: "sea-4",
    title: "Azure Dreams",
    src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80",
    location: "Greek Islands",
    description: "The deep blue Mediterranean waters contrast with white limestone cliffs in this peaceful seascape.",
    date: "July 2023",
  },
];

// River photos
const riverPhotos: PhotoType[] = [
  {
    id: "river-1",
    title: "Cascade Symphony",
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80",
    location: "Olympic National Park, USA",
    description: "This magical waterfall scene captures the essence of the Pacific Northwest's lush rainforests.",
    date: "May 2023",
    featured: true,
  },
  {
    id: "river-2",
    title: "River of Gold",
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80",
    location: "Yellowstone, USA",
    description: "Evening light transforms this river valley into a golden spectacle of light and shadow.",
    date: "September 2023",
  },
  {
    id: "river-3",
    title: "Misty Flow",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
    location: "Iceland",
    description: "The soft morning mist creates a mystical atmosphere around this powerful waterfall.",
    date: "October 2023",
  },
  {
    id: "river-4",
    title: "Canyon Waters",
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
    location: "Grand Canyon, USA",
    description: "The mighty Colorado River winds its way through this iconic landscape at sunrise.",
    date: "April 2023",
  },
];

// Intimate nature photos
const intimatePhotos: PhotoType[] = [
  {
    id: "intimate-1",
    title: "Forest Light",
    src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80",
    location: "Redwood Forest, USA",
    description: "Sunbeams filter through the ancient redwood forest creating magical light rays in the mist.",
    date: "February 2023",
    featured: true,
  },
  {
    id: "intimate-2",
    title: "Autumn Details",
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80",
    location: "Vermont, USA",
    description: "Vibrant fall colors captured in intimate detail revealing nature's incredible palette.",
    date: "October 2023",
  },
  {
    id: "intimate-3",
    title: "Forest Awakening",
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80",
    location: "Smoky Mountains, USA",
    description: "Early morning light illuminates the forest floor in this atmospheric woodland scene.",
    date: "April 2023",
  },
  {
    id: "intimate-4",
    title: "Desert Patterns",
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80",
    location: "Death Valley, USA",
    description: "Abstract patterns in the sand dunes created by the interplay of light and shadow.",
    date: "March 2023",
  },
];

export const photos: Record<string, PhotoType[]> = {
  mountains: mountainPhotos,
  seascapes: seascapePhotos,
  rivers: riverPhotos,
  intimate: intimatePhotos,
};

export const getAllPhotos = (): PhotoType[] => {
  return [
    ...mountainPhotos,
    ...seascapePhotos,
    ...riverPhotos,
    ...intimatePhotos,
  ];
};

export const getFeaturedPhotos = (): PhotoType[] => {
  return getAllPhotos().filter(photo => photo.featured);
};

export const getPhotosByCategory = (categoryId: string): PhotoType[] => {
  return photos[categoryId] || [];
};

export const getPhotoById = (id: string): PhotoType | undefined => {
  return getAllPhotos().find(photo => photo.id === id);
};

export const getPhotoCategory = (photoId: string): string | undefined => {
  for (const [category, photoList] of Object.entries(photos)) {
    if (photoList.some(photo => photo.id === photoId)) {
      return category;
    }
  }
  return undefined;
};
