import { Inter } from "next/font/google";
import "./globals.css";
import BotNav from "@/components/BotNav";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "fibo-assignment",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      <BotNav/></body>
    </html>
  );
}
