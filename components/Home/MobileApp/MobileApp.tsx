import BtnDawnloaded from "@/components/Helper/BtnDawnloaded";
import Image from "next/image";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const MobileApp = () => {
  return (
    <section className="pb-16 pt-0">
      <div className="mx-auto container mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <Image
          src="/images/app.png"
          alt=""
          width={800}
          height={800}
          className="object-cover animate-pulse duration-200 hover:scale-105 hover:rotate-3"
        />
        <div className="">
          <h1 className="text-2xl sm:text-4xl font-bold leading-8 sm:leading-12">
            Connecting our user with{" "}
            <span className="text-pink-600">ios & Android</span> apps. Download
            from iTuen & Play store
          </h1>
          <p className="mt-6 text-sm sm:text-base text-gray-800 leading-6 sm:leading-8 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            voluptates pariatur deserunt expedita sequi architecto a itaque
            deserunt expedita sequi architecto ducimus aperiam molestias!
          </p>
          <div className="sm:flex space-y-3 sm:space-y-0 space-x-4 mt-8">
            <BtnDawnloaded Icon={FaApple} stage="App Store" />
            <BtnDawnloaded Icon={FaGooglePlay} stage="Google Play" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
