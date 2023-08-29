import Link from "next/link";
import React from "react";

export default function Bottombar() {
  return (
    <nav className="bottombar">
      <Link href="/faq" className="flex items-center gap-4">
        <p className=" text-light-1">FAQ</p>
      </Link>
      <Link href="/contact-us" className="flex items-center gap-4">
        <p className=" text-light-1">Contact us</p>
      </Link>
    </nav>
  );
}
