"use client";

import { useAppContext } from "@/hooks/useAppContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { finished } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!finished) {
      router.replace("/");
      return;
    }
    setIsLoading(false);
  }, [finished, router]);

  return <>{!isLoading ? children : null}</>;
}
