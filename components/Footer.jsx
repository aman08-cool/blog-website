import Image from "next/image";
import logo_2_1 from "../public/images/logo_2_1.png";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-bgColor text-white/80 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src={logo_2_1} width={200} height={80} alt="logo" className="hover:shadow-[5px_5px_0px_0px_rgba(255,255,217)] duration-300" />
          <p className="flex items-center text-sm font-titleFont gap-1">
            <AiOutlineCopyrightCircle className="mt-[1px]" />
            Aman Dwivedi || all rights reserved
          </p>
        </div>

        <div className="flex gap-6">
          <BsYoutube className="w-6 h-6 text-white/50 hover:text-red-600 cursor-pointer" />
          <BsFacebook className="w-6 h-6 text-white/50 hover:text-blue-600 duration-300 cursor-pointer" />
          <BsGithub className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          <BsLinkedin className="w-6 h-6 text-white/50 hover:text-sky-500 duration-300 cursor-pointer" />
          <BsTwitter className="w-6 h-6 text-white/50 hover:text-sky-600 duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
