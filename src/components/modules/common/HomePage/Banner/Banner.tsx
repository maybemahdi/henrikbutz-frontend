"use client";

// import bannerMobile from "@/assets/images/bannerMobile.png";
import companies from "@/assets/images/companies.png";
import MyButton from "@/components/ui/core/MyButton/MyButton";
import { useEffect, useRef } from "react";
import "@google/model-viewer";

const Banner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // 0.7 = half speed, 1 = normal, 2 = double speed
    }
  }, []);
  return (
    <section
      // style={{ backgroundImage: `url(${heroBg.src})` }}
      className="relative bg-cover bg-no-repeat min-h-[calc(100vh-0px)] overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-orange-900/20"></div>

      {/* bg video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={"/heroVideoUpscaled.mp4"} type="video/mp4" />
      </video>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[50vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-semibold text-white !leading-tight">
                <span className="text-balance">Power Up Your Lifestyle</span>
                <br />
                <span className="text-balance">with Next-Gen Electronics</span>
              </h1>

              <p className="text-lg text-gray-300 max-w-lg text-pretty">
                Discover the latest gadgets, smart devices, and essential
                electronics—all in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <MyButton label="Start Shopping" />
              <MyButton label="Browse Category" variant="outline" />
            </div>
          </div>

          {/* Right Content - Product Images */}
          <div className="relative flex justify-center items-center">
            {/* @ts-expect-error model-viewer is a custom element */}
            <model-viewer
              src="/Phone.glb"
              alt="iPhone 17 Pro Max"
              auto-rotate
              camera-controls
              rotation-per-second="30deg"
              style={{ width: "500px", height: "600px" }}
            />
          </div>
        </div>

        {/* Brand Logos Section */}
        <div className="pt-12 border-t border-gray-700/50">
          <img src={companies.src} alt="Brand Logos" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
