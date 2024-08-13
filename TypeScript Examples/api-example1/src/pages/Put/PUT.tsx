import React, { useState } from "react";
import "./Put.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

interface FormDataProps {
  userId: number | string;
  name: string;
  age: number | string;
  address: string;
  phone: string;
  email: string;
  gender: string;
}

const Put = () => {
  const [newData, setNewData] = useState<FormDataProps | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormDataProps>({
    userId: "",
    name: "",
    age: "",
    address: "",
    phone: "",
    email: "",
    gender: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://66b5b740b5ae2d11eb64633a.mockapi.io/api/users/${formData.userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const newPost = await response.json();
        setNewData(newPost);
        setMessage("User updated successfully.");
        setFormData({
          userId: "",
          name: "",
          age: "",
          address: "",
          phone: "",
          email: "",
          gender: "",
        })
      } else {
        setMessage("Failed to update user.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setMessage("An error occurred while updating the user.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  return (
    <div className="put-container">
      <div className="put-heading">
        <h2>Put page using fetch()</h2>
      </div>
      <form className="put-card" onSubmit={handleSubmit}>
        <Input
          type="number"
          name="userId"
          label="User ID:"
          placeholder="Enter User ID..."
          value={formData.userId}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="name"
          label="Name:"
          placeholder="Enter Your Name..."
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="age"
          label="Age:"
          placeholder="Enter Your Age..."
          value={formData.age}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="gender"
          label="Gender:"
          placeholder="Enter Your Gender..."
          value={formData.gender}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="address"
          label="Address:"
          placeholder="Enter Your Address..."
          value={formData.address}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="phone"
          label="Phone:"
          placeholder="Enter Your Phone Number..."
          value={formData.phone}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="email"
          label="Email:"
          placeholder="Enter Your Email..."
          value={formData.email}
          onChange={handleChange}
        />
        <Button
          type="submit"
          label={loading ? "Loading..." : "Submit"}
          disabled={loading}
        />
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Put;
