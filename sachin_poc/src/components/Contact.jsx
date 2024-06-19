import { useState } from "react";
import NavBar from "./NavBar";
import "./static/Contact.css";

const Contact = () => {
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
    setFormData({ name: "", email: "", message: "" });
    };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div className="Container">
        <div className="Form">
          <h1>Contact Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Message:</label>
              <input
                type="text"
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <br />
          <h1>List of Messages</h1>
          <div className="Table">
            <table border={1} cellSpacing={2}>
              <thead className="THead">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="TRow">
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.message}</td>
                    <td>
                      <button onClick={() => handleDelete(index)}>Delete</button>
                      <button>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
