"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginModal from "@/components/Login/LoginModal";

export default function LoginPage() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    router.push("/home");
  };

  return (
    <>
      <LoginModal open={open} onClose={handleClose} />
    </>
  );
}
