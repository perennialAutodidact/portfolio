import React, {useRef, useEffect, useState} from 'react';
import gsap from 'gsap';
import useMousePosition from '../hooks/useMousePosition';

import './Greensock.scss';

const Greensock = () => {
  const boxRef = useRef();
  const mousePosition = useMousePosition();

  const [rect, setRect] = useState({})

  useEffect(()=>{
    gsap.to(boxRef.current, {x: mousePosition.x-rect.width/2, y: mousePosition.y-rect.height/2})
  })

  useEffect(()=>{
    setRect(boxRef.current.getBoundingClientRect())
  },[])

  return (
    <div id="greensock-examples">
      <div className="box" ref={boxRef}>
        {mousePosition.x}, {mousePosition.y}
      </div>
    </div>
  )
}

export default Greensock
