"use client";

import { Tabs, Collapse } from "antd";
import type { TabsProps } from "antd";

const faqData = [
  {
    key: "1",
    label: "How do I create a custom T-shirt design?",
    children: (
      <p className="text-gray-600 leading-relaxed">
        After you place your order, our team takes 2-3 business days to
        carefully hand-print your design. Once shipped, U.S. orders typically
        arrive in 3-5 business days with free tracking, while international
        orders take 7-14 business days depending on location. You'll receive a
        shipping confirmation email with tracking details as soon as your order
        is on its way, plus a helpful care guide to keep your tee looking its
        best. Need your design sooner? Express shipping options are available at
        checkout for faster delivery!
      </p>
    ),
  },
  {
    key: "2",
    label: "How do I create a custom T-shirt design?",
    children: (
      <p className="text-gray-600 leading-relaxed">
        After you place your order, our team takes 2-3 business days to
        carefully hand-print your design. Once shipped, U.S. orders typically
        arrive in 3-5 business days with free tracking, while international
        orders take 7-14 business days depending on location.
      </p>
    ),
  },
  {
    key: "3",
    label: "How do I create a custom T-shirt design?",
    children: (
      <p className="text-gray-600 leading-relaxed">
        After you place your order, our team takes 2-3 business days to
        carefully hand-print your design. Once shipped, U.S. orders typically
        arrive in 3-5 business days with free tracking, while international
        orders take 7-14 business days depending on location.
      </p>
    ),
  },
  {
    key: "4",
    label: "How do I create a custom T-shirt design?",
    children: (
      <p className="text-gray-600 leading-relaxed">
        After you place your order, our team takes 2-3 business days to
        carefully hand-print your design. Once shipped, U.S. orders typically
        arrive in 3-5 business days with free tracking, while international
        orders take 7-14 business days depending on location.
      </p>
    ),
  },
  {
    key: "5",
    label: "How do I create a custom T-shirt design?",
    children: (
      <p className="text-gray-600 leading-relaxed">
        After you place your order, our team takes 2-3 business days to
        carefully hand-print your design. Once shipped, U.S. orders typically
        arrive in 3-5 business days with free tracking, while international
        orders take 7-14 business days depending on location.
      </p>
    ),
  },
];

export function ProductTabs() {
  const items: TabsProps["items"] = [
    {
      key: "description",
      label: "Description",
      children: (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            HP 15-fc0239AU AMD Athlon Silver 7120U 15.6" FHD Laptop
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              The HP 15-fc0239AU Laptop is a reliable and effective HP 15-inch
              laptop meant to meet your daily work and multimedia requirements.
              This HP AMD Athlon Laptop is powered by an AMD Athlon Silver 7120U
              processor, ensuring smooth and responsive performance for everyday
              tasks. With 8 GB of LPDDR5 RAM and a 256 GB PCIe NVMe M.2 SSD
              storage, this laptop provides efficient multitasking capabilities
              and rapid data access, making This HP Laptop a perfect choice for
              students, professionals, and home users.
            </p>
            <p>
              The 15.6-inch FHD display, with anti-glare and micro-edge design,
              provides crisp, colorful pictures for a comfortable viewing
              experience. Whether watching films, working at office, or browsing
              the web, this HP laptop's integrated AMD Radeon Graphics offer
              excellent viewing experience. The HP 15-fc0239AU Laptop is
              equipped with Realtek Wi-Fi 6 and Bluetooth 5.3 for seamless
              wireless communication, resulting in quick and reliable internet
              connections.
            </p>
            <p>
              It is also strategically constructed with sustainability in mind,
              using recycled plastics and boasting EPEAT Gold and ENERGY STAR
              certifications. The full-size keyboard with a numeric keypad
              boosts productivity, making this HP 15-inch Laptop a reliable and
              versatile alternative for all of your needs.
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "faq",
      label: "FAQ",
      children: (
        <Collapse
          items={faqData}
          className="w-full"
          ghost
          expandIconPosition="end"
        />
      ),
    },
  ];

  return (
    <div className="mb-12">
      <Tabs
        defaultActiveKey="description"
        items={items}
        className="antd-custom-tabs"
        size="large"
      />

      <style jsx global>{`
        .antd-custom-tabs .ant-tabs-tab {
          background: transparent !important;
          border: 1px solid #d1d5db !important;
          border-radius: 6px !important;
          margin-right: 3px !important;
          width: 200px !important;
          text-align: center !important;
          padding-left: 20px !important;
          margin-bottom: 8px !important;
          border-radius: 10px !important;
        }

        .antd-custom-tabs .ant-tabs-tab-active {
          background: #f97316 !important;
          color: white !important;
          border-color: #f97316 !important;
        }

        .antd-custom-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: white !important;
        }

        .antd-custom-tabs .ant-tabs-ink-bar {
          display: none !important;
        }

        .antd-custom-tabs .ant-collapse-item {
          border: 1px solid #fed7aa !important;
          border-radius: 8px !important;
          margin-bottom: 8px !important;
        }
      `}</style>
    </div>
  );
}
