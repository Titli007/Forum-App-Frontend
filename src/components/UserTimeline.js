import React from 'react'
import Reaction from './Reaction'

const UserTimeline = ({userpost, image, username}) => {

  return (
    <div className=''>
        
        {
        userpost&&
        userpost.map((data,index)=>{
            return(
                <div key={index} className=' mx-4 my-7 md:m-4 md:p-4 rounded-lg bg-white'>
                    <div className='flex space-y-4 mb-7 '>
                        <div className='bg-cyan-200 rounded-full p-2 mr-4'>
                            <img src={image} width={35} height={35}/>
                        </div>
                        <h1>{username}</h1>
                    </div>

                    <div>
                        <div className='space-y-2'>
                            <h1 className='text-black font-semibold text-xl tracking-wide'>{data.title}</h1>
                            <p className='tracking-wide'>{data.body}</p>
                            {data.tags &&
                            data.tags.map(element => (
                                <span className='italic' key={element}>#{element}</span>
                            ))
                            }
                            <Reaction react = {data.reactions}/>
                        </div>
                    </div>
                </div>
            )
        })
    }
    </div>
    
  )
}

export default UserTimeline