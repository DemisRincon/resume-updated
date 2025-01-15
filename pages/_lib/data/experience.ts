interface Experience {
  title: string;
  list: {
    position: string;
    enterprise: string;
    time: string;
    description: string;
  }[];
}

const experience: Experience = {
  title: "EXPERIENCE",
  list: [
    {
      position: "Senior Software Developer (Remote)",
      enterprise: "Travelport",
      time: "Jun 2023 - Present",
      description:
        "I perform maintenance of 25 React components and have Lead a project to develop Automated Contract Testing for APIs (aproximately 200) using Newman and GitHub Actions. Also Building Nigtwatch/Cucumber for UI testing. Part of my work was provide guidance to junior developers in accomplishing frontend, backend, and SDET tasks.",
    },
    {
      position: "Mentor (Remote)",
      enterprise: "Bright Coders Academy (Magmalabs)",
      time: "May 2021 - Jun 2024",
      description:
        "Guiding junior developers through the React Native course, addressing JavaScript questions, and providing overall course support and problem-solving advice.",
    },
    {
      position: "Software Developer (Remote)",
      enterprise: "Sancrisoft",
      time: "Jun 2021 - Jun 2023",
      description:
        "Worked on diverse client projects using React.js, Next.js, Express.js, React Native, and MongoDB. Developed five different applications, including data capture for Oculus, cruise administration systems for Royal Caribbean, complex web pages for PMG Advertising Agency, and COOP truck rental management systems. Led one of these projects.",
    },
    {
      position: "Software Developer (Hybrid)",
      enterprise:
        "Proveedora de Servicios Profesionales S.A. de C.V. (Super Kisko), Colima",
      time: "Jun 2019 - Jun 2021",
      description:
        "Developed and upgraded internal applications managing confidential data via REST APIs. Engaged in agile development, improved legacy software, and created reusable components using Next.js, React.js, SASS, and Redux.",
    },
    {
      position: "Software Developer (Onsite)",
      enterprise:
        "MGSC S.A. de C.V. (Tata Consultancy Services), Zapopan Jalisco",
      time: "Dec 2018 - Jul 2019",
      description:
        "Built React.js components for banking services and integrated a hotel employee registration module.",
    },
  ],
};

export default experience;
