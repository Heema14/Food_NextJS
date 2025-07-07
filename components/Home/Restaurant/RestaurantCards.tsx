import Image from "next/image";
import React from "react";

type props = {
  title: string;
  image: string;
};

const RestaurantCards = ({ title, image }: props) => {
  const style =
    "bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white cursor-pointer hover:scale-105 duration-200";
  return (
    <div className="duration-200 group">
      <Image
        src={image}
        alt="img"
        width={400}
        height={500}
        className="w-full h-[250px] object-cover duration-200 group-hover:scale-110 group-hover:rounded-lg group-hover:rotate-3"
      />
      <h1 className="mt-4 w-fit dark:hover:text-amber-300 hover:text-blue-950 transition-all duration-200 cursor-pointer text-base sm:text-lg font-bold">
        {title}
      </h1>
      <div className="flex items-center font-medium mt-3 space-x-2">
        <p className={style}>Amarican</p>
        <p className={style}>Fast Food</p>
        <p className={style}>Burgers</p>
      </div>
    </div>
  );
};

export default RestaurantCards;
