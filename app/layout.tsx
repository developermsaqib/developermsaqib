import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "M Saqib | Portfolio",
  description: "Full Stack Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
      >
        <NavBar />
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
