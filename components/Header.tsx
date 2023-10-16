import Image from "next/image";
import Link from "next/link";
import logo_2 from "../public/images/logo_2.png";
import profile from "../public/images/profile.jpg";
import { useSession, signIn, signOut } from "next-auth/react"
import { IoLogoFreebsdDevil } from "react-icons/io";

const Header = () =>
{
  const { data: session } = useSession();
  return (
    <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4 ">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image width={160} height={80} src={logo_2} alt="BlogLogo" />
          </div>
        </Link>
        {/* <div className="flex items-center justify-center text-center p-1 font-sans md:font-serif font-bold rounded hover:text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] duration-500">
          “Welcome to Aman's Blog”
        </div> */}
        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <IoLogoFreebsdDevil className="text-4xl text-gray-500 group-hover:text-blue-500 duration-300" />
            <p className="text-sm font-medium">
              {session ? session?.user!.name : "Hello Strangers"}
            </p>
          </div>

          {session ? (
            <button
              onClick={() => signOut()}
              className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600"
            >
              Sign In
            </button>
          )}
        </div>
      </div >
    </div >
  );
};

export default Header;
