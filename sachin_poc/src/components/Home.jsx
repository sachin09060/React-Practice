import NavBar from "./NavBar";
import { useState } from "react";
import "./static/style.css";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../actions/counterActions";
const Home = () => {
  
  const movieData = useSelector((state) => state.movie);
  const dispatch = useDispatch();

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
    dispatch(submitForm(newMovie))
    setNewMovie({ movieName: "", yearOfRelease: "", director: "", src: "" });
  };


  return (
    <>
      <NavBar />
      <div className="Outer-div">
        <div className="Form">
          <div className="Home-container">
            <form onSubmit={handleSubmit}>
              <h1>Welcome to MOVIE BOX!</h1>
              <p className="dialog">Suggest your favorite movie to watch!</p>
              <div>
                <label>Movie Name:</label>
                <input
                  type="text"
                  placeholder="Enter Movie Name"
                  required
                  name="movieName"
                  value={setNewMovie.movieName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Year of Release:</label>
                <input
                  type="text"
                  placeholder="Enter the year"
                  required
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
                  required
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
                  required
                  name="src"
                  value={setNewMovie.src}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div>
          <h1>List Of Suggested Movies!</h1>
          <div className="card-gallery">
            <div className="Card-body">
              {movieData.map((item, index) => (
                <div className="Card">
                  <img className="image" src={item.src} alt="Avatar" />
                  <div class="Card-container">
                    <h1>MOVIE:<span><b> {item.movieName}</b></span></h1>
                    <p2>YEAR:<span><b> {item.yearOfRelease}</b></span></p2>
                    <br />
                    <p1>DIRECTED BY:<span><b>{item.director}</b></span></p1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
