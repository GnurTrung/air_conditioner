import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="px-[16px] text-white py-[12px] sm:py-[30px] sm:px-[80px] bg-[#000000] flex sm:items-center sm:justify-between max-sm:flex-col max-sm:gap-4">
      <div className="flex flex-col sm:items-start">
        {/* <Image
            src="/assets/images/logo.png"
            alt="err"
            width={80}
            height={80}
            className="rounded-full"
          /> */}
          <img
            src="/assets/images/logo.png"
            alt="err"
            // width={150}
            // height={50}
            className="w-[180px]"
          />
        <div className=" flex text-[24px] mt-5">
          Công ty TNHH Ngôi Sao Xanh Kinh Bắc
        </div>
        <div className="text-[14px]">
          LK36-09, Khu đô thị Sing Garden, Phù Chẩn, Từ Sơn, Bắc Ninh
        </div>
      </div>
      <div className="text-white font-normal flex flex-col">
        <p className="text-[20px]">Liên hệ</p>
        <div>ngoisaoxanhkinhbac@gmail.com</div>
        <div>SĐT: 0868 632 999</div>
      </div>
    </section>
  );
};

export default Footer;
