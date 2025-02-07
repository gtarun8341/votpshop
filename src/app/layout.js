"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Define authentication pages
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <html lang="en">
      <body>
        {isAuthPage ? (
          // Auth pages (No Sidebar or Navbar)
          <div className="  bg-white-100">
            {children}
          </div>
        ) : (
          // Main layout with Sidebar and Navbar
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Navbar />
              <main className="p-6">{children}</main>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
