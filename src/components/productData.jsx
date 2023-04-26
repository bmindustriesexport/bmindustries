import Link from "next/link";
import React, { useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaFilePdf } from "react-icons/fa";

const ProductData = ({
  product,
  toggleAccordionAnimationHandler,
  mapIndex,
  openAccordions,
  openAccordionsAnimation,
  toggleAccordionHandler,
}) => {
  return (
    <>
      <div
        key={product.id}
        onClick={() => toggleAccordionAnimationHandler(mapIndex)}
        className={`flex w-[90%] m-auto  items-center mt-5 cursor-pointer`}
      >
        <div
          className={`flex p-3 items-center gap-1  rounded-t-md  cursor-pointer w-full ${
            openAccordionsAnimation.includes(mapIndex)
              ? " bg-sky-700"
              : "bg-slate-200 rounded-md"
          }`}
        >
          {openAccordionsAnimation.includes(mapIndex) ? (
            <AiFillMinusCircle
              className={
                openAccordionsAnimation.includes(mapIndex)
                  ? "text-white  text-lg"
                  : "text-slate-600  text-lg"
              }
            />
          ) : (
            <AiFillPlusCircle
              className={
                openAccordionsAnimation.includes(mapIndex)
                  ? "text-white  text-lg"
                  : "text-slate-600  text-lg"
              }
            />
          )}

          <h2
            className={
              openAccordionsAnimation.includes(mapIndex)
                ? "text-white text-lg"
                : "text-slate-600 text-lg"
            }
          >
            {product.title}
          </h2>
        </div>
      </div>
      {openAccordions.includes(mapIndex) ? (
        product.data ? (
          <div
            className={`flex flex-col ${
              openAccordionsAnimation.includes(mapIndex)
                ? "content-fade-in"
                : "content-fade-out"
            } w-[90%] m-auto p-2 transition duration-500 border-l border-r border-b rounded-b `}
            onAnimationEnd={() => {
              !openAccordionsAnimation.includes(mapIndex) &&
                toggleAccordionHandler(mapIndex);
            }}
          >
            {console.log("object")}
            <span className="text-lg">{product.data}</span>
          </div>
        ) : (
          <div
            className={`flex flex-col ${
              openAccordionsAnimation.includes(mapIndex)
                ? "content-fade-in"
                : "content-fade-out"
            } w-[90%] m-auto p-2 border-l transition duration-500 border-r border-b rounded-b `}
            onAnimationEnd={() => {
              !openAccordionsAnimation.includes(mapIndex) &&
                toggleAccordionHandler(mapIndex);
            }}
          >
            <div className="flex flex-col">
              <span className="mt-1">
                <span className="font-bold text-[1.15rem]">Synonyms: </span>
                <span className="text-lg">{product.Synonyms}</span>
              </span>

              <span className="mt-[10px]">
                <span className="font-bold text-[1.15rem]">
                  {[product.Formula ? "Formula: " : null]}
                </span>
                <span
                  className="text-lg"
                  dangerouslySetInnerHTML={{ __html: product.Formula }}
                ></span>
              </span>

              <span className="mt-[10px]">
                <span className="font-bold text-[1.15rem]">CAS No: </span>
                <span className="text-lg">{product.CAS_NO}</span>
              </span>

              <span className="mt-[10px]">
                <span className="font-bold text-[1.15rem]">Packaging: </span>
                <span className="text-lg">{product.Packaging}</span>
              </span>
            </div>

            <div className="mt-[10px]">
              <span>
                <span className="font-bold text-[1.15rem]">Application: </span>
                <span className="text-lg">{product.Application}</span>
              </span>
            </div>
            <div className="mt-[10px]">
              <Link href={product.pdf_link} target="_blank">
                <div className="flex items-center cursor-pointer gap-[10px] text-sky-950">
                  <FaFilePdf className="text-4xl" />
                  <span className="text-lg font-semibold">
                    {product.pdf_title}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        )
      ) : null}
    </>
  );
};

export default ProductData;
