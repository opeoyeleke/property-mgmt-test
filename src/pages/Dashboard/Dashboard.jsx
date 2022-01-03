import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Dashboard = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle("Dashboard");
  });

  return (
    <div>
      <Helmet>
        <title>Overview | Dashboard</title>
        <meta
          name="description"
          content="Apartrent helps you to organize properties in one place."
        />
        <meta property="og:title" content="Overview | Dashboard" />
      </Helmet>
      Dashboard
    </div>
  );
};

export default Dashboard;
