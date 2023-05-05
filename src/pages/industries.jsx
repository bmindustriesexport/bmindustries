import IndustriesImages from "@/components/industriesImages/IndustriesImages";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        // display: "block",
        right: "10px",
        color: "black",
        backgroundColor: "transparent",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        left: "10px",
        zIndex: 100,
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const Industries = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true, // Add this option to enable autoplay
    autoplaySpeed: 2000, // Adjust the speed (in milliseconds) as desired
  };
  return (
    <>
      <Head>
        <title>Industries</title>
      </Head>

      <div className="animate__animated animate__fadeInDown m-auto w-full h-full">
        <Slider {...settings}>
          <div className="h-[400px]">
            <Image
              className="h-[100%] w-full object-cover"
              src="/carousel1.jpg"
              alt=""
              sizes="100vw"
              width={0}
              height={0}
            />
          </div>
          <div className="h-[400px]">
            <Image
              className="h-[100%] w-full object-cover"
              src="/carousel2.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </Slider>
      </div>
      <h1 className="animate__animated animate__fadeInUp text-sky-600 font-bold text-3xl text-center p-4 mt-4">
        Industries We Cater To
      </h1>
      <IndustriesImages />
    </>
  );
};

export default Industries;
