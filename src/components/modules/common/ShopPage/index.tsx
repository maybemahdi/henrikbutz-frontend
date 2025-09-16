"use client";
import Link from "next/link";
import { ProductsGrid } from "./ProductsGrid/ProductsGrid";
import { ShopSidebar } from "./ShopSidebar/ShopSidebar";
import FooterDark from "@/components/shared/Footer/FooterDark";
import { useState } from "react";
import { cn } from "@/lib/utils";

const filterableOptions = ["New arrival", "Best selling", "Featured"];

export default function ShopPage() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(
    filterableOptions[0]
  );
  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumb and Results Header */}
      <div className="bg-black container mx-auto px-4 md:px-8 py-8 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm container mx-auto py-8 w-fit">
            <Link href={"/"} className="text-gray-400">
              Home
            </Link>
            <span className="text-gray-400">{">"}</span>
            <span className="text-white">Shop</span>
          </div>

          {/* Results and Filters */}
          <div className="flex flex-1 justify-end flex-col md:flex-row items-start md:items-center gap-4">
            <span className="text-sm text-gray-400">
              Showing 1-12 of 80 results
            </span>
            <div className="flex flex-wrap gap-2">
              {
                // Render filterable options
                filterableOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedFilter(option)}
                    className={cn(
                      "px-4 py-2 bg-gray-600 text-white rounded-full text-sm hover:bg-orange-500 transition-colors duration-300",
                      {
                        "bg-orange-500": selectedFilter === option,
                      }
                    )}
                  >
                    {option}
                  </button>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <ShopSidebar />
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <ProductsGrid />
          </div>
        </div>
      </div>
      <FooterDark />
    </div>
  );
}
