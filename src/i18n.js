import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "About Us": "About Us",
    },
  },
  hin: {
    translation: {
      "About Us": "Hamare Bareme",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
  });

export default i18n;
