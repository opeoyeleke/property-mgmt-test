import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Statistic, Card } from "antd";
import "./dashboard.scss";

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

      <div className="dashboard-container">
        <div className="stats">
          <div className="stat-item">
            <Card>
              <Statistic title="Total Properties" value="20" />
            </Card>
          </div>
          <div className="stat-item">
            <Card>
              <Statistic title="Total Value" value="$235,610.47" />
            </Card>
          </div>
          <div className="stat-item">
            <Card>
              <Statistic title="Single Units" value="13" />
            </Card>
          </div>
          <div className="stat-item">
            <Card>
              <Statistic title="Multiple Units" value="7" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
