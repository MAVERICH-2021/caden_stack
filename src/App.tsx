import { useState } from "react";
import "./App.css";

import useGreenBorder from "./hooks/useGreenBorder";
import { Link } from "react-router-dom";
import { AppRouter } from "./router";
import { IconArrow } from "./assets/icons/icons";
import ThemeController from "./components/ThemeController/ThemeController";

function App() {
  const switchGreenBorder = useGreenBorder();
  const [isToolboxExpanded, setIsToolboxExpanded] = useState(false);

  const handleToolboxExpansion = () => {
    setIsToolboxExpanded(!isToolboxExpanded);
  };
  return (
    <div className="App ">
      <div className="toolbox absolute  right-4 top-4 flex">
        <div className="toolbox-handler h-screen" onClick={handleToolboxExpansion}>
          <div
            className={
              isToolboxExpanded ? "rotate-[-90deg]" : " rotate-[90deg]"
            }
          >
            <IconArrow />
          </div>
        </div>
        <div
          className="toolbox-content w-full flex flex-col justify-between space-y-2 items-center"
          style={{
            width: isToolboxExpanded ? "auto" : "0",
            visibility: isToolboxExpanded ? "visible" : "hidden",
            
          }}
        >
          <button
            className="  text-xs text-white bg-green-600 p-1 rounded"
            onClick={switchGreenBorder}
          >
            Green Border
          </button>

          <button className="text-xs text-white bg-green-600 p-1 rounded">
            <Link to={"/test"}>Test Page</Link>
          </button>

          <ThemeController/>
        </div>
      </div>

      <AppRouter />
    </div>
  );
}

export default App;
