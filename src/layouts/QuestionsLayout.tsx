"use client";

import { useAppContext } from "@/hooks/useAppContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { started } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!started) {
      router.replace("/");
      return;
    }

    setIsLoading(false);
  }, [started, router]);

  return <>{!isLoading ? children : null}</>;
}
