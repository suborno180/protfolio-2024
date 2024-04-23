"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Logo {
  src: string;
  alt: string;
}

interface ExperienceSectionProps {
  title: string;
  logos: Logo[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ title, logos }) => {
  return (
    <>
      <div className="relative flex flex-col items-center overflow-hidden py-20 md:py-40">
        <div className="container relative z-[1] m-auto px-6 md:px-12">
          <div className="m-auto text-center md:w-8/12 lg:w-6/12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              {title}
            </h2>
          </div>
          <div className="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
            <div className="flex flex-wrap justify-center gap-6">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;