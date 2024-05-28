"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

const TextContent = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-4"
      >
        <div className="text-green-500">- My Skills</div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl"
          >
            Why Hire Me For Your Next Project?
          </motion.h1>
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {` The technological revolution is changing every aspect of our lives, and the fabric of society itself. It's also transforming the way we learn and what we prioritize. In this age, factual knowledge is less prized when everything you ever need to know can be accessed from your phone. There's no longer an imperative to be an expert at doing everything when specialized skills and collaboration can yield superior results.`}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-6 hover:underline flex items-center gap-4"
            >
              Live Demo <IoIosArrowRoundForward size={20} />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default TextContent;
