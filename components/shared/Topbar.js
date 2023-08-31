"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaUserAlt } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Topbar() {
  const [isConnected, setIsconnected] = useState(true);

  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        {/* <Image src="/assets/logo.svg" alt="logo" width={28} height={28} /> */}
        <p className="text-heading3-bold text-light-1 max-xs:hidden uppercase">
          Logo
        </p>
      </Link>
      <div className="flex items-center gap-3">
        <>
          {isConnected ? (
            <div>
              <Button className="bg-transparent text-white hover:bg-white/5 hover:text-white py-5  flex gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage />
                  <AvatarFallback className="bg-primary-500/20 text-primary-500 text-[14px] font-bold">
                    J
                  </AvatarFallback>
                </Avatar>{" "}
                <span>josue mbuyu</span>
              </Button>
            </div>
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
