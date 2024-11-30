import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: "variable", style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Break the Division",
  description: "We have a mission to close the digital divide. Learn more about us on our website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <main className="h-screen w-screen px-8 md:px-24 py-20">
          <div className="fixed top-0 left-0 p-8 bg-primary w-screen flex gap-8 justify-between z-50">
            <a href="/" className="font-bold text-lg">Break the Division</a>
            <div className="flex gap-8">
              <a href="/map">wifi map</a>
              <a href="/digital-literacy">digital literacy</a>
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
