import type { Metadata } from "next";
import { Inter, Taviraj } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const taviraj = Taviraj({ weight: "200", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Wines",
  description: "South Africa's #1 Vintner Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={taviraj.className}>
        <Toaster position="top-right" containerStyle={{ fontSize: "13px" }} />
        {children}
      </body>
    </html>
  );
}
