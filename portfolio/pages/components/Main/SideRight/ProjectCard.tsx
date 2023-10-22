import { BiLogoReact } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { IoRadioOutline } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNestjs } from "react-icons/si";
import { Button, Tooltip } from "@material-tailwind/react";
import { Project } from "@/pages/types/Project";

type Icon = React.ReactNode;
type Props = {
  text: string;
  children: Icon;
}
type IconMappings = {
  [key: string]: Icon;
};
export const IconTooltip = ({ text, children }:Props) => {
  return (
    <Tooltip
    content={text}
    animate={{
      mount: { scale: 1, y: 0 },
      unmount: { scale: 0, y: 25 },
    }}
    className="text-white bg-blue-500 border-0 rounded-sm shadow-sm"
  >
    <Button className="text-black text-base">{children}</Button>
  </Tooltip>
  );
};

const iconMappings: IconMappings = {
  "React": <BiLogoReact />,
  "Next.js": <TbBrandNextjs />,
  "Nestjs": <SiNestjs />,
  "Github": <FiGithub />,
  "Live": <IoRadioOutline />,
  // Adicione mais mapeamentos conforme necessário para outros ícones
};
export const ProjectCard = ({data}: Project) => {
  return (
    <>
      <div className="border border-black rounded-sm">
        {/*  TODO: ver se vai ficar bom mobile e web as tags (front,back,mobile) */}
        <div className="flex justify-between ">
          <h2 className="bg-primary rounded-br-2xl p-2 ">{data.name}</h2>
          <p className="flex self-end mr-2 text-sm">{data.tags}</p>
        </div>

        <div className="p-2">
          <p className="text-sm ">
            {data.description}
          </p>
        </div>

        <div className="flex justify-between p-2">
          <div>
            <ul className="flex items-center gap-2">
              {data.tecnologies.map((item, index) => (
                <li key={index}>
                  <IconTooltip text={item.name}>
                    {iconMappings[item.icon]}
                  </IconTooltip>
                </li>
              ))}
            </ul>
         
          </div>
          <div>
            <ul className="flex gap-2">
             {data.liveOn.map((item, index) => (
                <li key={index}>
                  <IconTooltip text={item.name}>
                    {iconMappings[item.icon]}
                  </IconTooltip>
                </li>
             ))}
            </ul>
          </div>
        </div>

        <div className="p-2">
        <p className="text-2xs">Criado em: {data.createdAt}</p>
        </div>
      </div>
    </>
  );
};
