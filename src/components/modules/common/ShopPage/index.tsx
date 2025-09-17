"use client";
import Link from "next/link";
import { ProductsGrid } from "./ProductsGrid/ProductsGrid";
import { ShopSidebar } from "./ShopSidebar/ShopSidebar";
import FooterDark from "@/components/shared/Footer/FooterDark";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const filterableOptions = ["New arrival", "Best selling", "Featured"];

export default function ShopPage() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(
    filterableOptions[0]
  );
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumb and Results Header */}
      <motion.div
        className="bg-black container mx-auto px-4 md:px-8 py-8 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
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
          <motion.div
            className="flex flex-1 justify-end flex-col md:flex-row items-start md:items-center gap-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-gray-400">
              Showing 1-12 of 80 results
            </span>
            <div className="flex flex-wrap gap-2">
              {filterableOptions.map((option) => (
                <motion.button
                  key={option}
                  onClick={() => setSelectedFilter(option)}
                  className={cn(
                    "px-4 py-2 bg-gray-600 text-white rounded-full text-sm hover:bg-orange-500 transition-colors duration-300",
                    { "bg-orange-500": selectedFilter === option }
                  )}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:hidden mb-4">
            <Button
              type="primary"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
              className="bg-orange-500 border-orange-500 hover:bg-orange-600"
            >
              Filters
            </Button>
          </div>

          <motion.div
            className="hidden lg:block lg:w-1/4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ShopSidebar />
          </motion.div>

          <Drawer
            title="Filters"
            placement="left"
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
            className="lg:hidden"
            styles={{
              body: { backgroundColor: "#000", padding: 0 },
              header: {
                backgroundColor: "#000",
                borderBottom: "1px solid #333",
                color: "#fff",
              },
            }}
          >
            <div className="bg-black text-white">
              <ShopSidebar />
            </div>
          </Drawer>

          {/* Products Grid */}
          <motion.div
            className="lg:w-3/4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProductsGrid />
          </motion.div>
        </div>
      </div>
      <FooterDark />
    </div>
  );
}
