import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "../components/Layout/Header/Header";
import WelcomeModal from "@/components/Modals/WelcomeModal";
import FixedMenu from "../components/Layout/FixedMenu/FixedMenu";
import Footer from "../components/Layout/Footer/Footer";


const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Trading Cards",
  description: "trading cards web site",
  openGraph: {
    title: "Card Trading",
    description: "Descubrí las mejores cartas de Pokémon y más",
    url: "https://card-trading-two.vercel.app",
    images: [
      {
        url: "https://card-trading-two.vercel.app/logoTrade.png", 
        width: 1200,
        height: 630,
        alt: "Vista previa de Mi Tienda Online",
      },
    ],
    type: "website",
  },
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
