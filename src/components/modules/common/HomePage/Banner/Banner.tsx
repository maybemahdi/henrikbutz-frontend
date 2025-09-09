"use client";

import companies from "@/assets/images/companies.png";
import heroBg from "@/assets/images/heroBg.png";
import MyButton from "@/components/ui/core/MyButton/MyButton";
import bannerMobile from "@/assets/images/bannerMobile.png";

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${heroBg.src})` }}
      className="relative bg-cover bg-no-repeat min-h-[calc(100vh-0px)] overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-orange-900/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
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
            <div className="relative w-full max-w-lg">
              <img
                src={bannerMobile.src}
                alt="mobile phones"
                className="w-full"
              />

              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 blur-3xl -z-10 scale-150"></div>
            </div>
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
