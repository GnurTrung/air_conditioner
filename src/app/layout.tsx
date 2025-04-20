import "./globals.css";

const title = "Midea Kinh Bắc - Điều hòa Midea Kinh Bắc";
const desc = "Midea Kinh Bắc - Điều hòa Midea Kinh Bắc";
const img = "/assets/images/vac.jpg";

export const metadata = {
  title: title,
  description: desc,
  keywords: [
    "dieu hoa",
    "điều hòa",
    "midea",
    "điều hòa midea",
    "điều hòa kinh bắc",
    "điều hòa midea kinh bắc",
    "midea kinh bắc",
  ],
  openGraph: {
    title: title,
    description: desc,
    images: img,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
