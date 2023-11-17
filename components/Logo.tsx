import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Link from "next/link";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="transition hover:opacity-75 hidden items-center md:flex gap-x-2">
        <Image src="/logo.svg" alt="Taskify" width={40} height={40} />
        <p
          className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}
        >
          Trello
        </p>
      </div>
    </Link>
  );
};

