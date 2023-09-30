interface PropsInfo {
  info: {
    title: string;
    skills: string[];
  };
}

export const Skills = ({ info }: PropsInfo) => {
  return (
    <>
      <h2 className="text-black font-medium text-xl my-4">{info.title}</h2>
      <div className="flex flex-wrap gap-4 ">
        {info.skills.map((skill, index) => (
          <div key={index} className="bg-grayskills text-sm rounded w-max py-1 px-2 text-center">
            {skill}
          </div>
        ))}
      </div>
    </>
  );
};
