"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisable, setIsVisable] = useState(false);

  //Show button go to top
  useEffect(() => {
    const toggleVisabilty = () => {
      if (window.scrollY > 300) setIsVisable(true);
      else setIsVisable(false);
    };

    window.addEventListener("scroll", toggleVisabilty);
    return () => window.removeEventListener("scroll", toggleVisabilty);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 animate-pulse">
      {isVisable && (
        <button
          className="dark:bg-cyan-50 bg-gray-950 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center flex-col focus:outline-none"
          onClick={scrollToTop}
        >
          <FaArrowUp className="dark:text-gray-950 text-gray-100" />
        </button>
      )}
    </div>
  );
};

export default GoToTop;
