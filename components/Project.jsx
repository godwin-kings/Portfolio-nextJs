import React from "react";
import Link from "next/link";
import Image from "next/image";
import Data from "../public/asset/projects/Data.png";
import Todo from "../public/asset/projects/Todo.png";
import Weather from "../public/asset/projects/Weather.png";
import Bootstrap from "../public/asset/projects/Bootstrap.png";
import ProjectItem from "../components/ProjectItem";

const Project = () => {
  return (
    <div id="project" className=" w-full p-6 dark:bg-gray-900  -z-10">
      <div className="max-w-[1240px] w-full grid justify-center items-center h-full p-14 py-16">
        <h2 className=" text-xl tracking-widest text-[#5651e5]">Projects</h2>
        <h1 className="py-4 dark:text-[#ecf0f3]">What i have built so far </h1>

        <div className="grid  sm:grid-cols-2 w-full gap-8  z-10">
          {/* ProjectItem */}

          <ProjectItem
            title="Data project"
            content={Data}
            contentUrl="https://clouds-computing-e1321.web.app/"
          />
          <ProjectItem
            title="Todo project"
            content={Todo}
            contentUrl="https://todo-list-75826.web.app/"
          />
          <ProjectItem
            title="Weather project"
            content={Weather}
            contentUrl="https://weather-app-73969.web.app/"
          />
          <ProjectItem
            title="Bootstrap project"
            content={Bootstrap}
            contentUrl="https://dog-care-services.web.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
