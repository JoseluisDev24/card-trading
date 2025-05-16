import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "../components/Layout/Header/Header";
import WelcomeModal from "@/components/Layout/Modals/WelcomeModal";
import FixedMenu from "../components/Layout/FixedMenu";
import Footer from "../components/Layout/Footer/Footer";


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
        <WelcomeModal />

        <main>{children}</main>
        <Footer />
        <FixedMenu />
      </body>
    </html>
  );
}
