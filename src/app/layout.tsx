import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { BaseProvider } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dmytro's Portfolio",
  description: "Modern Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <BaseProvider>{children}</BaseProvider>
      </body>
    </html>
  );
}
