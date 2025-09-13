export type Product = {
  id: string; // optional, if you fetch from DB
  name: string;
  description: string;
  price: number;
  images: string[];
  colors: {
    name: string;
    value: string;
    color: string;
  }[];
  sku?: string;
  category: string;
  tags: string[];
  isNewArrival: boolean;
};
