import { Card, CardHeader } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function CardMovieRemove() {
  return (
    <div className="">
      <Card className="mx-auto rounded-lg border bg-transparent border-slate-200 text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 max-w-[20rem] overflow-hidden">
        <CardHeader className="m-0 rounded-lg h-70 p-0 mb-3">
          <Image
            src="/assets/grid_landscape_cj6eyf.jpg"
            alt="example"
            width="450"
            height="80"
          />
        </CardHeader>
        <h3 className="p-2 text-2xl font-semibold leading-none tracking-tight text-white uppercase mb-3">
          Title
        </h3>
        <p className="p-2 pt-0 text-sm text-white text-slate-500 dark:text-slate-400">
          Category, etc
        </p>
        <Popover>
          <PopoverTrigger className="w-full bg-primary-500/20">Synopsis</PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>

        <div className="p-2">
          <Button className="w-full bg-primary-500"> - Remove </Button>
        </div>
      </Card>
    </div>
  );
}

export { CardMovieRemove }
