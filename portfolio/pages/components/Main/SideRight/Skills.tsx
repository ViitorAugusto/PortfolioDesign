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
      <div className="grid grid-cols-3 grid-rows-4 gap-4">
        {info.skills.map((skill, index) => (
          <div key={index} className="bg-grayskills  rounded">
            {skill}
          </div>
        ))}
      </div>
    </>
  );
};
