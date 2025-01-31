import { FaReact, FaNode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiStyledcomponents,
  SiFramer,
  SiPostman,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { PiPersonSimpleRunBold } from "react-icons/pi";

const frameworksTools = {
  name: "FRAMEWORKS & TOOLS",
  list: [
    { title: "Agile methodology", icon: PiPersonSimpleRunBold },
    { title: "React.js", icon: FaReact },
    { title: "React Native", icon: FaReact },
    { title: "Next.js", icon: SiNextdotjs },
    { title: "Node.js", icon: FaNode },
    { title: "styled-components", icon: SiStyledcomponents },
    { title: "Framer Motion", icon: SiFramer },
    { title: "Github", icon: BsGithub },
    { title: "Newman", icon: SiPostman },
    { title: "Express.js", icon: SiExpress },
    { title: "Mongodb", icon: SiMongodb },
  ],
};

export default frameworksTools;
