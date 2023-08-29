import SignIn from "@/components/forms/SignIn";
import Image from "next/image";

export default function page() {
  return (
    <main className="max-w-lg mx-auto">
      <div className="bg-dark-2 rounded-xl shadow-lg px-10 py-14 space-y-7 border border-dark-3">
        <Image
          className="mx-auto"
          src="/assets/logo.svg"
          alt="logo"
          width={40}
          height={40}
        />
        <h1 className="head-text text-center">Sign In</h1>
        <p className="text-base-regular text-light-2 text-center">
          Hey, Enter your details to get sign in to your Movie Matcher account
        </p>
        <div className="mt-10">
          <SignIn />
        </div>
      </div>
    </main>
  );
}
