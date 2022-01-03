import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Portfolio = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle("Portfolio");
  });

  return (
    <div>
      <Helmet>
        <title>Profile | Dashboard</title>
        <meta
          name="description"
          content="Apartrent helps you to organize properties in one place."
        />
        <meta property="og:title" content="Profile | Dashboard" />
      </Helmet>
      Profile
    </div>
  );
};

export default Portfolio;
