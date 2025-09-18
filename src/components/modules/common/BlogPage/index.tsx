"use client";
import { Avatar, Card, Carousel, Pagination, Tag } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { categories } from "../HomePage/OurCollection/OurCollection";
import Image from "next/image";
import blogCover from "@/assets/images/blogCover.png";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import FooterDark from "@/components/shared/Footer/FooterDark";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy text of the printing",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "Smart mobiles",
    author: {
      name: "Alex T.",
      role: "Owner",
      avatar:
        "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPhone_16_Pro/16_zu_9_Teaser.JPEG",
    },
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPhone_16_Pro/16_zu_9_Teaser.JPEG",
    featured: true,
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply dummy text of the printing",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    category: "Smart mobiles",
    author: {
      name: "Alex T.",
      role: "Owner",
      avatar:
        "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPhone_16_Pro/16_zu_9_Teaser.JPEG",
    },
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPhone_16_Pro/16_zu_9_Teaser.JPEG",
    featured: false,
    createdAt: "2024-01-14",
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply dummy text of the printing",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    category: "Smart mobiles",
    author: {
      name: "Alex T.",
      role: "Owner",
      avatar:
        "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPhone_16_Pro/16_zu_9_Teaser.JPEG",
    },
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPhone_16_Pro/16_zu_9_Teaser.JPEG",
    featured: false,
    createdAt: "2024-01-13",
  },
  {
    id: 4,
    title: "Lorem Ipsum is simply dummy text of the printing",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    category: "Smart mobiles",
    author: {
      name: "Alex T.",
      role: "Owner",
      avatar:
        "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPhone_16_Pro/16_zu_9_Teaser.JPEG",
    },
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPhone_16_Pro/16_zu_9_Teaser.JPEG",
    featured: false,
    createdAt: "2024-01-12",
  },
];
const featuredPost = blogPosts.find((post) => post.featured);
export const regularPosts = blogPosts.filter((post) => !post.featured);

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("SmartMobiles");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [objectQuery, setObjectQuery] = useState<
    { name: string; value: any }[]
  >([
    { name: "page", value: currentPage },
    { name: "limit", value: pageSize },
  ]);

  const handlePageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  useEffect(() => {
    setObjectQuery([
      { name: "page", value: currentPage },
      { name: "limit", value: pageSize },
    ]);
  }, [currentPage, pageSize]);

  const carouselRef = useRef<any>(null);
  const nextSlide = () => carouselRef.current?.next();
  const prevSlide = () => carouselRef.current?.prev();

  // Variants for stagger animations
  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 py-6"
      >
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm container mx-auto py-8">
          <Link href={"/"} className="text-gray-400">
            Home
          </Link>
          <span className="text-gray-400">{">"}</span>
          <span className="text-white">Blog</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="my-12"
        >
          <Image
            src={blogCover.src}
            alt="Blog Cover"
            className="h-[200px] md:h-[387px] w-auto"
            width={1000}
            height={100}
          />
        </motion.div>

        {/* Categories Slider */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative my-12"
        >
          <div className="flex items-center">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-core-gradient shadow-md hover:shadow-lg transition-shadow mr-4"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="flex-1 overflow-hidden">
              <Carousel
                ref={carouselRef}
                dots={false}
                infinite={true}
                slidesToShow={5}
                slidesToScroll={1}
                responsive={[
                  { breakpoint: 1024, settings: { slidesToShow: 4 } },
                  { breakpoint: 768, settings: { slidesToShow: 3 } },
                  { breakpoint: 480, settings: { slidesToShow: 1 } },
                ]}
              >
                {categories.map((category) => (
                  <motion.div
                    key={category}
                    variants={fadeUpItem}
                    className="px-2"
                  >
                    {/* <button
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full px-4 py-3 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-orange-500 text-white shadow-lg"
                          : "bg-gray-800 text-white hover:bg-gray-700"
                      }`}
                    >
                      {category}
                    </button> */}
                    <>
                      <div
                        className={`rounded-lg p-[2px] gradient-border ${
                          selectedCategory === category ? "shadow-lg" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <button
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full px-4 py-3 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
                            selectedCategory === category
                              ? "bg-orange-500 text-white"
                              : "bg-[#191919] text-white hover:bg-gray-700"
                          }
                        `}
                        >
                          {category}
                        </button>
                      </div>

                      {/* Put this CSS into your global stylesheet (e.g. styles/globals.css) or inside a <style jsx global> */}
                      <style jsx global>{`
                        /* Animated gradient border wrapper */
                        .gradient-border {
                          /* your gradient (exact) */
                          background: linear-gradient(
                            90deg,
                            #032159 0%,
                            #1ea4ea 50%,
                            #66efff 100%
                          );
                          /* make the gradient move */
                          background-size: 200% 100%;
                          animation: moveGradient 3s linear infinite;
                        }

                        @keyframes moveGradient {
                          0% {
                            background-position: 0% 50%;
                          }
                          50% {
                            background-position: 100% 50%;
                          }
                          100% {
                            background-position: 0% 50%;
                          }
                        }

                        /* Optional: remove focus outline on wrapper but keep accessible focus on the button */
                        .gradient-border:focus {
                          outline: none;
                        }
                      `}</style>
                    </>
                  </motion.div>
                ))}
              </Carousel>
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-core-gradient shadow-md hover:shadow-lg transition-shadow ml-4"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </motion.div>

        <div className="pt-6 pb-12 max-w-7xl mx-auto">
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-8"
            >
              <Card
                className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-none shadow-2xl overflow-hidden"
                styles={{ body: { padding: 0 } }}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center bg-[#000]">
                    <Tag color="blue" className="w-fit mb-4 text-xs">
                      {featuredPost.category}
                    </Tag>
                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                      {featuredPost.title}
                    </h1>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar
                        size={48}
                        src={featuredPost.author.avatar}
                        icon={<UserOutlined />}
                        className="border-2 border-white/20"
                      />
                      <div>
                        <p className="text-white font-semibold text-lg">
                          {featuredPost.author.name}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {featuredPost.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.id}`}>
                  <Card
                    className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 cursor-pointer shadow-xl"
                    cover={
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                    }
                  >
                    <div className="p-2">
                      <Tag color="blue" className="mb-3 text-xs">
                        {post.category}
                      </Tag>
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3">
                        <Avatar
                          size={32}
                          src={post.author.avatar}
                          icon={<UserOutlined />}
                          className="border border-white/20"
                        />
                        <div>
                          <p className="text-white font-medium text-sm">
                            {post.author.name}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {post.author.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center justify-center w-fit mx-auto gap-4 mb-5"
        >
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={20}
            onChange={handlePageChange}
            className="custom-pagination"
          />
        </motion.div>
      </motion.div>
      <FooterDark />
    </div>
  );
};

export default BlogPage;
