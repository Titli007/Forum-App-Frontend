import React,{useState, useEffect, useId} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import Reaction from '../components/Reaction'
import Loading from '../Animations/Loading'


const PostCard = () => {

    const params = useParams()
    const [SinglePostData, setSinglePostData] = useState(null)
    const [userID, setUserID] = useState(null)
    const [userData, setUserData] = useState(null)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)



    useEffect(()=>{
        const singleURL = `https://dummyjson.com/posts/${params.id}`
        axios.get(singleURL)
        .then((res)=>{setSinglePostData(res.data); setIsLoading(false)})
        .catch((error)=>console.log(error))
    },[])

    useEffect(()=>{
        setUserID(SinglePostData?.userId)
    },[SinglePostData])

    // console.log(userID)

    useEffect(()=>{
        if(userID){
            const userURL = `https://dummyjson.com/users/${userID}`

            axios.get(userURL)
            .then((res)=>{setUserData(res.data)})
            .catch((error)=>{console.log(error)})
        }
    },[userID])

    console.log(!isLoading)

  return (
    
    <div className='mx-3 p-1 mt-3 md:mx-7 md:p-5 md:mt-7 rounded-lg flex'>
        {!isLoading?
        <>
        {SinglePostData&& userData&&
            <div className='w-full'>
                <div className='flex flex-col md:flex-row'>
                    
                    <div className='bg-white w-full p-1 md:w-3/5 md:p-7 rounded-lg h-max space-y-5'>
                        <div className='flex cursor-pointer space-y-4' onClick={()=>{navigate(`/user/${userData.id}`)}}>
                            
                            <div className='bg-cyan-200 rounded-full p-2 mr-4'>
                                <img className='' src={userData.image} width={35} height={35}/>
                            </div>
                            
                            <h1 className=' hover:text-blue-600 hover:underline hover:font-bold hover:transition-all hover:ease-in-out hover:delay-100'>{userData.username}</h1>
                        
                        </div>

                        <div className='space-y-4'>
                            <h1 className='text-black font-semibold text-xl tracking-wide'>{SinglePostData.title}</h1>
                            <p className='tracking-wide'>{SinglePostData.body}</p>
                            {SinglePostData.tags &&
                            SinglePostData.tags.map(element => (
                                <span className='italic'>#{element}</span>
                            ))
                            }
                            <Reaction react = {SinglePostData.reactions}/>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 md:mx-10'>
                        <SideBar line1="Content Detail" line2="In our commitment to safeguarding your privacy, we want to inform you tat certain posts contain specific details visible only to authorized personnel"/>
                        <Footer/>
                    </div>
                </div>
            </div>}
                </>
                :<Loading/>
                
            

        }
    </div>
  )
}

export default PostCard

