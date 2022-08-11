import React, {useRef, useEffect, useState} from 'react';
import gsap from 'gsap';
import useMousePosition from '../hooks/useMousePosition';

import './Greensock.scss';

const Greensock = () => {
  const boxRef = useRef();
  const mousePosition = useMousePosition();

  const [rect, setRect] = useState({})

  useEffect(()=>{
    gsap.set(boxRef.current, {x: mousePosition.x-rect.width/2, y: mousePosition.y-rect.height/2})
  })

  useEffect(()=>{
    setRect(boxRef.current.getBoundingClientRect())
  },[])

  return (
    <div className="greensock-example">
      <div className="circle" ref={boxRef}>
        {mousePosition.x}, {mousePosition.y}
      </div>
    </div>
  )
}

export default Greensock
