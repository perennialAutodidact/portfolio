import { createContext, useRef } from "react";
import gsap from "gsap";

type AnimationProviderProps = {
  children: React.ReactNode;
};

type AnimationContextInitialState = {
  ref: React.RefObject<HTMLDivElement | null>;
  timeline: gsap.core.Timeline;
};

const AnimationProvider = ({ children }: AnimationProviderProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const timeline = gsap.timeline();
  const initialState: AnimationContextInitialState = {
    ref,
    timeline,
  };
  const AnimationContext = createContext(initialState);
  return (
    <AnimationContext.Provider value={{ ...initialState }}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
