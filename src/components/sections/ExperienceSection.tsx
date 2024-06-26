/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

interface ExperienceSectionProps {
  title: string;
  logos: Logo[];
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  title,
  logos,
}) => {
  return (
    <>
      <div className="relative flex flex-col items-center overflow-hidden py-20 md:py-40">
        <div className="container relative z-[1] m-auto px-6 md:px-12">
          <div className="m-auto text-center md:w-8/12 lg:w-6/12">
            <motion.h2 className="text-2xl font-bold text-green-600  md:text-4xl">
              {title}
            </motion.h2>
          </div>
          <div className="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {logos.map((logo, index) => (
                <>
                  <motion.div key={index} variants={item}>
                    <motion.div
                      className="group rounded-xl border border-gray-600 bg-green-100 bg-opacity-5 py-2 px-4 hover:bg-opacity-100 cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <img
                        src={logo.src}
                        className="contrast-0 transition group-hover:contrast-100 max-h-9"
                        loading="lazy"
                        alt={logo.alt}
                        title={logo.alt}
                      />
                    </motion.div>
                  </motion.div>
                </>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
