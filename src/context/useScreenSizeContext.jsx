import { useMediaQuery } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";

const ScreenSizeContext = createContext(null);

export const ScreenSizeProvider = ({children}) => {

  //Sidebar responsiveness screen size
  const MOBILE_SCREENCEIL = 750;

  const isMobileScreen = useMediaQuery(`(max-width:${MOBILE_SCREENCEIL}px)`)

  //Statistics Chart/Table responsiveness screen sizes
  const CONTAINER_SMALLSIZE = 500;
  const CONTAINER_MEDIUMSIZE = 900;
  const CONTAINER_BIGSIZE = 1200;
  
  const [isContainerSize, setIsContainerSize] = useState({s: null, m: null, l: null})
  const [isCollapsed, setIsCollapsed] = useState(true);

  const getContainerSize = (container) => {
    const containerWidth = container.clientWidth;
    setIsContainerSize({
      s: containerWidth < CONTAINER_SMALLSIZE,
      m: containerWidth < CONTAINER_MEDIUMSIZE,
      l: containerWidth > CONTAINER_BIGSIZE,
    })
  }

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  const collapseSidebar = () => setIsCollapsed(true)

  const observeContainerSize = (containerRef, observerAction = getContainerSize) => {
    if(containerRef.current == null) return;

    const observer = new ResizeObserver(entries => {
      const container = entries[0]?.target;

      if(container == null) return;
        observerAction(container);
      });
      observer.observe(containerRef.current);

      return ()=> {
        observer.disconnect();
      }
  }

  return <ScreenSizeContext.Provider value={{isMobileScreen, isContainerSize, observeContainerSize, isCollapsed, toggleSidebar, collapseSidebar}}>{children}</ScreenSizeContext.Provider>
} 

export const useScreenSizeContext = () => {
    const value = useContext(ScreenSizeContext);
    if(value == null) throw Error ("Cannot use outside of ScreenSizeProvider");

    return value;
}

const contentStyles = {
  height: "75.3dvh",
  spacing: "10px"
};

export default contentStyles;