"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function BackButton({ href, label }) {
  return (
    <Button variant="link" className="w-full font-normal" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
