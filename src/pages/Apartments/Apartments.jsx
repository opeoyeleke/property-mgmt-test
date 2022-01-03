import React, { useEffect } from "react";

const Apartments = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle("Apartments");
  });

  return <div>Apartments</div>;
};

export default Apartments;
