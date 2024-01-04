import React, { useState, useEffect, useContext } from 'react'
import CreatePost from '../Pages/CreatePost'
import logo from '../logo/OIP.jpg'
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { MdCreate } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import Icon from '../Animations/Icon';
import Sun from '../Animations/Sun';
import Moon from '../Animations/Moon';
import { UserContext } from '../middleware/context'
const Nav = () => {

  const [showCreatePost, setShowCreatePost] = useState(false);
  const navigate = useNavigate()
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { data, setData } = useContext(UserContext)

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
    setData({ type: "set_isDark", payload: !isDarkMode })
  };


  return (
    <>
      <div className='top-0 left-0 flex sticky md:top-0 bg-white md:z-10 justify-around space-y-3' >
        <div className='w-16 h-16' onClick={() => navigate('/')}>
          <Icon />
        </div>
        <div className='hidden md:block'>
          <Search />
        </div>
        <div className='flex'>
          <IoChatbubbleEllipses size={30} />
          <IoIosNotifications size={30} />
          <MdCreate size={30} onClick={() => navigate('/create')} />
        </div>
        {/* <div className={`flex ${isDarkMode ? 'bg-gray-200' : 'bg-yellow-200'} rounded-full w-20 h-10 ease-in-out duration-300`} onClick={toggleDarkMode}>
          {isDarkMode ? <div className='ml-9 '><Moon/></div> : <Sun />}
        </div> */}
        <div className='flex'>
          <MdAccountCircle size={30} />
          <span>account</span>
        </div>
        
      </div>
      <div className="visible md:hidden m-4">
          <Search />
        </div>
    
    </>


  )
}

export default Nav