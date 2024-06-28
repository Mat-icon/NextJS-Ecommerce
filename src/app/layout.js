import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket data",
  description: "Generated by Matthew Ameh",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      
      <body className={inter.className}>
       <div className='flex flex-row-reverse h-screen max-h-screen'><Navbar />
        <div className='overflow-y-auto flex-grow bg-page text-default-text'>{children}</div></div> 
      </body>
    </html>
  );
}
