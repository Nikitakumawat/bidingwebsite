"use client";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Navbar/>
      <div className="min-h-screen max-container">
        {children}
      </div>
      {/* {children} */}
      <Footer/>
    </NextUIProvider>
  );
}
