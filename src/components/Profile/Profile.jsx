import React from "react";
import "./Profile.css";

const ProfileDetails = () => {
  const user = {
    name: "Hardu baby",
    email: "kaligoti@example.com",
    bio: "I am a famous toilet cleaner",
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiGDWxu58BS_M9_hloRMYzZ_f7LMEs8a6qA&s",
    followers: 254,
    following: 180,
    posts: 35, // Adding number of posts for layout
  };

  return (
    <div className="profile-details">
      <div className="profile-header">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-info">
          <h1>{user.name}</h1>
          <div className="follow-stats">
            <div className="stat">
              <h2>{user.posts}</h2>
              <p>Posts</p>
            </div>
            <div className="stat">
              <h2>{user.followers}</h2>
              <p>Followers</p>
            </div>
            <div className="stat">
              <h2>{user.following}</h2>
              <p>Following</p>
            </div>
          </div>
          <p className="bio">{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
