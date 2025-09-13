"use client";

import { Button, InputNumber, Select } from "antd";
import {
  Bell,
  Facebook,
  GitCompare,
  Heart,
  Instagram,
  Linkedin,
  Paintbrush as Pinterest,
  Tornado as Threads,
  TicketIcon as TikTok,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AddonSlider } from "../AddonSlider/AddonSlider";
import MyButton from "@/components/ui/core/MyButton/MyButton";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "sonner";
import { addProduct } from "@/redux/features/cart/cartSlice";
import { Product } from "@/types/product";

const productImages = [
  "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
  "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
  "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
  "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
];

const colorOptions = [
  { name: "Silver", value: "silver", color: "bg-gray-300" },
  { name: "Black", value: "black", color: "bg-black" },
  { name: "Gold", value: "gold", color: "bg-yellow-600" },
];

export function ProductDetailsSection() {
  const [selectedColor, setSelectedColor] = useState("black");
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

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
    setIsAddingToCart(true);
    dispatch(
      addProduct({
        ...productData,
        orderQuantity: quantity,
      })
    );
    setIsAddingToCart(false);
    toast.success(`${quantity} item(s) added to cart!`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      {/* Product Images */}
      <div className="space-y-4">
        {/* Main Product Image */}
        <div className="aspect-square relative overflow-hidden rounded-lg bg-gradient-to-br from-orange-400 via-red-500 to-blue-600">
          <Image
            src={productImages[0] || "/placeholder.svg"}
            alt="HP 15-fc0239AU AMD Athlon Silver 7120U Laptop"
            fill
            className="object-cover"
          />
        </div>

        {/* Addon Categories Slider */}
        <AddonSlider />

        {/* Thumbnail Images */}
        <div className="grid grid-cols-3 gap-2">
          {productImages.slice(1).map((image, index) => (
            <div
              key={index}
              className="aspect-square relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Product thumbnail ${index + 1}`}
                fill
                className="object-cover cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Information */}
      <div className="space-y-6">
        {/* Price */}
        <div className="text-3xl font-bold text-gray-900">$600.00</div>

        {/* Product Title */}
        <h1 className="text-2xl font-semibold text-gray-900">
          HP 15-fc0239AU AMD Athlon Silver 7120U 15.6" FHD Laptop
        </h1>

        {/* Product Description */}
        <p className="text-gray-600 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>

        {/* Product Guide */}
        <div className="text-sm font-medium text-gray-900">Product Guide</div>

        {/* Color Selection */}
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-900">Color: Black</div>
          <div className="flex gap-2">
            {colorOptions.map((color) => (
              <button
                key={color.value}
                onClick={() => setSelectedColor(color.value)}
                className={`w-8 h-8 rounded-full border-2 ${color.color} ${
                  selectedColor === color.value
                    ? "border-gray-900"
                    : "border-gray-300"
                }`}
                aria-label={`Select ${color.name} color`}
              />
            ))}
          </div>
        </div>

        {/* Delivery Options */}
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-900">Delivery</div>
          <Select
            placeholder="Choose an option"
            className="w-full"
            size="large"
            options={[
              { value: "standard", label: "Standard Delivery (5-7 days)" },
              { value: "express", label: "Express Delivery (2-3 days)" },
              { value: "overnight", label: "Overnight Delivery" },
            ]}
          />
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex gap-4">
          <InputNumber
            min={1}
            value={quantity}
            onChange={(value) => setQuantity(value || 1)}
            size="large"
            className="w-24"
          />
          <MyButton
            onClick={handleAddToCart}
            isLoading={isAddingToCart}
            label="Add to Cart"
            fullWidth
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            icon={<Heart className="w-4 h-4" />}
            size="large"
            className="flex items-center gap-2"
          >
            Add to favourite
          </Button>
          <Button
            icon={<GitCompare className="w-4 h-4" />}
            size="large"
            className="flex items-center gap-2"
          >
            Compare
          </Button>
        </div>

        {/* Product Meta Information */}
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-medium">SKU:</span> N/A
          </div>
          <div>
            <span className="font-medium">Category:</span> SmartMobiles
          </div>
          <div>
            <span className="font-medium">Tags:</span> mobile, smartmobile
          </div>
        </div>

        {/* Social Share */}
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-900">Share:</div>
          <div className="flex gap-3">
            <Facebook className="w-5 h-5 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
            <Youtube className="w-5 h-5 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
            <Bell className="w-5 h-5 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
            <TikTok className="w-5 h-5 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
            <Threads className="w-5 h-5 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
            <Pinterest className="w-5 h-5 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
}
