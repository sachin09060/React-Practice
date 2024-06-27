import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UseEffectEx1 = () => {
  const [likes, setLikes] = useState(0);
  const [name, setName] = useState("");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  useEffect(() => {
    console.log("useEffect - updating document title")
    document.title = `Likes: ${likes}`;
  }, [likes]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/")
  }

  return (
    <>
    <h1>From "useEffect" Component!</h1>
      <h1>Likes:{likes}</h1>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={handleLike}>Like</button>
      <br />
      <button onClick={handleBack}>Back</button>
    </>
  );
};
