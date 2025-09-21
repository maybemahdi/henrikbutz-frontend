"use client";

import MyGradientButton from "@/components/ui/core/MyButton/MyGradientButton";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const categories = [
  { name: "Smart Mobiles", active: true },
  { name: "iPad & TabZone", active: false },
  { name: "Laptop & MacBook", active: false },
  { name: "WristTech", active: false },
  { name: "Tech Essentials", active: false },
  { name: "Bass & Beats Lab", active: false },
  { name: "Smart Surveillance", active: false },
  { name: "Tool Tech", active: false },
  { name: "PetTech", active: false },
  { name: "Console Corner", active: false },
  { name: "VR World", active: false },
  { name: "Fitness & Wellness Tech", active: false },
  { name: "Smart Home", active: false },
  { name: "KidsZone", active: false },
];

const bestSellerProducts = [
  {
    id: 1,
    name: "Essential Comfort T-Shirt",
    price: 50.0,
    rating: 4.7,
    image: "https://i.ibb.co.com/V0zwxxvy/elegant-smartphone-composition.jpg",
  },
  {
    id: 2,
    name: "Wireless Bass Headphones",
    price: 120.0,
    rating: 4.9,
    image: "https://i.ibb.co.com/V0zwxxvy/elegant-smartphone-composition.jpg",
  },
  {
    id: 3,
    name: "4K Smart TV Stick",
    price: 80.0,
    rating: 4.5,
    image: "https://i.ibb.co.com/V0zwxxvy/elegant-smartphone-composition.jpg",
  },
  {
    id: 4,
    name: "Pro Gaming Mouse",
    price: 45.0,
    rating: 4.6,
    image: "https://i.ibb.co.com/V0zwxxvy/elegant-smartphone-composition.jpg",
  },
  {
    id: 5,
    name: "Fitness Smart Watch",
    price: 150.0,
    rating: 4.8,
    image: "https://i.ibb.co.com/V0zwxxvy/elegant-smartphone-composition.jpg",
  },
];

const productTags = [
  "mobile",
  "laptop",
  "watch",
  "computer",
  "sweater",
  "tank top",
  "gaming",
  "headphones",
];

export function ShopSidebar() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [activeCategory, setActiveCategory] = useState("Smart Mobiles");

  // Animation Variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const listVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={listVariant}
    >
      {/* Category Section */}
      <motion.div
        variants={sectionVariant}
        className="rounded-lg p-4 bg-transparent"
      >
        <h3 className="text-white font-semibold mb-4 border-l-2 bg-gray-500/30 border-orange-600 px-3 py-2 rounded">
          Category
        </h3>
        <motion.div className="space-y-2" variants={listVariant}>
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              variants={itemVariant}
              whileHover={{ scale: 1.03, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeCategory === category.name
                  ? "text-orange-500 bg-gray-800"
                  : "text-gray-300 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Price Filter Section */}
      <motion.div
        variants={sectionVariant}
        className="rounded-lg p-4 bg-transparent"
      >
        <h3 className="text-white font-semibold mb-4 border-l-2 bg-gray-500/30 border-orange-600 px-3 py-2 rounded">
          Filter by price
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-300">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="500"
              step="10"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number.parseInt(e.target.value)])
              }
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider accent-orange-500"
            />
          </div>
        </div>
      </motion.div>

      {/* Best Seller Section */}
      <motion.div
        variants={sectionVariant}
        className="rounded-lg p-4 bg-transparent"
      >
        <h3 className="text-white font-semibold mb-4 border-l-2 bg-gray-500/30 border-orange-600 px-3 py-2 rounded">
          Best Seller
        </h3>
        <motion.div className="space-y-3" variants={listVariant}>
          {bestSellerProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariant}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 transition-colors"
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-12 h-12 rounded object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-white text-sm font-medium truncate">
                  {product.name}
                </h4>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-400">
                    {product.rating}
                  </span>
                </div>
                <p className="text-orange-400 text-sm font-semibold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Product Tags Section */}
      <motion.div
        variants={sectionVariant}
        className="rounded-lg p-4 bg-transparent"
      >
        <h3 className="text-white font-semibold mb-4 border-l-2 bg-gray-500/30 border-orange-600 px-3 py-2 rounded">
          Product tags
        </h3>
        <motion.div
          className="flex flex-wrap gap-2"
          variants={listVariant}
          initial="hidden"
          animate="visible"
        >
          {productTags.map((tag) => (
            <MyGradientButton
              variant="secondary"
              label={tag?.charAt(0).toUpperCase() + tag?.slice(1)}
              onClick={() => toast.success("Button clicked!")}
              className="text-sm px-16 !py-4"
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
