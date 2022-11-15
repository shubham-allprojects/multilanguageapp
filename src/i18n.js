import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Language from "./components/4.TranslationData/TranslationData.json";

const resources = {
  en: {
    translation: {},
  },
  hin: {
    translation: Language.hin,
  },
  mar: {
    translation: Language.mar,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("lang") || "en",
  });

export default i18n;
