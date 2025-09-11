"use client";
import { Button, Card, Badge } from "antd";
import Image from "next/image";
import { products } from "../../HomePage/OurCollection/OurCollection";
import ProductCard from "@/components/shared/ProductCard/ProductCard";

export function RelatedProducts() {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <div className="text-sm text-gray-500">Best Selling</div>
        <h2 className="text-2xl font-semibold text-gray-900">
          You May Also Like
        </h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
