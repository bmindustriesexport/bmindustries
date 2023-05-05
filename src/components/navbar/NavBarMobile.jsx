import Link from "next/link";
import React from "react";

const NavBarMobile = ({ setShowNavBar, showNavBar }) => {
  return (
    <nav className="absolute bg-white z-50 w-full h-[200vh] text-center ">
      <ul className="w-full">
        <li className="text-2xl py-5 text-sky-600 font-bold cursor-pointer underline">
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
          <Link
            onClick={(e) => {
              e.stopPropagation();
              setShowNavBar(false);
            }}
            href="/aboutUs"
          >
            About Us
          </Link>
        </li>
        <hr />
        <li className="text-2xl p-5 text-sky-600 font-bold cursor-pointer underline">
          <Link
            href="/products"
            onClick={(e) => {
              e.stopPropagation();
              setShowNavBar(false);
            }}
          >
            Products
          </Link>
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
          <Link
            onClick={(e) => {
              e.stopPropagation();
              setShowNavBar(false);
            }}
            href="/#whyChooseUs"
          >
            Why Choose Us
          </Link>
        </li>
        <hr />
        <li className="text-2xl p-5 text-sky-600 font-bold cursor-pointer underline">
          <Link
            onClick={(e) => {
              e.stopPropagation();
              setShowNavBar(false);
            }}
            href="/#certificates"
          >
            Certifications
          </Link>
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
