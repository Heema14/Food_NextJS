import Image from "next/image";
import React from "react";

type props = {
  des: string;
  title: string;
  image: string;
  num: string;
};

const HowItWorkCard = ({ des, title, image, num }: props) => {
  return (
    <div className="relative group">
      <Image
        src={image}
        alt={title}
        width={250}
        height={250}
        className="object-cover mx-auto group-hover:rotate-3 duration-200 group-hover:scale-110"
      />
      <div className="w-14 h-14 bg-pink-600 text-white text-xl font-bold flex items-center justify-center flex-col absolute top-0 left-0 rounded-full">
        {num}
      </div>

      <h1 className="mt-6 text-lg sm:text-xl font-bold text-center">{title}</h1>
      <p className="text-center sm:[80%] mx-auto text-gray-700 dark:text-gray-300 mt-3 font-medium">
        {des}
      </p>
      <p className="mt-4 text-base font-bold text-blue-800 dark:text-blue-400 hover:text-blue-600 transition-all duration-150 cursor-pointer text-center">
        Start Earning &rarr;
      </p>
    </div>
  );
};

export default HowItWorkCard;
