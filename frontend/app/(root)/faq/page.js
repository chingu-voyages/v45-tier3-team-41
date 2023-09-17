import React from "react";
import Image from "next/image";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function page() {
  return (
    <main className="max-w-lg mx-auto">
      <div className="h-28"></div>
      <div className=" bg-dark-2 rounded-xl shadow-lg mx-1.5 px-10 py-14 mb-5 space-y-7 border border-dark-3">
        
        {/* Logo App */}
        <Image
          className="mx-auto"
          src="/assets/logo.svg"
          alt="logo"
          width={40}
          height={40}
        />

        {/* Title */}
        <h1 className="head-text text-center">FAQ</h1>
        
        {/* Description */}
        <p className="text-base-regular text-light-2 text-center">
          If you can not find answer to your question here please contact us
        </p>
        <div>
      
        {/* Calling Accordion component */}

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="sub-title text-white text-[20px] md:text-[24px] leading-[1.13] mt-[27px] mb-[28px] ">
                How can I join?
              </AccordionTrigger>
              <AccordionContent className="text-white font-normal">
                Just fill the sign up form and submit, confirm you mail, and you good to go! It's a free!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="sub-title text-white text-[20px] md:text-[24px] leading-[1.13] mt-[27px] mb-[28px] ">
                How do I use it?
              </AccordionTrigger>
              <AccordionContent className="text-white font-normal">
                Once you have an account, in your free time while in traffic or in the bus, just sign in, browse through the movies and save the ones of your interest to your list!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="sub-title text-white text-[20px] md:text-[24px] leading-[1.13] mt-[27px] mb-[28px] ">
                Why should I use this?
              </AccordionTrigger>
              <AccordionContent className="text-white font-normal">
                Well, do you know how normally will take you lots of time to decide what to watch when with friends? ok, then with this your and yours friend can have their list preselect and saved, so when search for your friend you can see the list of movies in common, and this will reduce the so annoying waste of time browsing trying to pick what to watch!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
