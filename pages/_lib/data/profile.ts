import { StaticImageData } from "next/image";
import photo from "../images/photo.jpg";

export interface Profile {
  name: string;
  position: string;
  photo: StaticImageData;
}

const profile: Profile = {
  name: "Demis Alberto Rincon Martinez",
  position: "Software Developer (JavaScript)",
  photo,
};

export default profile;
