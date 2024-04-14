import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import {
    IoLogoInstagram,
    IoLogoTiktok,
    IoLogoWhatsapp,
    IoLogoFacebook,
} from "react-icons/io5";
import { FaArrowTurnDown, FaArrowRightToBracket } from "react-icons/fa6";
import { Tooltip } from "@nextui-org/tooltip";
import { Image } from "@nextui-org/image";

// import Image from 'next/image'
import YouTubePlayer from "@/components/youtubepayer";

import { Author } from "@/config/Author-data";
import { Courses } from "@/config/Courses-data";

import TestimonialsComponentShort from "@/components/testimonials-short";
import SimpleSlider from "@/components/imageSlider";
import ModalPdf from "@/components/modal";
import { Button } from "@nextui-org/button";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-100 px-0 dark:bg-gray-800 md:px-20 lg:px-40 overflow-visible">
            {/* ------------------------------ PROLOGO ------------------------------ */}
            <section className="" id="prologo">
                <div className="text-center px-1 mb-4">
                    <h2 className="text-4xl py-2 text-orange-400 font-medium md:text-8xl">
                        {Author.fullname}
                    </h2>
                    <h3 className="text-3xl py-2 md:mt-4 md:text-4xl dark:text-white">
                        {Author.title1.lable}
                    </h3>
                    <p className="text-xl py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
                        {Author.title1.description1}
                        <br />
                        {Author.title1.description2}
                    </p>
                    <hr />
                    <p className="text-xl py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
                        {Author.title1.description3}
                        <br />
                        {Author.title1.description4}
                    </p>
                    <Tooltip
                        showArrow={true}
                        placement="bottom"
                        content={Author.socialmedia.whatsappGroup.label}
                    >
                        <a
                            href={Author.socialmedia.whatsappGroup.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button color="danger">
                                <h1 className="px-2 text-base md:text-xl font-bold">
                                    {Author.inscribiteGratis}
                                </h1>
                            </Button>
                        </a>
                    </Tooltip>
                </div>

                {/* ------------------------------ LINKS ------------------------------ */}
                {/* IoLogoInstagram, IoLogoTiktok, IoLogoWhatsapp, IoLogoFacebook */}
            </section>

            <section className="mt-24 max-h-[500px]">
                <SimpleSlider />
            </section>

            <section className="mx-auto md:w-2/3 ">
                <div className=" text-center shadow-lg  p-5 rounded-xl my-10 dark:bg-gray-700 items-center md:flex flex-wrap">
                    <div className="flex items-center md:w-full flex-col ">
                        {/* <Image
                            src="../img/consulting.png"
                            className="md:w-100 w-full m-auto"
                            // width={100}
                            // height={100}
                            alt="1"
                        /> */}
                       <h3 className="text-2xl font-bold my-4 pb-2 dark:text-white">
                                {" "}
                                Bienvenidos al círculo de Tarot Terapéutico
                            </h3>
                    
                        <div className="md:w-1/2 flex flex-col items-center">
                            <h3 className="text-4xl font-bold my-4 pb-2 text-yellow-500">
                                {" "}
                                VAS APRENDER
                            </h3>
                        </div>

                        <div className="w-full md:w-3/4 flex flex-col items-center">
                            <div className="my-2 text-xl">
                                <p className="py-2 dark:text-gray-300">
                                    Todo sobre Tarot Raider
                                </p>
                                <p className="py-2 dark:text-gray-300">
                                    Interpretación de cada Arcano
                                </p>
                                <p className="py-2 dark:text-gray-300">
                                    Distintas Lecturas de Tarot
                                </p>
                                <p className="py-2 dark:text-gray-300">
                                    Aprendrás diversas herramientas que te
                                    permitirán incrementar el conocimiento de
                                    vos mismo y gestionar tus emociones para
                                    transformar tus problemas en soluciones.
                                </p>
                                <hr />
                            </div>
                            <div className="my-2">
                                <Tooltip
                                    showArrow={true}
                                    placement="bottom"
                                    content={
                                        Author.socialmedia.whatsappGroup.label
                                    }
                                >
                                    <a
                                        href={
                                            Author.socialmedia.whatsappGroup.url
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button color="danger">
                                            <h1 className="px-0 text-base md:text-xl font-bold">
                                                {Author.inscribiteGratis}
                                            </h1>
                                        </Button>
                                    </a>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------------------ SOBRE MI ------------------------------ */}
            {/* ------------------------------ Avatar y descripcon ------------------------------ */}
            <section className="lg:pt-10" id="sobremi">
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 pt-24 pb-6 mx-auto">
                        <div className="flex flex-wrap -m-12">
                            <div className="px-12 sm:-border-b-6 md:w-1/2 md:pt-10 flex flex-col items-start">
                                <div className="relative mx-auto bg-gradient-to-l from-mid-orange to-low-orange  rounded-full md:rounded-full w-72 h-72 my-10  overflow-hidden md:h-96 md:w-96">
                                    <Image
                                        src="../img/araceli-foto-nobg.png"
                                        className=" "
                                        alt="1"
                                        width={500}
                                    />
                                </div>
                            </div>
                            <div className="p-12 sm:px-12 sm:pb-12 sm:mt-10  md:w-1/2 flex flex-col items-start">
                                <span className="inline-block py-1 px-2 rounded bg-yellow-50 text-yellow-500 text-xs font-medium tracking-widest dark:bg-high-orange dark:text-gray-900">
                                    SOBRE MI
                                </span>
                                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 dark:text-high-orange">
                                    {Author.titleAbout}
                                </h2>
                                <p className="indent-6 leading-relaxed mb-8 dark:text-gray-300">
                                    {Author.about2}
                                </p>
                                {/* <span className="inline-block py-1 px-2 rounded bg-yellow-50 text-yellow-500 text-xs font-medium tracking-widest dark:bg-high-orange dark:text-gray-900">
                                    MI PASADO
                                </span>
                                <p className="indent-6 leading-relaxed mb-8 dark:text-gray-300">
                                    {Author.text1}
                                </p> */}
                            </div>
                            <div className="mx-10 -my-12 pl-2 mb-12                            ">
                                {/* <p className="indent-6 leading-relaxed mb-8 dark:text-gray-300">
                                    {Author.text2}
                                </p> */}
                                <a className="inline-flex items-center">
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900 dark:text-high-orange">
                                            {Author.fullname}
                                        </span>
                                        <span className="text-gray-400 text-xs tracking-widest mt-0.5 dark:text-gray-300">
                                            {Author.rank}
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ------------------------------ Video y presentacion ------------------------------ */}
            </section>

            {/* +++++++++++++++++++++++++++++++++  CARDS  +++++++++++++++++++++++++++++++++ */}
            <section id="cursos" className="mt-10">
                {/* <span className="ml-6 mb-0 md:inline-block md:mb-4 py-1 px-2  rounded bg-yellow-50 text-yellow-500 text-xs font-medium tracking-widest dark:bg-high-orange dark:text-gray-900">
                    CURSOS
                </span> */}
                {Courses.map((item) => (
                    <section
                        className="lg:pt-2 w-fit mt-8"
                        key={item.id}
                        id={item.id}
                    >
                        <div className="lg:flex gap-10  ">
                            <div className="flex flex-wrap -mx-10 md:-m-12 ">
                                {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                                <div className=" px-4 py-10 md:p-12  md:w-1/2 flex flex-col items-center text-center shadow-lg  rounded-xl my-5 dark:bg-gray-700 flex-1">
                                    <span className="inline-block mb-8 py-1 px-2 rounded bg-yellow-50 text-yellow-500 text-3xl font-medium tracking-widest dark:bg-high-orange dark:text-gray-900">
                                        TESTIMONIOS
                                    </span>
                                    <TestimonialsComponentShort
                                        index={0}
                                        testimonials={item.testimonials}
                                    />
                                    <div className="my-2">
                                        <Tooltip
                                            showArrow={true}
                                            placement="bottom"
                                            content={
                                                Author.socialmedia.whatsappGroup
                                                    .label
                                            }
                                        >
                                            <a
                                                href={
                                                    Author.socialmedia
                                                        .whatsappGroup.url
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button color="danger">
                                                    <h1 className="px-0 text-2xl font-bold">
                                                        Sumate a las clases
                                                        Gratuitas
                                                    </h1>
                                                </Button>
                                            </a>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </section>
        </main>
    );
}
