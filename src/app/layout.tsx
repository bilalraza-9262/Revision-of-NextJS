"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TodoProvider } from "./context/TodoProvider";

const inter = Inter({ subsets: ["latin"] });
const navbar = [
  {
    title: "Home",
    href: "/",

  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "todos",
    href: "/todos",
  }
]
// export const metadata = {
//   title: {
//     default: "Main Page",
//     template: "%s |User"
//   },
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  // console.log(pathName);

  return (
    <html lang="en">
      <body className={inter.className}>
        {navbar.map((val) => (
          <div key={val.title} className="flex justify-around ">
            <Link href={val.href}><h1 className={`${pathName === val.href ? "text-green-600" : "text-blue-300"}`}>{val.title}</h1></Link>
          </div>
        ))}
        <TodoProvider>
          {children}
        </TodoProvider>
      </body>
    </html>
  );
}
