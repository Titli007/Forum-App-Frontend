import React,{useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { UserContext } from '../middleware/context'
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {

  const [searchInput, setsearchInput] = useState('')
  const {data, setData} = useContext(UserContext)

  useEffect(()=>{
    const searchURL = `https://dummyjson.com/posts/search?q=love`
  })
  return (
    <div className='flex bg-slate-100 rounded-full h-max space-x-3 items-center'>
      <div className='px-2'>
        <IoSearchOutline size={24}/>
      </div>
      <input className='h-1/2 bg-slate-100 w-full py-2 focus:outline-none' type='text' placeholder='search' onChange={(e)=>{setsearchInput(e.target.value)}}/>
      <button  className='h-1/2 bg-cyan-300 px-8 py-2 rounded-full text-white' onClick={()=> setData({type:"set_searchInput", payload:searchInput})}>search</button>
    </div>
  )
}

export default Search