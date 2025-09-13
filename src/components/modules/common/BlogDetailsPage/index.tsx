import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoBlogger } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaSnapchatGhost,
  FaTiktok,
  FaPinterestP,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import NewsletterDark from "../HomePage/Newsletter/NewsLetterDark";
import FooterDark from "@/components/shared/Footer/FooterDark";
import { RelatedBlogs } from "./RelatedBlogs/RelatedBlogs";

const BlogDetailsPage = ({ id }: { id: string }) => {
  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm container mx-auto py-8">
        <Link href={"/"} className="text-gray-400">
          Home
        </Link>
        <span className="text-gray-400">{">"}</span>
        <Link href={"/blog"} className="text-gray-400">
          Blog
        </Link>
        <span className="text-gray-400">{">"}</span>
        <span className="text-white">Blog Details</span>
      </div>

      {/* details section */}
      <section className="container mx-auto px-4 pb-10">
        {/* Date */}
        <p className="text-center text-sm text-gray-400 uppercase tracking-wider mb-3">
          Published on {new Date().toLocaleDateString()}
        </p>

        {/* Title */}
        <h1 className="text-center text-2xl md:text-3xl font-bold text-white mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h1>

        {/* Description */}
        <p className="text-center text-gray-400 mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          eveniet, officiis porro pariatur quisquam omnis ut officia odio minus
          aperiam?
        </p>

        {/* Blog Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={
              "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPhone_16_Pro/16_zu_9_Teaser.JPEG"
            }
            alt="Blog Image"
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </section>

      {/* Extra Description Section */}
      <div className="grid md:grid-cols-1 gap-8 items-center container mx-auto px-4 py-10">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-white mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit neque eveniet libero ullam?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            commodi, iure ducimus fugiat, laudantium reprehenderit voluptatibus
            fugit, natus nihil excepturi odio rem. Debitis alias accusamus nisi,
            doloribus perferendis ipsam at facere earum quos consectetur quasi?
            Delectus quis voluptatum repellendus rerum dolores, atque natus!
            Doloremque, laudantium nesciunt! Commodi deserunt praesentium
            voluptatibus saepe delectus mollitia excepturi quibusdam? Id,
            repellat amet! Dolore, at eum? Libero reiciendis enim sapiente qui
            tempora distinctio aliquid a, temporibus eveniet aspernatur, id
            quasi nesciunt eum deserunt? Eveniet necessitatibus ab dignissimos
            animi a expedita magni maxime, voluptatibus eligendi ea? Tenetur eum
            animi hic distinctio consectetur delectus, earum amet harum sed,
            natus facilis reiciendis magnam quos commodi possimus illum.
            Recusandae architecto, quis nihil adipisci commodi dignissimos
            ipsum! Similique, velit magnam explicabo culpa quos modi nostrum?
            Quidem natus nemo, ipsam ullam harum repellendus asperiores
            distinctio odio tempora dolorem, cumque non debitis adipisci
            accusantium porro reprehenderit quae recusandae soluta impedit.
            Eveniet debitis recusandae nobis minima? Eos nobis sequi ad
            similique alias omnis tenetur dolorum, quas maiores illo tempora
            odio autem ut possimus amet cumque aspernatur necessitatibus quaerat
            qui architecto suscipit excepturi illum libero. Laborum sed fuga
            tempora nesciunt quae exercitationem commodi, nobis similique quos
            modi! Saepe eius unde, quos asperiores beatae repellat.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={
              "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPhone_16_Pro/16_zu_9_Teaser.JPEG"
            }
            alt={"Blog Image"}
            width={800}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Author + Share Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start py-8">
        {/* Author Info */}
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <div className="flex flex-col items-start gap-3">
            <p className="text-white font-medium">About the author</p>
            <div className="flex items-center gap-3">
              <Image
                src={
                  "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPhone_16_Pro/16_zu_9_Teaser.JPEG"
                }
                alt={"authorName"}
                width={50}
                height={50}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-white font-medium">{"authorName"}</p>
                <p className="text-sm text-gray-400">{"authorRole"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-white font-medium">Share this article</p>
          <div className="flex gap-4 text-gray-300 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaLinkedinIn className="cursor-pointer hover:text-white" />
            <FaYoutube className="cursor-pointer hover:text-white" />
            <FaSnapchatGhost className="cursor-pointer hover:text-white" />
            <FaTiktok className="cursor-pointer hover:text-white" />
            <BiLogoBlogger className="cursor-pointer hover:text-white" />
            <FaThreads className="cursor-pointer hover:text-white" />
            <FaPinterestP className="cursor-pointer hover:text-white" />
            <BsTwitterX className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      <NewsletterDark />
      <RelatedBlogs />
      <FooterDark />
    </div>
  );
};

export default BlogDetailsPage;
