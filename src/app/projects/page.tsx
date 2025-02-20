// Mock
import { projects } from "@/data";

// Components
import ProjectsList from "@/components/ProjectsList";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pt-36">
      <div className="max-w-7xl w-full">
        <h1 className="heading">
          All <span className="text-purple">Projects</span>
        </h1>
        <ProjectsList projects={projects} />
        <Footer />
      </div>
    </main>
  );
}
