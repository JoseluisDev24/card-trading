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
      <select
        value={selectedId}
        onChange={handleChange}
        className="text-md rounded cursor-pointer focus:outline-none text-[#001F3F] font-bold"
      >
        <option value="" disabled>
          Change user
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
