import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
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
                <a className="nav-link active" aria-current="page" href="/">
                  {t("About Us")}
                </a>
              </li>
              <li className="nav-item pe-2">
                <a className="nav-link" href="/">
                  Features
                </a>
              </li>
              <li className="nav-item pe-2">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>

              <li className="nav-item pe-2">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => i18n.changeLanguage("hin")}
                >
                  Hindi
                </button>
              </li>
              <li className="nav-item pe-2">
                <button
                  className="btn btn-outline-info"
                  onClick={() => i18n.changeLanguage("en")}
                >
                  English
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
