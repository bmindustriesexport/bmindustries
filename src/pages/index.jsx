import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

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
        className="md:h-[50vh] flex justify-center items-center"
      >
        <div className="fixed right-[3.2%] md:right-0 top-[40%] z-20">
          <Image
            src="/brochure.png"
            width={20}
            height={0}
            alt="Brochure Icon"
            className="cursor-pointer"
          ></Image>
        </div>
        <div className="p-6 h-full">
          <div
            className="flex flex-col justify-center h-full lg:p-10 lg:w-full gap-[10px]  rounded-[10px] p-[5px]"
            style={{
              background: "rgba( 255, 255, 255, 0.2 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 3.5px )",
              WebkitBackdropFilter: "blur( 3.5px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}
          >
            <ScrollAnimation animateIn="animate__fadeInDown">
              <h1 className="animate__animated animate__fadeInDown text-white text-3xl lg:text-4xl">
                Uncompromising quality for 25+ years - your trusted source since
                1998
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp">
              <p className="animate__animated animate__fadeInUp text-white mt-3 text-lg md:text-xl capitalize">
                ISO 9001 : 2015 Certified Company
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="flex mt-[10px] items-center flex-col-reverse lg:flex-row justify-center">
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          className="flex flex-col gap-[10px] ml-[10px] lg:w-[85%]"
        >
          <p className="text-xl mt-2 font-normal">
            At BM industries we source responsibly and are licensed to store
            extra-hazardous chemicals, including 15,000 tons of methanol in
            underground tanks, and our facility features fire sprinklers and
            safety mechanisms .We have acquired all necessary permits from
            regulatory bodies, such as the Fire Department, Drug Health
            Department, Poison Department, and Pollution Board, and we adhere to
            a zero pollution policy.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInDown">
          <Image
            src="/laboratory.png"
            width={150}
            height={0}
            alt="Image"
            className="animate__animated animate__fadeInDown ml-[10px] mt-[10px] rounded-[10px]"
          />
        </ScrollAnimation>
      </div>
      <div id="whyChooseUs" className="mt-[30px]">
        <ScrollAnimation
          animateIn="animate__fadeInDown"
          initiallyVisible
          className="lg:text-center lg:w-[80%] lg:m-auto ml-[10px]"
        >
          <h1 className="text-center text-sky-700 text-3xl font-normal underline">
            Why Choose Us?
          </h1>
          <p className="text-xl font-normal mt-[15px]">
            Our customer-centric approach is what sets us apart. We strive to
            deliver added value at every step of your experience with us,
            ensuring your complete satisfaction with not just our products, but
            our services as well.
          </p>
        </ScrollAnimation>
        <hr className="m-5 border" />
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          initiallyVisible
          className="animate__animated flex ml-[10px] lg:w-[70%] justify-center items-center lg:m-auto gap-5 flex-col lg:flex-row"
        >
          <div>
            <Image
              src="/whyChooseUs1.png"
              width={90}
              height={90}
              className="lg:w-[90px]"
              alt="img"
            />
          </div>
          <div className="flex flex-col justify-center items-center font-normal lg:w-[70%]">
            <h2 className="text-sky-700 text-2xl lg:w-[50%]">
              1. Premium Quality Products
            </h2>
            <p className="text-xl mt-1">
              25 + years of experience has allowed us to perfect our procurement
              process, ensuring that only the highest quality raw materials are
              used in our products. This commitment to quality translates to
              dependable and consistent performance for our customers.
            </p>
          </div>
        </ScrollAnimation>
        <hr className="m-5 border" />
        <ScrollAnimation
          initiallyVisible
          animateIn="animate__fadeInUp"
          className="flex ml-[10px] lg:w-[70%] justify-center items-center lg:m-auto gap-5 flex-col lg:flex-row"
        >
          <div>
            <Image
              src="/whyChooseUs2.png"
              width={90}
              height={90}
              className="lg:w-[90px]"
              alt="img"
            />
          </div>
          <div className="flex flex-col justify-center items-center font-normal lg:w-[70%]">
            <h2 className="text-sky-700 text-2xl lg:w-[50%]">
              2. Competitive Pricing
            </h2>
            <p className="text-xl mt-1">
              Our commitment to providing high-quality products at competitive
              pricing ensures that you get the best value for your investment.
              Trust us to deliver an unmatched customer experience with our
              unwavering dedication to quality.
            </p>
          </div>
        </ScrollAnimation>
        <hr className="m-5 border" />
        <ScrollAnimation
          initiallyVisible
          animateIn="animate__fadeInUp"
          className="flex ml-[10px] lg:w-[70%] justify-center items-center lg:m-auto gap-5 flex-col lg:flex-row"
        >
          <div>
            <Image
              src="/whyChooseUs3.png"
              width={90}
              height={90}
              className="lg:w-[90px]"
              alt="img"
            />
          </div>
          <div className="flex flex-col justify-center items-center font-normal lg:w-[70%]">
            <h2 className="text-sky-700 text-2xl lg:w-[50%]">
              3. Pan India Presence
            </h2>
            <p className="text-xl mt-1">
              We are proud to have a strong presence across India, with
              expertise in Gujarat, Madhya Pradesh, Maharashtra, and Delhi. At
              BM Industries , our commitment to quality, value, and local
              knowledge sets us apart. Trust us to be your go-to partner in
              these states and beyond!
            </p>
          </div>
        </ScrollAnimation>
        <hr className="m-5 border" />
        <ScrollAnimation
          initiallyVisible
          animateIn="animate__fadeInUp"
          className="flex ml-[10px] lg:w-[70%] justify-center items-center lg:m-auto gap-5 flex-col lg:flex-row"
        >
          <div>
            <Image
              src="/whyChooseUs4.png"
              width={90}
              height={90}
              className="lg:w-[90px]"
              alt="img"
            />
          </div>
          <div className="flex flex-col justify-center items-center font-normal lg:w-[70%]">
            <h2 className="text-sky-700 text-2xl lg:w-[50%]">
              4. Dedicated Assistance
            </h2>
            <p className="text-xl mt-1">
              We are dedicated to assisting you in selecting the perfect product
              that meets your needs, and we ensure timely delivery with clear
              communication throughout the process.
            </p>
          </div>
        </ScrollAnimation>
        <hr className="m-5 border" />
        <ScrollAnimation
          initiallyVisible
          animateIn="animate__fadeInUp"
          className="flex ml-[10px] lg:w-[70%] justify-center items-center lg:m-auto gap-5 flex-col lg:flex-row"
        >
          <div>
            <Image
              src="/whyChooseUs5.png"
              width={90}
              height={90}
              className="lg:w-[90px]"
              alt="img"
            />
          </div>
          <div className="flex flex-col justify-center items-center font-normal lg:w-[70%]">
            <h2 className="text-sky-700 text-2xl lg:w-[50%]">
              5. Technical Support{" "}
            </h2>
            <p className="text-xl mt-1">
              Our focus is not only on producing top-quality products, but also
              on delivering outstanding customer service. Reach out to us for
              reliable sales and technical assistance via WhatsApp or email.
            </p>
          </div>
        </ScrollAnimation>
      </div>
      <hr className="border my-10" />
      <div id="certificates">
        <ScrollAnimation animateIn="animate__fadeInDown" initiallyVisible>
          <h1 className="text-center text-sky-700 text-3xl font-normal underline">
            Certifications
          </h1>
          <div className="flex items-center justify-center mt-10 flex-wrap gap-12">
            <Image
              src="/1.png"
              width={200}
              height={300}
              alt="certificate"
              className="border-2 drop-shadow-md"
            />
            <Image
              src="/1.png"
              width={200}
              height={300}
              alt="certificate"
              className="border-2 drop-shadow-md"
            />
            <Image
              src="/1.png"
              width={200}
              height={300}
              alt="certificate"
              className="border-2 drop-shadow-md"
            />
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
}
