import { useState, useEffect } from "react";
export const QuadrantType = {
  topLeft: "topLeft",
  topRight: "topRight",
  bottomLeft: "bottomLeft",
  bottomRight: "bottomRight",
};
export const usePointerPosition = () => {
  const [quadrant, setQuadrant] = useState<string>(QuadrantType.topLeft);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      // Get the dimensions of the window
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate the center of the window
      const centerX = windowWidth / 2;
      const centerY = windowHeight / 2;

      // Determine the quadrant based on mouse position
      if (clientY < centerY) {
        if (clientX < centerX) {
          setQuadrant(QuadrantType.topLeft);
        } else {
          setQuadrant(QuadrantType.topRight);
        }
      } else {
        if (clientX < centerX) {
          setQuadrant(QuadrantType.bottomLeft);
        } else {
          setQuadrant(QuadrantType.bottomRight);
        }
      }
    };

    // Attach the event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return quadrant;
};
