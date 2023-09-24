import getIconsSocial from "@/src/utils/getIconsSocial";

export const OptionIcons = () => {
  return (
    <>
      {getIconsSocial().map((icon, index) => {
        return (
          <div key={index} className="flex justify-center items-center">
            <ul
              className="border w-12 h-12 flex justify-center items-center rounded-xl cursor-pointer bg-whiteicon
              hover:shadow-lg hover:bg-blue-100
              "
            >
             <li> <icon.image className="text-2xl text-blue-800 " /></li>
            </ul>
          </div>
        );
      })}
    </>
  );
};
