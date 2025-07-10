import { useContext } from "react"
import userContext from "../contexts/UserContext"
function Profile() {
  const {user} = useContext(userContext);
  if(!user.username) return <h3>Please register</h3>
  return <h3>Hello {user.username}</h3>;
}

export default Profile;
