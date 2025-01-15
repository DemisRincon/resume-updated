import { IconType } from "react-icons";
import { FaRebel } from "react-icons/fa";

interface About {
  name: string;
  icon: IconType;
  description: string;
}

const about: About = {
  name: "ABOUT ME",
  icon: FaRebel,
  description: `Currently working for a U.S. contractor, I have utilized several frameworks, including React.js, Next.js, Express.js, and React Native, as well as databases like MongoDB. My hobbies include playing video games, playing Magic: The Gathering (MTG), and teaching JavaScript to other developers as a volunteer at Bright Coders Academy.`,
};

export default about;
