"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Sling as Hamburger } from "hamburger-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isHomePage = pathname === "/";

  return (
    <nav className="px-4 md:px-16 md:h-[80px] flex flex-col justify-center font-ubuntu">
      <ul className="md:flex items-center">
        <div className="absolute right-3 block md:hidden top-3">
          <Hamburger toggled={isOpen} onToggle={setIsOpen} />
        </div>
        <li className="">
          <Image
            alt="logo"
            width={"150"}
            height={"100"}
            src={"/images/platinumLogo.png"}
            className="hidden md:block"
          />

          <Image
            alt="logo"
            width={"130"}
            height={"80"}
            src={"/images/platinumLogo.png"}
            className="block md:hidden absolute -top-6 left-0"
          />
        </li>
        <div className="md:flex-1 mt-16 md:mt-0"></div>
        <div
          className={`md:flex md:space-x-12 absolute md:static left-0 w-full md:w-auto md:z-auto bg-black md:bg-transparent items-center gap-6 transition-all duration-500 ease-in ${
            isOpen
              ? "text-white grid gap-y-6 p-4 opacity-100 top-16 z-20"
              : "opacity-0 md:opacity-100 top-[-400px] md:top-0"
          }`}
        >
          <li className="">
            <Link
              href="/"
              className={`hover:text-blue-500 duration-300 ${
                isHomePage ? "text-blue-500" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              href="/blog"
              className={`hover:text-blue-500 duration-300 ${
                pathname.startsWith("/blog") ? "text-blue-500" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:text-blue-500 duration-300 ${
                pathname.startsWith("/about") ? "text-blue-500" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/apply-now"
              className={`hover:text-blue-500 duration-300 ${
                pathname.startsWith("/apply-now") ? "text-blue-500" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
          </li>
          <li>
            <Link
              href="/contents"
              className={`hover:text-blue-500 duration-300 ${
                pathname.startsWith("/contents") ? "text-blue-500" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contents
            </Link>
          </li>
          <li>
            <Link
              href="/contactUs"
              className={`hover:text-blue-500 duration-300 ${
                pathname.startsWith("/contactUs") ? "text-blue-500" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
