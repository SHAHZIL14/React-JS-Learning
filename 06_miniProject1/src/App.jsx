import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  let [bgColor,setbgColor] = useState('rgb(17 17 17)');
  const style = {
    height: "100dvh",
    width: "100dvw",
    backgroundColor: "blue",
    position: "static",
    backgroundColor:`${bgColor}`
  };
  return (
    <>
      <div style={style} className="main-container">
        <Footer setBgColor = {setbgColor}/>
      </div>
    </>
  );

}

export default App;
