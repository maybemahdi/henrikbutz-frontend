import React from "react";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { ProductDetailsSection } from "./ProductDetailsSection/ProductDetailsSection";
import { ProductTabs } from "./ProductTabs/ProductTabs";
import { RelatedProducts } from "./RelatedProducts/RelatedProducts";
import Footer from "@/components/shared/Footer/Footer";

const ProductDetailsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          className="mb-6"
          separator=">"
          items={[
            {
              title: <Link href="/">Home</Link>,
            },
            {
              title: <Link href="/shop">Shop</Link>,
            },
            {
              title: "hp-laptop",
            },
          ]}
        />

        {/* Product Details Section */}
        <ProductDetailsSection />

        {/* Product Tabs Section */}
        <ProductTabs />

        {/* Related Products Section */}
        <RelatedProducts />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
