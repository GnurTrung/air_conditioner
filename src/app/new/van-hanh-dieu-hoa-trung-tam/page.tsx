"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Page() {
  const items = [
    "Dàn nóng",
    "Các dàn lạnh",
    "Ống tách",
    "Thiết bị chia môi chất lạnh – Header",
    "Bộ chia môi chất lạnh – Refrigerant branch unit",
    "Bộ cảm biến",
    "Bộ điều khiển có dây và không dây",
    "Bộ điều khiển trung tâm",
    "Bộ điều khiển PC",
  ];
  return (
    <div>
      <Header />
      <div className="layout py-20 sm:max-w-[50%]">
        <h1 className="text-3xl font-bold text-font-title">
          Thông tin cơ bản về quy trình vận hành hệ thống điều hòa trung tâm
        </h1>
        <p className="text-gray-600 text-end mb-4">Cập nhật ngày: 20/04/2024</p>
        <span className="text-gray-600 italic">
          Điều hòa trung tâm là hệ thống điều hòa đồ sộ và phức tạp với khả năng
          kết nối lên tới 64 dàn lạnh khác nhau. Vì thế, kỹ thuật viên ngành
          điện lạnh cần nắm rõ về nguyên lý hoạt động và quy trình vận hành hệ
          thống điều hòa trung tâm để đảm bảo hệ thống hoạt động ổn định và quá
          trình bảo trì, sửa chữa tại các công trình diễn ra thuận lợi.
        </span>
        <img
          src="/assets/images/news/vrf_1.webp"
          alt="Tấm Panel PU"
          className="w-full rounded-lg my-6 max-h-[500px] object-cover"
        />

        <div className="mx-auto py-10 space-y-6 text-gray-800">
          <h1 className="text-3xl font-bold text-blue-800 text-font-title">
            Sơ lược về kết cấu hệ thống điều hòa trung tâm
          </h1>

          <p>Gồm các thiết bị như:</p>

          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-2">
          {/* Tiêu đề chính */}
          <h1 className="text-2xl font-bold text-blue-800 mb-4 text-font-title">
            Quy trình vận hành hệ thống điều hòa trung tâm
          </h1>

          {/* Đoạn giới thiệu */}
          <p className="text-gray-800 mb-6">
            Cần lưu ý, để hệ thống điều hòa trung tâm vận hành trơn tru, kỹ
            thuật viên cần có kiến thức về chuyên môn và hiểu rõ nguyên lý hoạt
            động của hệ thống trước khi thực hiện. Quy trình vận hành hệ thống
            điều hòa trung tâm gồm 4 bước với các thao tác thực hiện chuẩn kỹ
            thuật như sau:
          </p>

          <section className="prose max-w-none prose-ul:list-disc prose-li:marker:text-black text-gray-800 space-y-4">
            <h2 className="text-3xl font-bold text-blue-800 text-font-title">
              Bước 1: Kiểm tra hệ thống
            </h2>
            <p>
              Kiểm tra toàn bộ hệ thống là bước quan trọng nhất trước khi vận
              hành để đảm bảo điều hòa chạy ổn định và không xảy ra các sự cố
              nghiêm trọng. Kỹ thuật viên sẽ thực hiện kiểm tra 3 yếu tố chính
              sau:
            </p>

            <h3 className="text-2xl font-bold text-blue-800 text-font-title">
              Kiểm tra nhiệt độ và môi trường
            </h3>
            <p>
              Để hệ thống điều hòa trung tâm có hiệu suất hoạt động tốt nhất,
              các yếu tố môi trường cần đạt tiêu chuẩn sau:
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-1 px-4">
              <li>
                <strong>Nhiệt độ không khí ngoài trời:</strong> Trong ngưỡng từ
                -15 đến 46 độ C.
              </li>
              <li>
                <strong>Nhiệt độ môi trường:</strong> Từ -5 đến 43 độ C.
              </li>
              <li>
                <strong>Nhiệt độ trong phòng:</strong> Khoảng từ 21 đến 32 độ C
                với độ ẩm dưới 80%.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-blue-800 text-font-title">
              Kiểm tra nguồn điện hệ thống
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1 px-4">
              <li>
                <strong>Nguồn điện cấp cho dàn nóng:</strong>
                <ul className="list-disc list-inside text-gray-800 space-y-1 px-4">
                  <li>
                    Điện áp 380V/50Hz/3 pha, có đủ dây pha và dây trung tính.
                  </li>
                  <li>
                    Dải điện áp phải được phép dao động trong khoảng ±10%.
                  </li>
                  <li>Thứ tự pha phải chính xác, tránh hiện tượng đảo pha.</li>
                </ul>
              </li>
              <li>
                <strong>Nguồn điện cấp cho dàn lạnh:</strong>
                <ul className="list-disc list-inside text-gray-800 space-y-1 px-4">
                  <li>Điện áp tiêu chuẩn 220V (±10%).</li>
                  <li>
                    Nguồn điện phải đảm bảo ổn định trong suốt quá trình vận
                    hành.
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-blue-800 text-font-title">
              Kiểm tra các thiết bị của hệ thống
            </h3>
            <p>
              Kỹ thuật viên cần kiểm tra thiết bị của hệ thống ở 3 trường hợp
              sau: lần vận hành đầu tiên, sau thời gian dài không sử dụng và khi
              hệ thống điều hòa bất thường. Từng cụ thể thiết bị cần kiểm tra
              như sau:
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-1 px-4">
              <li>
                <strong>Dàn nóng:</strong> Đảm bảo nguồn điện cung cấp đạt 380V,
                tần số 50Hz và có đầy đủ 3 pha cùng dây trung tính.
              </li>
              <li>
                <strong>Trình tự pha:</strong> kiểm tra chính xác thứ tự các pha
                cấp nguồn điện.
              </li>
              <li>
                <strong>Dàn lạnh:</strong>
                <ul className="list-disc list-inside text-gray-800 space-y-1 px-4">
                  <li>
                    Kiểm tra nguồn điện 1 pha 220V và bật optomát để cấp nguồn
                    cho dàn lạnh. Đèn <strong>Operation</strong> sáng khi thiết
                    bị hoạt động và nhấp nháy khi chờ chế độ chờ.
                  </li>
                  <li>
                    Kiểm tra sự{" "}
                    <span className="text-yellow-600 font-bold">liên kết</span>{" "}
                    giữa dàn nóng và dàn lạnh. Nếu đèn <strong>Time</strong>{" "}
                    trên dàn lạnh nhấp nháy, có thể dàn lạnh đã mất liên kết với
                    dàn nóng.
                  </li>
                  <li>
                    Kiểm tra đường ống đồng giữa các dàn có được kết nối an
                    toàn.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Ống tách hơi:</strong> Sau một chu kỳ vận hành, cần kiểm
                tra xem dàn lạnh và ống tách hơi có xảy ra rò rỉ không.
              </li>
            </ul>
          </section>
        </div>

        <img
          src="/assets/images/news/vrf.jpg"
          alt="Tấm Panel PU"
          className="w-full rounded-lg my-6 max-h-[500px] object-cover"
        />

        <section className="prose max-w-none prose-ul:list-disc prose-li:marker:text-black text-gray-800 space-y-4">
          <h2 className="text-3xl font-bold text-blue-800 text-font-title">
            Bước 2: Khởi động hệ thống
          </h2>
          <p>Kỹ thuật viên cần tuân theo các bước khởi động hệ thống sau:</p>
          <ul className="list-disc list-inside text-gray-800 space-y-1 px-4">
            <li>
              Đảm bảo dàn lạnh và dàn nóng đều được cấp đủ nguồn điện cần thiết.
              Trong trường hợp có nhiều hệ thống điều hòa trung tâm độc lập, cần
              cấp nguồn cho tất cả các dàn lạnh và dàn nóng thuộc cùng hệ thống,
              tránh xung đột nguồn điện giữa các hệ thống khác nhau.
            </li>
            <li>
              Điều chỉnh chế độ hoạt động (làm lạnh, sưởi, tốc độ quạt, nhiệt
              độ) phù hợp với từng phòng thông qua:
              <ul className="list-disc list-inside text-gray-800 space-y-1 px-4">
                <li>Bộ điều khiển từ xa đi kèm với từng dàn lạnh.</li>
                <li>
                  Bộ điều khiển trung tâm để thiết lập các chế độ cho toàn hệ
                  thống.
                </li>
              </ul>
            </li>
            <li>
              Sử dụng nút <strong>ON/OFF</strong> trên bộ điều khiển để kích
              hoạt hoạt động của dàn lạnh tại khu vực mong muốn.
            </li>
          </ul>

          <h4 className="text-base text-blue-600 text-font-title mt-6">
            Lưu ý quan trọng:
          </h4>
          <ul className="list-disc list-inside text-gray-800 space-y-1 px-4">
            <li>
              Nếu không có báo lỗi từ dàn lạnh hoặc dàn nóng, hệ thống đang hoạt
              động bình thường.
            </li>
            <li>
              Sau khi dàn lạnh khởi động, cần kiểm tra dàn nóng và luồng không
              khí từ dàn lạnh.
            </li>
            <li>
              Tất cả dàn lạnh trong cùng một hệ thống phải hoạt động ở chế độ
              giống nhau (làm lạnh hoặc sưởi).
            </li>
            <li>
              Trong trường hợp có sự xung đột chế độ giữa các dàn lạnh, dàn lạnh
              sẽ dừng hoạt động và hiển thị báo lỗi. Cách khắc phục là kiểm tra
              lại và chuyển chế độ giống nhau cho tất cả dàn lạnh về cùng một
              chế độ làm lạnh hoặc sưởi.
            </li>
            <li>
              Tại chế độ làm lạnh, quạt của dàn lạnh sẽ hoạt động ngay lập tức
              và phát hơi lạnh. Trong chế độ sưởi, quạt sẽ vận hành để trung hòa
              nhiệt độ, đợi 3 – 5 phút trước khi dàn lạnh bắt đầu thổi hơi nóng.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-blue-800 text-font-title">
            Bước 3: Dừng hệ thống
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1 px-4">
            <li>
              <strong>Tắt hệ thống:</strong>
              <ul className="list-disc list-inside text-gray-800 space-y-1 px-4">
                <li>
                  Sử dụng điều khiển từ xa hoặc bộ điều khiển trung tâm để tắt
                  máy bằng cách nhấn nút <strong>ON/OFF</strong> (khởi động/tắt
                  máy).
                </li>
                <li>
                  Trong trường hợp có một số dàn lạnh cần tắt, bạn có thể thao
                  tác trực tiếp trên bộ điều khiển dàn lạnh tương ứng mà không
                  ảnh hưởng đến các dàn lạnh khác.
                </li>
              </ul>
            </li>
            <li>
              <strong>Cắt nguồn điện:</strong> Chỉ cắt nguồn điện khi dàn lạnh
              không được sử dụng trong thời gian dài. Tránh ngắt điện đột ngột
              khi hệ thống đang vận hành để bảo vệ thiết bị.
            </li>
          </ul>

          <h4 className="text-base text-blue-800 text-font-title mt-6">
            Lưu ý quan trọng:
          </h4>
          <ul className="list-disc list-inside text-gray-800 space-y-1 px-4">
            <li>
              Bạn chỉ được phép chạy hoặc tắt hoạt động của dàn lạnh bằng bộ
              điều khiển của dàn lạnh đó.
            </li>
            <li>
              Không nên ngắt điện và optomat khi hệ thống đang vận hành vì dễ
              gây hỏng dàn nóng và dàn lạnh.
            </li>
            <li>
              Nếu xảy ra mất điện, hệ thống sẽ khôi phục trạng thái hoạt động
              sau khi nguồn được cấp trở lại.
            </li>
            <li>
              Dàn lạnh có thiết bị tự như: dĩa, két nước sẽ dừng trễ vài phút.
            </li>
            <li>
              Các dàn lạnh phải hoạt động chung 1 chế độ sưởi ấm hay làm lạnh,
              tuyệt đối không cài đặt lẫn lộn các chế độ khác nhau.
            </li>
          </ul>
        </section>

        <section className="prose max-w-none prose-ul:list-disc prose-li:marker:text-black text-gray-800 space-y-4 mt-4">
          <h2 className="text-3xl font-bold text-blue-800 text-font-title">
            Bước 4: Vệ sinh, bảo trì
          </h2>
          <p>
            Hệ thống điều hòa trung tâm cần được bảo dưỡng định kỳ để đảm bảo
            vận hành ổn định, duy trì hiệu suất cao và kéo dài tuổi thọ thiết
            bị. Các lưu ý quan trọng cần biết như sau:
          </p>

          <h4 className="text-base font-bold text-blue-800 text-font-title mt-4">
            Bảo dưỡng định kỳ
          </h4>
          <ul className="list-disc list-inside text-gray-800 space-y-1 px-4">
            <li>
              <strong>Thời gian bảo dưỡng:</strong> Theo khuyến nghị từ chuyên
              gia, hệ thống nên được bảo dưỡng mỗi 6–12 tháng.
            </li>
            <li>
              <strong>Môi trường đặc thù:</strong> Nếu hệ thống hoạt động ở khu
              vực gần biển hoặc nơi có môi trường ô nhiễm, khả năng ăn mòn và
              hao mòn thiết bị rất cao. Trong trường hợp này, nên thực hiện bảo
              dưỡng ít nhất mỗi 6 tháng/lần để duy trì hiệu suất ổn định.
            </li>
            <li>
              <strong>Các công việc bảo dưỡng thường thực hiện:</strong>
              <ul>
                <li>Vệ sinh và thay thế bộ lọc không khí.</li>
                <li>
                  Kiểm tra và điều chỉnh cân bằng điện, điều khiển và linh kiện
                  quan trọng.
                </li>
                <li>
                  Đảm bảo các bộ phận vận hành trơn tru, không có dấu hiệu hao
                  mòn bất thường.
                </li>
              </ul>
            </li>
          </ul>

          <h4 className="text-base font-bold text-blue-800 text-font-title mt-4">
            Bảo dưỡng khi phát hiện sự cố
          </h4>
          <p>
            Nếu nhận thấy bất kỳ dấu hiệu bất thường nào sau đây, cần{" "}
            <strong>liên hệ</strong> ngay dịch vụ bảo dưỡng chuyên nghiệp:
          </p>
          <ul>
            <li>Điều hòa không làm mát hoặc hoạt động yếu.</li>
            <li>
              Hệ thống ngưng hoạt động, bị rò rỉ nước hoặc tắc nghẽn ống thoát
              nước.
            </li>
            <li>
              Sự cố điện như mạch điện hở, chập chờn hoặc van điều khiển trục
              trặc.
            </li>
          </ul>
        </section>
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
      <Footer />
    </div>
  );
}
