import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import SoiclaM from "./SoiclaM";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 bg-gray-800 px-2.5 sm:px-0">
      <div className="mx-auto container items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
              <MdDeliveryDining className="w-6 h-6 text-black" />
            </div>
            <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
              Foodie
            </h1>
          </div>
          <p className="mt-4 text-gray-200 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            ipsam? Facilis porro perferendis explicabo minima!
          </p>
          <div className="mt-6 flex items-center space-x-2">
            <SoiclaM url="#" className="bg-blue-600" Iocn={FaFacebook} />
            <SoiclaM url="#" className="bg-pink-500" Iocn={FaInstagram} />
            <SoiclaM url="#" className="bg-sky-400" Iocn={FaTwitter} />
            <SoiclaM url="#" className="bg-red-600" Iocn={FaYoutube} />
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white underline">Company</h1>
          <p className="footer_link">About Us</p>
          <p className="footer_link">News & Press</p>
          <p className="footer_link">Our Cutomers</p>
          <p className="footer_link">LeaderShip</p>
          <p className="footer_link">Careers</p>
        </div>

        <div className="space-y-5">
          <h1 className="text-lg font-bold text-white underline">Resourses</h1>
          <p className="footer_link">Blog</p>
          <p className="footer_link">Webinar & Events</p>
          <p className="footer_link">Prodcast</p>
          <p className="footer_link">E-Book & Guides</p>
        </div>

        <div className="">
          <h1 className="text-lg font-bold text-white underline">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-white">Our Mobile Number</h1>
            <h1 className="text-base font-bold text-yellow-300 mt-1">
              +970458152164
            </h1>
          </div>

          <div className="mt-6">
            <h1 className="text-sm text-white">Our Email</h1>
            <h1 className="text-base font-bold text-yellow-300 mt-1">
              user123@gmail.com
            </h1>
          </div>
        </div>
      </div>

      {/* second footer */}
      <footer className="mt-8 container mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center text-white md:text-left">
          Copyright &copy; 2025 website. All rights reserved
        </p>
        <div className="flex items-center text-white space-x-4 mt-4 md:mt-0">
          <span>Social: </span>
          <SoiclaM url="#" className="bg-pink-500" Iocn={FaInstagram} />
          <SoiclaM url="#" className="bg-gray-950" Iocn={FaGithub} />
          <SoiclaM url="#" className="bg-blue-600" Iocn={FaFacebook} />
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
