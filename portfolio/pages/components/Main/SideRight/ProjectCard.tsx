import { BiLogoReact } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { IoRadioOutline } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNestjs } from "react-icons/si";
import { Tooltip } from "@material-tailwind/react";


export const IconTooltip = ({ text, children }:any) => {
  return (
    <Tooltip text={text}>
      <div className="inline-block">{children}</div>
    </Tooltip>
  );
};

export const ProjectCard = () => {
  return (
    <>
      <div className="border border-black rounded-sm">
        {/*  TODO: ver se vai ficar bom mobile e web as tags (front,back,mobile) */}
        <div className="flex justify-between ">
          <h2 className="bg-primary rounded-br-2xl p-2 ">Projeto 1</h2>
          <p className="flex self-end mr-2 text-sm">Front-End, Mobile</p>
        </div>

        <div className="p-2">
          <p className="text-sm ">
            Contente Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Soluta blanditiis, modi similique nesciunt praesentium maxime
            perferendis beatae, qui nihil velit quibusdam exercitationem error
            iure eaque, maiores cum explicabo facilis dignissimos?
          </p>
        </div>

        <div className="flex justify-between p-2">
          <div>
            <ul className="flex items-center gap-1">
              <li>
                <BiLogoReact />
              </li>
              <li>
              <IconTooltip text="Next.js">
                  <TbBrandNextjs />
                </IconTooltip>
              </li>
              <li>
                <SiNestjs />
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-2">
              <li>
                <IoRadioOutline />
              </li>
              <li>
                <FiGithub />
              </li>
            </ul>
          </div>
        </div>

        <div className="p-2">
          <p className="text-2xs">Criado em: 30/09/2023</p>
        </div>
      </div>
    </>
  );
};
