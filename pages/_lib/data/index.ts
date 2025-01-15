import profile from "./profile";
import contact from "./contact";
import languages from "./languages";
import softSkills from "./softSkills";
import frameworksTools from "./frameworksAndTools";
import about from "./about";
import education from "./education";
import experience from "./experience";

interface SideData {
  profile: typeof profile;
  contact: typeof contact;
  languages: typeof languages;
  softSkills: typeof softSkills;
  frameworksTools: typeof frameworksTools;
}

interface MainData {
  about: typeof about;
  education: typeof education;
  experience: typeof experience;
}

const mainData: MainData = { about, education, experience };

const sideData: SideData = {
  profile,
  contact,
  languages,
  softSkills,
  frameworksTools,
};

const data = { sideData, mainData };

export default data;
