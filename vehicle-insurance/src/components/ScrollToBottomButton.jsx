"use client";
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const ScrollToBottomButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      if (documentHeight - scrollPosition > windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed right-4 bottom-4 p-2 rounded-lg shadow-lg bg-gray-800 text-white ${
        isVisible ? 'block' : 'hidden'
      }`}
      onClick={scrollToBottom}
    >
      <ChevronDownIcon className="w-6 h-6" />
    </button>
  );
};

export default ScrollToBottomButton;