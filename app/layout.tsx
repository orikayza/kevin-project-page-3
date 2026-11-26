import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OpenSansFont = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = localFont({
  src: [
    {
      path: "./fonts/Raleway-Regular.ttf",
      weight: "400",
      style: "normal",
    },

    {
      path: "./fonts/Raleway-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
  ],
  variable: "--font-raleway",
});

const superadorable = localFont({
  src: [
    {
      path: "./fonts/SuperAdorable.ttf",
    },
  ],
  variable: "--font-superadorable",
});

export const metadata: Metadata = {
  title: "Kevin Project Page",
  description:
    "I GOT YOU BRO stores all your most important project in one secure location. Access them wherever you need, share and collarborate with friends family, and co-workers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        OpenSansFont.variable,
        raleway.variable,
        superadorable.variable,
      )}
    >
      <body className="font-opensans min-h-full">
        <header>
          <Header />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
