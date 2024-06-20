import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import './static/style.css'

const Contact = () => {
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === -1) {
      setData([...data, formData]);
    } else {
      const updatedData = [...data];
      updatedData[editIndex] = formData;
      setData(updatedData);
      setEditIndex(-1);
    }
    setFormData({ username: "", email: "", message: "" });
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleUpdate = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
  };

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data'));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className="about-container">
        <div className="Form">
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
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
                required
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
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit">{editIndex === -1 ? 'Submit' : 'Update'}</button>
          </form>
        </div>
        <div>
          <br />
          <h1>List of Messages from Users</h1>
          <div className="Table">
            <table>
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
                    <td><b>{item.username}</b></td>
                    <td>{item.email}</td>
                    <td>{item.message}</td>
                    <td>
                      <button onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                      <button onClick={() => handleUpdate(index)}>Edit</button>
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
