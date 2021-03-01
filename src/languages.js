const languageToContent = {
  header_greet: {
    en: "from Elma",
    nl: "van Elma"
  },
  header_figure_text: {
    en: "I stand for...",
    nl: "Ik sta voor..."
  },
  header_figure_value_dev: {
    en: "efficient web development",
    nl: "efficiënte webontwikkeling"
  },
  header_figure_value_bike: {
    en: "a good bike trip",
    nl: "een mooie fietstocht"
  },
  header_figure_value_work: {
    en: "enjoying the work",
    nl: "met plezier naar werk gaan"
  },
  header_figure_value_speakers: {
    en: "good speakers for music",
    nl: "goed stel speakers voor muziek"
  },
  header_figure_value_technologies: {
    en: "learning new technologies",
    nl: "leren van nieuwe technologieën"
  },
  header_figure_value_plants: {
    en: "having plants",
    nl: "hebben van planten"
  },
  projects_internship_title: {
    en: "Intenship Project",
    nl: "Stageopdracht"
  },
  projects_game_title: {
    en: "Snake Game",
    nl: "Snake Game"
  },
  projects_ducky_title: {
    en: "Ducky Dictionary",
    nl: "Ducky Dictionary"
  },
  projects_internship: {
    en: "07.09.20 - 15.01.21 | During my internship at Appademic I developed the frontend for the Infant Motor Profile app. This included transferring data with the use of a state management system, a database connection, and the finalization of my design with the help of various Usability tests. Though what I had developed stayed to be merely a temporarily concept.",
    nl: "07.09.20 - 15.01.21 | Tijdens mijn stage bij Appademic heb ik de frontend code ontwikkeld voor de Infant Motor Profile app. Dit omvatte taken als het overdragen van gegevens met behulp van een state management systeem, een databaseverbinding, en het afronden van mijn ontwerp met behulp van verschillende Usability tests. Echter, wat ik had ontwikkeld, bleef slechts een tijdelijk concept."
  },
  projects_game: {
    en: "01.09.2020 - 13.09.2020 | For the Danish non-profit organization FEUM I developed a minigame in addition to their ticketing selling platform. Complete with timer countdown, score counter, increasement of the player speed, including a fitting theme and music, it served well to its purpose and is easily reusable for future events.",
    nl: "01.09.2020 - 13.09.2020 | Voor de Deense non-profit organisatie FEUM heb ik een minigame ontwikkeld voor hun ticketverkoop platform. Het is compleet met een timer, scoreteller, verhoging van de spelersnelheid, inclusief een passend thema en muziek. De minigame het werkte goed voor zijn doel en is gemakkelijk herbruikbaar voor toekomstige evenementen."
  },
  projects_ducky: {
    en: "2020 - 2021 | For the purpose of learning VueJs I developed a dictionary platform. It is protected with a login functionality which is using ExpressJs api connected to a database in MongoDB. Besides, the website serves various functionalities, like adding, editing and removing words, searching for words, and many more are on its way.",
    nl: "2020 - 2021 | Om het VueJs framework te leren heb ik een gecustomiseerd woordenboekplatform ontwikkeld. Het is beveiligd met een inlogfunctionaliteit die gebruikmaakt van een ExpressJs api die is verbonden met een database in MongoDB. Daarnaast heeft de website verschillende functionaliteiten zoals het toevoegen, bewerken, verwijderen en zoeken van woorden, met nog meer onderweg. "
  },
  about_title: {
    en: "Journey",
    nl: "Toer"
  },
  about_hanze_intro: {
    en: "01.09.17 - 2021 | Hanzehogeschool in Groningen, the Netherlands. Bachelor Communication & Multimedia Design.",
    nl: "01.09.17 - 2021 | Hanzehogeschool in Groningen, Nederland. Bachelor Communication & Multimedia Design."
  },
  about_aarhus_intro: {
    en: "21.08.19 - 31.01.20 | Business Academy in Aarhus, Denmark. Minor Web Development.",
    nl: "21.08.19 - 31.01.20 | Business Academy in Aarhus, Denemarken. Minor Web Development."
  },
  about_appademic_intro: {
    en: "07.09.20 - 15.01.21 | Appademic in Groningen, the Netherlands. Frontend development internship.",
    nl: "07.09.20 - 15.01.21 | Appademic in Groningen, Nederland. Frontend development stage."
  },
  about_future_intro: {
    en: "The future is an unshaped path which this professional journey will follow.",
    nl: "..."
  }
}

export default function dictionary(keyName, language) {
  if (!keyName || !language) return;
  return languageToContent[keyName][language];
  //keyName = for examp. projects_ducky & language = en / nl
}
