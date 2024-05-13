import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "../lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function HomePage() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6">
        <div className="flex items-center justify-between text-center">
          <Image src="/authemoji.png" width={100} height={100} alt="icon" />
          <h1
            className={cn(
              "text-6xl font-semibold text-white drop-shadow-md",
              font.className,
            )}
          >
            AUTH
          </h1>
        </div>
        <p className="text-lg text-white">A simple authentication service</p>
        <div className="flex justify-center">
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
