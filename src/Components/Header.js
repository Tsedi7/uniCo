import React from 'react';
import logo from '../assets/uniconnect_logo_transparent.png'; // Adjust the path to your logo

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md h-16"> {/* Increased padding and set height */}
      <img 
        src={logo} 
        alt="UniConnect Logo" 
        className="h-12 md:h-16" // Adjust height for different screen sizes
      />
      <nav>
        <ul className="flex space-x-6"> {/* Increased space between nav items */}
          <li>
            <a 
              href="/login" 
              className="bg-[#5e208f] text-white px-4 py-2 rounded hover:bg-[#5e208f] transition"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
