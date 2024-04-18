"use client"
import React from 'react'
import TextContent from '../TextContent';
import { motion } from "framer-motion";
import Image from 'next/image';

const ProjectsSection = ({ isReflect }: { isReflect: boolean }) => {

    return (
        <div className='mb-20 p-8'>
            <div className="container overflow-hidden mx-auto">
                <div className="w-full h-full  min-h-[90vh] grid lg:grid-cols-2">
                    <div className={`w-full h-full  grid place-content-center lg:p-20 ${isReflect && 'lg:order-1'}`}>
                        <div className=''>
                            <TextContent />
                        </div>
                    </div>
                    <div className='w-full h-full grid place-content-center'>
                        <div className='w-[340px] h-[340px] md:w-[600px] md:h-[600px] lg:w-[500px] xl:w-[600px] lg:h-[500px] xl:h-[600px] bg-gray-800 relative rounded-3xl -rotate-6'>
                            <motion.div
                                initial={{ rotate: -6 }}
                                whileInView={{ rotate: 6 }}
                                transition={{ duration: 1 }} // Animation duration and repetition
                                className='w-full h-full bg-gray-500 rounded-3xl rotate-6 overflow-hidden'>
                                <Image
                                    src="/portfolio-1-img.jpg"
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
    )
}

export default ProjectsSection
