import { useCallback, useEffect, useState } from "react";
import "./MainContainer.css";
function MainContainer() {
  let [password, setPassword] = useState("");
  let [length, setlength] = useState(8);
  let [isCharAllowed, setIsCharAllowed] = useState(false);
  let [isNumberAllowed, setIsNumberAllowed] = useState(false);

  const generatePassword = useCallback(() => {
    let newPass = "";
    let availableCharacterBox =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) availableCharacterBox += "0123456789";
    if (isCharAllowed)
      availableCharacterBox += `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;
    for (let i = 0; i < length; i++) {
      newPass +=
        availableCharacterBox[
          Math.floor(Math.random() * availableCharacterBox.length)
        ];
    }
    setPassword(newPass);
  }, [isCharAllowed, isNumberAllowed, length]);

  useEffect(() => {
    generatePassword();
  }, [isCharAllowed, isNumberAllowed, length]);

  const copyPassword = () => {
    const input = document.getElementById("passwordField");
    input.select();
    input.setSelectionRange(0, input.value.length);
    navigator.clipboard
      .writeText(input.value)
      .then(() => {
        console.log("Password copied!");
      })
      .catch((err) => {
        console.error("Failed to copy!", err);
      });
  };

  return (
    <div className="container bg-white/10 p-5 box-border h-[40%] min-w-fit w-[40%] w-max-[80%]  rounded-2xl  flex justify-around items-center  flex-col">
      <h1 className="text-green-600 capitalize font-bold">
        {" "}
        Password Generator
      </h1>
      <div className="input-box h-fit w-[100%]    ">
        <input
          className="border-none focus:outline-none focus:ring-0 w-[80%] text-center tracking-widest text-2xl text-green-600"
          type="text"
          name=""
          id="passwordField"
          readOnly={true}
          value={password}
        />
        <button
          onClick={() => {
            copyPassword();
          }}
          className=" bg-white min-w-fit w-[10%] text-center"
        >
          Copy
        </button>
      </div>
      <div className="parameter-box flex gap-5 justify-center items-center h-fit w-[100%]  ">
        <input
          min={8}
          max={16}
          type="range"
          name="length"
          id=""
          onChange={(event) => {
            setlength(event.target.value);
          }}
        />
        <label htmlFor="length" className="tracking-wide">
          Length ( {length} )
        </label>
        <input
          className="accent-green-500"
          type="checkbox"
          name="charAllowed"
          id=""
          onChange={() => {
            setIsCharAllowed((previous) => !previous);
          }}
        />
        <label htmlFor="charAllowed">Character</label>
        <input
          className="accent-green-500"
          type="checkbox"
          name="numberAllowed"
          id=""
          onChange={() => {
            setIsNumberAllowed((previous) => !previous);
          }}
        />
        <label htmlFor="numberAllowed">Number</label>
      </div>
    </div>
  );
}

export default MainContainer;
