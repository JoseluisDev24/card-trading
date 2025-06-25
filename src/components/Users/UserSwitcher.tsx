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
    onSelectUser(id); }

  return (
    <div className="mb-4">
      <label className="text-sm font-medium mr-2">User</label>
      <select
        onChange={handleChange}
        value={selectedId}
        className="border px-2 py-1 rounded"
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
