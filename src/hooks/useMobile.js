import React, {useState, useEffect} from 'react'

export default function useMobile() {
    const [width, setWidth] = useState(window.innerWidth);

    
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    const isMobile = width <= 520;
    const isTablet = width > 520 && width <= 700;

  return {isMobile, isTablet}
}
