"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(false);
  const router = useRouter();

  if (user) {
    router.push("dashboard");
  } else {
    router.push("login");
  }

  return (null);
}
