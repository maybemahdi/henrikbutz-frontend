"use client";

import MyButton from "@/components/ui/core/MyButton/MyButton";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNewArrival?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      {/* Product Image */}
      <div className="relative group">
        <div className={`aspect-square overflow-hidden`}>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* New Arrival Badge */}
        {product.isNewArrival && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            New arrival
          </div>
        )}

        {/* Action Icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Heart
              className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`}
            />
          </button>
          <button className="w-10 h-10 bg-white text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 bg-white text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-gray-900 mb-4">
          ${product.price}
        </p>
        <MyButton label="Buy Now" fullWidth />
      </div>
    </div>
  );
}
