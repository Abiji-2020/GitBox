import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitBox",
  description: "A simple Git client for the mini group of people, to ease of use and access the Git repositories within the group."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{margin:"0", backgroundColor:"#e7e6e6"}}>{children}</body>
    </html>
  );
}
