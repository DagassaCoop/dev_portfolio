import {
  IGridItem,
  INavLink,
  IProject,
  ISocialMedia,
  IWorkExperience,
} from "@/entities";

export const navItems: INavLink[] = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  {
    name: "About & Skills",
    link: "/about",
  },
];

export const gridItems: IGridItem[] = [
  {
    id: "40911e87-a54c-4265-af85-24eb1604991b",
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: "925261f5-8608-44b7-a1a0-b0589b7fcefa",
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: "3fef40ef-d02d-4e39-92f8-745159487a9f",
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: "a609b747-562e-4cb7-8231-3cfb50660ce8",
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: "eb6763dc-6248-471b-9d2d-4ed646e6eff4",
    title: "Currently building a large movies aggregator using Next.js",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: "e4591d7d-0ab3-430b-b1ec-f57fa69b861d",
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// TODO: Add links
export const projects: IProject[] = [
  {
    id: "ebf24886-c66d-4be8-8043-612550f060ed",
    title: "Brainwave",
    des: "Where cutting-edge design meets AI excellence",
    img: "/brainwavePreview.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/gsap.svg"],
    link: "https://brainwave-ecru-delta.vercel.app",
  },
  {
    id: "16326960-690e-448d-943a-0bbf49685d3e",
    title: "Electronica",
    des: "Creative Videographer Portfolio with GSAP animation",
    img: "/electronicaPreview.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/gsap.svg", "/aws.svg"],
    link: "http://sashaproduction.ca",
  },
  {
    id: "b16ae796-f266-42d6-9f9b-6c49277f4aff",
    title: "Cursus",
    des: "A playground project for modern usage of Next 15, React and TypeScript",
    img: "/cursusPreview.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/graphql.svg"],
    link: "https://next-15-teaching-platform.vercel.app",
  },
  {
    id: "b16ae796-f266-42d6-9f9b-6c49277f4aff",
    title: "Hallo Lab",
    des: "Colorful SPA with advanced object positioning",
    img: "/haloLabPreview.png",
    iconLists: ["/re.svg", "/ts.svg", "/sass.svg"],
    link: "https://halo-lab-eta.vercel.app",
  },
];

export const recentProjects = [...projects.slice(0, 3)];

export const workExperience: IWorkExperience[] = [
  {
    id: "824678ca-30c8-4cc2-930a-91c4eaff9985",
    title: "Frontend Developer",
    desc: "Created responsive user-friendly UI UX for design studio clients.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: "9a1675ce-074b-4a72-bf24-b9f96d9ffab6",
    title: "Fullstack Developer",
    desc: "Designed and developed large analytics dashboard",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia: ISocialMedia[] = [
  {
    id: "ba7cad7b-f927-4a0d-a542-37dd30585b99",
    img: "/git.svg",
    link: "https://github.com/DagassaCoop",
  },
  {
    id: "641a7d88-07b6-4124-b4b1-4f2c3bba716f",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/dmytro-bondar/",
  },
];
