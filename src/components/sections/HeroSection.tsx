/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="pt-32 md:py-12 xl:container m-auto px-6 md:px-12 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-20"
        ></div>
        <div className="relative lg:flex lg:items-center lg:gap-12">
          <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-bold text-4xl md:text-6xl lg:text-5xl xl:text-[6rem] text-white"
            >
              Hello, {`I'm`} <br />{" "}
              <span className="text-green-600 ">Suborno.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 text-gray-300"
            >
              {`I specialize in creating visually stunning and user-friendly websites and applications. Let's collaborate to bring your ideas to life!`}
            </motion.p>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Link href={"/about"} className="btn btn-warning mt-8">
                  About me
                </Link>
              </motion.div>
              {/* <motion.form
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                action=""
                className="w-full mt-12"
              >
                <div className="relative flex items-center px-2 p-1 rounded-full bg-gray-900 border-gray-700 border-primary/10 shadow-md md:p-2 lg:pr-3">
                  <input placeholder="Your email address" className="w-full p-4 rounded-full placeholder-white bg-transparent outline-none" autoComplete='email' type="email" />
                  <button type="button" title="Start collaborating" className="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-green-600  before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                    <span className="relative hidden w-max text-gray-900 font-semibold md:block">
                      Get Started
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="relative h-6 w-6 mx-auto text-gray-900 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </motion.form> */}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-12 flex gap-6 lg:gap-12 justify-start grayscale-0"
            >
              <Image
                src="/images/RCC.webp"
                className="h-8 sm:h-10 w-auto lg:h-12"
                title="Rajshahi City Corporation"
                width={32}
                height={40}
                alt="Rccesdi"
              />
              <Image
                src="/images/rajshahi-zela-prorisod.png"
                className="h-8 sm:h-10 w-auto lg:h-12"
                title="জেলা পরিষদ, রাজশাহী।"
                width={32}
                height={40}
                alt="zprajshahi"
              />
              {/* <Image src="/ge.svg" className="h-8 sm:h-10 w-auto lg:h-12" width={32} height={40} alt="GE Logo" />
              <Image src="/coty.svg" className="h-8 sm:h-10 w-auto lg:h-12" width={32} height={40} alt="Coty Logo" />
              <Image src="/microsoft.svg" className="h-8 sm:h-10 w-auto lg:h-12" width={32} height={40} alt="Microsoft Logo" /> */}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="overflow-hidden w-full lg:w-7/12 lg:-mr-16"
          >
            {/* <img src="/project.svg" alt="Illustration of projects" /> */}
            <img src="/my-photo.png" alt="Photo of suborno180" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
