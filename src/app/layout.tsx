import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/Header";

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
      </body>
    </html>
  );
}
