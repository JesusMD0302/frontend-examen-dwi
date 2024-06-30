import type { Metadata } from "next";
import "./app.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { Container, ThemeProvider } from "@mui/material";
import theme from "./theme";
import AppLayout from "@/layouts/AppLayout";
import { AppProvider } from "@/context/AppContext";

export const metadata: Metadata = {
  title: "Examen App",
  description: "An app for exams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="main">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AppProvider>
              <AppLayout>
                <Container component="main" sx={{ flexGrow: "1" }}>
                  {children}
                </Container>
              </AppLayout>
            </AppProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
