"use client";
import React from 'react';
import TextContent from '../TextContent';
import { motion } from 'framer-motion';
import { BsTags } from 'react-icons/bs';
import { FiPenTool } from 'react-icons/fi';
import FetcherCard from '../FetcherCard';
import { LuBoxes } from 'react-icons/lu';
import { GoStack } from 'react-icons/go';

const MySkills_1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <div className="w-full min-h-screen md:h-auto grid xl:grid-cols-2 p-6">
          <div className="w-full min-h-screen md:h-auto grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-start">
              <div className="flex flex-col gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <FetcherCard
                    title="Product Design"
                    description="The technological revolution is changing aspect"
                    icon={<LuBoxes size={50} />}
                    gradientFrom="emerald"
                    gradientTo="green"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <FetcherCard
                    title="UI Design"
                    description="The technological revolution is changing aspect"
                    icon={<GoStack size={50} />}
                    gradientFrom="emerald"
                    gradientTo="green"
                  />
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex flex-col gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  <FetcherCard
                    title="Logo Design"
                    description="The technological revolution is changing aspect"
                    icon={<FiPenTool size={50} />}
                    gradientFrom="emerald"
                    gradientTo="green"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  <FetcherCard
                    title="Icon Design"
                    description="The technological revolution is changing aspect"
                    icon={<BsTags size={50} />}
                    gradientFrom="emerald"
                    gradientTo="green"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-full py-14 md:py-0 bg-blue- md:p-36">
            <div
              className="w-full h-full grid place-content-center"
            >
              <TextContent />
              <div className="my-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn bg-gradient-to-tr from-yellow-400 to-yellow-600 text-black px-10 py-4"
                >
                  Download CV
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default MySkills_1;