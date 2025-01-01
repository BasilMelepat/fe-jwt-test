import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ThemeSwitcher from "../common/ThemeSwitcher";

const Navbar = () => {

  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-base-100 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-semibold ">
            <span>JWT Test</span>
          </Link>
        </div>

        {/* Right Side (Theme Switcher & Login) */}
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <Link 
            to="/login" 
            className="hidden lg:block px-4 py-2 bg-base-100 from-left rounded-md transition-colors"
          >
            Login
          </Link>
        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;