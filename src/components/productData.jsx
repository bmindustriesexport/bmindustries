import Link from "next/link";
import React, { useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaFilePdf } from "react-icons/fa";

const ProductData = ({ product, fadeOut, setFadeOut }) => {
  const [openContent, setOpenContent] = useState(false);

  const handleOpenContent = () => {
    if (openContent) {
      // fade out before setting openContent to false
      setFadeOut(true);
      setTimeout(() => {
        setOpenContent(false);
        setFadeOut(false);
      }, 100); // delay 0.5s for the animation to complete
    } else {
      setOpenContent(true);
    }
  };
  return (
    <>
      <div
        key={product.id}
        onClick={handleOpenContent}
        className={
          openContent
            ? "flex p-2 w-[90%] m-auto transition items-center gap-1 bg-sky-700 rounded-t-md cursor-pointer mt-5"
            : "flex p-2 w-[90%] m-auto transition items-center  bg-slate-200 gap-1 rounded cursor-pointer mt-5"
        }
      >
        {openContent ? (
          <AiFillMinusCircle
            className={
              openContent
                ? "text-white transition text-lg"
                : "text-slate-600 transition text-lg"
            }
          />
        ) : (
          <AiFillPlusCircle
            className={
              openContent
                ? "text-white transition text-lg"
                : "text-slate-600 transition text-lg"
            }
          />
        )}

        <h2
          className={
            openContent ? "text-white text-lg" : "text-slate-600 text-lg"
          }
        >
          {product.title}
        </h2>
      </div>
      {openContent ? (
        product.data ? (
          <div
            className={`flex flex-col content w-[90%] m-auto p-2 border-l border-r border-b rounded-b ${
              fadeOut ? "fade-out" : "fade-in"
            }`}
          >
            <span className="text-lg">{product.data}</span>
          </div>
        ) : (
          <div
            className={`flex flex-col content w-[90%] m-auto p-2 border-l border-r border-b rounded-b ${
              fadeOut ? "fade-out" : "fade-in"
            }`}
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
