const AboutVAC = () => {
  const features = [
    { icon: "/assets/images/feat1.png", title: "Chuyên nghiệp – Uy tín" },
    { icon: "/assets/images/feat2.png", title: "Không thông qua trung gian" },
    { icon: "/assets/images/feat3.png", title: "Báo giá Concept miễn phí" },
    { icon: "/assets/images/feat4.png", title: "Dự toán công trình chặt chẽ, chính xác" },
    { icon: "/assets/images/feat5.png", title: "Thiết kế sát với thực tế công trình" },
    { icon: "/assets/images/feat6.png", title: "Quy trình làm việc khoa học" },
  ];
  return (
    <section id="vac" className="layout mt-6 pb-10">
      <img
        src={"/assets/images/vac.jpg" as any}
        alt="World map"
        className="object-cover w-full"
      />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-red-600 text-xl font-bold mb-4">
          ❤️ NHẬN SỬA ĐIỀU HÒA - LẮP ĐIỀU HÒA - BẢO DƯỠNG ĐIỀU HÒA ❤️ 
        </h1>

        <p className="mb-2">
          Công ty TNHH Ngôi sao xanh Kinh Bắc tự hào là nhà cung cấp dịch vụ lắp đặt, sửa chữa
          điều hòa Midea hàng đầu.
        </p>
        {/* <p className="mb-4">
          block điều hòa và máy nén lạnh giá rẻ . Ngoài ra chúng tôi còn nhận
          dịch vụ lắp đặt , bảo dưỡng , kho lạnh , điều hòa công nghiệp , máy
          làm mát chiller với giá cả cạnh tranh trên thị trường hiện nay.
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              {/* Placeholder image (can be replaced later) */}
              {/* <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center"> */}
                <img src={feature.icon || ""} alt="" className="w-10 h-10" />
              {/* </div> */}
              <span className="text-sm font-medium">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutVAC;
