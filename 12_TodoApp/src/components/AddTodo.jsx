import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
function AddTodo() {
  const dispatch = useDispatch();
  let [input, setInput] = useState("");
  function addTodoHandler(event) {
    event.preventDefault();
    if (!input) {
      Toastify({
        text: "Enter the task first!",
        duration: 3000,
        gravity: "top", // or 'bottom'
        position: "right", // or 'left' or 'center'
        backgroundColor: "#2a2627",
      }).showToast();
      return;
    }
    dispatch(addTodo(input));
    setInput("");
  }
  return (
    <>
      <h1 className="text-white text-xl my-2 font-bold uppercase">
        What to do?, just list it
      </h1>
      <form
        onSubmit={addTodoHandler}
        className="space-x-3 mt-4 w-[100%] lg:w-[50%] flex justify-center items-center"
      >
        <input
          type="text"
          className="bg-white w-[60%]  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white text-xs w-fit overflow-hidden bg-zinc-800 border-0 py-3 px-4 focus:outline-none hover:bg-indigo-600 rounded lg:text-lg"
        >
          Add Todo
        </button>
      </form>
    </>
  );
}

export default AddTodo;
