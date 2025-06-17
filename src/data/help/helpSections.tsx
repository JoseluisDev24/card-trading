import Link from "next/link";
import ProtectionTabs from "@/components/help/ProtectionTabs";

export const sections = [
  {
    title: "How it works",
    content: (
      <div className="flex flex-col">
        <p className="text-3xl font-bold pt-6">How does Trade Up work? </p>
        <p className="text-lg">
          TradeUp reduces the risk of fraud by acting as a trusted plataform
          that facilitates secure transactions. It ensures both parties are
          satisfied before completing the trade
        </p>
        <p className="text-2xl font-bold pt-6 pb-4">1. Initiate Trade</p>
        <p>
          Anyone with a lsiting can start a trade on TradeUp. After{" "}
          <Link href={"/"} className="text-orange-600 font-bold">
            signing up
          </Link>
          , follofw the prompts to add{" "}
          <Link href={"/"} className="text-orange-600 font-bold">
            your first listing
          </Link>{" "}
          and start trading!
        </p>
        <p className="text-2xl font-bold py-2">2. Process Holds</p>
        <p>
          Once a trade is accepted, both parties submit a security deposit equal
          to the estimated value of the item they are reciving derectly to
          TradeUp.
        </p>
      </div>
    ),
  },
  {
    title: "Security",
    content: (
      <div className="flex flex-col w-full">
        <p className="text-3xl font-bold pt-6 text-center">
          Discover the safest path to your trade
        </p>
        <ProtectionTabs />
      </div>
    ),
  },
  {
    title: "FAQ",
    content: (
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold pt-12">Frequently Asked Questions</p>
          <p className="text-lg">
            Here are some common questions we get asked about TradeUp
          </p>
        </div>

        <ul className="list-disc pl-6 pt-4">
          <li>
            <Link href={"/"} className="text-orange-600 font-bold">
              How do I start a trade?
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-orange-600 font-bold">
              What items can I trade?
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-orange-600 font-bold">
              How does the security deposit work?
            </Link>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "About us",
    content: (
      <div className="flex flex-col py-4">
        <p className="text-3xl font-bold pt-6">Our Story</p>
        <p className="text-lg pt-4 font-bold leading-tight">
          We dreamt of a world where communities could safely and easily barter
          their belongings.
        </p>
        <p className="text-lg pt-6 leading-tight">
          Existing platforms fell short. We saw a gap: no safe way to trade.
          Hundreds of enticing trade requests, but no safe way to accept them.
          Scams on Facebook Marketplace, Reddit, and Instagram highlighted the
          need for a secure trading platform.
        </p>
        <p className="text-3xl font-bold pt-6">Why We&apos;re Here</p>
        <p className="text-lg pt-4 font-bold leading-tight">
          TradeUp was born from necessity. Traders needed safety and structure;
          we built it.
        </p>
        <p className="text-lg pt-4">
          Our mission is to offer groundbreaking protection for trades without
          high fees. We saw the need for a structured, secure system to
          facilitate trades, so we built one.
        </p>
        <p className="text-3xl font-bold pt-6">Join Us</p>
        <p className="text-lg pt-4 font-bold leading-tight">
          Experience the future of commerce with TradeUp.
        </p>
        <p className="text-lg pt-4">
          Our mission is to offer groundbreaking protection for trades without
          high fees. We saw the need for a structured, secure system to
          facilitate trades, so we built one.
        </p>
        <p className="text-lg pt-4">
          <Link href={"/"} className="text-orange-600 font-bold">
            {" "}
            Sign up
          </Link>{" "}
          today and be part of a trusted community where trading is safe,
          simple, and rewarding.
        </p>
      </div>
    ),
  },
];
