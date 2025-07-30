"use client";

import TradesTabs from "@/components/trades/TradesTabs";
import { useUserStore } from "@/store/userStore";
import UserSwitcher from "@/components/Users/UserSwitcher";

export default function TradesPage() {
  const { user } = useUserStore();

  if (!user)
    return (
      <div>
        <p className="p-4 text-gray-600">Select user</p>
        <UserSwitcher />
      </div>
    );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trades</h1>
      <TradesTabs currentUserId={user.id} />
    </div>
  );
}
