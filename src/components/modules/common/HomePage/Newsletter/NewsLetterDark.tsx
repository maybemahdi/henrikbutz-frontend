"use client";

import { useState } from "react";

export default function NewsletterDark() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="pb-16 pt-8 px-4 bg-black">
      <div className="container mx-auto rounded-xl border border-[#bd5a1971] bg-gradient-to-br from-gray-900 via-gray-950 to-black shadow-xl p-8 md:p-12 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Stay Inspired! Get Exclusive Designs & Deals
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 mb-2 text-sm md:text-base">
          Subscribe for 10% off your first order, fresh design templates, and
          early access to sales.
        </p>

        <p className="text-gray-500 mb-8 text-sm md:text-base">
          No spam—just tee-rific content!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 px-6 rounded-md hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
