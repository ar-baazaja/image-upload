import React from "react";
import ImageUpload from "./ImageUpload";
import ImageGallery from "./ImageGallery";
import LogoutButton from "./LogoutButton";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <LogoutButton />
      <ImageUpload />
      <ImageGallery />
    </div>
  );
};

export default Dashboard;
