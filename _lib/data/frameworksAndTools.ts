import { FaReact, FaNode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiStyledcomponents,
  SiFramer,
  SiPostman,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { MdNightlight } from "react-icons/md";
import { SideItemInterface } from "../interfaceses";

const frameworksTools: SideItemInterface = {
  name: "FRAMEWORKS & TOOLS",
  list: [
    { title: "React.js", icon: FaReact },
    { title: "React Native", icon: FaReact },
    { title: "Next.js", icon: SiNextdotjs },
    { title: "Node.js", icon: FaNode },
    { title: "styled-components", icon: SiStyledcomponents },
    { title: "Framer Motion", icon: SiFramer },
    { title: "Nightwatch", icon: MdNightlight },
    { title: "Newman", icon: SiPostman },
    { title: "Express.js", icon: SiExpress },
    { title: "Mongo", icon: SiMongodb },
  ],
};

export default frameworksTools;
