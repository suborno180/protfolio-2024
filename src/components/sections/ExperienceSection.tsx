"use client"
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <>
      <div className="relative flex flex-col items-center overflow-hidden py-20 md:py-40">
        <div className="container relative z-[1] m-auto px-6 md:px-12">
          <div className="m-auto text-center md:w-8/12 lg:w-6/12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              My <span className="text-primary">{`Experience's`}</span> 
            </h2>
          </div>
          <div className="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div
                className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="/airbnb.svg"
                  className="contrast-0 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo airbnb"
                />
              </motion.div>
              <motion.div
                className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="/microsoft.svg"
                  className="contrast-0 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo microsoft"
                />
              </motion.div>
              <motion.div
                className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="/ge.svg"
                  className="contrast-0 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo ge"
                />
              </motion.div>
              <motion.div
                className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="/bissell.svg"
                  className="contrast-0 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo bissell"
                />
              </motion.div>
              <motion.div
                className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="/bissell.svg"
                  className="contrast-0 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo bissell"
                />
              </motion.div>
              <motion.div
                className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="/automatic.svg"
                  className="contrast-0 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo automatic"
                />
              </motion.div>
              {/* Added Next.js image */}
              <motion.div
                className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="/nextjs.svg"
                  className="contrast-0 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo next.js"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default 
ExperienceSection;