import "./App.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Navbar from "./components/1.Navbar/Navbar";
import About from "./components/2.About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  useEffect(() => {
    let lang = localStorage.getItem("lang");
    if (lang) {
      document.getElementById(lang).setAttribute("selected", "true");
    }
  });

  return (
    <BrowserRouter>
      <Navbar changeLanguage={changeLanguage} />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
