import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { animated, useSpring } from "react-spring";
const inter = Inter({ subsets: ["latin"] });

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 1000,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.span className="text-5xl md:text-7xl">
      {number.to((n) => n.toFixed(0).concat("+"))}
    </animated.span>
  );
};

export default function Home() {
  const [startAnimation, setStartAnimation] = useState(false);
  const handleScroll = (isVisible) => {
    if (isVisible && !startAnimation) {
      // Element is in view and animation hasn't started yet
      setStartAnimation(true);
    }
  };
  return (
    <>
      <Head>
        <title>BM INDUSTRIES</title>
        <meta name="description" content="Offical Website of BM Chem"></meta>
        <meta name="keywords" content="bmchem bm chem bhchemin BM industries BMindustries"></meta>
      </Head>
      <div
        style={{
          background: "url(/background.png)",
          backgroundSize: "cover",
        }}
        className="h-[80vh] flex justify-center items-center"
      >
        {/* <div className="fixed right-[3.2%] md:right-0 top-[40%] z-20">
          <Image
            src="/brochure.png"
            width={20}
            height={0}
            alt="Brochure Icon"
            className="cursor-pointer"
          ></Image>
        </div> */}
        <div className="p-4 md:p-6 h-full w-[100%]">
          <div
            className="flex flex-col w-full md:w-[55%] justify-center h-full gap-[10px]  rounded-[10px] p-[5px]"
            style={{
              background: "rgba( 255, 255, 255, 0.2 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 3.5px )",
              WebkitBackdropFilter: "blur( 3.5px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              display: "block",
              // width: "55%",
              height: "100%",
              left: 0,
              top: 0,
              zIndex: 1,
              borderRadius: " 0 201% .1% 0",
            }}
          >
            <div className="py-40 md:py-64">
              <h1 className="animate__animated animate__fadeInDown text-white text-2xl md:text-3xl w-[70%] lg:text-4xl">
                Uncompromising quality for 25+ years - your trusted source since
                1998
              </h1>
              <p className="animate__animated animate__fadeInUp text-white md:mt-3 text-lg md:text-xl capitalize w-[85%]">
                ISO 9001 : 2015 Certified Company
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundRepeat: "no-repeat",
          marginTop: "30px",
        }}
        className="flex md:bg-[url('/productbg.jpg')] flex-wrap justify-center gap-4 items-center h-[95vh] md:h-[75vh] flex-col p-3 relative"
      >
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">
          <h1 className="underline text-sky-600 font-semibold uppercase">
            Products
          </h1>
        </div>
        <div className="flex mt-16 w-full justify-between gap-4 flex-col md:flex-row pb-4 overflow-auto p-[25px] lg:p-0">
          <div
            style={{
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 0px )",
              borderRadius: "10px",
            }}
            className="p-5 md:p-[35px] bg-white hover:bg-sky-600 transition hover:text-white text-sky-600 font-semibold"
          >
            <h2 className="text-xl md:text-3xl flex md:mt-3 flex-col items-center md:w-[250px]">
              <p>Chloroform</p>
            </h2>
          </div>

          <div
            style={{
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 0px )",
              borderRadius: "10px",
            }}
            className="p-5 md:p-[35px] bg-white hover:bg-sky-600 transition hover:text-white text-sky-600 font-semibold"
          >
            <h2 className="text-xl md:text-3xl flex md:mt-3 flex-col items-center md:w-[250px]">
              <p>Solvent C-9</p>
            </h2>
          </div>

          <div
            style={{
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 0px )",
              borderRadius: "10px",
            }}
            className="p-5 md:p-[35px] bg-white hover:bg-sky-600 transition hover:text-white text-sky-600 font-semibold"
          >
            <h2 className="text-xl md:text-3xl flex md:mt-3 flex-col items-center md:w-[250px]">
              <p>Tri Ethyl Glycol (TEG)</p>
            </h2>
          </div>

          <div
            style={{
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 0px )",
              borderRadius: "10px",
            }}
            className="p-5 md:p-[35px] bg-white hover:bg-sky-600 transition hover:text-white text-sky-600 font-semibold"
          >
            <h2 className="text-xl md:text-3xl flex flex-col items-center md:w-[250px]">
              <p>Methylene Chloride (MDC)</p>
            </h2>
          </div>
        </div>
        <button className="border border-sky-600 text-white text-xl px-4 py-2 rounded-[30px] bg-sky-600 lg:mt-16 ">
          <Link href={"/products"}>View All Products</Link>
        </button>
      </div>

      <div className="flex mt-[10px] items-center flex-col-reverse lg:flex-row justify-center"></div>
      <div
        style={{
          backgroundImage: "url('/performanceBackground.png')",
          // background: `#328BC1`,
          height: "75vh",
          backgroundSize: "cover",
        }}
        className="flex justify-end md:justify-between gap-4 items-center flex-col md:flex-row lg:px-40 relative"
      >
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sky-600 text-4xl">
          <h1 className="underline uppercase">Performance</h1>
        </div>
        <div
          style={
            {
              // background: "rgba( 255, 255, 255, 0.25 )",
              // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              // backdropFilter: "blur( 2.5px )",
              // borderRadius: "10px",
            }
          }
          className="p-5 md:p-[35px]"
        >
          <h2 className="text-sky-600 text-2xl flex flex-col items-center">
            <Number n={500} />
            <p>Customers</p>
          </h2>
        </div>

        <div
          style={
            {
              // background: "rgba( 255, 255, 255, 0.25 )",
              // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              // backdropFilter: "blur( 2.5px )",
              // borderRadius: "10px",
            }
          }
          className="p-5 md:p-[35px]"
        >
          <h2 className="text-sky-600 text-2xl flex flex-col items-center">
            <Number n={2500} />
            <p>MT Sales</p>
          </h2>
        </div>

        <div
          style={
            {
              // background: "rgba( 255, 255, 255, 0.25 )",
              // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              // backdropFilter: "blur( 2.5px )",
              // borderRadius: "10px",
            }
          }
          className="p-5 md:p-[35px] mb-3 md:mb-0"
        >
          <h2 className="text-sky-600 text-2xl flex flex-col items-center">
            <Number n={50} />
            <p>Locations Across India</p>
          </h2>
        </div>
      </div>

      <div
        style={{
          // backgroundImage: "url('/performanceBackground.png')",
          // background: `#328BC1`,
          // height: "75vh",
          backgroundSize: "cover",
        }}
        className="flex flex-wrap justify-center gap-4 items-center h-fit md:h-[80vh] flex-col p-3 md:px-12 relative"
      >
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">
          <h1 className="underline text-sky-600 font-semibold uppercase">
            Services
          </h1>
        </div>
        <div className="flex mt-16 w-full justify-between gap-4 flex-col md:flex-row overflow-auto p-[25px]">
          <div
            style={{
              // background: "rgba( 27, 82, 244, 1 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 0px )",
              borderRadius: "10px",
            }}
            className="p-5 md:p-[35px] bg-white hover:bg-sky-600 transition hover:text-white text-sky-600 font-semibold"
          >
            <h2 className="text-xl md:text-3xl flex md:mt-3 flex-col items-center md:w-[300px]">
              <p>1OOMT + ready stock</p>
            </h2>
          </div>

          <div
            style={{
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 0px )",
              borderRadius: "10px",
            }}
            className="p-5 md:p-[35px] bg-white hover:bg-sky-600 transition hover:text-white text-sky-600 font-semibold"
          >
            <h2 className="text-xl md:text-3xl flex md:mt-3 flex-col items-center md:w-[300px]">
              <p>On time delivery</p>
            </h2>
          </div>

          <div
            style={{
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 0px )",
              borderRadius: "10px",
            }}
            className="p-5 md:p-[35px] bg-white hover:bg-sky-600 transition hover:text-white text-sky-600 font-semibold"
          >
            <h2 className="text-xl md:text-3xl flex flex-col items-center md:w-[300px]">
              <p>Proactive customer support</p>
            </h2>
          </div>
        </div>
        <div className="flex  w-full justify-between gap-4 flex-col md:flex-row overflow-auto p-[25px] ">
          <div
            style={{
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 0px )",
              borderRadius: "10px",
            }}
            className="p-5 md:p-[35px] bg-white hover:bg-sky-600 transition hover:text-white text-sky-600 font-semibold "
          >
            <h2 className="text-xl md:text-3xl flex flex-col items-center md:w-[300px]">
              <p>Customised packing and labelling</p>
            </h2>
          </div>

          <div
            style={{
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 0px )",
              borderRadius: "10px",
            }}
            className="p-5 md:p-[35px] bg-white hover:bg-sky-600 transition hover:text-white text-sky-600 font-semibold"
          >
            <h2 className="text-xl md:text-3xl flex md:mt-3 flex-col items-center md:w-[300px]">
              <p>Quality Control</p>
            </h2>
          </div>

          <div
            style={{
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 0px )",
              borderRadius: "10px",
            }}
            className="p-5 md:p-[35px] bg-white hover:bg-sky-600 transition hover:text-white text-sky-600 font-semibold"
          >
            <h2 className="text-xl md:text-3xl flex md:mt-3 flex-col items-center md:w-[300px]">
              <p>Technical consulation</p>
            </h2>
          </div>
        </div>
      </div>
      <div id="certificates">
        <h1 className="text-center text-sky-700 text-3xl font-normal underline uppercase">
          Certifications
        </h1>
        <div className="flex items-center justify-center mt-10 flex-wrap gap-12">
          <Link href={"/certificates/Certificate.jpg"}>
            <Image
              src="/certificates/Certificate.jpg"
              width={400}
              height={300}
              alt="certificate"
              className="border-2 drop-shadow-md"
            />
          </Link>
          <Link href={"/certificates/certificate2.png"}>
            <Image
              src="/certificates/certificate2.png"
              width={400}
              height={300}
              alt="certificate"
              className="border-2 drop-shadow-md"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
