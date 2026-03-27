import type { Metadata } from "next";
import Script from "next/script";
import "./global.css";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const metadata: Metadata = {
  title: "Muhammad Saqib | Full Stack Developer",
  description: "Portfolio website of Muhammad Saqib — Backend-focused Developer.",
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {GA_TRACKING_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `}
            </Script>
          </>
        ) : null}
        <div className=" mx-auto px-6">
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}