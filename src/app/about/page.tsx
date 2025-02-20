// Core
import { FC } from "react";

// Components
import Footer from "@/components/Footer";

const FRONTEND = [
  "Next.js",
  "React",
  "JavaScript (es6+)",
  "TypeScript",
  "HTML/CSS",
  "Tailwind CSS",
  "Sass",
  "MUI",
  "Bootstrap",
];
const BACKEND = ["Node.js", "Express.js", "Docker", "GraphQL"];
const DATABASES = ["MongoDB", "AWS", "MySQL", "Firebase", "Supabase"];
const DEV_TOOLS = ["Git", "Storybook", "ESLint"];

const SkillList: FC<{ list: string[] }> = ({ list }) => {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-6">
      {list.map((item, i) => (
        <span
          key={i}
          className="lg:py-4 lg:px-6 py-2 px-4 text-sm lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default function About() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pt-36">
      <h1 className="heading">
        <span className="text-purple">About</span> &{" "}
        <span className="text-purple">Skills</span>
      </h1>
      <div className="flex flex-wrap mt-10 mb-6">
        <div className="flex flex-col-reverse mb-20 md:flex-row">
          <div className="flex justify-center w-full md:w-3/5 lg:w-2/5 p-4">
            <div className="w-2/3 md:w-4/5 lg:w-3/5 h-fit overflow-hidden rounded-xl">
              <img src="./person.jpg" alt="" />
            </div>
          </div>
          <div className="w-full md:w-3/5 p-4 lg:pr-10">
            <h2 className="text-2xl text-center mb-6 lg:text-left lg:text-3xl lg:mb-8">
              Hello, I&apos;m{" "}
              <span className="font-bold text-purple">Dmytro Bondar</span>!
            </h2>
            <p className="text-lg mb-3 lg:text-xl lg:mb-6">
              Skilled <span className="font-bold text-purple">Frontend</span>{" "}
              Developer based in{" "}
              <span className="font-bold text-purple">Toronto</span> with focus
              on <span className="font-bold text-purple">React</span> and{" "}
              <span className="font-bold text-purple">TypeScript</span>, I
              specialize in creating scalable user interfaces and API integrations. My experience
              includes working on cross-technology projects and quickly adapting
              to new tools and frameworks.
            </p>
            <p className="text-lg mb-3 lg:text-xl lg:mb-6">
              With over <span className="font-bold text-purple">4</span>{" "}
              years of experience, I&apos;ve worked on a wide range of projects,
              from small SPA to large Saas products, ensuring each one is
              tailored to its unique goals and audience.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-purple mb-6 lg:text-3xl lg:mb-8">
              Frontend
            </h2>
            <SkillList list={FRONTEND} />
          </div>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-purple mb-6 lg:text-3xl lg:mb-8 ">
              Backend
            </h2>
            <SkillList list={BACKEND} />
          </div>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-purple mb-6 lg:text-3xl lg:mb-8 ">
              Databases and DevOps
            </h2>
            <SkillList list={DATABASES} />
          </div>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-purple mb-6 lg:text-3xl lg:mb-8 ">
              Dev Tools
            </h2>
            <SkillList list={DEV_TOOLS} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
