import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()
  return (
      <div className=' m-1 p-1 bg-white md:m-7 md:p-3 flex rounded-lg'>
        <div className='pr-2 text-4xl md:text-5xl'>
          <MdAccountCircle/>
        </div>
        <div className='w-full rounded-lg'>
          <input className='bg-slate-100 py-2 px-4 w-full rounded-md ' type='text' placeholder='Share Your Thoughts' onClick={()=> navigate('/create')}/>
        </div>
      </div>
  )
}

export default Header