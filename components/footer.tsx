"use client";
import React, { useState } from "react";
import { Image } from "@nextui-org/image";
import {
    IoLogoInstagram,
    IoLogoTiktok,
    IoLogoWhatsapp,
    IoLogoFacebook,
} from "react-icons/io5";
import { Author } from "@/config/Author-data-cursos";
import { Tooltip } from "@nextui-org/tooltip";

// import YouTube from "react-youtube";
// import React from 'react';

interface Props {
    autoplay: number;
}

const Footer: React.FC<Props> = ({ autoplay }) => {
    return (
        <div className="container px-5 md:py-2 m-auto flex justify-center items-center">
            {/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="#home">
                
                <Image  src="../logo-tarot.png" className=" rounded-full border-1 border-black mt-2" alt="1" width={50} />
                <span className="ml-3 text-xl dark:text-gray-400">Araceli Abella</span>
            </a> */}
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 my-4">
                © 2024 Desarrollador —
                <a
                    href="https://santiagobavaresco.ar"
                    className="text-blue-600 ml-1"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Portfolio Santiago Bavaresco"
                >
                    Bavaresco Santiago
                </a>
            </p>
            {/* <span className="inline-flex text-4xl gap-4 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

                        <Tooltip
                            showArrow={true}
                            placement="bottom"
                            content={Author.socialmedia.instagram.label}
                        >

                                <a
                                    href={Author.socialmedia.instagram.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="">
                                        <IoLogoInstagram className=" text-instagram-purple   hover:text-violet-600" />
                                    </div>
                                </a>

                        </Tooltip>
                        <Tooltip
                            showArrow={true}
                            placement="bottom"
                            content={Author.socialmedia.tiktok.label}
                        >

                                <a
                                    href={Author.socialmedia.tiktok.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="">
                                        <IoLogoTiktok className="text-black  hover:text-gray-600 dark:text-cyan-400 dark:hover:text-gray-400" />
                                    </div>
                                </a>

                        </Tooltip>
                        <Tooltip
                            showArrow={true}
                            placement="bottom"
                            content={Author.socialmedia.facebook.label}
                        >

                                <a
                                    href={Author.socialmedia.facebook.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="">
                                        <IoLogoFacebook className="text-blue-600 hover:text-blue-400" />
                                    </div>
                                </a>

                        </Tooltip>
                        <Tooltip
                            showArrow={true}
                            placement="bottom"
                            content={Author.socialmedia.whatsapp.label}
                        >

                                <a
                                    href={Author.socialmedia.whatsapp.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="">
                                        <IoLogoWhatsapp className="text-green-600 hover:text-green-400 " />
                                    </div>
                                </a>

                        </Tooltip>

            </span> */}
        </div>
    );
};
export default Footer;
