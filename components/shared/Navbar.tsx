"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-black px-8 py-4 flex items-center justify-between">
      <Link
        href="/"
        className="text-2xl font-bold"
      >
        PrepAI
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/dashboard/coding">
          Coding
        </Link>

        <Link href="/dashboard/resume-analyzer">
          Resume AI
        </Link>

        <UserButton />
      </div>
    </nav>
  );
}