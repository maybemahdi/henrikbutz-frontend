"use client";

import { useState } from "react";
import { Star } from "lucide-react";

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
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Essential Comfort T-Shirt",
    price: 50.0,
    rating: 4.7,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Essential Comfort T-Shirt",
    price: 50.0,
    rating: 4.7,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Essential Comfort T-Shirt",
    price: 50.0,
    rating: 4.7,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 5,
    name: "Essential Comfort T-Shirt",
    price: 50.0,
    rating: 4.7,
    image: "/placeholder.svg?height=60&width=60",
  },
];

const productTags = [
  "mobile",
  "laptop",
  "watch",
  "computer",
  "Sweater",
  "Tank top",
];

export function ShopSidebar() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [activeCategory, setActiveCategory] = useState("Smart Mobiles");

  return (
    <div className="space-y-6">
      {/* Category Section */}
      <div className="rounded-lg p-4">
        <h3 className="text-white font-semibold mb-4 border-l-2 bg-gray-500/30 border-orange-600 px-3 py-2 rounded">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeCategory === category.name
                  ? "text-blue-500"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter Section */}
      <div className="rounded-lg p-4">
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
              max="100"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number.parseInt(e.target.value)])
              }
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>
      </div>

      {/* Best Seller Section */}
      <div className="rounded-lg p-4">
        <h3 className="text-white font-semibold mb-4 border-l-2 bg-gray-500/30 border-orange-600 px-3 py-2 rounded">
          Best Seller
        </h3>
        <div className="space-y-3">
          {bestSellerProducts.map((product) => (
            <div
              key={product.id}
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
                <p className="text-blue-400 text-sm font-semibold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Tags Section */}
      <div className="rounded-lg p-4">
        <h3 className="text-white font-semibold mb-4 border-l-2 bg-gray-500/30 border-orange-600 px-3 py-2 rounded">
          Product tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {productTags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded hover:bg-gray-700 hover:text-white transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
