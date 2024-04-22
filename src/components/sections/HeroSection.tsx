"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
      <div className="pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
        <div aria-hidden="true" className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"></div>
        <div className="relative lg:flex lg:items-center lg:gap-12">
          <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white"
            >
              Build in your way but with our experts <span className="text-primary dark:text-primaryLight">Support.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 text-gray-600 dark:text-gray-300"
            >
              Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
            </motion.p>
            <div>
              <motion.form
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                action=""
                className="w-full mt-12"
              >
                <div className="relative flex items-center px-2 p-1 rounded-full bg-white dark:bg-gray-900 border dark:border-gray-700 border-primary/10 shadow-md md:p-2 lg:pr-3">
                  <div className="pl-6 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto fill-blue-900/60 dark:fill-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input placeholder="Your mail address" className="w-full p-4 rounded-full placeholder-gray-600 dark:placeholder-white bg-transparent outline-none" autoComplete='email' type="email" />
                  <div className="md:pr-1.5 lg:pr-0">
                    <button type="button" title="Start buying" className="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                      <span className="relative hidden w-max text-white dark:text-gray-900 font-semibold md:block">
                        Get Started
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="relative h-6 w-6 mx-auto text-white dark:text-gray-900 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.form>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-12 flex gap-6 lg:gap-12 justify-between grayscale dark:grayscale-0"
            >
              <Image src="/airbnb.svg" className="h-8 sm:h-10 w-auto lg:h-12" width={32} height={40} alt="" />
              <Image src="/ge.svg" className="h-8 sm:h-10 w-auto lg:h-12" width={32} height={40} alt="" />
              <Image src="/coty.svg" className="h-8 sm:h-10 w-auto lg:h-12" width={32} height={40} alt="" />
              <Image src="/microsoft.svg" className="h-8 sm:h-10 w-auto lg:h-12" width={32} height={40} alt="" />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="overflow-hidden w-full lg:w-7/12 lg:-mr-16"
          >
            <img src="/project.svg" alt="project illustration" height="" width="" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
