import React, {useEffect, useState, useContext} from 'react'
import Header from '../components/Header'
import ListPost from '../components/ListPost'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import Loading from '../Animations/Loading'
import { UserContext } from '../middleware/context'

const Home = () => {

  const {data, setData} = useContext(UserContext)
  const [darkdata,setDarkData] = useState("")

  useEffect(()=>{
    setDarkData(data.isDark)
  },[data.isDark])

  return (
    <div className={`flex flex-col md:flex-row ${darkdata? 'bg-black' : 'bg-white'} bg-gray-300 w-full space-y-4 justify-around relative`}>
        <div className='md:w-3/5'>
            <Header/>
            <ListPost/>
        </div>
        <div className='md:w-1/3'>
          
            <SideBar className="" line2="Step into a world of connection and discovery! We are delighted to welcome you to the heart of our forum, where vibrant discussions and diverse communities converge."/>
            <div className='sticky top-24'>
            <Footer/>
          </div>
        </div>
    </div>
  )
}

export default Home