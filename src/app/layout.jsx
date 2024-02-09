import { Inter } from "next/font/google";
import "../styles/globals.css";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]";
// import { redirect } from "next/navigation";
// import { SessionProvider } from "next-auth/react";
// import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Or-Bit App",
  description: "GDG-Hack Or-Bit project",
};

export default async function RootLayout({ children }) {
  // const session = await getServerSession(options);

  // const headersList = headers();
  // const pathname = headersList.get('next-url') || '';
  // console.log('Current pathname:', pathname);

  // if (!session) {
  //   redirect("/login");
  //   return null
  // }


  return (
    // <SessionProvider session={session}>
    <html lang="en">
      <body className={`cursor-default ${inter.className}`}>
        {/* {session ? */}
        {children}
        {/* :
          null
        } */}
      </body>
    </html>
    // </SessionProvider>
  );
}
