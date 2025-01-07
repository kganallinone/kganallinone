"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List } from "lucide-react";
import Image from "next/image";

const projectCategories = [
  "All",
  "KGAN Tech",
  "Personal",
  "Work",
  "Content",
  "Other",
];

const projects = [
  {
    id: 1,
    name: "Project 1",
    category: "KGAN Tech",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Project 2",
    category: "Personal",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Project 3",
    category: "Work",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Project 4",
    category: "Content",
    logo: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Project 5",
    category: "Other",
    logo: "/placeholder.svg?height=100&width=100",
  },
  // Add more projects here
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(true);
  const projectsPerPage = 6;

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="flex justify-between items-center mb-4 gap-10">
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-xs"
        />
        <div className="flex space-x-2">
          <Button
            variant={isGridView ? "outline" : "default"}
            size="icon"
            onClick={() => setIsGridView(true)}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={!isGridView ? "outline" : "default"}
            size="icon"
            onClick={() => setIsGridView(false)}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Tab.Group>
        <Tab.List className="flex space-x-2 mb-4 overflow-x-auto">
          {projectCategories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                `py-2 px-4 rounded-lg focus:outline-none whitespace-nowrap ${
                  selected
                    ? "bg-green-500 text-black"
                    : "bg-gray-800 text-green-500 hover:bg-gray-700"
                }`
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {projectCategories.map((category, idx) => (
            <Tab.Panel key={idx}>
              <ul
                className={`${
                  isGridView
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    : "space-y-4"
                }`}
              >
                {currentProjects
                  .filter(
                    (project) =>
                      category === "All" || project.category === category
                  )
                  .map((project) => (
                    <li
                      key={project.id}
                      className={`bg-gray-800 rounded-lg overflow-hidden ${
                        isGridView ? "flex flex-col" : "flex items-center"
                      }`}
                    >
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        className={`object-cover ${
                          isGridView ? "w-full h-48" : "w-24 h-24 m-4"
                        }`}
                      />
                      <div className={`p-4 ${isGridView ? "" : "flex-grow"}`}>
                        <h3 className="text-xl font-semibold">
                          {project.name}
                        </h3>
                        <p className="text-green-400">{project.category}</p>
                      </div>
                    </li>
                  ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <div className="mt-8 flex justify-center space-x-2">
        {Array.from(
          { length: Math.ceil(filteredProjects.length / projectsPerPage) },
          (_, i) => (
            <Button
              key={i}
              onClick={() => paginate(i + 1)}
              variant={currentPage === i + 1 ? "default" : "outline"}
            >
              {i + 1}
            </Button>
          )
        )}
      </div>
    </div>
  );
}
