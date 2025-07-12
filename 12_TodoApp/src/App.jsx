import { Provider } from "react-redux";
import { todoStore } from "./store/todoStore";
import {AddTodo,Todos} from "./index"
// import './app.css'
function App() {
  return <div id="App" className="h-dvh absolute top-0 w-dvw p-2 bg-black/80 flex flex-col justify-start items-center">
  <Provider store={todoStore}>
  <AddTodo/>
  <Todos/>
  </Provider>
  </div>;
}

export default App;
