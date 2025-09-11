"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

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
  const [openItem, setOpenItem] = useState<number | null>(1); // First item open by default

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl py-12 mx-auto border-2 border-blue-300 rounded-lg">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Quick Help Before You Design
          </h2>
        </div>

        {/* FAQ Container */}
        <div className="max-w-[80%] mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          {faqData.map((item, index) => (
            <div
              key={item.id}
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

              {openItem === item.id && (
                <div className="px-6 pb-6">
                  <div className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
