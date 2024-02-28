"use client";

import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import * as fs from "fs";
import card1 from "@/public/img/cards/c1.jpeg"
import card2 from "@/public/img/cards/c2.jpeg"
import card3 from "@/public/img/cards/c3.jpeg"
import card4 from "@/public/img/cards/c4.jpeg"
import card5 from "@/public/img/cards/c5.jpeg"
import card6 from "@/public/img/cards/c6.jpeg"
import card7 from "@/public/img/cards/c7.jpeg"
import card8 from "@/public/img/cards/c8.jpeg"
import card9 from "@/public/img/cards/c9.jpeg"
import card10 from "@/public/img/cards/c10.jpeg"
import card11 from "@/public/img/cards/c11.jpeg"
import card12 from "@/public/img/cards/c12.jpeg"
import card13 from "@/public/img/cards/c13.jpeg"
import card14 from "@/public/img/cards/c14.jpeg"
import card15 from "@/public/img/cards/c15.jpeg"
import card16 from "@/public/img/cards/c16.jpeg"
import card17 from "@/public/img/cards/c17.jpeg"
import card18 from "@/public/img/cards/c18.jpeg"
import card19 from "@/public/img/cards/c19.jpeg"
// import card20 from "@/public/img/cards/c20.jpeg"



export default class SimpleSlider extends Component  {
    render() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
    cssEase: "linear",

    // className: "center",
    // centerMode: true,
    // // dots: true,
    // infinite: true,
    // centerPadding: "60px",
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 200,
    // autoplaySpeed: 2500,
    // cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],  
  };

  // Obtiene la ruta de la carpeta
    // const dir = "/public/img/cards/";
    // const cantImg = 21;

    // const route = [];

    // for (let i = 1; i < cantImg; i++) {
    //     route.push(`${i}`);
    // }


  return (
    <div  className="slider-container " >
        

                <Slider {...settings} >
                {/* {route.map((item) => (
                    <div key={item}><Image width={1000} height={1000} alt={`c${item}`} src={`${dir}c${item}.jpeg`}  /></div>
                ))} */}
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card1}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card2}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card3}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card4}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card5}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card6}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card7}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card8}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card9}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card10}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card11}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card12}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card13}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card14}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card15}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card16}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card17}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card18}  /> </div>
                    <div> <Image width={1000} height={1000} alt="Imagen 1" src={card19}  /> </div>
                    {/* <div> <Image width={1000} height={1000} alt="Imagen 1" src={card20}  /> </div> */}


                    
                </Slider>
                
            </div>
    // <div className="slider-container flex flex-row">
    //   <Slider {...settings}>
    //     <div style={{ width: 100 }}>
    //       <p>100</p>
    //     </div>
    //     <div style={{ width: 200 }}>
    //       <p>200</p>
    //     </div>
    //     <div style={{ width: 75 }}>
    //       <p>75</p>
    //     </div>
    //     <div style={{ width: 300 }}>
    //       <p>300</p>
    //     </div>
    //     <div style={{ width: 225 }}>
    //       <p>225</p>
    //     </div>
    //     <div style={{ width: 175 }}>
    //       <p>175</p>
    //     </div>
    //   </Slider>
    // </div>
        );
    }
}
