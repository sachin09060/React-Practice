import { useState } from "react";
import NavBar from "./NavBar";
import "./static/style.css";

const About = () => {
  const [data, setData] = useState([{}]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      setData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <>
      <NavBar />
      <div className="About-header">
        <h1>About Page</h1>
        <p>Click here to get All User Data from <span> <b> JSON Placeholder </b></span>  API!</p>
        <button onClick={fetchData}>Click Here</button>
      </div>
      <br />
      <br />
      <div class="About-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default About;
