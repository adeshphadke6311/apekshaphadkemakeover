import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { Toaster } from "react-hot-toast";

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
    <html lang="en" data-scroll-behavior="smooth">

      <body
        className={`${poppins.variable} ${playfair.variable} bg-[#050816] text-white antialiased`}
      >

        {/* TOAST NOTIFICATIONS */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,

            style: {
              background: "#111827",
              color: "#ffffff",
              border:
                "1px solid rgba(255,255,255,0.08)",
              padding: "14px 18px",
              borderRadius: "16px",
              fontSize: "14px",
            },

            success: {
              iconTheme: {
                primary: "#ff4fa3",
                secondary: "#ffffff",
              },
            },

            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#ffffff",
              },
            },
          }}
        />

        {children}
      </body>
    </html>
  );
}