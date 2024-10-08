import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SessionWrapper from "@/components/SessionWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FANS WALL",
  description: "Generated by Divyanshu Patel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white'>
        <SessionWrapper>
        <Navbar/>
        <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
        {children}</div>
        <Footer/>
        </SessionWrapper>
        </body>
    </html>
  );
}
