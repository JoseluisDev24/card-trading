"use client";

import { useEffect, useState } from "react";
import users from "@/data/users.json";
import { useUserStore } from "@/store/userStore";

export default function UserSwitcher() {
  const {setUser} = useUserStore();
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    const storedUser = useUserStore.getState().user;
    if (!storedUser) {
      const defaultUser = users[0];
      if (defaultUser) {
        setUser(defaultUser);
        setSelectedId(defaultUser.id);
      }
    }
  }, [setUser]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    const selected = users.find((u) => u.id === id);
    if (selected) {
      setUser(selected);
      setSelectedId(id);
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
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}
