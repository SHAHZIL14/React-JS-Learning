import "./InputCard.css";
function InputCard({
  label,
  source,
  currencyOptions,
  isReadOnly,
  amount,
  onAmountChange,
  onCurrencyChange,
}) {
  return (
    <div className="h-[30%] font-sans  p-2 bg-white text-green-700   w-11/12   rounded-xl flex justify-between ">
      <div className="source-reference uppercase flex flex-col justify-between items-start h-full w-fit  border-white ">
        <label htmlFor={label}>{label}</label>
        <input
          readOnly={isReadOnly}
          className=" text-black focus:outline-none focus:ring-0 focus:border-none border-none w-1/2 text-start"
          type="number"
          name={label}
          id={label}
          value={amount}
          onChange={(event) =>
            onAmountChange && onAmountChange(event.target.value)
          }
        />
      </div>
      <div className="currency-reference uppercase h-full w-fit flex flex-col justify-between items-end border-white ">
        <label htmlFor={label}>Currency Type</label>
        <select
          className="uppercase appearance-none   rounded p-2  focus:outline-none focus:ring-0 focus:border-none border-none cursor-pointer"
          name="currencyType"
          id={label}
          value={source}
          onChange={(event) =>
            onCurrencyChange && onCurrencyChange(event.target.value)
          }
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputCard;
