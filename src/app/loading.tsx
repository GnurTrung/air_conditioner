"use client"
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed bg-white w-full h-screen text-[10rem] z-50 flex justify-center items-center">
      <div className="max-sm:w-[7rem] flex flex-col justify-center items-center">
        <p className="text-black text-[24px] font-[800] font-primary">
          LOADING...
        </p>
      </div>
    </div>
  );
};

export default Loading;
