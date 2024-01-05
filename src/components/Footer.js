import React from 'react'

const Footer = () => {
  return (
    <div className='shadow-md bg-white py-3 my-6 md:p-7 md:m-5 rounded-lg space-y-4 font-light text-sm '>
        <div className='grid grid-cols-2 border-b-2 border-slate-400'>
            <span>User Agreement</span><span>Content Policy</span>
            <span>Privacy Policy</span><span>Moderator Code of Conduct</span>
        </div>
        <div className='grid grid-cols-2 border-b-2 border-slate-400'>
            <span>English</span><span>Deutsch</span>
            <span>Francais</span><span>Espanol</span>
            <span>Francais</span><span>Espanol</span>
            <span>Italiano</span><span>Portugues</span>
        </div>
        <p>ForumApp Inc @2023. All rights reserved</p>
    </div>
  )
}

export default Footer