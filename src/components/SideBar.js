import React from 'react'
import { useNavigate } from 'react-router-dom';
import Alien from '../Animations/Alien';

const SideBar = ({line1, line2}) => {
    const navigate = useNavigate()
    const title = line1 || "Home"
  return (
    <div className='shadow-md p-1 mx-1 my-7 mt-12 md:p-7 bg-white md:mx-5 rounded-lg space-y-4'>

      <div className='flex space-y-4'>

        <div className='w-20 h-20 mr-3'>
          <Alien/>
        </div>

        <h1 className='font-semibold'>{title}</h1>
        
      </div>
    
      <p className='border-b-2 border-black tracking-wide leading-7'>{line2}</p>
      <button className='bg-cyan-400 py-1 rounded-xl w-full font-bold text-white' onClick={()=> navigate('/create')}>Create Post</button> <br/>
      <button className='bg-cyan-400 py-1 rounded-xl w-full font-bold text-white'>Create Community</button>
    </div>
  )
}

export default SideBar