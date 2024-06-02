import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thread",
  description: "Cloning thread with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className}`}>
                    <Topbar/>
                    
                    <main className="flex">
                      <LeftSidebar/>

                    <div className='main-container' >
                      <div className='w-full max-w-4xl'>
                        {children}

                      </div>
                    </div>

                      <RightSidebar/>
                    </main>
                    <Bottombar/>
                </body>
            </html>
        </ClerkProvider>
    </html>
  );
}
