"use client";

import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { Carousel } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import bannerMobile from "@/assets/images/bannerMobile.png";
import { Product } from "@/types/product";
import { motion } from "framer-motion";

export const categories = [
  "SmartMobiles",
  "iPad & TabZone",
  "Laptop & MacBook Hub",
  "WriteTech",
  "Tech Essentials",
  "Bass & Beats Lab",
];

export const products: Product[] = [
  {
    id: "hp-15-fc0239au",
    name: 'HP 15-fc0239AU AMD Athlon Silver 7120U 15.6" FHD Laptop',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 600.0,
    images: [bannerMobile.src],
    colors: [
      { name: "Silver", value: "silver", color: "bg-gray-300" },
      { name: "Black", value: "black", color: "bg-black" },
      { name: "Gold", value: "gold", color: "bg-yellow-600" },
    ],
    sku: "N/A",
    category: "SmartMobiles",
    tags: ["mobile", "smartmobile"],
    isNewArrival: true,
  },
  // other products ...
];

export default function OurCollection() {
  const [selectedCategory, setSelectedCategory] = useState("SmartMobiles");
  const carouselRef = useRef<any>(null);

  const nextSlide = () => {
    carouselRef.current?.next();
  };

  const prevSlide = () => {
    carouselRef.current?.prev();
  };

  // Variants for stagger animations
  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-16 px-4 bg-black/90">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Collection
          </div>
          <h2 className="text-4xl font-bold text-white mb-8">
            Explore Our Collection
          </h2>
        </motion.div>

        {/* Categories Slider */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mb-12"
        >
          <div className="flex items-center">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-core-gradient shadow-md hover:shadow-lg transition-shadow mr-4"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="flex-1 overflow-hidden">
              <Carousel
                ref={carouselRef}
                dots={false}
                infinite={true}
                slidesToShow={5}
                slidesToScroll={1}
                responsive={[
                  { breakpoint: 1024, settings: { slidesToShow: 4 } },
                  { breakpoint: 768, settings: { slidesToShow: 3 } },
                  { breakpoint: 480, settings: { slidesToShow: 1 } },
                ]}
              >
                {categories.map((category) => (
                  <motion.div
                    key={category}
                    variants={fadeUpItem}
                    className="px-2"
                  >
                    {/* <button
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full px-4 py-3 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-orange-500 text-white shadow-lg"
                          : "bg-gray-800 text-white hover:bg-gray-700"
                      }`}
                    >
                      {category}
                    </button> */}
                    <>
                      <div
                        className={`rounded-lg p-[2px] gradient-border ${
                          selectedCategory === category ? "shadow-lg" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <button
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full px-4 py-3 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
                            selectedCategory === category
                              ? "bg-orange-500 text-white"
                              : "bg-[#191919] text-white hover:bg-gray-700"
                          }
                        `}
                        >
                          {category}
                        </button>
                      </div>

                      {/* Put this CSS into your global stylesheet (e.g. styles/globals.css) or inside a <style jsx global> */}
                      <style jsx global>{`
                        /* Animated gradient border wrapper */
                        .gradient-border {
                          /* your gradient (exact) */
                          background: linear-gradient(
                            90deg,
                            #032159 0%,
                            #1ea4ea 50%,
                            #66efff 100%
                          );
                          /* make the gradient move */
                          background-size: 200% 100%;
                          animation: moveGradient 3s linear infinite;
                        }

                        @keyframes moveGradient {
                          0% {
                            background-position: 0% 50%;
                          }
                          50% {
                            background-position: 100% 50%;
                          }
                          100% {
                            background-position: 0% 50%;
                          }
                        }

                        /* Optional: remove focus outline on wrapper but keep accessible focus on the button */
                        .gradient-border:focus {
                          outline: none;
                        }
                      `}</style>
                    </>
                  </motion.div>
                ))}
              </Carousel>
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-core-gradient shadow-md hover:shadow-lg transition-shadow ml-4"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={fadeUpItem}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
