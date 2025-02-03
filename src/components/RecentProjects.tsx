"use client";
// Core
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

// Mock
import { recentProjects as projects } from "@/data";
// Components
import ProjectsList from "./ProjectsList";
import MagicButton from "./MagicButton";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <ProjectsList projects={projects} />
      <div className="flex justify-center">
        <Link href="/projects">
          <MagicButton
            title="See more"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
    </div>
  );
};

export default RecentProjects;
