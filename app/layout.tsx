import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajyavardhan Singh Rathore | Software Engineer",
  description:
    "Portfolio of Rajyavardhan Singh Rathore showcasing AI, Full Stack Development, and Software Engineering projects.",
  keywords: [
    "Rajyavardhan Singh Rathore",
    "Portfolio",
    "Software Engineer",
    "AI Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-[#101112] text-white">
        {children}

        {/* Noise Overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.04] mix-blend-soft-light"
          style={{
            backgroundImage: "url('/noise.svg')",
            backgroundRepeat: "repeat",
          }}
        />
      </body>
    </html>
  );
}