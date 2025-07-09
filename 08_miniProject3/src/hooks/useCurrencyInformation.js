import { useEffect, useState } from "react";

function useCurrencyInformation(currency){
    let [data,setData]=useState({});
    useEffect(()=>{
    let apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    fetch(apiUrl)
    .then((response)=> response.json())
    .then((response)=>setData(response[currency]));
    },[currency])
    return data;
}

export default useCurrencyInformation;