"use client";

import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { products } from "../../HomePage/OurCollection/OurCollection";

export function ProductsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [objectQuery, setObjectQuery] = useState<
    { name: string; value: any }[]
  >([
    {
      name: "page",
      value: currentPage,
    },
    {
      name: "limit",
      value: pageSize,
    },
  ]);

  const handlePageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  useEffect(() => {
    setObjectQuery([
      {
        name: "page",
        value: currentPage,
      },
      {
        name: "limit",
        value: pageSize,
      },
    ]);
  }, [currentPage, pageSize]);

  return (
    <div className="space-y-6">
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products?.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center w-fit mx-auto gap-4 mt-8">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={20}
          onChange={handlePageChange}
          className="custom-pagination"
        />
      </div>
    </div>
  );
}
