import { BsCodeSlash, BsLightbulb } from "react-icons/bs";
import { GiStoneCrafting } from "react-icons/gi";
import { FcEngineering } from "react-icons/fc";

interface PropsAboutMe {
  title: string;
  description: string;
  bgColor: string;
  icon: string;
}
const iconMappings: Record<string, JSX.Element> = {
  "code-slash": <BsCodeSlash  className="text-secondary h-6 w-6"/>,
  "icon1": <FcEngineering className="text-primary h-6 w-6"/>,
  "icon2": <GiStoneCrafting className="text-secondary h-6 w-6"/>,
  "icon3": <BsLightbulb className="text-primary h-6 w-6"/>,
};

export const Navigation = ({
  title,
  description,
  bgColor,
  icon,
}: PropsAboutMe) => {
  const selectedIcon = iconMappings[icon];
  return (
    <>
      <div className={`bg-${bgColor} rounded-md py-4 px-2 flex flex-col gap-2`}>
        <h2 className="text-2xl flex justify-start items-center gap-3">
          <span>{selectedIcon}</span>
          {title}
        </h2>
        <p className="text-sm">{description}</p>
      </div>
    </>
  );
};
