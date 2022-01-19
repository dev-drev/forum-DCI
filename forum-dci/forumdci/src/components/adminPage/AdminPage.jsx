import React from "react";
import Navbar from "../Navbar";
import SubNavbar from "../Questions Page/SubNavbar";
import Avatar from "./Avatar";
import Dashboard from "./Dashboard";

export default function AdminPage() {
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <Avatar />
      <Dashboard />
    </div>
  );
}
