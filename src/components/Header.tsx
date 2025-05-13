
import React from 'react';
import { Heart, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 px-4 py-3 z-10 md:left-16">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <Link to="/" className="text-xl font-bold italic">
          Instagram
        </Link>
        
        <div className="flex items-center space-x-4">
          <button className="focus:outline-none">
            <MessageSquare size={24} className="text-instagram-black" />
          </button>
          <button className="focus:outline-none">
            <Heart size={24} className="text-instagram-black" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
