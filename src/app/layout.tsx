import type { Metadata } from "next";
import { Inter,Poppins,DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Knowledgenook",
  description: "One stop solution for your semesters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col h-auto`}>
        <Navbar/>
        {children}
        <Footer/>  
      </body>
    </html>
  );
}