import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeContextProvider } from "./context/themeContext";
import { useEffect, useState } from "react";
function App() {
  let [themeMode, setThemeMode] = useState("light");
  function themeChanger(themeMode) {
    setThemeMode(themeMode);
  }
  useEffect(function () {
    let root = document.querySelector("html");
    root.classList.remove("light", "dark");
    root.classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeContextProvider value={{ themeMode, themeChanger }}>
      <div className="flex dark:bg-gray-900 justify-center flex-col  min-h-screen items-center">
        <div className="">
          <div className="w-full   max-w-sm mx-auto flex justify-end mb-4"></div>
          <ThemeBtn />
          <div className="w-full   max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}
export default App;
