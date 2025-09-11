"use client";

import { useState } from "react";
import {
  Heart,
  Lock,
  RotateCcw,
  Info,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "New Release iPhone",
    price: 600,
    image: "/placeholder.svg?height=300&width=200",
    isNewArrival: false,
    isSpecial: false,
  },
  {
    id: 2,
    name: "New Release iPhone",
    price: 600,
    image: "/placeholder.svg?height=300&width=200",
    isNewArrival: true,
    isSpecial: true,
  },
  {
    id: 3,
    name: "New Release iPhone",
    price: 600,
    image: "/placeholder.svg?height=300&width=200",
    isNewArrival: false,
    isSpecial: false,
  },
  {
    id: 4,
    name: "New Release iPhone",
    price: 600,
    image: "/placeholder.svg?height=300&width=200",
    isNewArrival: true,
    isSpecial: true,
  },
  {
    id: 5,
    name: "New Release iPhone",
    price: 600,
    image: "/placeholder.svg?height=300&width=200",
    isNewArrival: false,
    isSpecial: false,
  },
  {
    id: 6,
    name: "New Release iPhone",
    price: 600,
    image: "/placeholder.svg?height=300&width=200",
    isNewArrival: true,
    isSpecial: true,
  },
];

export function ProductsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  return (
    <div className="space-y-6">
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            {product.isSpecial ? (
              // Special card design with multiple views and action buttons
              <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-black rounded-lg p-4 overflow-hidden">
                {product.isNewArrival && (
                  <span className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-xs z-10">
                    New arrival
                  </span>
                )}

                <div className="relative h-64 mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover rounded"
                  />

                  {/* Action buttons */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                      <Lock className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                      <RotateCcw className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                      <Info className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="text-white">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-xl font-bold mb-4">${product.price}</p>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all">
                    Buy Now
                  </button>
                </div>
              </div>
            ) : (
              // Regular card design
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                {product.isNewArrival && (
                  <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-xs mb-4">
                    New arrival
                  </span>
                )}

                <div className="relative h-64 mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  {product.name}
                </h3>
                <p className="text-xl font-bold mb-4 text-gray-900">
                  ${product.price}
                </p>
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all">
                  Buy Now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="w-10 h-10 flex items-center justify-center rounded border border-gray-600 text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 flex items-center justify-center rounded transition-colors ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "border border-gray-600 text-white hover:bg-gray-800"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="w-10 h-10 flex items-center justify-center rounded border border-gray-600 text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
