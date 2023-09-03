import SignUp from "@/components/forms/SignUp";
import Image from "next/image";

export default function page() {
  return (
    <main className="max-w-lg mx-auto">
      <div className="bg-dark-2 rounded-xl shadow-lg px-10 py-14 space-y-7 border border-dark-3">
        {/* Logo App */}
        <Image
          className="mx-auto"
          src="/assets/logo.svg"
          alt="logo"
          width={40}
          height={40}
        />

        {/* Title */}
        <h1 className="head-text text-center">Sign Up</h1>

        {/* Description */}
        <p className="text-base-regular text-light-2 text-center">
          Hey, please fill the form to create your Movie Matcher account
        </p>

        {/* Calling the Sign Up Form */}
        <div className="mt-10">
          <SignUp />
        </div>
      </div>
    </main>
  );
}
