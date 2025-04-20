/* eslint-disable @next/next/no-img-element */
import React, { lazy } from "react";
/* const Marquee = lazy(() => import("react-fast-marquee")); */

const Gallery = () => {
  return (
    <section id="midea" className="mt-20">
      <div className="relative">
        <img
          src={"/assets/images/midea_co.jpg" as any}
          alt="World map"
          className="object-cover max-h-screen w-full"
        />
        <div
          className="absolute h-full w-full flex sm:justify-center items-center top-0 left-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.4) 100%)",
          }}
        ></div>
        <div className="absolute bottom-6 left-6 sm:max-w-[40%]">
          <div className="font-bold text-[40px] text-white text-font-title">TẬP đoàn Midea</div>
          <div className="text-white text-[20px] max-sm:hidden">
            Midea là tập đoàn chuyên sản xuất và kinh doanh các thiết bị về xử
            lý không khí công trình và dân dụng, điện lạnh, thiết bị điện giá
            dụng, thiết bị nhà bếp lớn và nhỏ.
          </div>
        </div>
      </div>
      <div className="layout min-h-screen flex items-center">
        <div>
        <div className="text-[40px] font-bold mt-6 text-font-title">VỀ MIDEA</div>
        <div className="bg-white text-black pt-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4 text-[20px]">
              <span>
                <span className="font-bold text-lg">
                  Được thành lập vào năm 1968,{" "}
                </span>
                Midea (SZ: 000333) là công ty được niêm yết công khai và được
                xếp hạng thứ #253 các công ty năm trong bảng xếp hạng TOP 500
                tập đoàn hàng đầu Thế Giới (Fortune Global 500) do tạp chí
                Forbes bình chọn.
              </span>
              <p>
                Midea vẫn dẫn đầu trong ngành công nghiệp thiết bị gia dụng,
                cung cấp đầy đủ và toàn diện các sản phẩm điện gia dụng.
              </p>
              <p>
                Midea có trụ sở chính tại Quảng Đông, Trung Quốc, những là một
                công ty toàn cầu với hơn 150.000 nhân viên và hoạt động tại hơn
                195 quốc gia.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center mt-16">
                <div>
                  <p className="text-2xl font-bold text-blue-600 text-font-title">
                    150,000
                  </p>
                  <p>Công nhân viên</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600 text-font-title">
                    195
                  </p>
                  <p>Quốc gia và khu vực</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-blue-600 text-font-title">
                    + $40.5B
                  </p>
                  <p>Doanh thu toàn cầu (USD)</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600 text-font-title">
                    $1.3B
                  </p>
                  <p>Đầu tư R&D hàng năm</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600 text-font-title">
                    33
                  </p>
                  <p>Nhà máy sản xuất</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <img
                src={"/assets/images/map.png" as any}
                alt="World map"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
