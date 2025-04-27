import IconArrow from "@/assets/icon/IconArrow";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    !!showMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [showMenu]);
  const linkList = [
    {
      id: 1,
      name: "Sản phẩm nổi bật",
      link: "/#sanpham",
    },
    {
      id: 3,
      name: "Về Midea",
      link: "/#midea",
    },
    {
      id: 3,
      name: "Tin tức",
      link: "/#new",
    },
    {
      id: 2,
      name: "Liên hệ",
      link: "/#vac",
    },
  ];
  return (
    <footer className="fixed top-0 backdrop-blur-md bg-white border-b border-black flex justify-between sm:px-[7rem] py-[12px] w-full items-center z-[10] max-sm:px-[16px]">
      <div className="flex flex-col sm:items-center">
        <a href="/" rel="noopener noreferrer">
          <img
            src="/assets/images/logo.png"
            alt="err"
            // width={150}
            // height={50}
            className="w-[150px]"
          />
          {/* <div className="text-[#fff] flex text-[24px] text-font-title">
            Kinh Bắc VAC
          </div> */}
        </a>
      </div>
      <ul
        className={`${
          !showMenu && "max-sm:hidden"
        } flex max-sm:flex-col gap-[13px] sm:gap-[1rem] 2xl:gap-[5rem] max-sm:absolute max-sm:top-0 max-sm:gap-[2rem] max-sm:mt-[3.5rem] max-sm:bg-[rgba(0,0,0,0.60)] max-sm:h-screen max-sm:w-full max-sm:left-0 max-sm:items-center max-sm:py-[1.5rem]`}
      >
        {linkList.map((item) => (
          <li
            key={item.id}
            className="flex gap-[20px] items-center text-font-title"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <a href={item.link}>
              <div className="hover:text-[black] text-blue-600 font-normal hover:cursor-pointer transition-all text-[24px]">
                {item.name}
              </div>
            </a>
          </li>
        ))}
      </ul>
      <IconArrow
        className={`sm:hidden ${showMenu && "rotate-180"} transition-all`}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
    </footer>
  );
};

export default Header;
