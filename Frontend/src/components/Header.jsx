import React from 'react';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className={`p-4 text-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'}`}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold animate-bounce">AI Language Utilities</h1>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-300 dark:bg-gray-700 p-2 rounded focus:outline-none ml-3"
        >
          {isDarkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};

export default Header;
