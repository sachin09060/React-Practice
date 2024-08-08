import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Post = () => {
  const [inpValue, setInpValue] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  const handleClick = () => {};

  const handleSubmit = () => {};

  const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: {},
        completed: {},
        userId: {},
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="post-container">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="User ID :"
          placeholder="Enter user ID..."
          value={inpValue}
          onChange={(e) => setInpValue(e.target.value)}
        />
        <Input
          type="text"
          label="Title :"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          label="Status :"
          placeholder="Enter completion status..."
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <Button label="Submit" onClick={handleClick} />
      </form>
    </div>
  );
};

export default Post;
