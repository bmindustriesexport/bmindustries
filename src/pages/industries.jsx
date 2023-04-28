import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import IndustriesImages from "@/components/industriesImages/IndustriesImages";

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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

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
        <style>
          {`
            .animate-h1 {
              opacity: ${loaded ? "5" : "0"};
              transform: translateY(${loaded ? "0" : "1500px"});
              transition: opacity 1s ease-out, transform 1s linear;
            }
          `}
        </style>
      </Head>

      <div className="m-auto w-full h-full">
        <Slider {...settings}>
          <div className="h-[320px]">
            <Image
              className="h-[100%] w-full object-cover"
              src="/carousel1.jpg"
              alt=""
              sizes="100vw"
              width={0}
              height={0}
            />
          </div>
          <div className="h-[320px]">
            <Image
              className="h-[100%] w-full object-cover"
              src="/carousel2.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="h-[320px]">
            <Image
              className="h-[100%] w-full object-cover"
              src="/carousel3.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </Slider>
      </div>

      <h1 className="text-sky-600 font-bold text-3xl text-center p-4 mt-4 animate-h1">
        Industries We Cater To
      </h1>

      <IndustriesImages />
    </>
  );
};

export default Industries;
