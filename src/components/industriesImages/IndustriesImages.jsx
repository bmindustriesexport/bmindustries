import Image from "next/image";
import React from "react";

const IndustriesImages = () => {
  const industriesCardData = [
    {
      id: 1,
      imageUrl: "/image1.png",
      imageData: "Pharmaceuticals",
    },
    {
      id: 2,
      imageUrl: "/image2.png",
      imageData: "Agro Chemicals",
    },
    {
      id: 3,
      imageUrl: "/image3.png",
      imageData: "Paints and Coatings",
    },
    {
      id: 5,
      imageUrl: "/image5.png",
      imageData: "Adhesives",
    },
    {
      id: 6,
      imageUrl: "/image6.png",
      imageData: "Printing Ink",
    },

    {
      id: 8,
      imageUrl: "/image8.png",
      imageData: "Personal Sanitizing",
    },
    {
      id: 9,
      imageUrl: "/image9.png",
      imageData: "Pigment & Dyestuff",
    },
    {
      id: 10,
      imageUrl: "/image10.png",
      imageData: "Varnish",
    },
    {
      id: 4,
      imageUrl: "/image4.png",
      imageData: "Resin Manufacturing (Emulsion/ Solution)",
    },
    {
      id: 7,
      imageUrl: "/image7.png",
      imageData: "Metal Working, Cleaning, Greases, Lubricant & Electroplating",
    },
  ];

  return (
    <div className="animate__animated animate__zoomIn flex gap-[30px] justify-center items-center flex-wrap mb-5">
      {industriesCardData.map((image) => {
        return (
          <div
            className=" bg-white shadow-lg border-black p-5 rounded-[10px] flex flex-col items-center w-[200px] lg:w-[290px]"
            key={image.id}
          >
            <div className="pt-1 pb-3 pl-1 ">
              <Image
                src={image.imageUrl}
                width={100}
                height={0}
                alt="Pharmaceuticals"
              />
            </div>
            <hr className="border-black  w-full" />
            <div>
              <p className="text-sky-700 text-lg font-semibold">
                {image.imageData}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IndustriesImages;
