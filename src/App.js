import "./App.css";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { useEffect } from "react";

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
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Amazon
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item pe-2">
                <a className="nav-link" aria-current="page" href="/">
                  <Trans>About Us</Trans>
                </a>
              </li>
              <li className="nav-item pe-2">
                <a className="nav-link" href="/">
                  <Trans>Features</Trans>
                </a>
              </li>
              <li className="nav-item pe-2">
                <a className="nav-link" href="/">
                  <Trans>Pricing</Trans>
                </a>
              </li>

              <li className="nav-item pe-2">
                <select
                  name="languages"
                  className="form-select"
                  onChange={changeLanguage}
                >
                  <option id="en" value="en">
                    English
                  </option>
                  <option id="hin" value="hin">
                    हिंदी
                  </option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-5 col-md-6">
            <Trans>
              Technology is our new present and future, making human lives
              easier and more convenient. With new technological innovations,
              human beings have become more dependent on science and technology.
              We rely on technology for all our activities and have become an
              integral part of our lives.
            </Trans>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
