"use client";

import companies from "@/assets/images/companies.png";
import MyButton from "@/components/ui/core/MyButton/MyButton";
import { useEffect, useRef } from "react";
import "@google/model-viewer";
import Link from "next/link";
import { motion } from "framer-motion";
import LiquidEther from "@/components/LiquidEther";

const NewBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <section className="relative bg-cover bg-black bg-no-repeat min-h-[calc(100vh-0px)] overflow-hidden flex flex-col justify-center items-center">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-orange-900/20"></div> */}

      {/* bg video */}
      {/* <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={"/heroVideoUpscaled.mp4"} type="video/mp4" />
      </video> */}

      <div className="absolute inset-0 w-full h-full">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[50vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
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
              <Link href={"/shop"}>
                <MyButton label="Start Shopping" isArrow />
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Product Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col lg:flex-row gap-6 lg:gap-24 justify-center md:justify-between items-center"
          >
            {/* @ts-expect-error model-viewer is a custom element */}
            <model-viewer
              src="/Phone.glb"
              alt="iPhone 17 Pro Max"
              auto-rotate
              camera-controls
              rotation-per-second="-30deg"
              // style={{ width: "500px", height: "600px" }}
              className="w-[300px] md:w-[500px] h-[400px] md:h-[600px]"
            />
            {/* @ts-expect-error model-viewer is a custom element */}
            <model-viewer
              src="/airpods_pro.glb"
              alt="AirPods Pro"
              auto-rotate
              camera-controls
              rotation-per-second="30deg"
              // style={{ width: "500px", height: "600px" }}
              className="hidden lg:block w-[300px] md:w-[500px] h-[400px] md:h-[600px]"
            />
          </motion.div>
        </div>

        {/* Brand Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="pt-12 border-t border-gray-700/50"
        >
          <img src={companies.src} alt="Brand Logos" />
        </motion.div>
      </div>
    </section>
  );
};

export default NewBanner;
