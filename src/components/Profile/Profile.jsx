import React from "react";
import "./Profile.css";

const ProfileDetails = () => {
  const user = {
    name: "kali goti ",
    email: "kali goti@example.com",
    phone: "99 to 99 pani n aavu to n 99",
    address: "900 at kalashnikalo",
    bio: "i am a famous toilet cleaner",
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiGDWxu58BS_M9_hloRMYzZ_f7LMEs8a6qA&s",
  };

  return (
    <div className="profile-details">
      <div className="profile-header">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="profile-picture"
        />
        <h1>{user.name}</h1>
      </div>
      <div className="profile-info">
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
        <p>
          <strong>Bio:</strong> {user.bio}
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;
