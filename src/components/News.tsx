import newData from "@/constant/new.json";
import CustomItem from "./CustomItem";
import Link from "next/link";
import { Tooltip } from "antd";

const News = () => {
  return (
    <section id="new" className="layout mt-6 pb-10">
      <div className="text-[40px] font-bold text-font-title">
        Tin tức
      </div>
      <div className="relative grid lg:grid-cols-2 gap-3 sm:grid-cols-2 grid-cols-1">
        {newData.map((item: any, index: any) => {
          return (
            <Link href={`/new/${item?.id}`} key={index}>
              <div className="bg-white rounded-lg p-2 cursor-pointer group flex flex-col h-full">
                <div className="flex flex-col space-y-2">
                  <div className="w-full overflow-hidden relative rounded-lg">
                    <img
                      src={item?.img}
                      alt="Nft"
                      className="object-cover rounded-lg !max-h-[300px] w-full group-hover:scale-110 !transition !duration-300 !ease-in-out"
                    />
                  </div>
                  <div className="flex justify-center items-center mt-2">
                    <div className="flex flex-col w-full">
                      <div className="flex justify-start items-center space-x-1 mb-2">
                        {/* <IconVerified /> */}
                        <Tooltip title={item?.title}>
                          <span className="text-[20px] text-black three_dot_3_line text-font-title font-bold">
                            {item?.title}
                          </span>
                        </Tooltip>
                      </div>
                      <div className="text-[14px] text-gray-700 font-normal three_dot_3_line">
                        {item?.des}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default News;
