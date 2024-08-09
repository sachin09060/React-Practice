import React, { useState } from "react";
import Button from "../../components/Button";
import "./Post.css";

const Post = () => {
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState<number | null>(null);
  const [completed, setCompleted] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (userId === null) {
      alert("User ID is required");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          userId,
          completed,
        }),
      });
      
      console.log("Success! Data posted successfully.");
      alert("Data posted successfully!");
      setTitle("");
      setUserId(null);
      setCompleted(false);
    } catch (error: unknown) {
        console.error("Error:", error);
        setError(`Failed to create todo. Please try again.`);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-container">
      <h2>Post your data</h2>
      <input
        type="number"
        placeholder="Enter User ID"
        value={userId ?? ""}
        onChange={(e) => setUserId(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="checkbox-container">
        <label>
          Completed:
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </label>
      </div>
      {error && <p className="error-message">{error}</p>}
      <Button
        onClick={handleSubmit}
        label={loading ? "Loading..." : "Submit"}
        disabled={loading}
      />
    </div>
  );
};

export default Post;