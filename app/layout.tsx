import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { bgPrimary } from "@/components/tokens";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home of ecommerce",
  description: "My ecommerce is fantastic. Go with me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bgPrimary}`}>{children}</body>
    </html>
  );
}
