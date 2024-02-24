"use client";

import React, {Component} from "react";
import Slider from "react-slick";
import Image from "next/image"
import card1 from "@/public/img/cards/1.jpg"


export default class SimpleSlider extends Component  {
    render() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
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
                    <div >
                        {/* <img src="../../public/img/solerpalau/tda/imgbanner/1.jpg" alt="Imagen" > */}
                        {/* <h1 style={{width:"1280px", height: "200px", objectFit: "cover", objectPosition: "center"}}>1</h1> */}
                        
                        <Image width={200} height={200} alt="Imagen 1" src={card1}  />
                    </div>
                    <div >
                        <Image width={200} height={200} alt="Imagen 2" src={card1}  />
                    </div>
                    {/* <div >
                        <Image width={200} height={200} alt="Imagen 3" src={"../../public/img/cards/1.jpg"}  />
                    </div>

                    <div >
                        <Image width={200} height={200} alt="Imagen 1" src={"../../public/img/cards/1.jpg"}  />
                    </div>
                    <div >
                        <Image  width={200} height={200} alt="Imagen 2" src="../../public/img/cards/1.jpg"  />
                    </div>
                    <div >
                        <Image width={200} height={200} alt="Imagen 3" src={"../../public/img/cards/1.jpg"}  />
                    </div> */}
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
