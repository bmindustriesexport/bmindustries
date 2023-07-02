import Image from "next/image";
import { useState, useEffect } from "react";
import { GoThreeBars } from "react-icons/go";
import NavBarMobile from "./NavBarMobile";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const Navbar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    setCurrentPath(router.pathname);
  }, [router.pathname]);

  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <>
      <Head>
        <style>
          {`body {
            overflow: ${showNavBar ? "hidden" : "auto"};
          }`}
        </style>
      </Head>
      <div className="relative text-sky-600 shadow-md py-[5px] ">
        <div className="flex items-center ">
          <div className="w-[15%] md:w-[10%]">
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="md:ml-[40px] lg:w-20"
                priority={true}
              />
            </Link>
          </div>
          <nav className="w-full">
            <ul className="hidden lg:flex items-start justify-center gap-6">
              <li className={`text-xl font-bold cursor-pointer ${currentPath === "/" ? "border-b-sky-600 border-b-[2.5px]" : ""}`}>
                <Link href="/">Home</Link>
              </li>
              <li className={`text-xl font-bold cursor-pointer ${currentPath === "/aboutUs" ? "border-b-sky-600 border-b-[2.5px]" : ""}`}>
                <Link href="/aboutUs">About Us</Link>
              </li>
              <li className={`text-xl font-bold cursor-pointer ${currentPath === "/products" ? "border-b-sky-600 border-b-[2.5px]" : ""}`}>
                <Link href="/products">Products</Link>
              </li>
              <li className={`text-xl font-bold cursor-pointer ${currentPath === "/industries" ? "border-b-sky-600 border-b-[2.5px]" : ""}`}>
                <Link href="/industries">Applications</Link>
              </li>
              <li className={`text-xl font-bold cursor-pointer ${currentPath === "/#certificates" ? "border-b-sky-600 border-b-[2.5px]" : ""}`}>
                <Link href="/#certificates">Certifications</Link>
              </li>
              <li className={`text-xl font-bold cursor-pointer ${currentPath === "/contact" ? "border-b-sky-600 border-b-[2.5px]" : ""}`}>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
          {showNavBar ? (
            <RxCross1
              onClick={handleShowNavBar}
              className="lg:hidden text-2xl mr-3 cursor-pointer absolute right-0"
            />
          ) : (
            <GoThreeBars
              onClick={handleShowNavBar}
              className="lg:hidden text-3xl mr-3 cursor-pointer absolute right-0 w-5"
            />
          )}
        </div>
        {showNavBar ? (
          <NavBarMobile setShowNavBar={setShowNavBar} showNavBar={showNavBar} />
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
