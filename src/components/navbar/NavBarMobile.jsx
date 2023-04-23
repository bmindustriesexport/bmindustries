import Link from "next/link";
import React from "react";

const NavBarMobile = ({ setShowNavBar, showNavBar }) => {
  return (
    <nav className="absolute bg-white z-10 w-screen h-screen text-center ">
      <ul>
        <li className="text-2xl p-5 text-sky-600 font-bold cursor-pointer underline">
          <Link
            onClick={(e) => {
              e.stopPropagation();
              setShowNavBar(false);
            }}
            href="/"
          >
            Home
          </Link>
        </li>
        <hr />
        <li className="text-2xl p-5 text-sky-600 font-bold cursor-pointer underline">
          About Us
        </li>
        <hr />
        <li className="text-2xl p-5 text-sky-600 font-bold cursor-pointer underline">
          Products
        </li>
        <hr />
        <li className="text-2xl p-5 text-sky-600 font-bold cursor-pointer underline">
          <Link
            onClick={(e) => {
              e.stopPropagation();
              setShowNavBar(false);
            }}
            href="/industries"
          >
            Industries
          </Link>
        </li>
        <hr />
        <li className="text-2xl p-5 text-sky-600 font-bold cursor-pointer underline">
          Why Choose Us
        </li>
        <hr />
        <li className="text-2xl p-5 text-sky-600 font-bold cursor-pointer underline">
          <Link
            onClick={(e) => {
              e.stopPropagation();
              setShowNavBar(false);
            }}
            href="/contact"
          >
            Contact Us
          </Link>
        </li>
        <hr />
      </ul>
    </nav>
  );
};

export default NavBarMobile;
