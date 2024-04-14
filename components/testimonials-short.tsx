import React, { useState } from "react";
// import YouTube from "react-youtube";
// import React from 'react';

// import { C1Testimonios, Courses } from "@/config/Courses-data";
import { Image } from "@nextui-org/image";

import { Testimonial } from "@/models/courses";

interface Props {
    index: number;
    testimonials: Array<Testimonial>;
}

const TestimonialsComponentShort : React.FC<Props> = ({ index, testimonials }) => {
    return (
        <div className="lg:flex gap-10 -mt-10">
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            {testimonials?.map((item, index) => (
                <div
                    key={item.id}
                    className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1"
                >
                    <section className="text-gray-600 body-font">
                        <div className="container ">
                            <div className=" text-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="inline-block w-8 h-8 text-gray-400 mb-8 dark:text-high-orange"
                                    viewBox="0 0 975.036 975.036"
                                >
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                <p className="leading-relaxed text-lg -mt-4 dark:text-gray-300">
                                    {item.largeTestimonial}
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-4 mb-2"></span>
                                <div className="relative mx-auto bg-gradient-to-l from-mid-orange to-low-orange  rounded-full md:rounded-full w-20 h-20 my-2 mb-8 overflow-hidden md:h-34 md:w-34">
                                    <Image
                                            src={item.imgUrl}
                                            className=" "
                                            alt="1"
                                            width={500}
                                        />
                                </div>
                                <h2 className="text-gray-900 font-medium -mt-4 title-font tracking-wider text-sm dark:text-high-orange">
                                    {item.name}
                                </h2>
                                <p className="text-gray-500 dark:text-gray-300">
                                    {item.rank}
                                </p>
                            </div>
                        </div>
                    </section>

                    
                </div>
            ))}
        </div>
    );
};
export default TestimonialsComponentShort;
