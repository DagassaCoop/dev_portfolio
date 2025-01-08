export interface INavLink {
  name: string;
  link: string;
}

export interface IGridItem {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
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
