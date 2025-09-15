"use client";

import MyButton from "@/components/ui/core/MyButton/MyButton";
import { addProduct } from "@/redux/features/cart/cartSlice";
import { toggleWishlist } from "@/redux/features/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Product } from "@/types/product";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  bg?: string;
  btnAction?: string;
}

export default function ProductCard({
  product,
  bg = "bg-white",
  btnAction = "Buy Now",
}: ProductCardProps) {
  //wishlist
  const wishlist = useAppSelector((state) => state.wishlist.items);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const dispatch = useAppDispatch();

  const productData: Product = {
    id: "hp-15-fc0239au",
    name: 'HP 15-fc0239AU AMD Athlon Silver 7120U 15.6" FHD Laptop',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    price: 600.0,
    images: [
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
    ],
    colors: [
      { name: "Silver", value: "silver", color: "bg-gray-300" },
      { name: "Black", value: "black", color: "bg-black" },
      { name: "Gold", value: "gold", color: "bg-yellow-600" },
    ],
    sku: "N/A",
    category: "SmartMobiles",
    tags: ["mobile", "smartmobile"],
    isNewArrival: true,
  };
  const handleAddToCart = async () => {
    dispatch(
      addProduct({
        ...productData,
        id: Date.now().toString(),
        orderQuantity: 1,
      })
    );
    toast.success(`1 item(s) added to cart!`);
  };

  return (
    <div
      className={`${bg} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      {/* Product Image */}
      <div className="relative group">
        <div className={`aspect-square overflow-hidden`}>
          <img
            src={product.images[0] || "/placeholder.svg"}
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
            onClick={() => dispatch(toggleWishlist(product))}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isInWishlist
                ? "bg-red-500 text-white"
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
          >
            <Heart
              className={`w-4 h-4 ${isInWishlist ? "fill-current" : ""}`}
            />
          </button>
          <Link href={`/shop/${product.id}`}>
            <button className="w-10 h-10 bg-gray-500 text-white hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors">
              <Eye className="w-4 h-4" />
            </button>
          </Link>
          <button
            onClick={handleAddToCart}
            className="w-10 h-10 bg-gray-500 text-white hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-3">
        <Link href={`/shop/${product.id}`}>
          <h3
            className={`text-lg font-semibold underline ${
              bg === "bg-white" ? "text-gray-900" : "text-white"
            }`}
          >
            {product.name}
          </h3>
        </Link>
        <p
          className={`"text-2xl font-bold ${
            bg === "bg-white" ? "text-gray-900" : "text-white"
          } mb-4"`}
        >
          ${product.price}
        </p>
        <MyButton
          onClick={btnAction === "Add to Cart" ? handleAddToCart : () => {}}
          label={btnAction}
          fullWidth
        />
      </div>
    </div>
  );
}
