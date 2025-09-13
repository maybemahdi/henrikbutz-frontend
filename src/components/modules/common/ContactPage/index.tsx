"use client";

import { Form, Input, Button, message, Breadcrumb } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import MyButton from "@/components/ui/core/MyButton/MyButton";

const { TextArea } = Input;

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form] = Form.useForm();

  const onFinish = async (values: ContactFormData) => {
    try {
      // Simulate form submission
      console.log("Form submitted:", values);
      message.success(
        "Message sent successfully! We will respond within 24 hours."
      );
      form.resetFields();
    } catch (error) {
      message.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb
          style={{ color: "white" }}
          className="mb-8 !text-white"
          separator=">"
          items={[
            { title: "Home", href: "/" },
            { title: "Contact", href: "#" },
          ]}
        />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions about custom designs, orders, or just want to chat?
            <br />
            Reach out—we'd love to hear from you!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-900/20 to-orange-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="space-y-6"
            >
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "Please enter your name" },
                  { min: 2, message: "Name must be at least 2 characters" },
                ]}
              >
                <Input
                  placeholder="Your Name"
                  className="bg-transparent border-gray-600 text-white placeholder-gray-400 h-12 rounded-lg"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#4B5563",
                    color: "white",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  placeholder="Your Email"
                  className="!bg-transparent !border-gray-600 text-white placeholder-gray-400 h-12 rounded-lg"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#4B5563",
                    color: "white",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="subject"
                rules={[
                  { required: true, message: "Please enter a subject" },
                  { min: 5, message: "Subject must be at least 5 characters" },
                ]}
              >
                <Input
                  placeholder="Subject"
                  className="bg-transparent border-gray-600 text-white placeholder-gray-400 h-12 rounded-lg"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#4B5563",
                    color: "white",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                  {
                    min: 10,
                    message: "Message must be at least 10 characters",
                  },
                ]}
              >
                <TextArea
                  placeholder="Your Message"
                  rows={6}
                  className="bg-transparent border-gray-600 text-white placeholder-gray-400 rounded-lg"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#4B5563",
                    color: "white",
                    resize: "none",
                  }}
                />
              </Form.Item>

              <Form.Item>
                <MyButton label="Send Message" fullWidth />
              </Form.Item>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 bg-gradient-to-br from-blue-900/20 to-orange-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
            {/* Email Card */}
            <div className="bg-gray-700/60 backdrop-blur-sm border border-orange-400 rounded-md p-5 flex items-start space-x-4">
              <MailOutlined className="text-white text-2xl" />
              <div>
                <h3 className="text-white font-semibold text-base">Email us</h3>
                <p className="text-gray-300 text-sm">
                  We will respond within 24 hours
                </p>
                <p className="text-gray-200 text-sm">hello@yahoo.com</p>
              </div>
            </div>

            {/* Call Card */}
            <div className="bg-gray-700/60 backdrop-blur-sm border border-orange-400 rounded-md p-5 flex items-start space-x-4">
              <PhoneOutlined className="text-white text-2xl" />
              <div>
                <h3 className="text-white font-semibold text-base">Call us</h3>
                <p className="text-gray-300 text-sm">
                  We will respond within 24 hours
                </p>
                <p className="text-gray-200 text-sm">(+88) 01716790266</p>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-gray-700/60 backdrop-blur-sm border border-orange-400 rounded-md p-5">
              <h3 className="text-white font-semibold text-base mb-3">
                Social Media
              </h3>
              <div className="flex flex-wrap gap-4 text-white text-xl">
                <FacebookOutlined />
                <InstagramOutlined />
                <LinkedinOutlined />
                <YoutubeOutlined />
                <span>👻</span>
                <span>🎵</span>
                <span>🧵</span>
                <span>📌</span>
                <TwitterOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
