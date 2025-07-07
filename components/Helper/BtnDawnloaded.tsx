import React from "react";
import { IconType } from "react-icons";

type props = {
  Icon: IconType;
  stage: string;
};
const BtnDawnloaded = ({ Icon, stage }: props) => {
  return (
    <a
      href="#"
      className="flex items-center group border border-gray-400 px-4 py-3 rounded-md hover:bg-gray-800 transition-all duration-200"
    >
      <Icon className="text-2xl mr-2 group-hover:text-white transition-all duration-200" />

      <div>
        <p className="text-xs group-hover:text-white transition-all duration-200">
          Download on the
        </p>
        <p className="text-sm font-semibold group-hover:text-white transition-all duration-200">
          {stage}
        </p>
      </div>
    </a>
  );
};

export default BtnDawnloaded;
