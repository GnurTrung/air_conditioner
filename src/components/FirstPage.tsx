"use client";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const FirstPage = () => {
  return (
    <section
      id="home"
      className="sm:bg-page1 max-sm:bg-page1-mobile flex justify-center relative"
    >
      <div
        className="absolute h-full w-full flex sm:justify-center items-center top-0 left-0 rounded-[8px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.2) 100%)",
        }}
      ></div>
      {/* <div className="relative w-full">
        <div className="mt-[15rem] max-md:mt-[14rem] flex flex-col max-sm:items-center sm:items-start sm:pl-[10rem] max-sm:px-[1rem] text-base">
          <p className="text-font-title text-[80px] font-[700] text-white max-w-[1000px] py-16 max-md:hidden">
            Cool Comfort,
          </p>
          <p className="text-font-title text-[80px] font-[700] text-white max-w-[1000px] py-4 max-md:hidden">
            Elevated Living
          </p>
          <p className="text-font-title text-[100px] max-sm:text-[44px] font-[500] text-white max-w-[1000px] py-[44px] md:hidden">
            Cool Comfort,
          </p>
          <p className="text-font-title text-[100px] max-sm:text-[44px] font-[500] text-white max-w-[1000px] md:hidden">
            Elevated Living
          </p>
          <Link href={"#sanpham"} className="btn-primary mt-10 px-8">Mua ngay</Link>
        </div>
      </div> */}
    </section>
  );
};

export default FirstPage;
