import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-light text-gray-900 tracking-tight">
              Desire Classic Car
            </h1>
          </div>
          
          <nav className="flex items-center space-x-2">
            <a
              href="#contact"
              className="ml-4 px-6 py-2 text-sm font-medium text-white bg-gray-900 rounded-full shadow-lg transition-all duration-200"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;