import React from "react";
import { Navbar } from "./_components/navbar";
import { auth } from "@/auth";

export default async function Layout({ children }) {
  const session = await auth();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <Navbar session={session} />
      {children}
    </div>
  );
}
