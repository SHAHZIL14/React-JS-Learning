import { useParams } from "react-router";
import { useEffect, useState } from "react";
function Github() {
  const { userName } = useParams();
  let [isLoading, setIsLoading] = useState(true);
  let [data, setData] = useState({});
  useEffect(() => {
    const url = `https://api.github.com/users/${userName}`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div
        className="h-48 w-48 m-auto rounded-[50%] border-2 border-transparent border-l-black animate-spin
        "
      ></div>
    );
  }
  return (
    <>
      {}

      <div className="container h-full w-1/3 m-auto flex flex-col justify-center items-center  ">
        <img src={data.avatar_url} alt="" />
        <h1>{data.name}</h1>
      </div>
    </>
  );
}

export default Github;
