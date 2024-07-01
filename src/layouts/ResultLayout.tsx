"use client";

import { useAppContext } from "@/hooks/useAppContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { finished } = useAppContext();

  useEffect(() => {
    if (!finished) {
      router.replace("/");
    }
  }, [finished, router]);

  return <>{children} </>;
}
