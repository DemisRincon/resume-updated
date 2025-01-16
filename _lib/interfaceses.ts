import { IconType } from "react-icons";

export interface SideItemInterface {
  name: string;
  list: {
    title: string;
    icon?: IconType;
    href?: string | boolean;
    ghostTitle?: string;
  }[];
}

export interface MainSectionInterface {
  title: string;
  icon?: IconType;
  description?: string;
  list?: {
    position: string;
    enterprise: string;
    time: string;
    description: string;
    tasks?: string[];
  }[];
}
