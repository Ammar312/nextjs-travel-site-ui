"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setisDrawerOpen(!isDrawerOpen);
  };
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}></Image>
      </Link>
      <ul className="hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleDrawer}
      />
      {isDrawerOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 p-5">
          <Image
            src="/close.svg"
            alt="close"
            width={24}
            height={24}
            onClick={toggleDrawer}
            color="#000000"
          />
          {/* <button onClick={toggleDrawer} className="mb-5">
            Close
          </button> */}
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-24 text-gray-50  cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
