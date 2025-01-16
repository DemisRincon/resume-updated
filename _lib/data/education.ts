import { FaGraduationCap } from "react-icons/fa";
import { MainSectionInterface } from "../interfaceses";

const education: MainSectionInterface = {
  title: "EDUCATION",
  icon: FaGraduationCap,
  list: [
    {
      position: "React Native Developer",
      enterprise: "Bright Coders Academy (Magmalabs)",
      time: "2021",
      description: "Full course for React Native Developer.",
      tasks: [
        "Development of full-stack applications with React Native and firebase.",
        "Good practice writing JavaScript code (SOLID).",
        "Redux and Context API implementation.",
        "Usage of tools like Git, GitHub, Code Climate, Sonar Qube, Slack",
      ],
    },
    {
      position: "Full-stack MERN Developer",
      enterprise: "Dev Education",
      time: "2019 - 2020",
      description: `Full-stack MERN curse, imparted by Carlos Santa Roldán author of the book "React Cookbook: Create dynamic web apps with React using Redux, Webpack, Node.js, and GraphQL"`,
      tasks: [
        "Full-stack implementations for web applications.",
        "Build applications whit React.js, Next.js, node.js, Webpack, and express.js.",
        "Good practices writing JavaScript code.",
        "Redux implementation.",
      ],
    },
    {
      position: "Bachelor Degree",
      enterprise: "Universidad de Colima",
      time: "2015 - 2019",
      description:
        "Bachelor degree in Telematics Engineering got by outstanding performance",
      tasks: [
        "Publishment of an article called “A Game-Based Service to Mitigate the Risk of Inundations Caused by Solid Waste Accumulation”",
        "Got several courses like CCNA, Java SE8 , Unity development.",
        "Development of severals projects with differents technologies.",
        "Got technical certificate of design and development of ubiquitous games.",
      ],
    },
  ],
};

export default education;
