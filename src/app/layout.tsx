// Core
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Assets
import "./globals.css";
// Providers
import { BaseProvider } from "@/providers";
// Components
import { FloatingNav } from "@/components/ui/FloatingNavbar";
// Mock
import { navItems } from "@/data";

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
        {/* <BaseProvider>
          <FloatingNav navItems={navItems} />
          {children}
        </BaseProvider> */}
        <FloatingNav navItems={navItems} />
        {children}
      </body>
    </html>
  );
}
