import { useContext, useState } from "react";
import userContext from "../contexts/UserContext";
function Login() {
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
  const {setUser} = useContext(userContext);
  function submit(event) {
    event.preventDefault();
    setUser({
      username,
      password
    });
  }
  return (
    <>
      <div className="h-48 w-96 flex flex-col gap-[10px]  bg-black/20 backdrop-blur-xl border-2 border-black">
        <div>
        <label htmlFor="user">Username:  </label>
        <input
          onChange={(event) => setUsername(event.target.value)}
          value={username}
          type="text"
          name="username"
          id="user"
          placeholder="username"
        />
        </div>
        <br/>
        <div>
        <label htmlFor="pass">Password:  </label>
        <input
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          type="text"
          name="password"
          id="pass"
          placeholder="password"
        />
      </div>
      </div>
      <button
        onClick={submit}
      >
        Register
      </button>
    </>
  );
}

export default Login;
