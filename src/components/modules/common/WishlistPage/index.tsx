"use client";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { wishlistSelector } from "@/redux/features/wishlist/wishlistSlice";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import BestSelling from "../CartPage/BestSelling/BestSelling";
import FAQDark from "../HomePage/FAQ/FAQDark";
import FooterDark from "@/components/shared/Footer/FooterDark";

const WishlistPage = () => {
  const wishlistedProducts = useAppSelector(wishlistSelector);

  if (!wishlistedProducts?.length) {
    return (
      <div className="bg-black min-h-[calc(100vh-60px)] flex items-center justify-center">
        {/* Related products */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-10 md:my-16">
          <div className="col-span-3 mb-5">
            <h3 className="text-2xl md:text-[34px] text-white font-semibold text-center">
              Your Wishlist is Empty
            </h3>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-black min-h-screen pt-6">
      {/* Wishlist products */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-10 md:my-16">
        <div className="col-span-3 mb-5">
          <h3 className="text-2xl md:text-[34px] text-black dark:text-white font-semibold text-center">
            Your Wishlist
          </h3>
        </div>
        {wishlistedProducts?.slice(0, 3).map((product) => (
          <ProductCard
            bg="bg-black"
            btnAction="Add to Cart"
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* Best selling products */}
      <BestSelling bg={"bg-black"} isDark />

      {/* FAQ */}
      <FAQDark />

      {/* Footer */}
      <FooterDark />
    </div>
  );
};

export default WishlistPage;
