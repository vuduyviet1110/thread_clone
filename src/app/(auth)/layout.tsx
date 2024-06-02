import React from "react";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
export const metadata = {
    title: "Threads",
    description: "Theard with Next.js built application"
}
const inter = Inter({subsets: ["latin"]})
export default function RootLayout({children}:{children: React.ReactNode}){
    return(
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-4`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}