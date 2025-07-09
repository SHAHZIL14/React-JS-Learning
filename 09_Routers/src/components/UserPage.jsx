import { useParams } from "react-router";

function Userpage() {
  const {id} = useParams();
  return (
    <>
      <div className="bg-black/20 h-48 w-48 m-auto">{id}</div>
    </>
  );
}
export default Userpage;
