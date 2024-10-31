import al from "./lang/al/lang";
import en from "./lang/en/lang";
import fr from "./lang/fr/lang";
import it from "./lang/it/lang";

export const getCurrentLang = (lang) => {
  let currentLang = null;
  switch (lang) {
    case "EN":
      currentLang = en;
      break;
    case "FR":
      currentLang = fr;
      break;
    case "AL":
      currentLang = al;
      break;
    case "IT":
      currentLang = it;
      break;
    default:
      currentLang = en;
      break;
  }
  return currentLang;
};
