import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";


const inter = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Navarrete Science",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-dvh`} >{children}</body>
    </html>
  );
}
