// context api data type

import { StaticImageData } from "next/image";

export interface AppContextType {
  sideMenuOpen?: boolean;
  toggleSideMenu?: () => void;
  searchOpen?: boolean;
  toggleSearchMenu?: () => void;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
}
// id type
export interface idType {
  id?: number;
}

// project type
export interface projectType{
  id?:number;
  img?: StaticImageData;
  title?:string;
  tag?:string;
  graphic?:boolean;
  design?:boolean;
  development?:boolean;
  networking?:boolean;
}

// event type
export interface blogType{
  id?:number;
  img?: StaticImageData;
  date?:string;
  title?:string;
  user?:string;
  comments?:any;
  button?:string;
}

// brand type
export interface brandType{
  id?:number;
  img?: StaticImageData;
  delay?:string;
}

type ISocial =  {
  id: number;
  icon: string;
  url: string;
}

// team type
export interface teamType {
  id?:number;
  img?: StaticImageData;
  title?:string;
  designation?:string;
  socialIcons?:ISocial[];
}

// hero type
export interface heroType {
  id?:number;
  slideBg: StaticImageData;
  title?:React.JSX.Element;
  subTitle?:string;
  btn?:string;
  shapeA?:StaticImageData;
  shapeB?:StaticImageData;
}

// menus type
export interface menusType {
  id?: number;
  hasDropdown?: boolean;
  title?: string | undefined;
  link?: any;
  submenus?: any;
}
