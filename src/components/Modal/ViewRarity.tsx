import CustomModal from ".";
import { Button } from "antd";
import { useEffect, useState } from "react";

const ViewRarity = ({ open, onCancel, type }: any) => {
  const [img, setImg] = useState("/assets/images/qr-re.jpg");
  useEffect(() => {
    switch (type) {
      case "re":
        setImg("/assets/images/qr-re.jpg");
        break;
      case "dau":
        setImg("/assets/images/qr-dau.jpg");
        break;
      default:
        setImg("/assets/images/qr-re.jpg");
        break;
    }
  }, [type]);
  return (
    <CustomModal
      title=""
      open={open}
      onCancel={onCancel}
      destroyOnClose={true}
      width={430}
      isProcessing={true}
    >
      <div className="flex flex-col items-center">
        <img
          src={img}
          alt="Picture of the author"
          loading="lazy"
          className="object-cover w-full aspect-[1/1.5]"
        />
        <Button
          className="btn-primary text-white w-[277px] mt-[12px]"
          onClick={() => {
            onCancel();
          }}
        >
          Xong
        </Button>
      </div>
    </CustomModal>
  );
};

export default ViewRarity;
