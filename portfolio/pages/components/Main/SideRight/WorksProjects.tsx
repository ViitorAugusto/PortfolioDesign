import { useState } from "react";
import ProjectFilter from "./FilterProjects";



const ProjectList = ({ projects }: any) => {

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const projects = [
    {
      id: 1,
      title: "Projeto 1",
      category: "Front-End",
      // Outras informações do projeto
    },
    {
      id: 2,
      title: "Projeto 2",
      category: "Back-End",
      // Outras informações do projeto
    },
    // Outros projetos
  ];
  const handleFilterChange = (category:any) => {
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project:any) => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <div>
      <ProjectFilter
        categories={["All", "Front-End", "Back-End", "Mobile"]}
        onFilterChange={handleFilterChange}
      />
      <div className="grid grid-cols-3 gap-4">
        {filteredProjects.map((project:any) => (
          <div key={project.id} className="bg-gray-200 p-4 rounded">
            <h3>{project.title}</h3>
            {/* Outras informações do projeto */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
