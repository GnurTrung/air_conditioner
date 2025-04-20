/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import dataAir from "@/constant/data.json";
import CustomItem from "./CustomItem";

const SecondPage = () => {
  return (
    <section
      id="sanpham"
      className="layout mt-6"
    >
      <div className="text-[40px] font-bold text-font-title">Sản phẩm nổi bật</div>
      <div className="relative grid md:grid-cols-3 lg:grid-cols-4 gap-3 sm:grid-cols-2 grid-cols-1">
        {dataAir.map((item: any, index: any) => {
          return <CustomItem data={item} key={index} />;
        })}
      </div>
    </section>
  );
};

export default SecondPage;
