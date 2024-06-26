import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import AppContextProvider from "@/components/providers/app-context-provider";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
