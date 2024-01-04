import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../Animations/Icon';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='md:absolute md:top-0 md:left-0 md:hidden flex justify-between px-2 sticky top-0'>
      <div className='w-16 h-16' onClick={() => navigate('/')}>
        <Icon />
      </div>
      <div className='bg-slate-500 absolute right-0 z-20'>
        <div onClick={toggleMenu}>
          <div className={`flex flex-col visible cursor-pointer p-2 transition-transform duration-300 ease-in-out ${isOpen ? 'open' : ''}`}>
            <div className={`w-10 h-1 bg-gray-800 my-1 transition duration-300 ${isOpen ? 'transform rotate-45 translate-x-10 translate-y-0' : ''}`}></div>
            <div className={`w-10 h-1 bg-gray-800 my-1 transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-10 h-1 bg-gray-800 my-1 transition duration-300 ${isOpen ? 'transform -rotate-45 translate-x-10 -translate-y-6' : ''}`}></div>
          </div>
        </div>

        {isOpen && (
          <div className=" flex flex-col">
            <button className="  px-2 py-1 rounded mb-2">Chat</button>
            <button className=" px-2 py-1 rounded mb-2">Notification</button>
            <button className=" px-2 py-1 rounded mb-2" onClick={() => navigate('/create')}>Post</button>
            <button className=" px-2 py-1 rounded">Account</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
