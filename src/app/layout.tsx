import type { Metadata } from "next";
import Font from "next/font/local";
import "./globals.css";

const custom_font = Font({ src: '../fonts/sfpro/bold.otf' });

export const metadata: Metadata = {
  title: "Musxfy",
  description: "Musxfy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={custom_font.className}>{children}</body>
    </html>
  );
}
