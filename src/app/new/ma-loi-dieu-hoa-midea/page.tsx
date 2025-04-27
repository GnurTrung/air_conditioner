"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Page() {
  const items = [
    {
      title: "Mã lỗi E1 của điều hòa midea",
      des: "E1 là ký hiệu báo lỗi cảm biến nhiệt độ phòng. Khi điều khiển điều hòa báo lỗi này; việc nên làm là kiểm tra giắc cắm giữa bo mạch và đầu nối cảm biến. Đội thợ sửa điều hòa sẽ dùng dụng cụ đo chuyên dụng để đo giá trị điện trở của cảm biến. Ban đầu, lỗi này sẽ được khắc phục bằng cách thay cảm biến. Nếu không được, lỗi sẽ được khắc phục bằng các thay bo mạch dàn lạnh.",
    },
    {
      title: "Mã lỗi E2 của điều hòa midea",
      des: "Trong bảng mã lỗi điều hòa midea, đây là lỗi tín hiệu kết nối từ bo mạch. Để khắc phục lỗi này, bạn cần kiểm tra dây điện kết nối tín hiệu; kiểm tra nguồn hoặc tháo bo mạch ra cắm lại hoặc thay bo mạch mới.",
    },
    {
      title: "Mã lỗi E3 của điều hòa midea",
      des: "Kỹ hiệu E3 xuất hiện trên điều khiển điều hòa khi thiết bị mắc lỗi cấp nguồn cho dàn lạnh. Trong trường hợp này, bạn cần kiểm tra đường điện kết nối tín hiệu; dùng tay xoay motor hoặc thay motor cho dàn lạnh.",
    },
    {
      title: "Mã lỗi E4 của điều hòa midea",
      des: "Trong bảng mã lỗi điều hòa midea  cũng có lỗi E4 thường gặp. Đây là lỗi báo điện áp hoặc nguồn điện có vấn đề. Không có cách nào khắc để thay đổi tình trạng này ngoài việc kiểm tra điện áp ra từ nơi cấp điện.",
    },
    {
      title: "Mã lỗi E5 của điều hòa midea",
      des: "Ký hiệu E5 báo cảm biến nhiệt độ dàn lạnh bị lỗi. Trong trường hợp này khách hàng nên chủ động báo lên trung tâm bảo hành của hãng. Nếu hết bảo hành bạn nên gọi thợ chuyên nghiệp đến sửa chữa.",
    },
    {
      title: "Mã lỗi E6 của điều hòa midea",
      des: "Đây là lỗi thể hiện cảm biến nhiệt độ dàn lạnh bị chập điện. Bạn nên kiểm tra giắc cắm của cảm biến tại bo mạch; kiểm tra điện trở cảm biến hoặc thay thế bo mạch cho dàn lạnh.",
    },
    {
      title: "Mã lỗi E7 của điều hòa midea",
      des: "Lỗi này xuất hiện khi cảm biến nhiệt độ dàn lạnh bị chập điện. Cách khắc phục cũng như lỗi E6 trong bảng mã lỗi điều hòa midea.",
    },
    {
      title: "Mã lỗi EC của điều hòa midea",
      des: "Lỗi EC là lỗi liên quan đến áp suất gas và đường ống. Nguyên nhân có thể do: hở gas gây xì gas,; hay thiếu gas; đường ống bị móp làm nghẹt gas,…Cách khắc phục là kiểm tra đầu giắc co hay đường ống. Nếu đúng nguyên nhân do đường ống thì cần đi lại bộ phận này.",
    },
  ];
  return (
    <div>
      <Header />
      <div className="layout py-24 sm:max-w-[50%]">
        <h1 className="text-3xl font-bold text-font-title">
          Bảng mã lỗi điều hòa media mới nhất
        </h1>
        <p className="text-gray-600 text-end mb-4">Cập nhật ngày: 28/04/2024</p>
        <span className="text-gray-600 italic">
          Một trong số những thương hiệu điều hoa được các gia đình có thu nhập
          trung bình lựa chọn nhiều nhất là Midea. Ưu điểm lớn nhất của điều hòa
          Midea là giá thành rẻ; công suất đa dạng. Nhưng trong quá trình sử
          dụng, sẽ có lúc sản phẩm bị lỗi; gây bất tiện trong cuộc sống. Đây là
          lý do nếu đang dùng dòng sản phẩm này bạn cần biết bảng mã lỗi điều
          hòa midea.
        </span>
        <img
          src="/assets/images/news/midea_loi.jpg"
          alt="Tấm Panel PU"
          className="w-full rounded-lg my-6 max-h-[500px] object-cover"
        />

        <div className="mx-auto py-10 space-y-6 text-gray-800">
          <h1 className="text-3xl font-bold text-blue-800 text-font-title">
            Mã lỗi thường gặp ở điều hòa treo tường Midea
          </h1>

          {items?.map((item: any, index: any) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-2 text-font-title">
                {item?.title}
              </h2>
              <div className="list-disc pl-6 space-y-2">{item?.des}</div>
            </div>
          ))}

          <img
            src="/assets/images/news/midea_loi2.jpg"
            alt="Tấm Panel PU"
            className="w-full rounded-lg my-6 max-h-[500px] object-cover"
          />

          <h1 className="text-3xl font-bold text-blue-800 text-font-title">
            Mã lỗi thường gặp ở điều hòa âm trần Midea
          </h1>

          <ul className="list-disc list-inside space-y-3 text-gray-800">
            <li>Mã lỗi E0: Dây tín hiệu chạm dây khác.</li>
            <li>Mã lỗi E1: Lắp sai dây kết nối trong ngoài.</li>
            <li>Mã lỗi E2+: Lỗi cảm biến không khí.</li>
            <li>Mã lỗi E3+: Lỗi cảm biến dàn trong nhà.</li>
            <li>Mã lỗi E4+: Lỗi cảm biến dàn ngoài trời.</li>
            <li>
              Mã lỗi F4 , ED , E6+: Lỗi pha, lỗi áp suất và lỗi dây tín hiệu.
            </li>
            <li>Mã lỗi E7: Lỗi ChipSet, lỗi bo mạch.</li>
            <li>Mã lỗi E5 , EE , E8+: Lỗi công tắc kiểm soát mức nước.</li>
            <li>Mã lỗi EB: Lỗi tốc độ motor máy trong.</li>
            <li>Mã lỗi F1, F2: Lỗi LED hiển thị, dây kết nối LED.</li>
            <li>Mã lỗi F3: Lỗi kết nối dây máy trong.</li>
          </ul>

          <div className="pt-6">
            <h3 className="text-[28px] font-semibold text-gray-900 text-font-title">
              Thông tin liên hệ:
            </h3>
            <div className="mt-2 space-y-1">
              <p>
                <strong>CÔNG TY TNHH Ngôi Sao Xanh Kinh Bắc</strong>
              </p>
              <p>
                <strong>Địa chỉ:</strong> LK36-09, Khu đô thị Sing Garden, Phù
                Chẩn, Từ Sơn, Bắc Ninh
              </p>
              <p>
                <strong>SDT:</strong> 0868 632 999
              </p>
              <p>
                <strong>Email:</strong> ngoisaoxanhkinhbac@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
