import { useState } from "react";
import { ProjectCard } from "./ProjectCard";

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
];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  const filteredProjects =
    selectedTag === "All"
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(selectedTag));

  return (
    <div>
      <div className="flex gap-2">
        {["All", "Front-End", "Back-End", "Mobile"].map((tag) => (
        <button
        key={tag}
        className={`px-4 py-2 rounded-full transition-colors duration-500 ease-in-out ${
          selectedTag === tag
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-300 hover:bg-gray-400"
        }`}
        onClick={() => handleTagClick(tag)}
      >
        {tag}
      </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
      {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-100 p-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <h3 className="font-semibold">{project.title}</h3>
            <p>Tags: {project.tags.join(", ")}</p>
          </div>
        ))}
      </div>

      <ProjectCard />
    </div>
  );
}
