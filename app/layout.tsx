import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sajshringar by Apeksha",
  description:
    "Professional bridal makeup artist, Aari work classes, Nath & jewellery making, and training academy.",
  keywords: [
    "bridal makeup",
    "makeup artist",
    "aari work classes",
    "bridal makeup khopoli",
    "HD makeup",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfair.variable} bg-[#050816] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}