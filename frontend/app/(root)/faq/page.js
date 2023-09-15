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
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-white font-normal">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="sub-title text-white text-[20px] md:text-[24px] leading-[1.13] mt-[27px] mb-[28px] ">
                Is it styled?
              </AccordionTrigger>
              <AccordionContent className="text-white font-normal">
                Yes. It comes with default styles that matches the other
                components aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="sub-title text-white text-[20px] md:text-[24px] leading-[1.13] mt-[27px] mb-[28px] ">
                Is it animated?
              </AccordionTrigger>
              <AccordionContent className="text-white font-normal">
                Yes. Its animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
