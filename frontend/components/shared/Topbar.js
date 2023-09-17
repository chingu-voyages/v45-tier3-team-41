// "use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FaUserAlt } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { currentUser } from "@clerk/nextjs";

export default async function Topbar() {
  const user = await currentUser();

  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 	">
          Movie Matcher
        </p>
      </Link>
      <div className="flex items-center gap-3">
        <>
          {user ? (
            <UserButton
            appearance={{
              baseTheme: dark,
            }}
              afterSignOutUrl="/"
            />
          ) : (
            <>
              <Link href="/sign-in">
                <Button className="bg-transparent py-5 px-[35px]">
                  Sign in
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-primary-500 py-5 px-[35px]">
                  <FaUserAlt className="mr-2 w-3 h-3" />
                  <span>Sign up</span>
                </Button>
              </Link>
            </>
          )}
        </>
      </div>
    </nav>
  );
}
