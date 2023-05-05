import Head from "next/head";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const aboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <ScrollAnimation initiallyVisible animateIn="animate__fadeInDown">
        <Image
          src="/aboutUsMainImg.jpg"
          width={1600}
          height={0}
          alt="img"
          className="m-auto w-full h-[30vh] md:h-[60vh] object-cover"
        />
      </ScrollAnimation>
      <hr className="mt-10 mb-3 border" />
      <ScrollAnimation
        animateIn="animate__fadeInUp"
        initiallyVisible
        className="ml-[10px] lg:w-[70%] lg:m-auto lg:text-center"
      >
        <div>
          <h1 className="text-center text-sky-700 text-3xl font-semibold underline ">
            Mission
          </h1>
        </div>
        <div className="mt-[10px]">
          <p className="text-lg lg:text-2xl">
            Our mission is to provide our global clientele with innovative and
            sustainable chemical solutions that meet their evolving needs. We
            are committed to delivering superior quality, safety, and value to
            our clients.
          </p>
        </div>
      </ScrollAnimation>
      <hr className="my-5 border" />
      <ScrollAnimation
        animateIn="animate__fadeInUp"
        className="ml-[10px] lg:w-[70%] lg:m-auto lg:text-center"
      >
        <div>
          <h1 className="text-center text-sky-700 text-3xl font-semibold underline ">
            Vision
          </h1>
        </div>
        <div className="mt-[10px]">
          <p className="text-lg lg:text-2xl">
            Our vision is to become a global leader with a focus on
            sustainability, safety, and innovation. With 25 years of domestic
            experience, we aim to make a positive impact on the world by
            delivering world-class products and services and building strong
            relationships with our customers, partners, and stakeholders.
          </p>
        </div>
      </ScrollAnimation>
      <hr className="my-5 border" />
      <ScrollAnimation
        animateIn="animate__fadeInUp"
        className="ml-[10px] lg:w-[70%] lg:m-auto lg:text-center"
      >
        <div>
          <h1 className="text-center text-sky-700 text-3xl font-semibold underline ">
            Values
          </h1>
        </div>
        <div className="mt-[15px]">
          <div>
            <h2 className="text-sky-600 text-2xl italic font-semibold">
              1. Safety
            </h2>
          </div>
          <div>
            <p className="text-lg lg:text-xl">
              We are committed to providing a safe and healthy workplace for our
              employees, customers, and communities by adhering to the highest
              safety standards.
            </p>
          </div>
          <hr className="my-5 border" />
          <div>
            <h2 className="text-sky-600 text-2xl italic font-semibold">
              2. Quality
            </h2>
          </div>
          <div>
            <p className="text-lg lg:text-xl">
              We are committed to delivering products and services of the
              highest quality, meeting and exceeding the expectations of our
              customers and the industry.
            </p>
          </div>
          <hr className="my-5 border" />
          <div>
            <h2 className="text-sky-600 text-2xl italic font-semibold">
              3. Integrity
            </h2>
          </div>
          <div>
            <p className="text-lg lg:text-xl">
              We believe in conducting our business with the highest level of
              integrity and ethical standards, ensuring transparency, honesty,
              and accountability in all our interactions with customers and
              employees.
            </p>
          </div>
          <hr className="my-5 border" />
          <div>
            <h2 className="text-sky-600 text-2xl italic font-semibold">
              4. Sustainability
            </h2>
          </div>
          <div>
            <p className="text-lg lg:text-xl">
              We are dedicated to minimizing our environmental impact and
              promoting sustainable practices throughout our operations.
            </p>
          </div>
          <hr className="my-5 border" />
          <div>
            <h2 className="text-sky-600 text-2xl italic font-semibold">
              5. Continuous Improvement
            </h2>
          </div>
          <div>
            <p className="text-lg lg:text-xl">
              Embracing a culture of continuous improvement in all aspects of
              business operations, from product development to supply chain
              management.
            </p>
          </div>
          <hr className="my-5 border" />
          <div>
            <h2 className="text-sky-600 text-2xl italic font-semibold">
              6. Teamwork
            </h2>
          </div>
          <div>
            <p className="text-lg lg:text-xl">
              Working together with customers, suppliers, and other stakeholders
              to achieve common goals and promote shared success.
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default aboutUs;
