import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

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

const aboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="m-auto w-full h-full">
        <Slider {...settings}>
          <div className="h-[320px]">
            <Image
              className="h-[100%] w-full object-cover"
              src="/aboutUsCarousel1.jpg"
              alt=""
              sizes="100vw"
              width={0}
              height={0}
            />
          </div>
          <div className="h-[320px]">
            <Image
              className="h-[100%] w-full object-cover"
              src="/aboutUsCarousel2.jpg"
              alt=""
              sizes="100vw"
              width={0}
              height={0}
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default aboutUs;
