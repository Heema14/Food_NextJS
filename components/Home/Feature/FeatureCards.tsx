import Image from "next/image";
import React from "react";

type props = {
  icon: string;
  title: string;
};

const FeatureCards = ({ icon, title }: props) => {
  return (
    <div className="hover:scale-110 group-hover:rotate-3 hover:border-b border-gray-300 pb-5 duration-200 group">
      <Image
        src={icon}
        alt={title}
        width={100}
        height={100}
        className="mx-auto object-cover duration-200 group-hover:rotate-3"
      />
      <h1 className="mt-8 text-lg font-bold text-center">{title}</h1>
      <p className="text-center sm:w-[80%] mx-auto text-gray-700 dark:text-gray-300 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at
        veniam fuga.
      </p>
    </div>
  );
};

export default FeatureCards;
