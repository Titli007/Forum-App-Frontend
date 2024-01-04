import React, {useState, useEffect} from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import ReactionAnim from '../Animations/ReactionAnim';

const Reaction = ({react}) => {
    const [reactCount, setReactCount] = useState(0)
    const [likeClicked, setLikeClicked] = useState(false)

    function handleClick(){
      setLikeClicked(!likeClicked)
      if(likeClicked=== true){
        setReactCount(reactCount-1)
      }
      else{
        setReactCount(reactCount+1)
      }
    }
  return (
    <div className='flex items-center mt-4'>
        <div className='w-11' onClick={handleClick}>
          <ReactionAnim LikeClicked={likeClicked}/>
        </div>
        <span className='font-serif text-2xl'>{react+reactCount}</span>
    </div>
  )
}

export default Reaction