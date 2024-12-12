"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuSquare } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


import { ModeToggle } from "./theme-btn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 bg-background/50 top-0 sticky backdrop-blur border-b z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="text-lg font-bold">SBlog</div>
        </Link>

        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="w-14 text-center transition-all duration-200 hover:font-bold">
            Home
          </Link>
          <Link href="/blog" className="w-14 text-center transition-all duration-200 hover:font-bold">
            Blog
          </Link>
          <Link href="/about" className="w-14 text-center transition-all duration-200 hover:font-bold">
            About
          </Link>
          <Link href="/contact" className="w-14 text-center transition-all duration-200 hover:font-bold">
            Contact
          </Link>
          <div className="flex items-center">
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            <Button className="mx-1" variant="outline">
              SignUp
            </Button>
            <ModeToggle />
          </div>
        </div>

        <div className="md:hidden">
          <Sheet>
            <span className="mx-2">
            <ModeToggle />
            </span>
            <SheetTrigger>
              <Button onClick={toggleMenu} className="focus:outline-none" asChild>
                <MenuSquare className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold pb-4">SBlog</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6 font-semibold">
                    <Link href="/">Home</Link>
                    <Link href="/Blog">Blog</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <div className=" flex flex-col gap-2 items-center">
                      <Button className="mx-1 font-semibold" variant="outline">
                        Login
                      </Button>
                      <Button className="mx-1 font-semibold" variant="outline">
                        SignUp
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
