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
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-white py-16 px-4 border-t border-gray-100">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src={logo.src}
                alt="Logo"
                className="h-auto md:h-[100px] w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              At TeeCraft Dev we believe every tee tells a story. Whether you're
              designing a custom masterpiece or shopping our curated
              collections, we're here to bring your creative vision to life.
            </p>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-500 text-sm transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-500 text-sm transition-colors"
                >
                  Our Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-500 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-500 text-sm transition-colors"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-500 text-sm transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-500 text-sm transition-colors"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-500 text-sm transition-colors"
                >
                  Browse Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-500 text-sm transition-colors"
                >
                  Your Cart
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-500 text-sm transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-600 hover:text-blue-500 text-sm transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch & Newsletter */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-500 mr-2">📱</span>
                  +88015555555
                </div>
                <div className="text-sm text-gray-600">support@example.com</div>
                <div className="text-sm text-gray-600">
                  47 W 13th St, New York,
                  <br />
                  NY 10011, USA
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe our newsletter
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
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
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 Tech On 345. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <FaFacebookF size={18} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-pink-600 transition-colors"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-700 transition-colors"
            >
              <FaLinkedinIn size={18} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-red-600 transition-colors"
            >
              <FaYoutube size={18} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaSnapchatGhost size={18} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <FaTiktok size={18} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-800 transition-colors"
            >
              <FaThreads size={18} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-red-600 transition-colors"
            >
              <FaPinterestP size={18} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <FaXTwitter size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
