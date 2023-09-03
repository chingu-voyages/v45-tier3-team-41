import ContactUs from "@/components/forms/ContactUs";
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
        <h1 className="head-text text-center">Contact Us</h1>

        {/* Description */}
        <p className="text-base-regular text-light-2 text-center">
          Please let us know how can we help you
        </p>

        {/* Calling the Contact Us Form */}
        <div className="mt-10">
          <ContactUs />
        </div>
      </div>
    </main>
  );
}
