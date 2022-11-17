import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import Language from "./components/4.TranslationData/TranslationData.json";
import hin from "./components/4.TranslationData/hindi.json";
import mar from "./components/4.TranslationData/marathi.json";

const resources = {
  en: {
    translation: {},
  },
  hin: {
    translation: hin,
  },
  mar: {
    translation: mar,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("lang") || "en",
  });

export default i18n;
