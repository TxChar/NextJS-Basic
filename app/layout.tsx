// "use client"; 
import NavBar from '@/components/NavBar';
import './globals.css';
import { ReactNode } from 'react';
import { Metadata } from "next";

export const metadata:Metadata = {
  title:"NextJS-Basic",
  description:"NextJS-Basic",
  keywords:"NextJS, React, FrontEnd",
};

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
export default layout
