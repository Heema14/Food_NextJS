import React from "react";
import { FaApple, FaGooglePlay, FaLocationArrow } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import BtnDawnloaded from "../../Helper/BtnDawnloaded";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex justify-center flex-col">
      <div className="container mx-auto grid items-center grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text content */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl my-6  font-extrabold leading-[2.5rem] md:leading-[4rem]">
            Your favorite food,{" "}
            <span className="text-pink-600">delivered </span>
            your home
          </h1>
          <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-400">
            Food, drinks, greceroies, and more avaliable for delivery and pickup
          </p>
          {/* Address input */}
          <div className="w-full my-8 max-w-md">
            <div className="flex items-center h-14 overflow-hidden bg-gray-100 shadow-md">
              <div className="px-4 text-gray-500">
                <GrMapLocation className="w-5 h-5 text-black" />
              </div>
              <input
                type="text"
                placeholder="Enter Your address.."
                className="flex-1 px-2 text-sm text-black bg-transparent outline-none h-full border-l border-l-gray-950 "
              />
              <button className="bg-gray-800 text-white px-4 h-full hover:bg-gray-950 flex items-center justify-center cursor-pointer duration-200">
                <FaLocationArrow className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* dawonoad text */}
          <p className="text-gray-700 dark:text-gray-400 text-sm mb-6">
            Apps Avaliable to download on
          </p>
          {/* App store button */}
          <div className="flex space-x-4">
            <BtnDawnloaded Icon={FaApple} stage="App Store" />
            <BtnDawnloaded Icon={FaGooglePlay} stage="Google Play" />
          </div>
        </div>
        {/* image */}
        <div className="mx-auto hidden xl:block animate-pulse">
          <Image
            className="duration-200 hover:scale-110 hover:rotate-3"
            src="/images/hero.png"
            alt="image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
