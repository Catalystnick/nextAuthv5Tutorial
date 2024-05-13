import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Header({ label }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4">
      <div className="flex items-center justify-center">
        <Image src="/authemoji.png" width={80} height={80} alt="icon" />
        <h1 className={cn("text-3xl font-semibold", font.className)}>Auth</h1>
      </div>

      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
