import React from "react";
// import "./sidebar.css";
import SidebarButton from "./SidebarButton";
export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img src="back.jpg" className="profile-img" alt="profile" />
      <div>
        <SidebarButton />
      </div>
    </div>
  );
}
