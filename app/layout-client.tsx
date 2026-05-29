'use client';

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const hideLayoutRoutes = ["/login", "/register", "/forgot-password"];
  const shouldHideLayout = hideLayoutRoutes.some(route => pathname.startsWith(route));

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <main className={!shouldHideLayout ? "pt-2" : ""}>
        {children}
      </main>
      {!shouldHideLayout && <Footer />}
    </>
  );
}