'use client';
import { createContext, useState } from "react";
import gsap from "gsap";

interface transitionInterface  {
  gsapTimeline: gsap.core.Timeline;
  setGsapTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
};

const TransitionContext = createContext<transitionInterface | undefined>(undefined);


function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let [gsapTimeline, setGsapTimeline] = useState(
    gsap.timeline({ paused: true })
  );

  return (
    <TransitionContext.Provider value={{ gsapTimeline, setGsapTimeline}}>
      {children}
    </TransitionContext.Provider>
  );
}

export { TransitionContext, TransitionProvider };  export type { transitionInterface };

