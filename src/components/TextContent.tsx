"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

export interface TextContentType {
  title: string;
  url?: string;
  description: string;
  isSkilled: boolean;
}

const TextContent = ({
  title,
  url,
  description,
  isSkilled,
}: TextContentType) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-4"
      >
        {isSkilled && <div className="text-green-500">- My Skills</div>}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl"
          >
            {title}
          </motion.h1>
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {(url?.length as any) > 1 && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-6 hover:underline flex items-center gap-4"
              >
                Live Demo <IoIosArrowRoundForward size={20} />
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default TextContent;
