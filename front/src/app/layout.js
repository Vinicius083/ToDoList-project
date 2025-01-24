"use client";
import { Inter } from "next/font/google";
import "./global.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playwrite+IN:wght@100..400&display=swap" />
      </head>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}