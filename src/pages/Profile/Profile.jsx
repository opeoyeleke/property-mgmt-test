import React, { useEffect } from "react";

const Profile = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle("Profile");
  });

  return <div>Profile</div>;
};

export default Profile;
