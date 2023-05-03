import Image from "next/image";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import NavBarMobile from "./NavBarMobile";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
  const [showNavBar, setShowNavBar] = useState();

  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <>
      <div className="relative text-sky-600 shadow-md p-[5px] ">
        <div className="flex items-center ">
          <div className="w-[15%] md:w-[10%]">
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="ml-2 lg:w-20"
                priority={true}
              />
            </Link>
          </div>
          <nav className="w-full">
            <ul className="hidden lg:flex items-start justify-center gap-6">
              <li className="text-xl font-bold cursor-pointer ">
                <Link href="/">Home</Link>
              </li>
              <li className="text-xl font-bold cursor-pointer ">
                {" "}
                <Link href="/aboutUs">About Us</Link>
              </li>
              <li className="text-xl font-bold cursor-pointer ">
                <Link href="/products">Products</Link>
              </li>
              <li className="text-xl font-bold cursor-pointer ">
                <Link href="/industries">Industries</Link>
              </li>
              <li className="text-xl font-bold cursor-pointer ">
                Why Choose Us
              </li>
              <li className="text-xl font-bold cursor-pointer ">
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
