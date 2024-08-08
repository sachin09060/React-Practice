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
      const response = await fetch("http://localhost:3001/todos", { // Correct URL
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
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to create to-do: ${errorText}`);
      }
  
      const data = await response.json();
      console.log("Success:", data);
      alert("To-do created successfully!");
  
      setTitle("");
      setUserId(null);
      setCompleted(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error:", error);
        setError(`Failed to create to-do. Please try again. Error: ${error.message}`);
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="post-container">
      <h2>Create a To-Do</h2>
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
