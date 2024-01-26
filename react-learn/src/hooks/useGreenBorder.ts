import { useState } from "react";

const useGreenBorder = () => {
  const [greenBorder, setGreenBorder] = useState(false);

  function greenBorderSwitcher() {
    let style = "";
    if (greenBorder) {
      style = "";
    } else {
      style = "1px solid green";
    }

    const elems = document.body.getElementsByTagName("*");
    for (const element of elems) {
      if (element instanceof HTMLElement) {
        element.style.border = style;
      }
    }
    setGreenBorder(!greenBorder);
  }
  return  greenBorderSwitcher ;
};

export default useGreenBorder;