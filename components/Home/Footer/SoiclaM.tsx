import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

const SoiclaM = ({
  url,
  Iocn,
  className,
}: {
  Iocn: IconType;
  className: string;
  url: string;
}) => {
  return (
    <Link
      href={url}
      className={`flex items-center justify-center flex-col w-8 h-8 text-white rounded-full ${className} transform hover:-translate-y-2.5 transition-all duration-200`}
    >
      <Iocn />
    </Link>
  );
};

export default SoiclaM;
