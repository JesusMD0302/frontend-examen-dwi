"use client";

import { useAppContext } from "@/hooks/useAppContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { started } = useAppContext();

  useEffect(() => {
    if (!started) {
      router.replace("/");
    }
  }, [started, router]);

  return <>{children}</>;
}
