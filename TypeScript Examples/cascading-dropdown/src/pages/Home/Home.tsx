import React, { useState } from "react";
import "./Home.css";
import Dropdown from "../../components/Select";
import data from "./data.json";

const Home = () => {
  const [country, setCountry] = useState("");
  const [regions, setRegions] = useState("");
  const [statesList, setStatesList] = useState([]);
  const [cities, setCities] = useState("");
  const [citiesList, setCitiesList] = useState([]);

  const handleCountry = (obj: any) => {
    setCountry(obj);
    setStatesList(obj.regions);
    setRegions("");
    setCities("");
  };
  
  const handleState = (obj: any) => {
    setRegions(obj);
    setCitiesList(obj.cities);
    setCities("");
  };

  const handleDistrict = (obj: any) => {
    setCities(obj);
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
          placeholder="Select Your Region"
          value={regions}
          options={statesList}
          onChange={handleState}
          getOptionLabel={(e: any) => e.region}
          getOptionValue={(e: any) => e.region}
        />
      </div>
      <div className="dropdown">
        <Dropdown
          placeholder="Select Your City"
          value={cities}
          options={citiesList}
          onChange={handleDistrict}
          getOptionLabel={(e: any) => e.city}
          getOptionValue={(e: any) => e.city}
        />
      </div>
    </div>
  );
};

export default Home;
