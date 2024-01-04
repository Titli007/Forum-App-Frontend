import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Reaction from './Reaction'
import ReactionAnim from '../Animations/ReactionAnim'

const EachPost = ({post}) => {

    const navigate = useNavigate()
    const params = useParams()
    const [User, setUser] = useState()
    

    useEffect(()=>{
      const userURL = `https://dummyjson.com/users/${post.userId}`
      axios.get(userURL)
      .then((res)=>setUser(res.data))
      .catch((error)=>console.log(error))
    },[])

    // console.log(User)

  return (
    // <div className='w-full'>
      <div className='p-2 m-2 bg-white md:m-7 md:p-5 rounded-lg' >
        <div onClick={()=> navigate(`/post/${post.id}`)}>
        {User&&
              <>
                <div className='flex space-y-4 mb-7'>
                    <div className='bg-cyan-200 rounded-full p-2 mr-4'>
                      <img src={User.image} width={35} height={35}/>
                    </div>
                    <h1>{User.username}</h1>
                </div>
              </>
              }
              <div className='space-y-4'>
                <h1 className='text-black font-semibold text-xl tracking-wide'>{post.title}</h1>
                <p className='tracking-wide space-x-2 space-y-9'>{post.body}</p>
                {post.tags &&
                post.tags.map(element => (
                    <span className='italic' key={element}>#{element}</span>
                ))
                }
            </div>
              
            
      </div>
      <Reaction react = {post.reactions}/>
    </div>
  )
}

export default EachPost