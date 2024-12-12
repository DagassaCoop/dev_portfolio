export interface INavItem {
  name: string;
  link: string;
}

export interface IGridItem {
  id: number;
  title: string;
  description: string;
  className?: string;
  imgClassName?: string;
  titleClassName?: string;
  img: string;
  spareImg: string;
}

export interface IProject {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

export interface ITestimonial {
  quote: string;
  name: string;
  title: string;
}

export interface ICompany {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}

export interface IWorkExperience {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
}

export interface ISocialMedia {
  id: number;
  img: string;
}
