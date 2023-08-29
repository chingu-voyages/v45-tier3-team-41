import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          Movie Matcher
        </p>
      </Link>
      <div className="flex items-center gap-3">
        <Link href="/sign-in">
          <Button className="bg-transparent">Sign in</Button>
        </Link>
        <Link href="/sign-up">
          <Button className="bg-primary-500">Sign up</Button>
        </Link>
      </div>
    </nav>
  );
}
