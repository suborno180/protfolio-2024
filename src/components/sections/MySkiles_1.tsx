"use client";
import React from "react";
import TextContent from "../TextContent";
import { motion } from "framer-motion";
import { BsTags } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";
import FetcherCard from "../FetcherCard";
import { LuBoxes } from "react-icons/lu";
import { GoStack } from "react-icons/go";

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

const MySkills_1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <div className="w-full md:min-h-[900px] md:h-auto grid xl:grid-cols-2 p-6">
          <div className="w-full min-h-[850px] md:max-h-[600px] md:h-auto grid md:grid-cols-2 gap-8">
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
            <div className="w-full h-full grid place-content-center">
              <TextContent
                title="Why Hire Me For Your Next Project?"
                description="The technological revolution is changing every aspect of our lives, and the fabric of society itself. It's also transforming the way we learn and what we prioritize. In this age, factual knowledge is less prized when everything you ever need to know can be accessed from your phone. There's no longer an imperative to be an expert at doing everything when specialized skills and collaboration can yield superior results."
              />
              <div className="my-10">
                <a
                  download="CV of Suborno the developer"
                  href="/docs/Black Gradient Creative Web Designer Resume of suborno.pdf"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="btn bg-gradient-to-tr from-yellow-400 to-yellow-600 text-black px-10 py-4"
                  >
                    Download CV
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MySkills_1;
