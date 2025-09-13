"use client";

import type React from "react";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaSnapchatGhost,
  FaTiktok,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import logo from "@/assets/images/logo.png";

export default function FooterDark() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-black to-gray-900 py-16 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src={logo.src} alt="Logo" className="h-auto md:h-[100px] w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              At TeeCraft Dev we believe every tee tells a story. Whether you're
              designing a custom masterpiece or shopping our curated
              collections, we're here to bring your creative vision to life.
            </p>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-white mb-4">Information</h3>
            <ul className="space-y-3">
              {[
                "About us",
                "Our Blogs",
                "Privacy Policy",
                "Contact us",
                "FAQ",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Useful Links</h3>
            <ul className="space-y-3">
              {[
                "My Account",
                "Browse Shop",
                "Your Cart",
                "Support",
                "Testimonials",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch & Newsletter */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="text-green-400 mr-2">📱</span>
                  +88015555555
                </div>
                <div className="text-sm text-gray-400">support@example.com</div>
                <div className="text-sm text-gray-400">
                  47 W 13th St, New York,
                  <br />
                  NY 10011, USA
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe our newsletter
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address..."
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm text-gray-200 placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 text-sm font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Tech On 345. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {[
              { icon: <FaFacebookF size={18} />, color: "hover:text-blue-500" },
              { icon: <FaInstagram size={18} />, color: "hover:text-pink-500" },
              {
                icon: <FaLinkedinIn size={18} />,
                color: "hover:text-blue-400",
              },
              { icon: <FaYoutube size={18} />, color: "hover:text-red-500" },
              {
                icon: <FaSnapchatGhost size={18} />,
                color: "hover:text-yellow-400",
              },
              { icon: <FaTiktok size={18} />, color: "hover:text-white" },
              { icon: <FaThreads size={18} />, color: "hover:text-gray-400" },
              { icon: <FaPinterestP size={18} />, color: "hover:text-red-600" },
              { icon: <FaXTwitter size={18} />, color: "hover:text-sky-400" },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className={`text-gray-500 ${item.color} transition-colors`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
