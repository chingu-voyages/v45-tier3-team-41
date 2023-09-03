import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaAngleRight, FaUserAlt } from "react-icons/fa";

export default function page() {
  return (
    <div className="text-center relative max-w-2xl mx-auto">
      <h1 className="text-light-1 text-heading1-bold">
        Discover Your Next Favorite Movie with a Friend
      </h1>
      <h4 className="sub-title text-white text-[20px] md:text-[24px] leading-[1.13] mt-[27px] mb-[28px] font-normal">
        Enjoy anywhere. savor entertainment together
      </h4>
      <p className="text-white font-[17px] mb-[20px]">
        Ready to Match? Create Your Account or Sign In to Get Started.
      </p>
      <Link href="/sign-up">
        <Button className="bg-primary-500 py-6 px-[35px] rounded-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200">
          <span> Get started</span>
          <FaAngleRight className="ml-2" />
        </Button>
      </Link>
    </div>
  );
}
