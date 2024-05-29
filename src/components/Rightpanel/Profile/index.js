// import React from "react";
import profile from "../../../images/avatar_g.jpg";

const Profile = () => {
  return (
    <div className="card">
      <img className="profile_img" src={profile} alt="Woods" />
      <div className="card_content">
        <h2>My Name</h2>
        <p>
          Just me, myself and I, exploring the universe of uknownment. I have a
          heart of love and a interest of lorem ipsum and mauris neque quam
          blog. I want to share my world with you.
        </p>
      </div>
    </div>
  );
};
export default Profile;
