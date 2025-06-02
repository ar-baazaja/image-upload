import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  return <button onClick={() => { signOut(auth); navigate("/login"); }}>Logout</button>;
};

export default LogoutButton;