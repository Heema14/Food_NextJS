"use client";

import ThemeToggler from "@/components/Helper/ThemeToggler";
import { Navlinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdDeliveryDining } from "react-icons/md";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all duration-200 h-[12vh] fixed z-[1002] w-full px-2.5 sm:px-0 ${
        navBg ? "bg-white dark:bg-gray-900 shadow-md" : "fixed"
      }`}
    >
      <div className="flex items-center h-full justify-between container mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-950 dark:bg-white  rounded-full flex items-center justify-center flex-col">
            <MdDeliveryDining className="w-6 h-6 text-white dark:text-black" />
          </div>
          <Link
            href="/#HeroSection"
            className="text-xl hidden sm:block md:text-2xl text-black dark:text-white font-bold"
          >
            Foodie
          </Link>
        </div>

        {/* NavBar */}
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-black dark:text-white hover:text-green-700 dark:hover:text-gray-400 font-bold transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>

        {/* Btns */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-950 dark:bg-white dark:text-black dark:hover:bg-gray-200 px-8 py-2.5 text-white font-bold rounded-lg hover:bg-black transition-all duration-300 cursor-pointer">
            Join Now
          </button>

          <ThemeToggler />

          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-blue-950 lg:hidden dark:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
