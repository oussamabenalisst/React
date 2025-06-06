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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <nav className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li color="blue-gray" className="p-1 font-normal">
              <a href="/todoloste" className="flex items-center">
                todolist
              </a>
            </li>
            <li color="blue-gray" className="p-1 font-normal">
              <a href="./" className="flex items-center">
                Home
              </a>
            </li>
            <li color="blue-gray" className="p-1 font-normal">
              <a href="/addEtud" className="flex items-center">
                addEtud
              </a>
            </li>
            <li color="blue-gray" className="p-1 font-normal">
              <a href="/XO" className="flex items-center">
                XO
              </a>
            </li>
            <li color="blue-gray" className="p-1 font-normal">
              <a href="/tp2useRefuseState" className="flex items-center">
                tp2
              </a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
