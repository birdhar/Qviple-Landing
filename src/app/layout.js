import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Qviple ERP | School Management Software | LMS - Qviple",
  description:
    "All-in-one institute management: Whether you're a large university or a small school, Qviple automates your administration processes. Book a demo now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
