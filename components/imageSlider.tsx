"use client";

import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import card1 from "@/public/img/cards/1.png"
import card2 from "@/public/img/cards/2.png"
import card3 from "@/public/img/cards/3.png"
import card4 from "@/public/img/cards/4.png"
import card5 from "@/public/img/cards/5.png"



export default class SimpleSlider extends Component  {
    render() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
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
  return (
    <div className="slider-container">

                <Slider {...settings} >
                    <div>
                        {/* <img src="../../public/img/solerpalau/tda/imgbanner/1.jpg" alt="Imagen" > */}
                        {/* <h1 style={{width:"1280px", height: "200px", objectFit: "cover", objectPosition: "center"}}>1</h1> */}
                        
                        <Image width={1000} height={1000} alt="Imagen 1" src={card1}  />
                    </div>
                    <div >
                        <Image width={1000} height={1000} alt="Imagen 2" src={card2}  />
                    </div>
                    <div >
                        <Image width={1000} height={1000} alt="Imagen 3" src={card3}  />
                    </div>

                    <div >
                        <Image width={1000} height={1000} alt="Imagen 1" src={card4}  />
                    </div>
                    <div >
                        <Image  width={1000} height={1000} alt="Imagen 2" src={card5}  />
                    </div>
                   
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
