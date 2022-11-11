import React from "react";
import { Trans } from "react-i18next";

const Home = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-6 col-md-7">
          <h1 className="text-center">
            <Trans>First Page Data is in front of you</Trans>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
