import Topbar from "@/components/shared/Topbar";
import "../globals.css";
import "./clerk.css"
import { Inter } from "next/font/google";
import Bottombar from "@/components/shared/Bottombar";
const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body

          className={`${inter.className} bg-dark-1 min-h-screen  justify-center	 items-center`}
        >
          <Topbar/>

          {children}

          <Bottombar/>
        </body>
      </html>
    </ClerkProvider>
  );
}
