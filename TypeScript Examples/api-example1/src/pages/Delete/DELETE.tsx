import React, { useState } from "react";
import "./Delete.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

const DELETE = () => {
  const [id, setid] = useState<number | "">("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!id) {
      setMessage("Please enter a valid User ID.");
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(
        `https://66b5b740b5ae2d11eb64633a.mockapi.io/api/users/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setMessage("User deleted successfully.");
        setid("");
      } else {
        setMessage("Error deleting User.");
        setLoading(false);
      }
    } catch (error) {
      setMessage("Error deleting User.");
      console.error(error);
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setid(Number(e.target.value));
  };

  return (
    <div className="delete-container">
      <div className="delete-heading">
        <h2>Delete page using fetch()</h2>
      </div>
      <Input
        type="number"
        name="userId"
        label="User ID:"
        placeholder="Enter User ID..."
        value={id}
        onChange={handleChange}
      />
      <Button
        type="button"
        onClick={handleDelete}
        label={loading ? "Loading..." : "Delete User"}
        disabled={loading}
      />
      {message && <p className="message-container">{message}</p>}
    </div>
  );
};

export default DELETE;
