"use client";
import { useParams } from "next/navigation";
import dataJSON from "@/constant/data.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const ProductPage = () => {
  const params = useParams() as any;
  const id = params.id;
  const data = dataJSON?.find((item: any) => item?.id == id);

  const specs = [
    { label: "Dung tích", value: "8HP-90HP" },
    { label: "Nguồn điện", value: "220/3/50(60)V/Ph/Hz" },
    { label: "Dung tích làm mát", value: "22.4KW-255KW / 76.5-870.9kBtu/h" },
    { label: "Nguồn làm mát", value: "5.25-82.53KW" },
    { label: "EER làm mát", value: "4.27-3.25kW/kW" },
    { label: "Loại máy nén", value: "Bộ biến tần DC" },
    { label: "Động cơ quạt", value: "DC" },
    {
      label: "Động cơ quạt tối đa",
      value: "20 cơ bản; 60 Tùy chỉnh",
    },
    { label: "Loại chất lạnh", value: "R410A" },
    { label: "Tốc độ gió", value: "11000-25000 m3/h" },
    { label: "Tần âm thah", value: "57-68dB(A)" },
    { label: "Nhiệt độ môi trường làm mát", value: "-5 to 55ºC" },
  ];
  return (
    <div>
      <Header />
      <div className="layout py-24">
        <div className="flex mt-4 flex-col lg:flex-row gap-4">
          <img
            src={data?.imageUrl}
            alt="nft"
            className="basis-1/2 w-full rounded-lg"
          />

          <div className="basis-1/2 w-full lg:ml-4 ml-0 mt-4 lg:mt-0">
            <h3 className="text-[28px] font-bold mb-2 text-font-title">
              {data?.name}
            </h3>
            <p className="text-[32px] font-bold text-red-600 mb-1 mt-4">
              THƯƠNG LƯỢNG
            </p>
            {/* <p className="text-sm text-gray-500 mb-4">1 Piece (MOQ)</p> */}

            <div className="space-y-4 text-sm mt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Tùy chỉnh:</span>
                <span className="font-medium">Có sẵn</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Chế độ hậu mãi:</span>
                <span className="font-medium">
                  Hỗ trợ kỹ thuật trực tuyến / Phụ tùng miễn phí / Tại chỗ
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bảo hành:</span>
                <span className="font-medium">2 Năm</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
            <a
                href={"https://zalo.me/0923636288"}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 flex items-center px-3 py-2 hover:bg-gray-100 transition rounded-full"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <img
                    src={"/assets/images/zalo.webp"}
                    alt={"Liên hệ"}
                    className="w-6 h-6"
                  />
                </div>
                <span className={`ml-3 whitespace-nowrap text-sm`}>
                  Zalo
                </span>
              </a>
              <a
                href={"tel:0923636288"}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 flex items-center px-3 py-2 hover:bg-gray-100 transition rounded-full"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <img
                    src={"/assets/images/phone.png"}
                    alt={"Liên hệ"}
                    className="w-6 h-6"
                  />
                </div>
                <span className={`ml-3 whitespace-nowrap text-sm`}>
                  Liên hệ
                </span>
              </a>
            </div>

            {/* <p className="text-sm text-gray-500 mt-4">
            Still deciding? Get samples of{" "}
            <span className="font-semibold">US$ 10000/Piece</span> !{" "}
            <a href="#" className="text-blue-600 underline font-medium">
              Request Sample
            </a>
          </p> */}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Thông số kỹ thuật</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300">
              <tbody>
                {specs.map((item, index) => (
                  <tr key={index} className="even:bg-gray-100">
                    <td className="border px-4 py-2 font-semibold text-gray-700 w-1/3">
                      {item.label}
                    </td>
                    <td className="border px-4 py-2 text-gray-600">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
