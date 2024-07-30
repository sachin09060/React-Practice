import React, { useState } from "react";
import "./Home.css";
import Dropdown from "../../components/Select";
import data from "./data.json";

const Home = () => {
  const [country, setCountry] = useState("Select Your Country");
  const [states, setStates] = useState("Select Your State");
  const [statesList, setStatesList] = useState([]);
  const [districts, setDistricts] = useState("Select Your District");
  const [districtsList, setDistrictsList] = useState([]);

  const handleCountry = (obj: any) => {
    setCountry(obj);
    setStatesList(obj.states);
    setStates("");
    setDistricts("");
  };
  
  const handleState = (obj: any) => {
    setStates(obj);
    setDistrictsList(obj.districts);
    setDistricts("");
  };

  const handleDistrict = (obj: any) => {
    setDistricts(obj);
  };

  return (
    <div className="home-container">
      <h1 className="heading">Cascading example</h1>
      <div className="dropdown">
        <Dropdown
          placeholder="Select Your Country"
          value={country}
          options={data}
          onChange={handleCountry}
          getOptionLabel={(e: any) => e.country}
        />
      </div>
      <div className="dropdown">
        <Dropdown
          placeholder="Select Your State"
          value={states}
          options={statesList}
          onChange={handleState}
          getOptionLabel={(e: any) => e.state}
          getOptionValue={(e: any) => e.state}
        />
      </div>
      <div className="dropdown">
        <Dropdown
          placeholder="Select Your District"
          value={districts}
          options={districtsList}
          onChange={handleDistrict}
          getOptionLabel={(e: any) => e.district}
          getOptionValue={(e: any) => e.district}
        />
      </div>
    </div>
  );
};

export default Home;
