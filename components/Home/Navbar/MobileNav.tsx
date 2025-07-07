import { Navlinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className="">
      {/* overlay */}
      <div
        onClick={closeNav}
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black/70 w-full h-screen`}
      ></div>

      {/* links */}
      <div
        className={`text-white fixed ${navOpen} justify-center flex flex-col h-full transition-all duration-500 transform delay-300 w-[80%] sm:w-[60%] bg-blue-950 space-y-6 z-[1050]`}
      >
        {Navlinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}

        {/* close icon */}
        <div className="absolute top-8 right-8 w-10 h-10 cursor-pointer rounded-full border flex justify-center items-center hover:bg-gray-300 duration-200 hover:text-gray-800">
          <CgClose onClick={closeNav} className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
