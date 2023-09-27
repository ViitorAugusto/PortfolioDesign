import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { TbNotes } from "react-icons/tb";
import { BiSolidContact } from "react-icons/bi";
import { AboutMe } from "./AboutMe";


export function MainContentRight() {
  const data = [
    {
      label: "Home",
      value: "home",
      icon: AiOutlineHome,
      desc: <AboutMe />,
    },
    {
      label: "Resume",
      value: "resume",
      icon: TbNotes,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Work",
      value: "work",
      icon: MdWorkOutline,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    }
  ];

  const theme = {
    tab: {
      styles: {
        base: {
          indicator: {
            position: "absolute",
            inset: "inset-0",
            zIndex: "z-10",
            height: "h-full",
            bg: "bg-white",
            borderRadius: "rounded-md",
            boxShadow: "shadow",
          },
        },
      },
    },
  };
  return (
    <Tabs value="home">
      <TabsHeader 
      className="border-2 px-4 flex justify-center items-center my-2"
      indicatorProps={{
        className: "bg-blue-300/30 shadow-none !text-black_3",
        theme,
      }}
      >
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value} className=" flex-1 ">
            <div className="flex items-center p-1 m-1 flex-col gap-2 ">
              {React.createElement(icon, { className: "w-6 h-6" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
     
      <TabsBody className=" ">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
