import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ThemeSwitcher from "../common/ThemeSwitcher.jsx";
import { logout } from "../../redux/slices/authSlice.js";

export default function AuthNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-base-100 shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/auth" className="flex items-center space-x-2 text-xl font-semibold">
            <span>JWT Test</span>
          </Link>
        </div>
        {/* Right Side (Theme Switcher & User Menu) */}
        <div className="flex items-center space-x-4">
        <ThemeSwitcher />
        <a 
            onClick={handleLogout} 
            className="hidden lg:block px-4 py-2 bg-base-100 from-left rounded-md transition-colors"
          >
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
}