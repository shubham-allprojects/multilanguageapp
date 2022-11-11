import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import hindiText from "./hindi.json";

const resources = {
  en: {
    translation: {},
  },
  hin: {
    translation: hindiText,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("lang") || "en",
  });

export default i18n;
