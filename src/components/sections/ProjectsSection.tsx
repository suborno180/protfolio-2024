"use client";
import React from "react";
import TextContent from "../TextContent";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegCircle } from "react-icons/fa";

export interface ProjectsSectionType {
  title?: string;
  description?: string;
  url: string;
  image: string;
  isReflect: boolean;
  isSkilled?: boolean;
}

const ProjectsSection = ({
  isReflect,
  image,
  url,
  description,
  title,
  isSkilled
}: ProjectsSectionType) => {
  return (
    <>
      <section className="relative w-full">
        <div className="w-full z-10 absolute top-0 overflow-hidden">
          <div
            className={`w-full flex ${
              isReflect ? "justify-end" : "justify-start"
            }`}
          >
            <motion.span
              initial={{ x: isReflect ? 150 : -150 }} // Adjust the initial x position
              whileInView={{ x: isReflect ? 60 : -60 }} // Adjust the target x position
              transition={{ duration: 1 }}
            >
              <FaRegCircle className="text-[200px] font-bold text-success" />
            </motion.span>
          </div>
        </div>
        <div className="mb-20 p-8">
          <div className="container overflow-hidden mx-auto">
            <div className="w-full h-full  min-h-[900px] md:max-h-[900px] grid lg:grid-cols-2">
              <div
                className={`w-full h-full  grid place-content-center lg:p-20 ${
                  isReflect && "lg:order-1"
                }`}
              >
                <div className="z-20">
                  <TextContent isSkilled={isSkilled as boolean} title={title as string} url={url} description={description as string}  />
                </div>
              </div>
              <div className="w-full h-full grid place-content-center">
                <div className="w-[340px] h-[340px] md:w-[600px] md:h-[600px] lg:w-[500px] xl:w-[600px] lg:h-[500px] xl:h-[600px] bg-gray-800 relative rounded-3xl -rotate-6">
                  <motion.div
                    initial={{ rotate: -6 }}
                    whileInView={{ rotate: 6 }}
                    transition={{ duration: 1 }} // Animation duration and repetition
                    className="w-full h-full bg-gray-300 rounded-3xl rotate-6 overflow-hidden"
                  >
                    <Image
                      src={image ?? "/portfolio-1-img.jpg"}
                      alt="img"
                      layout="fill"
                      objectFit="cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
