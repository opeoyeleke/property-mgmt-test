import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Apartments = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle("Apartments");
  });

  return (
    <div>
      <Helmet>
        <title>Apartments | Dashboard</title>
        <meta
          name="description"
          content="Apartrent helps you to organize properties in one place."
        />
        <meta property="og:title" content="Apartments | Dashboard" />
      </Helmet>
      Apartments
    </div>
  );
};

export default Apartments;
