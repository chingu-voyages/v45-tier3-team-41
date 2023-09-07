import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function CardMovie() {
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
        <CardTitle />
        <h3 className="p-2 text-2xl font-semibold leading-none tracking-tight text-white uppercase mb-3">
          Title
        </h3>
        <CardDescription />
        <p className="p-2 pt-0 text-sm text-white text-slate-500 dark:text-slate-400">Category, etc</p>
        <div className="p-2">
        <Button className="w-full bg-primary">+ My List</Button>
        </div>
      </Card>
    </div>
  );
}
