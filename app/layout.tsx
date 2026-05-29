// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import Navbar from "@/components/layout/Navbar";
// import "./globals.css";
// import Footer from "@/components/sections/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Convert  Now - Earn & Withdraw Converts",
//   description: "The ultimate platform to earn, manage, and withdraw Converts.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-black text-white`}>
//         <Navbar />
//         <main className="pt-2">{children}</main>
//         <Footer/>
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "./layout-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convert  Now - Earn & Withdraw Converts",
  description: "The ultimate platform to earn, manage, and withdraw Converts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}