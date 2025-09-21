"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" as const },
    }),
  };

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-black to-gray-900 py-16 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div
            variants={columnVariants}
            custom={0}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <img
                src={logo.src}
                alt="Logo"
                className="h-auto md:h-[100px] w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              At TeeCraft Dev we believe every tee tells a story. Whether you're
              designing a custom masterpiece or shopping our curated
              collections, we're here to bring your creative vision to life.
            </p>
          </motion.div>

          {/* Information */}
          <motion.div variants={columnVariants} custom={1}>
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
          </motion.div>

          {/* Useful Links */}
          <motion.div variants={columnVariants} custom={2}>
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
          </motion.div>

          {/* Get In Touch & Newsletter */}
          <motion.div
            variants={columnVariants}
            custom={3}
            className="lg:col-span-1"
          >
            <div className="mb-8">
              <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">📱</span>
                  +88015555555
                </div>
                <div>support@example.com</div>
                <div>
                  47 W 13th St, New York,
                  <br /> NY 10011, USA
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe our newsletter
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address..."
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm text-gray-200 placeholder-gray-500"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-core-gradient text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Tech On 345. All rights reserved.
          </p>

          <div className="flex space-x-4">
            {[
              FaFacebookF,
              FaInstagram,
              FaLinkedinIn,
              FaYoutube,
              FaSnapchatGhost,
              FaTiktok,
              FaThreads,
              FaPinterestP,
              FaXTwitter,
            ].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
