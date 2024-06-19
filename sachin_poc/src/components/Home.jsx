import NavBar from "./NavBar";
import { useState } from "react";
import "./static/Home.css";
const Home = () => {
  const [movie, setMovie] = useState([]);

  const [newMovie, setNewMovie] = useState({
    movieName: "",
    yearOfRelease: "",
    director: "",
    src: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovie([...movie, newMovie]);
    setNewMovie({ name: "", yearOfRelease: "", director: "" });
  };

  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <div className="Container">
        <form onSubmit={handleSubmit}>
        <h1>From Home</h1>
          <div>
            <label>Movie Name:</label>
            <input
              type="text"
              placeholder="Enter Movie"
              name="movie"
              value={setNewMovie.movie}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Year of Release:</label>
            <input
              type="text"
              placeholder="Enter the year"
              name="yearOfRelease"
              value={setNewMovie.yearOfRelease}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Director Name:</label>
            <input
              type="text"
              placeholder="Enter Director name"
              name="director"
              value={setNewMovie.director}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              placeholder="Enter Image URL"
              name="src"
              value={setNewMovie.src}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <br />
      <br />
      <h1>List Of Movies</h1>
      <br />
      <br />
      <div className="Card-body">
        {movie.map((item, index) => (
          <div className="Card">
            <img src={item.src} alt="Avatar" style={{ width: "125px" }} />
            <div class="container">
              <h4>
                <b>Movie: {item.movie}</b>
              </h4>
              <p>Year: {item.yearOfRelease} </p>
              <p>Directed By: {item.director} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
