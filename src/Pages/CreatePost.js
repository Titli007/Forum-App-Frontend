import React from 'react'

const CreatePost = () => {
  return (
    <div className='w-full flex justify-center bg-white'>
      <div className='w-fit flex flex-col items-center md:p-5 pb-5 rounded-xl  bg-blue-100 mt-5 shadow-lg shadow-slate-400'>
          <input className='p-4 md:w-4/5 m-3 mt-9 focus:outline-none rounded-md' type='text' placeholder='Title'/>
          <input className='p-4 md:w-4/5 m-3 focus:outline-none rounded-md' type='text' placeholder='Description'/>
          <input className='p-4 mt-3 w-5/6 md:w-4/3' type='file'/>
          <button className='px-14 py-2 hover:opacity-50 bg-cyan-500 font-bold text-lg shadow-lg shadow-slate-400 text-white rounded-lg'>Post</button>
      </div>
    </div>
  )
}

export default CreatePost