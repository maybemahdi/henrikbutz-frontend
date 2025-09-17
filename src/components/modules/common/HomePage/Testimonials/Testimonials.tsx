"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex T",
    title: "Verified Buyer",
    rating: 4,
    text: "Absolutely love my custom tool! The design tool was so easy to use, and the print quality is even better than I expected and matches well—will definitely order again!",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    name: "Alex T",
    title: "Verified Buyer",
    rating: 3,
    text: "Absolutely love my custom tool! The design tool was so easy to use, and the print quality is even better than I expected and matches well—will definitely order again!",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    name: "Alex T",
    title: "Verified Buyer",
    rating: 3,
    text: "Absolutely love my custom tool! The design tool was so easy to use, and the print quality is even better than I expected and matches well—will definitely order again!",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 4,
    name: "Sarah M",
    title: "Verified Buyer",
    rating: 5,
    text: "Outstanding service and product quality! The customization options are incredible and the final product exceeded my expectations. Highly recommended!",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 5,
    name: "Mike R",
    title: "Verified Buyer",
    rating: 4,
    text: "Great experience from start to finish. The design process was intuitive and the customer support was excellent. Will definitely be ordering again!",
    avatar: "/placeholder.svg?height=50&width=50",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const scaleVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      variants={scaleVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#0848AF] backdrop-blur-sm rounded-2xl p-6 h-full border border-[#0848AF]"
    >
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= testimonial.rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-white text-sm leading-relaxed mb-6">
        {testimonial.text}
      </p>

      {/* Customer Info */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
          <p className="text-white/70 text-xs">{testimonial.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials({ isPage = false }: { isPage?: boolean }) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          {!isPage ? (
            <>
              <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Testimonials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Customers Says
              </h2>
            </>
          ) : (
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Testimonials
            </h2>
          )}
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-white/50",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            effect="coverflow"
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <motion.button
            variants={scaleVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
          <motion.button
            variants={scaleVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Swiper Styles */}
      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: -50px !important;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
        }
      `}</style>
    </section>
  );
}
