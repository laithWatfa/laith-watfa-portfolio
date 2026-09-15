import type { Metadata } from "next";
import {IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";



export const metadata: Metadata = {
  title: {
    default: "Laith Watfa — Frontend Developer",
    template: "%s | Laith Watfa",
  },

  description: siteConfig.description,

  metadataBase: new URL(siteConfig.url),

  icons: {
    icon: "/icon.png",
  },
};



const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  weight : ["100","200","300","400","500","600","700"]
  }
)


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} font-mono h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
