import { useState } from "react";
import "./App.css";

import useGreenBorder from "./hooks/useGreenBorder";
import { Link } from "react-router-dom";
import { AppRouter } from "./router";
import { IconArrow } from "./assets/icons/icons";

function App() {
  const switchGreenBorder = useGreenBorder();
  const [isToolboxExpanded, setIsToolboxExpanded] = useState(false);

  const handleToolboxExpansion = () => {
    setIsToolboxExpanded(!isToolboxExpanded);
  };
  return (
    <div className="App">
      <div className="toolbox absolute right-4 top-4 flex">
        <div className="toolbox-handler" onClick={handleToolboxExpansion}>
          <div
            className={
              isToolboxExpanded ? "rotate-[-90deg]" : " rotate-[90deg]"
            }
          >
            <IconArrow />
          </div>
        </div>
        <div
          className="toolbox-content  flex justify-between space-x-2 "
          style={{
            width: isToolboxExpanded ? "100%" : "0",
            visibility: isToolboxExpanded ? "visible" : "hidden",
          }}
        >
          <button
            className="  text-xs text-white bg-green-600 p-1 rounded"
            onClick={switchGreenBorder}
          >
            Green Border
          </button>

          <button className="  text-xs text-white bg-green-600 p-1 rounded">
            <Link to={"/test"}>Test Page</Link>
          </button>
        </div>
      </div>

      <AppRouter />
    </div>
  );
}

export default App;
