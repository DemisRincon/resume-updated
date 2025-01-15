interface Language {
  name: string;
  list: {
    title: string;
    ghostTitle: string;
  }[];
}

const languages: Language = {
  name: "LANGUAGES",
  list: [
    {
      title: "English",
      ghostTitle: "(Advanced)",
    },
    {
      title: "Spanish",
      ghostTitle: "(Native)",
    },
  ],
};

export default languages;
