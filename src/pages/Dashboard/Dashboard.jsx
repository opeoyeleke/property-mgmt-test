import React, { useEffect } from "react";

const Dashboard = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle("Dashboard");
  });

  return <div>Dashboard</div>;
};

export default Dashboard;
