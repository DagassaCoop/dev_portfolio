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
    img: "/b1.svg",
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

export const projects: IProject[] = [
  {
    id: "ebf24886-c66d-4be8-8043-612550f060ed",
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: "16326960-690e-448d-943a-0bbf49685d3e",
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: "5e4a8da9-22a3-482e-ba37-0ea0b10a272f",
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: "e0f39ac3-e162-465e-beed-8fa36e1e220f",
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const workExperience: IWorkExperience[] = [
  {
    id: "824678ca-30c8-4cc2-930a-91c4eaff9985",
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: "9a1675ce-074b-4a72-bf24-b9f96d9ffab6",
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: "31a638bb-cf66-40a1-83b5-c1f94230f059",
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: "02588600-7a24-496f-9566-f7f1994adfd3",
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia: ISocialMedia[] = [
  {
    id: "ba7cad7b-f927-4a0d-a542-37dd30585b99",
    img: "/git.svg",
    link: "",
  },
  {
    id: "b4f7f5ff-a76a-4cf5-a2f4-0f77c0d2cf61",
    img: "/twit.svg",
    link: "",
  },
  {
    id: "641a7d88-07b6-4124-b4b1-4f2c3bba716f",
    img: "/link.svg",
    link: "",
  },
];
