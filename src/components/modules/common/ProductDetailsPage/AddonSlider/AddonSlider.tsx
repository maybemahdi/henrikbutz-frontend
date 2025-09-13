"use client";
import { Carousel } from "antd";
import MyButton from "@/components/ui/core/MyButton/MyButton";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const addonCategories = [
  { id: "headphone", name: "Headphone", active: true },
  { id: "protector", name: "Protector", active: false },
  { id: "charger", name: "Charger", active: false },
  { id: "back-cover", name: "Back Cover", active: false },
  { id: "case", name: "Case", active: false },
  { id: "stand-1", name: "Stand", active: false },
];

export function AddonSlider() {
  const carouselRef = useRef<any>(null);

  const nextSlide = () => {
    carouselRef.current?.next();
  };

  const prevSlide = () => {
    carouselRef.current?.prev();
  };

  return (
    <div className="relative mb-12">
      <div className="flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-core-gradient shadow-md hover:shadow-lg transition-shadow mr-4"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Carousel */}
        <div className="flex-1 overflow-hidden">
          <Carousel
            ref={carouselRef}
            dots={false}
            infinite={false}
            draggable
            slidesToShow={4}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1024,
                settings: { slidesToShow: 4 },
              },
              {
                breakpoint: 768,
                settings: { slidesToShow: 3 },
              },
              {
                breakpoint: 480,
                settings: { slidesToShow: 2 },
              },
            ]}
          >
            {addonCategories.map((category) => (
              <div key={category.id} className="px-1">
                <MyButton
                  label={category.name}
                  variant={category.active ? "filled" : "outline"}
                  className={cn({
                    "!bg-sec-gradient !py-2 !px-3 text-sm !text-black":
                      category.active,
                    "!py-2 !px-3 text-sm !text-black": !category.active,
                  })}
                  fullWidth
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-core-gradient shadow-md hover:shadow-lg transition-shadow ml-4"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
