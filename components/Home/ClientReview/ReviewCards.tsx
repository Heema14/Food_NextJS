import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type props = {
  role: string;
  userImg: string;
  userName: string;
  reviewTitle: string;
};

const ReviewCards = ({ role, userName, userImg, reviewTitle }: props) => {
  const style = "text-yellow-500 w-5 h-5";
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg mr-4 shadow-md">
      <h1 className="text-xl font-bold">{reviewTitle}</h1>
      <div className="mt-2 flex items-center">
        <FaStar className={`${style}`} />
        <FaStar className={`${style}`} />
        <FaStar className={`${style}`} />
        <FaStar className={`${style}`} />
        <FaStar className={`${style}`} />
      </div>
      <p className="mt-4 text-base font-medium text-gray-800 dark:text-gray-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea asperiores
        ad in dicta ab facilis tenetur libero laborum deleniti voluptates?
      </p>

      <hr className="h-0.5 bg-gray-300 dark:bg-gray-700 my-6" />

      <div className="flex items-center justify-start space-x-4 group">
        <Image
          src={userImg}
          alt={reviewTitle}
          width={60}
          height={60}
          className="rounded-full object-cover duration-200 group-hover:scale-110"
        />
        <div>
          <h1 className="text-lg font-bold">{userName}</h1>
          <p className="text-sm sm:text-base">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
