import QuestionsLayout from "@/layouts/QuestionsLayout";

export default function ExameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <QuestionsLayout>{children}</QuestionsLayout>;
}
