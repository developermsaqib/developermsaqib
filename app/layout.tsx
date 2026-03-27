import type { Metadata } from "next";
import "./global.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
title: "Muhammad Saqib | Full Stack Developer",
description: "Portfolio website of Muhammad Saqib — Backend-focused Developer.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="bg-gray-50 text-gray-900">
<div className=" mx-auto px-6">
{/* <Navbar /> */}
{children}
{/* <Footer /> */}
</div>
</body>
</html>
);
}