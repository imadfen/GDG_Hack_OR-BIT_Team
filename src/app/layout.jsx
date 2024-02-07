import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Or-Bit App",
  description: "GDG-Hack Or-Bit project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`cursor-default ${inter.className}`}>{children}</body>
    </html>
  );
}
