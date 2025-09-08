import { Link } from 'react-router-dom';
import React from 'react';

const navLinks = [
  { name: 'Home', path: '/home' },
  { name: 'Features', path: '/features' },
  { name: 'Editor', path: '/editor' },
  { name: 'Posts', path: '/posts' },
];

function Navbar() {
  return (
    
    <header className="sticky top-0 size-28 z-20 w-full bg-black">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-29">

       
        <Link to="/home" className="text-lg font-bold hover:opacity-80 transition-opacity">
          Logo
        </Link>
        
      
        <nav className="flex items-center gap-2 rounded-full p-2 bg-gray-/50 border border-white/10">
          {navLinks.map((link) => (
            <Link
            to={link.path}
              // key={link.name}
              // to={link.path}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Link to="/login" className="px-4 py-2 rounded-full text-sm font-bold bg-white text-black hover:bg-gray-200 transition-colors">
          Log in
        </Link>
        
      </div>
    </header>
  );
}

export default Navbar;