import { useEffect, useState } from "react";

export const UseEffectEx1 = () => {
    const[likes, setLikes] = useState(0);
    
    const handleLike = () => {
        setLikes(likes + 1)
    }

    useEffect(() => {
        document.title = `Likes: ${likes}`;
    });

    return (
        <>
        <h1>Likes:{likes}</h1>
        <button onClick={handleLike}>Like</button>
        </>
    )
};