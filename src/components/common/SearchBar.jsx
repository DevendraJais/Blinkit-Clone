import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const searchSuggestions = [
    'Search "milk"',
    'Search "bread"',
    'Search "sugar"',
    'Search "butter"',
    'Search "paneer"',
    'Search "chocolate"',
    'Search "curd"',
    'Search "rice"',
    'Search "egg"',
    'Search "chips"'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % searchSuggestions.length);
        setIsVisible(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors duration-200">
        <div className="SearchBar__IconContainer-sc-16lps2d-5 bWkepp mr-3">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <div className="SearchBar__PlaceholderContainer-sc-16lps2d-0 dLwZlr flex-1">
          <div className="SearchBar__AnimationWrapper-sc-16lps2d-1 dHlTZP relative h-5">
            {searchSuggestions.map((text, index) => (
              <div
                key={`animationText-${index + 1}`}
                id={`animationText-${index + 1}`}
                className={`SearchBar__AnimationText-sc-16lps2d-2 bZCLHY absolute inset-0 text-gray-500 text-sm ${
                  index === currentTextIndex && isVisible ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300`}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
