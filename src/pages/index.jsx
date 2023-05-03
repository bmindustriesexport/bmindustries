import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>BM INDUSTRIES</title>
      </Head>
      <div
        style={{
          background: "url(/homePageBackground.jpg)",
          backgroundSize: "cover",
        }}
        className="md:h-[45vh]"
      >
        <div className="p-6 h-full" style={{ backdropFilter: "blur(3px)" }}>
          <div
            className=" flex flex-col justify-center h-full lg:p-10 lg:w-[60%] gap-[10px]  rounded-[10px] p-[5px]"
            style={{
              background: "rgba( 255, 255, 255, 0.2 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 3.5px )",
              WebkitBackdropFilter: "blur( 3.5px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}
          >
            <h1 className="text-white text-3xl lg:text-5xl">
              Providing quality products since 1961
            </h1>
            <p className="text-white mt-3 text-lg md:text-xl">
              Established in 1961, CJ Shah is the leading chemical distribution
              company in India. Our mission is to curate a one-stop solution for
              all chemical needs of our clients along with world-class customer
              service.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
