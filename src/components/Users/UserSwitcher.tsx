"use client";

import { useEffect, useState } from "react";
import users from "@/data/users.json";
import type { User } from "@/types/User";
import { setCurrentUserId, getCurrentUserId } from "@/utils/auth";

type Props = {
  onSelectUser: (userId: string) => void;
};

export default function UserSwitcher({ onSelectUser }: Props) {
  const [selectedId, setSelectedId] = useState<string>("");

  useEffect(() => {
    const storedId = getCurrentUserId();
    if (storedId) {
      setSelectedId(storedId);
      onSelectUser(storedId);
    } else {
      setSelectedId("1");
      setCurrentUserId("1");
      onSelectUser("1");
    }
  }, [onSelectUser]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelectedId(id);
    setCurrentUserId(id);
    onSelectUser(id);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-500 text-md hidden sm:block">Select User:</span>
      <select
        onChange={handleChange}
        value={selectedId}
        className="border border-gray-300 bg-white text-gray-700 rounded-md text-sm px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-sm"
        style={{
          height: "32px",
          minWidth: "110px",
        }}
      >
        {users.map((user: User) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}
