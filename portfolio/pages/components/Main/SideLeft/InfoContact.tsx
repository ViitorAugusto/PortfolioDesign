import { MdOutlinePhoneAndroid } from "react-icons/md";

interface InfoProps {
  icon: any;
  title: string;
  description: string;
}

export const InfoContact = () => {
  return (
    <div className="p-4 rounded-2xl bg-whiteicon">
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
  );
};
