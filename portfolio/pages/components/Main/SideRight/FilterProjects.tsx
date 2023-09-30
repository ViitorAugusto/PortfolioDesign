import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Projeto 1",
    tags: ["Front-End", "Mobile"],
  },
  {
    id: 2,
    title: "Projeto 2",
    tags: ["Back-End"],
  },
  {
    id: 3,
    title: "Projeto 3",
    tags: ["Front-End", "Back-End"],
  },
  {
    id: 4,
    title: "Projeto 4",
    tags: ["Mobile"],
  },
  {
    id: 5,
    title: "Projeto 5",
    tags: ["Front-End", "Back-End", "Mobile"],
  },
  {
    id: 6,
    title: "Projeto 6",
    tags: ["Back-End"],
  },
  {
    id: 7,
    title: "Projeto 7",
    tags: ["Front-End"],
  },
  {
    id: 8,
    title: "Projeto 8",
    tags: ["Front-End", "Mobile"],
  },
  {
    id: 9,
    title: "Projeto 9",
    tags: ["Back-End"],
  },
  {
    id: 10,
    title: "Projeto 10",
    tags: ["Mobile"],
  },
  {
    id: 11,
    title: "Projeto 11",
    tags: ["Front-End", "Back-End"],
  },
  {
    id: 12,
    title: "Projeto 12",
    tags: ["Front-End"],
  },
  {
    id: 13,
    title: "Projeto 13",
    tags: ["Front-End", "Mobile"],
  },
  {
    id: 14,
    title: "Projeto 14",
    tags: ["Back-End"],
  },
  {
    id: 15,
    title: "Projeto 15",
    tags: ["Mobile"],
  },
  // Adicione mais projetos com diferentes rótulos, se necessário
];


export default function Projects() {
  const [selectedTags, setSelectedTags] = useState(["All"]);
  
  const handleTagClick = (tag: string) => {
    if (tag === "All") {
      setSelectedTags(["All"]);
    } else {
      setSelectedTags((prevTags) => {
        if (prevTags.includes(tag)) {
          return prevTags.filter((t) => t !== tag);
        } else {
          return [...prevTags, tag];
        }
      });
    }
  };
  
  

  const filteredProjects =
    selectedTags.includes("All")
      ? projectsData
      : projectsData.filter((project) =>
          project.tags.some((tag) => selectedTags.includes(tag))
        );


  return (
    <div>
      <div className="flex gap-2">
        <button
          className={`${
            selectedTags.includes("All") ? "bg-blue-500" : "bg-gray-300"
          } px-4 py-2 rounded-full`}
          onClick={() => handleTagClick("All")}
        >
          All
        </button>
        <button
          className={`${
            selectedTags.includes("Front-End") ? "bg-blue-500" : "bg-gray-300"
          } px-4 py-2 rounded-full`}
          onClick={() => handleTagClick("Front-End")}
        >
          Front-End
        </button>
        <button
          className={`${
            selectedTags.includes("Back-End") ? "bg-blue-500" : "bg-gray-300"
          } px-4 py-2 rounded-full`}
          onClick={() => handleTagClick("Back-End")}
        >
          Back-End
        </button>
        <button
          className={`${
            selectedTags.includes("Mobile") ? "bg-blue-500" : "bg-gray-300"
          } px-4 py-2 rounded-full`}
          onClick={() => handleTagClick("Mobile")}
        >
          Mobile
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold">{project.title}</h3>
            <p>Tags: {project.tags.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
