
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Heart, User, Plus } from 'lucide-react';

export const MainNavigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: Search, path: '/explore', label: 'Explore' },
    { icon: Plus, path: '/create', label: 'Create' },
    { icon: Heart, path: '/activity', label: 'Activity' },
    { icon: User, path: '/profile', label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 px-4 md:px-0 md:top-0 md:left-0 md:h-screen md:w-16 md:border-r md:border-t-0 z-10">
      <div className="flex justify-around md:flex-col md:justify-start md:items-center md:py-8 md:space-y-10">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className={`p-3 flex flex-col items-center justify-center rounded-lg transition-colors ${
              isActive(item.path) 
                ? 'text-instagram-black font-semibold' 
                : 'text-instagram-gray hover:text-instagram-black'
            }`}
          >
            <item.icon 
              size={24} 
              className={isActive(item.path) ? 'font-bold' : ''} 
            />
            <span className="text-xs mt-1 md:hidden">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MainNavigation;
