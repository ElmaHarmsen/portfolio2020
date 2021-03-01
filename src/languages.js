const languageToContent = {
  header_greet: {
    en: "from Elma",
    nl: "van Elma"
  },
  header_figure_text: {
    en: "I stand for...",
    nl: "Ik sta voor..."
  }
}

export default function dictionary(keyName) {
  const currentLanguage = window.localStorage.getItem("languageSetting");
  console.log(keyName, currentLanguage);
  return languageToContent[keyName][currentLanguage];
}
