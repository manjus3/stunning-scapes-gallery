
export interface PhotoType {
  id: string;
  title: string;
  src: string;
  location: string;
  description: string;
  date: string;
  featured?: boolean;
}

export interface PrintOption {
  id: string;
  label: string;
  description: string;
  price: number;
  size: string;
}

export interface CartItemType {
  id: string;
  photoId: string;
  title: string;
  image: string;
  price: number;
  option: string;
  optionId: string;
  quantity: number;
}

export interface CategoryType {
  id: string;
  title: string;
  description: string;
  image: string;
}
