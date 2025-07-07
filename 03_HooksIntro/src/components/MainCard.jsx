import { useState } from "react";

const MainCard = () => {
  let [number, setNumberTo] = useState(0);

  function decreaseNumber(){
  if(number==0) return;
  number--;
  setNumberTo(number);
  };

  function increaseNumber(){
  if(number==20) return;
  number++;
  setNumberTo(number);
  };
  return (
    <>
      <div className="card-container">
        <h1>Number : {number}</h1>
        <button id="ui-btn" onClick={increaseNumber}>Increase Number</button>
        <button id="ui-btn" onClick={decreaseNumber}>Decrease Number</button>
      </div>
    </>
  );
};

export default MainCard;
