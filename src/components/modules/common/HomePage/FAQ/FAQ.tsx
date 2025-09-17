"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How do I create a custom T-shirt design?",
    answer:
      "You can upload your artwork directly through our design tool or use one of our pre-made templates. Once you finalize your design, our team reviews it for print quality before moving it into production.",
  },
  {
    id: 2,
    question: "What is the average delivery time?",
    answer:
      "Standard orders are printed within 2–3 business days. U.S. shipping usually takes 3–5 days, while international delivery may take 7–14 days depending on location and customs clearance.",
  },
  {
    id: 3,
    question: "Can I order just one T-shirt?",
    answer:
      "Yes! We have no minimum order requirement. Whether you want a single tee or a bulk order for your team or event, we’ve got you covered.",
  },
  {
    id: 4,
    question: "What sizes are available?",
    answer:
      "We offer a full size range from XS to 5XL in most styles. You can also check our size guide for exact measurements before placing an order.",
  },
  {
    id: 5,
    question: "Do you accept returns or exchanges?",
    answer:
      "If your order arrives damaged or with a printing error, we’ll replace it at no cost. For sizing or style changes, exchanges are available within 14 days of delivery.",
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container py-12 mx-auto border-2 border-blue-300 rounded-lg">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Quick Help Before You Design
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="max-w-[80%] mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" as const },
                },
              }}
              className={`${index !== 0 ? "border-t border-gray-200" : ""}`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-900 pr-4">
                  {item.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openItem === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Animated Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openItem === item.id
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
