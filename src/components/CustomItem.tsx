import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";

const CustomItem = ({ data }: any) => {
  return (
    <Link href={`/product/${data?.id}`}>
      <div className="bg-white border border-solid rounded-lg p-2 border-[#555] cursor-pointer group flex flex-col h-full">
        <div className="flex flex-col space-y-2">
          <div className="aspect-square w-full overflow-hidden relative">
            <img
              src={data?.imageUrl}
              alt="Nft"
              className="object-cover rounded-lg !w-full h-full group-hover:scale-110 !transition !duration-300 !ease-in-out"
            />
          </div>
          <div className="flex justify-center items-center mt-2">
            <div className="flex flex-col w-full">
              <div className="flex justify-start items-center space-x-1 mb-2">
                {/* <IconVerified /> */}
                <Tooltip title={data?.name}>
                  <span className="text-base text-black three_dot_3_line">
                    {data?.name}
                  </span>
                </Tooltip>
              </div>
              <div className=" bg-[#AFDDFF] text-xs font-medium text-black rounded-lg text-center py-2 px-3">
                <div className="flex justify-between">
                  <div>Giá</div>
                  <div className="flex justify-center gap-1">
                    <div>Liên hệ</div>
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <div>Hậu mãi</div>
                  <div>{data?.afterSalesService || "--"}</div>
                </div>
                <div className="flex justify-between mt-1">
                  <div>Loại</div>
                  <div>{data?.type || "--"}</div>
                </div>
                <div className="flex justify-between mt-1">
                  <div>Bảo hành</div>
                  <div>{data?.warranty || "--"}</div>
                </div>
                <div className="flex justify-between mt-1">
                  <div>Ống khí</div>
                  <div>{data?.airTubeMaterial || "--"}</div>
                </div>
                <div className="flex justify-between mt-1">
                  <div>Điện áp</div>
                  <div>{data?.operatingVoltage || "--"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CustomItem;
