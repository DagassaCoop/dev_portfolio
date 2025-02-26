export interface INavLink {
  name: string;
  link: string;
}

export interface IGridItem {
  id: string;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

export interface IProject {
  id: string;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

export interface IWorkExperience {
  id: string;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
}

export interface ISocialMedia {
  id: string;
  img: string;
  link: string;
}

export interface ISkillSection {
  title: string;
  skills: string[];
}

export interface ICertificates {
  id: string;
  title: string;
  description: string;
  date: Date;
  img: string;
}
