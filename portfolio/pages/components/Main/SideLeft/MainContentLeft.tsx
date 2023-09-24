import { MdOutlinePhoneAndroid } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { OptionIcons } from "./OptionIcons";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

export const MainContentLeft = () => {
  return (
    <div className=" w-full h-3/4 relative rounded-xl">
      <div className="w-52 h-52 border-2 border-green-300 absolute -top-28 left-24">
        a
      </div>
      <div className="mt-28 text-center">
        <h1 className="text-3xl font-bold">Vitor Augusto</h1>
        <p className="font-normal text-base">FullStack Developer</p>
      </div>
      <div className="flex justify-center items-center p-4 gap-5 ">
        <OptionIcons />
      </div>
      <div className="w-11/12 flex flex-col mx-auto ">
        <div className="w-11/12  mx-auto rounded-lg">
          <div className="p-2 rounded-t-lg bg-whiteicon flex justify-center">
            <div className="flex justify-center items-center gap-5 border-b-2 py-3">
              <div className="">
                <MdOutlinePhoneAndroid className="text-red-500 text-3xl" />
              </div>
              <div>
                <p className="text-sm ">Phone</p>
                <p className="font-bold">+55 (11) 9 7135-1731</p>
              </div>
            </div>
          </div>

          <div className="p-2  bg-whiteicon flex justify-center">
            <div className="flex justify-center items-center gap-5 border-b-2 py-3">
              <div className="">
                <HiOutlineMailOpen className="text-yellow-500 text-3xl" />
              </div>
              <div>
                <p className="text-sm ">Email</p>
                <p className="font-bold">vitoraugustodemattos@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="p-2 bg-whiteicon flex justify-center">
            <div className="flex justify-center items-center gap-5 border-b-2 py-3">
              <div className="">
                <IoLocationOutline className="text-red-500 text-3xl" />
              </div>
              <div>
                <p className="text-sm ">Location</p>
                <p className="font-bold">São Paulo - SP</p>
              </div>
            </div>
          </div>
          <div className="p-2 rounded-b-lg bg-whiteicon flex justify-center ">
            <div
              className="flex gap-3 justify-center items-center p-4 
            bg-gradient-to-r from-yellow-500 to-red-500 text-whitemoon
            rounded-full
            "
            >
              <AiOutlineDownload className=" text-3xl" />
              <button>Download Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
