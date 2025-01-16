import profile from "./profile";
import contact from "./contact";
import languages from "./languages";
import softSkills from "./softSkills";
import frameworksTools from "./frameworksAndTools";
import about from "./about";
import education from "./education";
import experience from "./experience";
import { MainSectionInterface, SideItemInterface } from "../interfaceses";

export interface SideData {
  profile: typeof profile;
  contact: SideItemInterface;
  languages: SideItemInterface;
  softSkills: SideItemInterface;
  frameworksTools: SideItemInterface;
}

export interface MainData {
  about: MainSectionInterface;
  education: MainSectionInterface;
  experience: MainSectionInterface;
}

const mainData: MainData = { about, education, experience };

const sideData: SideData = {
  profile,
  contact,
  languages,
  softSkills,
  frameworksTools,
};

export { sideData, mainData };
