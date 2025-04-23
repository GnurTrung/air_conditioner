"use client";
import Footer from "@/components/Footer";
import SecondPage from "@/components/SecondPage";
import FirstPage from "@/components/FirstPage";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";
import Header from "@/components/Header";
import { ApplicationProvider, useApplication } from "@/context/useApplication";
import { Toaster } from "react-hot-toast";
import Gallery from "@/components/Gallery";
import AboutVAC from "@/components/AboutVAC";
import News from "@/components/News";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);

  const contacts = [
    {
      icon: "/assets/images/phone.png", // Icon tạm thời (thay bằng URL ảnh sau)
      label: "Gọi Điện Thoại",
      href: "tel:0868632999",
    },
    {
      icon: "/assets/images/zalo.webp",
      label: "Zalo",
      href: "https://zalo.me/0868632999",
    },
    {
      icon: "/assets/images/fb.png",
      label: "Facebook",
      href: "https://www.facebook.com/tien.lengoc.167",
    },
  ];

  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-Y7PRFFJX9R"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-Y7PRFFJX9R', {
					page_path: window.location.pathname,
					});
					`,
        }}
      />
      {/* {isLoading ? (
        <Loading />
      ) : ( */}
      <>
        <ApplicationProvider>
          <Toaster />
          <Header />
          {/* banner */}
          <FirstPage />
          {/* sản phẩm nổi bật */}
          <SecondPage />
          {/* tính năng nổi bật */}
          <Gallery />
          <News />
          <AboutVAC />
          <div
            className="fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-all"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="bg-white rounded-l-xl shadow-lg overflow-hidden transition-all duration-300">
              {contacts.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 hover:bg-gray-100 transition"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img
                      src={item.icon || ""}
                      alt={item.label}
                      className="w-6 h-6"
                    />
                  </div>
                  <span
                    className={`ml-3 whitespace-nowrap text-sm text-gray-800 transition-all duration-300 ${
                      isHovering
                        ? "opacity-100 max-w-xs"
                        : "opacity-0 max-w-0 overflow-hidden"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <Footer />
        </ApplicationProvider>
      </>
      {/* )} */}
    </>
  );
}
