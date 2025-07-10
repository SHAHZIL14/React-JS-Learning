import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className="container h-full w-1/3 m-auto flex bg-amber-500 flex-col justify-center items-center  ">
        <img src={data?.avatar_url} alt="" />
        <h1>{data?.name}</h1>
      </div>
    </>
  );
}
export default Github;

export function githubLoader() {
  const url = `https://api.github.com/users/shahzil14}`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      return response;
  });
}
