"use client";

import React from "react";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { ProductDetailsSection } from "./ProductDetailsSection/ProductDetailsSection";
import { ProductTabs } from "./ProductTabs/ProductTabs";
import { RelatedProducts } from "./RelatedProducts/RelatedProducts";
import Footer from "@/components/shared/Footer/Footer";
import { motion } from "framer-motion";

const ProductDetailsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 py-6"
      >
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProductDetailsSection />
        </motion.div>

        {/* Product Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12"
        >
          <ProductTabs />
        </motion.div>

        {/* Related Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12"
        >
          <RelatedProducts />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
