import Head from "next/head";
import React from "react";

const Loader = () => {
  return (
    <>
      <Head>
        <style>
          {`.loader {
  width: 100px;
  height: 100px;
  display: inline-block;
  position: relative;
  background: #338AC1;
  box-sizing: border-box;
  animation: zeroRotation 1s ease infinite alternate-reverse;
}

@keyframes zeroRotation {
  0% {
    transform: scale(1) rotate(0deg);
  }
  100% {
    transform: scale(0) rotate(360deg);
  }
}
    
    `}
        </style>
      </Head>
      <div className="flex justify-center items-center min-h-[80vh]">
        <span class="loader"></span>
      </div>
    </>
  );
};

export default Loader;
