import { AiFillPhone } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const contact = {
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
      href: "https://www.linkedin.com/in/demisrincon/",
    },
    {
      title: "github.com/DemisRincon",
      icon: FaGithub,
      href: "https://github.com/DemisRincon",
    },
  ],
};

export default contact;
