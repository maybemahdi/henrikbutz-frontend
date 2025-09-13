"use client";

import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { Carousel } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import bannerMobile from "@/assets/images/bannerMobile.png";
import { Product } from "@/types/product";

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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    price: 600.0,
    images: [
      bannerMobile.src,
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
    ],
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
  {
    id: "hp-15-fc0239aw",
    name: 'HP 15-fc0239AU AMD Athlon Silver 7120U 15.6" FHD Laptop',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    price: 600.0,
    images: [
      bannerMobile.src,
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
    ],
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
  {
    id: "hp-15-fc0239af",
    name: 'HP 15-fc0239AU AMD Athlon Silver 7120U 15.6" FHD Laptop',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    price: 600.0,
    images: [
      bannerMobile.src,
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
    ],
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
  {
    id: "hp-15-fc0239ay",
    name: 'HP 15-fc0239AU AMD Athlon Silver 7120U 15.6" FHD Laptop',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    price: 600.0,
    images: [
      bannerMobile.src,
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
      "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
    ],
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
];

export default function OurCollection() {
  const carouselRef = useRef<any>(null);

  const nextSlide = () => {
    carouselRef.current?.next();
  };

  const prevSlide = () => {
    carouselRef.current?.prev();
  };

  return (
    <section className="py-16 px-4 bg-black/90">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Collection
          </div>
          <h2 className="text-4xl font-bold text-white mb-8">
            Explore Our Collection
          </h2>
        </div>

        {/* Categories Slider */}
        <div className="relative mb-12">
          <div className="flex items-center">
            <button
              onClick={prevSlide}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-core-gradient shadow-md hover:shadow-lg transition-shadow mr-4"
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
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 4,
                    },
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 3,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                ]}
              >
                {categories.map((category, index) => (
                  <div key={category} className="px-2">
                    <button
                      className={`w-full px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        index === 0
                          ? "bg-orange-500 text-white shadow-lg"
                          : "bg-gray-800 text-white hover:bg-gray-700"
                      }`}
                    >
                      {category}
                    </button>
                  </div>
                ))}
              </Carousel>
            </div>

            <button
              onClick={nextSlide}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-core-gradient shadow-md hover:shadow-lg transition-shadow ml-4"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
