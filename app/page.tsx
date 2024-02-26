import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import {
    IoLogoInstagram,
    IoLogoTiktok,
    IoLogoWhatsapp,
    IoLogoFacebook,
} from "react-icons/io5";
import { Tooltip } from "@nextui-org/tooltip";
import { Image } from "@nextui-org/image";


// import Image from 'next/image'
import YouTubePlayer from "@/components/youtubepayer";

import { Author } from "@/config/Author-data";
import { Courses } from "@/config/Courses-data";

import consulting from "../public/img/consulting.png";
import arecelifoto from "../public/img/araceli-foto-nobg.png";
import cards1 from "../public/img/cards/1.png"
import cards2 from "../public/img/cards/2.png"
import cards3 from "../public/img/cards/3.png"
import cards4 from "../public/img/cards/4.png"
import cards5 from "../public/img/cards/5.png"

import TestimonialsComponent from "@/components/testimonials";
import SimpleSlider from "@/components/imageSlider";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-100 px-0 dark:bg-gray-800 md:px-20 lg:px-40 overflow-visible">
            
            {/* ------------------------------ PROLOGO ------------------------------ */}
            <section className="" id="prologo">
                <div className="text-center px-1">
                    <h2 className="text-4xl py-2 text-orange-400 font-medium md:text-8xl">
                        {Author.fullname}
                    </h2>
                    <h3 className="text-xl py-2 md:mt-4 md:text-4xl dark:text-white">
                        {Author.title}
                    </h3>
                    <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
                        {Author.description}
                    </p>
                </div>

                {/* ------------------------------ LINKS ------------------------------ */}
                {/* IoLogoInstagram, IoLogoTiktok, IoLogoWhatsapp, IoLogoFacebook */}

                <div className="relative text-5xl flex justify-center py-3 text-gray-600 dark:text-gray-500">
                    <ul className="flex flex-nowrap gap-10">
                        <Tooltip
                            showArrow={true}
                            placement="bottom"
                            content={Author.socialmedia.instagram.label}
                        >
                            <li className="">
                                <a
                                    href={Author.socialmedia.instagram.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="">
                                        <IoLogoInstagram className=" text-instagram-purple   hover:text-violet-600" />
                                    </div>
                                </a>
                            </li>
                        </Tooltip>
                        <Tooltip
                            showArrow={true}
                            placement="bottom"
                            content={Author.socialmedia.tiktok.label}
                        >
                            <li className="">
                                <a
                                    href={Author.socialmedia.tiktok.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="">
                                        <IoLogoTiktok className="text-black hover:text-gray-600" />
                                    </div>
                                </a>
                            </li>
                        </Tooltip>
                        <Tooltip
                            showArrow={true}
                            placement="bottom"
                            content={Author.socialmedia.facebook.label}
                        >
                            <li className="">
                                <a
                                    href={Author.socialmedia.facebook.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="">
                                        <IoLogoFacebook className="text-blue-600 hover:text-blue-400" />
                                    </div>
                                </a>
                            </li>
                        </Tooltip>
                        <Tooltip
                            showArrow={true}
                            placement="bottom"
                            content={Author.socialmedia.whatsapp.label}
                        >
                            <li className="">
                                <a
                                    href={Author.socialmedia.whatsapp.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="">
                                        <IoLogoWhatsapp className="text-green-600 hover:text-green-400 " />
                                    </div>
                                </a>
                            </li>
                        </Tooltip>
                    </ul>
                </div>
            </section>

            <section className="mx-auto md:w-2/3 ">
                <div className=" text-center shadow-lg  p-5 rounded-xl my-10 dark:bg-gray-700 items-center md:flex flex-wrap">
                    <div className="flex items-center md:w-1/2 flex-col ">
                        <Image
                            src="../img/consulting.png"
                            className="md:w-100 w-full m-auto"
                            // width={100}
                            // height={100}
                            alt="1"
                        />
                    </div>
                    <div className="md:w-1/2 flex flex-col items-center">
                        <h3 className="text-lg font-medium pt-4 pb-2 dark:text-white">
                            {" "}
                            Consultoria
                        </h3>
                        <p className="py-2 dark:text-gray-300">
                            {" "}
                            ¿ Estas interesado en recibir tips para tu mejor
                            desarrollo ?
                        </p>
                        <a
                            href={Author.socialmedia.whatsapp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h4 className="py-2 text-2xl text-green-600 hover:underline decoration-solid">
                                ¡ No dudes en ponerte en contacto conmigo !
                            </h4>
                        </a>
                        <p className="text-gray-800 py-2 dark:text-gray-300">
                            Puedo darte consejos y trucos para tu mejor atencion
                            hacia tu cliente.
                        </p>
                    </div>
                    {/* <p className="text-gray-800 py-1 dark:text-gray-300">
                        PostGres, MongoDB
                    </p> */}
                </div>
            </section>

            {/* ------------------------------ SOBRE MI ------------------------------ */}
            {/* ------------------------------ Avatar y descripcon ------------------------------ */}
            <section className="lg:pt-10" id="sobremi">
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 pt-24 pb-6 mx-auto">
                        <div className="flex flex-wrap -m-12">
                            <div className="px-12 sm:-border-b-6 md:w-1/2 flex flex-col items-start">
                                <div className="relative mx-auto bg-gradient-to-l from-mid-orange to-low-orange  rounded-full w-70 h-70 my-10 overflow-hidden md:h-96 md:w-96">
                                    <Image
                                        src="../img/araceli-foto-nobg.png"
                                        className=" mt-2"
                                        alt="1"
                                        width={500}
                                    />
                                </div>
                            </div>
                            <div className="p-12 sm:px-12 sm:pb-12 sm:-mt-16  md:w-1/2 flex flex-col items-start">
                                <span className="inline-block py-1 px-2 rounded bg-yellow-50 text-yellow-500 text-xs font-medium tracking-widest dark:bg-high-orange dark:text-gray-900">
                                    SOBRE MI
                                </span>
                                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 dark:text-high-orange">
                                    {Author.titleAbout}
                                </h2>
                                <p className="indent-6 leading-relaxed mb-8 dark:text-gray-300">
                                    {Author.about1}
                                </p>

                                <p className="indent-6 leading-relaxed mb-8 dark:text-gray-300">
                                    {Author.about2}
                                </p>

                                <a className="inline-flex items-center">
                                    {/* <Image alt="blog" src="https://dummyimage.com/103x103" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"> */}
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
            <section >
                <SimpleSlider/>
			</section>
            {/* +++++++++++++++++++++++++++++++++  CARDS  +++++++++++++++++++++++++++++++++ */}
            <section id="cursos" className="mt-10">
                <span className="ml-6 mb-0 md:inline-block md:mb-4 py-1 px-2  rounded bg-yellow-50 text-yellow-500 text-xs font-medium tracking-widest dark:bg-high-orange dark:text-gray-900">
                    CURSOS
                </span>
                {Courses.map((item) => (
                    <section className="lg:pt-2 w-fit mt-8" key={item.id} id={item.id}>
                        <div className="lg:flex gap-10  ">
                            <div className="flex flex-wrap -mx-10 md:-m-12 ">
                                {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                                <div className=" px-12 py-1 md:p-12  md:w-1/2 flex flex-col items-center text-center shadow-lg  rounded-xl my-5 dark:bg-gray-700 flex-1">
                                    <div className="container px-0 py-24 mx-auto -mt-24">
                                        <div className="flex flex-wrap -m-12 md:px-16">
                                            <div className="p-6 md:w-1/2 flex flex-col items-start">
                                                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-6 dark:text-high-orange">
                                                    {item.name}
                                                </h2>
                                                <p className="text-left  indent-6 leading-relaxed mb-8 dark:text-gray-300">
                                                    {item.description}
                                                </p>

                                                <a className="inline-flex items-center">
                                                    {/* <Image alt="blog" src="https://dummyimage.com/103x103" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"> */}
                                                    <span className="flex-grow flex flex-col pl-4">
                                                        <span className="title-font font-medium text-gray-900 dark:text-high-orange">
                                                            {item.author}
                                                        </span>
                                                        <span className="text-gray-400 text-xs tracking-widest mt-0.5 dark:text-gray-300">
                                                            {item.authorRank}
                                                        </span>
                                                    </span>
                                                </a>
                                                <h4 className="mt-6 py-4 text-teal-600">
                                                    ACCEDE AL PDF
                                                </h4>
                                            </div>
                                            <div className="md:py-12 px-16 md:w-1/2 flex flex-col items-start md:px-16">
                                                <YouTubePlayer
                                                    url={"vRrcI2Ga7mg"}
                                                    height={"480"}
                                                    width={"270"}
                                                    autoplay={1}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <span className="inline-block mb-2 py-1 px-2 rounded bg-yellow-50 text-yellow-500 text-xs font-medium tracking-widest dark:bg-high-orange dark:text-gray-900">
                                        TESTIMONIOS
                                    </span>
                                    <TestimonialsComponent
                                        index={0}
                                        testimonials={item.testimonials}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </section>
			
        </main>
    );
}
