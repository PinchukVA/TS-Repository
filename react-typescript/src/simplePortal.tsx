import React, { useEffect,useRef, useState } from 'react';
import { createPortal } from "react-dom";

type PortalProps = {
  children: React.ReactNode,
}

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

const Portal = ({ children }: PortalProps) => {
    // create div element only once using ref
    const elRef = useRef<HTMLDivElement | null>(null);
    if (!elRef.current) elRef.current = document.createElement("div");
  
    useEffect(() => {
      const el = elRef.current!; // non-null assertion because it will never be null
      modalRoot.appendChild(el);
      return () => {
        modalRoot.removeChild(el);
      };
    }, []);
  
    return createPortal(children, elRef.current);
  }

 const SimplePortal = () => {
  const [count, setCount] = useState(0)

  const handleClick = (e : React.MouseEvent<HTMLElement>):void => {
    setCount(prev=>++prev)
  }

    return (
      <div onClick={(e)=>handleClick(e)}>
        <h1>Clicks: {count}</h1>
        {/* <Portal> */}
          <h2>TEST PORTAL</h2>
          <button>Click</button>
        {/* </Portal> */}
      </div>
    )
}

export default SimplePortal