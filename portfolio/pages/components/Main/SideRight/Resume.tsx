import { PiGraduationCap, PiSuitcaseSimpleBold } from "react-icons/pi";

export const Resume = () => {
  const education = [
    {
      date: "2020-2010",
      title: "Software Development",
      institution: "Moringa School",
      bgResume: "resume",
    },
    {
      date: "2020-2010",
      title: "Software Development",
      institution: "Moringa School",
      bgResume: "resume2",
    },
  ];
  const experience = [
    {
      date: "2020-2010",
      title: "Software Development",
      institution: "Moringa School",
      bgResume: "resume",
    },
    {
      date: "2020-2010",
      title: "Software Development",
      institution: "Moringa School",
      bgResume: "resume2",
    },
  ];
  return (
    <>
      {/* TODO: Verificar essa primeira div ver como ela vai se comportar durante o desenvolvimento Web */}
      <div className="flex items-center justify-center gap-4 px-2 mb-6">
        <div className="flex-1 bg-gradient-to-r from-yellow-500 to-red-500 h-0.5"></div>
        <h2 className="text-3xl">Resume</h2>
      </div>
      <div className=" flex flex-col gap-4">
        <div className="flex justify-start items-center gap-4 px-2">
          <PiGraduationCap className="h-6 w-6 text-secondary" />
          <h2 className="text-black font-medium text-xl">Education</h2>
        </div>
        {education.map((item, index) => (
          <div
            className={`bg-${item.bgResume} px-4 py-6 rounded-md space-y-1`}
            key={index}
          >
            <p className="text-sm oldstyle-nums text-black/50">{item.date}</p>
            <p className="font-semibold text-black">{item.title}</p>
            <p className="font-medium text-black">{item.institution}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 px-2 "></div>
      <div className=" flex flex-col gap-4">
        <div className="flex justify-end items-center gap-4 px-2">
          <PiSuitcaseSimpleBold className="h-6 w-6 text-primary" />
          <h2 className="text-black font-medium text-xl">Experience</h2>
        </div>
      </div>
      {education.map((item, index) => (
          <div
            className={`bg-${item.bgResume} px-4 py-6 rounded-md space-y-1`}
            key={index}
          >
            <p className="text-sm oldstyle-nums text-black/50">{item.date}</p>
            <p className="font-semibold text-black">{item.title}</p>
            <p className="font-medium text-black">{item.institution}</p>
          </div>
        ))}
    </>
  );
};
