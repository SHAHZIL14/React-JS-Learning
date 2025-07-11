import { use, useCallback, useEffect, useState } from "react";
import InputCard from "./InputCard";
import useCurrencyInformation from "../hooks/useCurrencyInformation";
function MainContainer() {
  let currencyList = [];
  let [from, setFrom] = useState("usd");
  let [to, setTo] = useState("inr");
  let [convertedAmount, setConvertedAmount] = useState(0);
  let [amount, setAmount] = useState(1);
  const currencyInfo = useCurrencyInformation(from);
  currencyList = Object.keys(currencyInfo);
  function convert() {
    let factor = currencyInfo[to];
    let newConvertedAmount = (amount * factor).toFixed(3);
    setConvertedAmount(newConvertedAmount);
  }

  function swap() {
    let temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <div className="container py-2 h-[40%] sm:w-[60%] lg:w-[30%] border-white border rounded-xl flex flex-col justify-around items-center bg-white/5 backdrop-blur-2xl">
      <InputCard
        label={"From"}
        source={from}
        currencyOptions={currencyList}
        amount={amount}
        onAmountChange={setAmount}
        onCurrencyChange={setFrom}
      />
      <button
      onClick={swap} 
      className="bg-green-700/100 w-16 border text-white p-1 rounded z-10 absolute top-[32%] cursor-pointer active:bg-green-800/100 hover:bg-green-800/100 ">
        swap
      </button>
      <InputCard
        label={"To"}
        source={to}
        isReadOnly={true}
        currencyOptions={currencyList}
        amount={convertedAmount}
        onCurrencyChange={setTo}
      />
      <button
        onClick={() => {
          convert();
        }}
        className="text-white h-1/5 w-4/5 border border-white rounded-xl cursor-pointer active:bg-green-800/50 hover:bg-green-800/50 hover:border-green-500  "
      >
        Convert
        <strong className="mx-1 ">{from.toUpperCase()}</strong>
        To
        <strong className="mx-1 ">{to.toUpperCase()}</strong>         
      </button>
    </div>
  );
}

export default MainContainer;
