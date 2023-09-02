import Topbar from "@/components/shared/Topbar";
import "../globals.css";
import { Inter } from "next/font/google";
import Bottombar from "@/components/shared/Bottombar";
import { Suspense } from "react";
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-1`}>
        <Topbar />
        <div className="min-h-screen">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
        <Bottombar />
      </body>
    </html>
  );
}
