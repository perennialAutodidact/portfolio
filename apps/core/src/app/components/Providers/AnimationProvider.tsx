import React, {createContext, useRef} from 'react'

type AnimationProviderProps = {
    children: React.ReactNode
}

type AnimationContextInitialState = {
  ref: React.MutableRefObject<HTMLDivElement | null>,
  timeline: gsap.core.Timeline,
}

const AnimationProvider = ({children}: AnimationProviderProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const timeline = gsap.timeline();
  const initialState:AnimationContextInitialState = {
    ref, timeline
  };
  const AnimationContext = createContext(initialState);
  return (
    <AnimationContext.Provider value={{...initialState}}>AnimationProvider</AnimationContext.Provider>
  )
}

export default AnimationProvider