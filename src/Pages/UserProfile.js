import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import UserTimeline from '../components/UserTimeline'

const UserProfile = () => {

  const [user, setUser] = useState(null)
  const params = useParams()
  const [userpost, setUserPost] = useState([])

  useEffect(() => {
    const userURL = `https://dummyjson.com/users/${params.user_id}`
    axios.get(userURL)
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error))
  }, [])

  console.log(user)

  useEffect(() => {
    const userpostURL = `https://dummyjson.com/users/${params.user_id}/posts`
    axios.get(userpostURL)
      .then((res) => { setUserPost(res.data.posts) })
      .catch((error) => console.log(error))
  }, [])

  // console.log(userpost)

  return (

    <div className='w-full'>
      {
        user &&
        <div className='flex flex-col md:flex-row-reverse w-full'>
          <div className='md:w-1/3 bg-blue-100 m-2 py-5 px-2 rounded-lg md:m-5 h-max'>
            <div className=' mb-7'>
              <div className='rounded-full p-6 md:py-6 md:m-4 bg-cyan-200'>
                <img src={user.image} />
              </div>
              <p className='text-center font-bold'>{user.username}</p>
              <p className='text-center'>{user.company.department}</p>
            </div>
            <div className='md:m-4 flex '>
              <div className='w-1/2 text-center space-y-4'>
                <p>name:  <p>{user.firstName} {user.lastName}</p></p>
                <p>post: <p>{userpost.length}</p></p>
              </div>
              <div className='w-1/2 text-center md:space-y-4 space-y-10'>
                <p>city:<p> {user.address.city}</p></p>
                <p>cake day:<p>{user.birthDate}</p></p>
                {/* <p>gender: <p>{user.gender}</p></p> */}
              </div>

            </div>
          </div>

          <div className='md:w-3/5'>
            <UserTimeline userpost={userpost} image={user.image} username={user.username} />
          </div>

        </div>
      }



    </div>
  )
}

export default UserProfile