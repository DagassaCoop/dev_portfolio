"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { recentProjects as projects } from "@/data";
import ProjectsList from "./ProjectsList";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <ProjectsList projects={projects} />
    </div>
  );
};

export default RecentProjects;
