"use client";

import { useState } from "react";
import users from "@/data/users.json";
import { useUserStore } from "@/store/userStore";

export default function UserSwitcher() {
  const { setUser } = useUserStore();
  const [selectedId, setSelectedId] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelectedId(id);
    const selected = users.find((user) => user.id === id);
    if (selected) {
      setUser(selected);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <span className="text-gray-600 text-sm hidden sm:block">
        Change user:
      </span>
      <select
        value={selectedId}
        onChange={handleChange}
        className="border px-2 py-1 text-sm rounded"
      >
        <option value="" disabled>
          Select a user
        </option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}
