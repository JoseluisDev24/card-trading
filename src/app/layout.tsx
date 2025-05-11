import { Nunito } from "next/font/google";
import "./globals.css";
import FixedMenu from "@/components/Layout/FixedMenu";
import Header from "@/components/Layout/Header";
// oush

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Trading Cards",
  description: "trading cards web site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        <main>{children}</main>
        <FixedMenu />
      </body>
    </html>
  );
}
