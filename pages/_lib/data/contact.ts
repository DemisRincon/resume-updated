import { AiFillPhone } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SideItemInterface } from "../interfaceses";

const contact: SideItemInterface = {
  name: "CONTACT",
  list: [
    {
      title: "darmfma@gmail.com",
      icon: GrMail,
      href: "mailto:darmfma@gmail.com",
    },
    {
      title: "3121091992",
      icon: AiFillPhone,
      href: false,
    },
    {
      title: "linkedin.com/in/demisrincon/",
      icon: FaLinkedin,
      href: "linkedin.com/in/demisrincon/",
    },
    {
      title: "github.com/DemisRincon",
      icon: FaGithub,
      href: "github.com/DemisRincon",
    },
  ],
};

export default contact;
