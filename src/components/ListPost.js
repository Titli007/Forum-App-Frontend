import React, {useEffect, useState, useContext, Suspense} from 'react'
import axios from 'axios'
import EachPost from './EachPost';
import { UserContext } from '../middleware/context'
import Loading from '../Animations/Loading';

function ListPost() {
  
  const {data, setData} = useContext(UserContext)
  const [allPosts, setAllPosts] = useState([]);
  const [searchQ, setSearchQ] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setSearchQ(data.searchInput)
  },[data.searchInput])

  useEffect(()=>{

    if(searchQ!=null){
      const searchURL = `https://dummyjson.com/posts/search?q=${searchQ}`
      axios.get(searchURL)
      .then((res)=>setAllPosts(res.data.posts))
      .catch((error)=>console.log(error))
    }
    if(searchQ===""){
      setIsLoading(true)
      const allPostsURL = 'https://dummyjson.com/posts';
      axios.get(allPostsURL)
      .then((res)=>{setAllPosts(res.data.posts);setIsLoading(false)})
      .catch((error)=>console.log(error))
    }

    
  },[searchQ])
  
  // console.log(isLoading)
  // console.log(data.searchInput)

  // useEffect(()=>{
  //   const userURL = `https://dummyjson.com/users/${allPosts.userId}`
  //   axios.get(userURL)
  //   .then((res)=>setAllUser(res.data))
  //   .catch((error)=>console.log(error))
  // })

  return (
    <>
    {
      !isLoading?
      <div>
            {allPosts&&
                allPosts.map((post,index)=>{
                    return(
                        <EachPost key={index} post={post}/>
                    )
                })
            }
    
        </div>
        :
        <Loading/>
    }
    </>
  )
}

export default ListPost
