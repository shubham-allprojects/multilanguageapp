import React from "react";
import { Trans } from "react-i18next";
import { NavLink } from "react-router-dom";

const Navbar = ({ changeLanguage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Amazon
        </NavLink>
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
              <NavLink to="/about" className="nav-link" aria-current="page">
                <Trans>About Us</Trans>
              </NavLink>
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
                <option id="mar" value="mar">
                  मराठी
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
  );
};

export default Navbar;
