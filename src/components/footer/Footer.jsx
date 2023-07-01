import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

const Footer = () => {
  return (
    <>
      <Head>
        <style>
          {`footer {
 box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, 0.3);
}`}
        </style>
      </Head>
      <footer className="w-full shadow-top-lg flex justify-center items-center p-2 flex-col text-sky-600 md:flex-row md:pl-10 md:pr-10 md:gap-[10%] mt-5">
        <div>
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="logo"
              width={90}
              height={90}
              className="ml-2 md:w-[120px]"
              priority={true}
            />
          </Link>
        </div>
        <hr className="w-full mt-[10px] md:hidden" />
        <div className="flex flex-col items-center gap-[2px] mt-2">
          <h1 className=" text-2xl font-bold mb-1">Links</h1>
          <Link className=" text-lg uppercase" href="/">
            Home
          </Link>
          <Link className=" text-lg uppercase" href="/aboutUs">
            About Us
          </Link>
          <Link className=" text-lg uppercase" href="/products">
            Products
          </Link>
          <Link className=" text-lg uppercase" href="/industries">
            Industries
          </Link>
          <Link className=" text-lg uppercase" href="/#certificates">
            Certifications
          </Link>
          <Link className=" text-lg uppercase" href="/contact">
            Contact Us
          </Link>
        </div>
        <hr className="w-full m-[10px] md:hidden" />
        <div className="flex flex-col items-center justify-center w-[80%] lg:w-[30%]">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/BM+Industries/@23.0356193,72.7289028,17z/data=!3m1!4b1!4m6!3m5!1s0x395e7d26fbecc1f5:0xd5da7ae4a0cc0c4c!8m2!3d23.0356193!4d72.7289028!16s%2Fg%2F11j9l85593"
          >
            <span className="text-center flex">
              <SlLocationPin className="text-3xl" />
              New Block No. 70, Lalji Wado, Nr Zanu Patiya, Bhuvaldi, Ahmedabad
              -382430 , Gujarat , India
            </span>
          </Link>

          <div className="flex mt-[10px] flex-col">
            <Link href="tel:+919904456706">
              <div className="flex items-center cursor-pointer">
                <BiPhoneCall className="text-xl mr-1" />{" "}
                <span className="text-lg">+919904456706</span>
              </div>
            </Link>
            <Link href="tel:+917574842046">
              <div className="flex items-center cursor-pointer">
                <BiPhoneCall className="text-xl mr-1" />{" "}
                <span className="text-lg">+917574842046</span>
              </div>
            </Link>
            <Link href="tel:+917574842044">
              <div className="flex items-center cursor-pointer">
                <BiPhoneCall className="text-xl mr-1" />{" "}
                <span className="text-lg">+917574842044</span>
              </div>
            </Link>
            {/* <Link
              target="_blank"
              className="mt-[5px]"
              href="https://api.whatsapp.com/send?phone=7574842044&amp;text=Hello! Thank you for contacting us via WhatsApp. How may I assist you today?"
            >
              <div className="flex items-center cursor-pointer">
                <FaWhatsapp className="text-xl mr-1" />{" "}
                <span className="text-lg">+917574842044</span>
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=8128594909&amp;text=Hello! Thank you for contacting us via WhatsApp. How may I assist you today?"
            >
              <div className="flex items-center cursor-pointer">
                <FaWhatsapp className="text-xl mr-1" />{" "}
                <span className="text-lg">+918128594909</span>
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=8128594909&amp;text=Hello! Thank you for contacting us via WhatsApp. How may I assist you today?"
            >
              <div className="flex items-center cursor-pointer">
                <FaWhatsapp className="text-xl mr-1" />{" "}
                <span className="text-lg">+919904456706</span>
              </div>
            </Link> */}
          </div>
          <Link href="#">
            <div className="flex items-center cursor-pointer">
              <FaLinkedin className="text-xl mr-1" />
              <span className="text-lg">linkedin</span>
            </div>
          </Link>
          <Link href="mailto:sales@bmchem.in">
            <div className="flex items-center">
              <AiOutlineMail className="text-xl mr-1" />
              <span className="text-[1.1rem]">sales@bmchem.in</span>
            </div>
          </Link>
          <Link href="/contact">
            <button className="border-2 border-sky-600 px-3 m-1 text-base rounded-[30px]">
              Enquire Now
            </button>
          </Link>
        </div>
      </footer>
      <hr className="w-full m-[10px] md:hidden" />
      <div className="uppercase text-xl flex flex-col items-center text-sky-600 mb-5">
        <p>&copy;Bm Industries</p>
      </div>
    </>
  );
};

export default Footer;
