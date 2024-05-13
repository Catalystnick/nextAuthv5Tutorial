"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton({ children }) {
  const OnClick = () => {
    signOut();
  };

  return (
    <span onClick={OnClick} className="cursor-pointer">
      {children}
    </span>
  );
}
