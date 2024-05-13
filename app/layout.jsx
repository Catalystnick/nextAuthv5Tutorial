import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>
          <Toaster />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
