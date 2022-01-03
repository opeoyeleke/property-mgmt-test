import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Find = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle("Find Apartments");
  });

  return (
    <div>
      <Helmet>
        <title>Find Apartments | Dashboard</title>
        <meta
          name="description"
          content="Apartrent helps you to organize properties in one place."
        />
        <meta property="og:title" content="Find Apartments | Dashboard" />
      </Helmet>
      Find
    </div>
  );
};

export default Find;
