import ScrollToHash from "@/components/scroll";
import "./globals.css";

const title = "Midea Kinh Bắc - Điều hòa Midea Kinh Bắc";
const desc =
  "Khám phá điều hòa Midea chính hãng tại Kinh Bắc. Giá rẻ, bảo hành dài hạn, liên hệ ngay để được tư vấn!";
const img = "https://www.kinhbachvac.vn/assets/images/kgs.jpg";

export const metadata = {
  title,
  description: desc,
  keywords: [
    "dieu hoa",
    "điều hòa",
    "midea",
    "điều hòa midea kinh bắc",
    "mua điều hòa midea giá rẻ",
    "điều hòa kinh bắc uy tín",
    "midea kinh bắc chính hãng",
  ],
  openGraph: {
    title,
    description: desc,
    images: [
      {
        url: img,
        width: 1200,
        height: 630,
        alt: "Điều hòa Midea Kinh Bắc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: desc,
    images: [img],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <ScrollToHash />
        {children}
      </body>
    </html>
  );
}
