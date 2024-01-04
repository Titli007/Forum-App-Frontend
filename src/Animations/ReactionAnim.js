import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import animationData from '../logo/Heart.json'; // Replace with the actual path to your JSON file

const ReactionAnim = ({ LikeClicked }) => {
  const animationContainer = useRef(null);
  const [click, setClick] = useState(false);

  useEffect(() => {
    setClick(LikeClicked);

    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: LikeClicked, // Use LikeClicked directly here
      animationData: animationData,
    });

    return () => {
      anim.destroy(); // Cleanup when the component unmounts
    };
  }, [LikeClicked]); // Add LikeClicked as a dependency

  return <div ref={animationContainer} />;
};

export default ReactionAnim;
