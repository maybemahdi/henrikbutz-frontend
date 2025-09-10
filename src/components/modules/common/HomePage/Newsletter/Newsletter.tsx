"use client";

import type React from "react";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="pb-16 px-4 bg-gray-50">
      <div className="max-w-7xl bg-gray-100 rounded-lg py-12 mx-auto border-2 border-blue-300">
        <div className="max-w-[80%] mx-auto p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Stay Inspired! Get Exclusive Designs & Deals
          </h2>

          <p className="text-gray-600 mb-2 text-sm md:text-base">
            Subscribe for 10% off your first order, fresh design templates, and
            early access to sales.
          </p>

          <p className="text-gray-600 mb-8 text-sm md:text-base">
            No spam—just tee-rific content!
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
