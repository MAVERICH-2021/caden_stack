import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      setMenuPosition({ top: clientY, left:  clientX});
    };

    // Attach the event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return  menuPosition ;
};

export default useMousePosition;
