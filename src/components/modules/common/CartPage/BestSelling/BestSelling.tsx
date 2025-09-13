import React from "react";
import { products } from "../../HomePage/OurCollection/OurCollection";
import ProductCard from "@/components/shared/ProductCard/ProductCard";

const BestSelling = ({bg}:{bg:string}) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-16">
      <div className="col-span-3 space-y-3 mb-5">
        <div className="text-sm text-white bg-gray-500 rounded-md w-fit mx-auto px-2 py-1">
          Best selling
        </div>
        <h3 className="text-2xl text-black dark:text-white md:text-[34px] font-semibold text-center">
          You May Also Like
        </h3>
      </div>
      {products?.slice(0, 3).map((product) => (
        <ProductCard bg={bg} key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BestSelling;
