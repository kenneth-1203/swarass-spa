"use client";

import Button from "@/components/button";
import { Send } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="Contact" className="px-8">
      <h1 className="mx-auto w-fit text-2xl sm:text-4xl font-semibold mb-8">
        Contact
        <span className="flex mx-auto h-1.5 w-1/2 bg-primary my-2" />
      </h1>
      <div className="text-md grid grid-cols-1 gap-4 sm:gap-0 sm:grid-cols-3 max-w-[50rem] mx-auto mt-8">
        <div className="flex flex-col text-center">
          <p className="font-bold uppercase mb-2">Call us</p>
          <a className="font-light" href="tel:+60162334339">
            Adeline - 016&nbsp;233&nbsp;4339
          </a>
          <a className="font-light" href="tel:+60123341117">
            Ian - 012&nbsp;334&nbsp;1117
          </a>
        </div>
        <div className="flex flex-col text-center">
          <p className="text-md font-bold uppercase">Email</p>
          <a className="font-light" href="mailto:adeline@swarass.asia">
            adeline@swarass.asia
          </a>
          <a className="font-light" href="mailto:ian@swarass.asia">
            ian@swarass.asia
          </a>
          <a className="font-light" href="mailto:info@swarass.asia">
            info@swarass.asia
          </a>
        </div>
        <div className="text-center">
          <p className="text-md font-bold uppercase">Address</p>
          <p className="font-light">
            No.7, Jalan Rajawali 1A Bandar Puchong Jaya 47100 Puchong Selangor
          </p>
        </div>
      </div>
      <div className="relative w-[300px] sm:w-[600px] h-[12rem] sm:h-[20rem] mx-auto">
        <Image
          src={"/images/map.png"}
          loading="eager"
          alt="Map image"
          className="object-contain"
          priority
          fill
        />
      </div>
      <form className="space-y-4 max-w-[50rem] mx-auto" onSubmit={handleSubmit}>
        <div className="flex items-center mx-auto">
          <div className="triangle-r w-3 h-4 bg-primary mr-3"></div>
          <label
            htmlFor="email"
            className="w-fit mr-3 text-md sm:text-lg font-semibold"
          >
            Email
          </label>
          <input
            className="shadow px-4 py-2 w-full outline-primary border-black/5 border"
            type="email"
            id="email"
          />
        </div>
        <div className="flex items-center mx-auto">
          <div className="triangle-r w-3 h-4 bg-primary mr-3"></div>
          <label
            htmlFor="email"
            className="w-fit mr-3 text-md sm:text-lg font-semibold"
          >
            Name
          </label>
          <input
            className="shadow px-4 py-2 w-full outline-primary border-black/5 border"
            type="email"
            id="email"
          />
        </div>
        <div className="flex items-center mx-auto">
          <div className="triangle-r w-3 h-4 bg-primary mr-3"></div>
          <label
            htmlFor="subject"
            className="w-fit mr-3 text-md sm:text-lg font-semibold"
          >
            Subject
          </label>
          <input
            className="shadow px-4 py-2 w-full outline-primary border-black/5 border"
            type="text"
            id="subject"
          />
        </div>
        <div className="flex items-center mx-auto">
          <div className="triangle-r w-3 h-4 bg-primary mr-3"></div>
          <textarea
            className="shadow px-4 py-2 w-full min-h-32 outline-primary border-black/5 border"
            placeholder="What would you like to say to us?"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3 text-primary">
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="w-6 h-6 hover:text-foreground transition-colors" />
            </a>
            <a
              href="http://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="w-6 h-6 hover:text-foreground transition-colors" />
            </a>
            <a
              href="http://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterestP className="w-6 h-6 hover:text-foreground transition-colors" />
            </a>
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6 hover:text-foreground transition-colors" />
            </a>
          </div>
          <Button variant="primary" className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Send us a message
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
