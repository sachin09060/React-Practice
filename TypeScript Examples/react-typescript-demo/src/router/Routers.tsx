import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Greet from "../components/props/Greet";
import Home from "../components/Home";
import Person from "../components/props/Person";
import PersonList from "../components/props/PersonList";
import Heading from "../components/props/Heading";
import Oscar from "../components/props/Oscar";
import Status from "../components/props/Status";
import Input from "../components/props/Input";
import Container from "../components/props/Container";
import LoggedIn from "../components/useState/LoggedIn";

const Routers = () => {
  const personName = {
    firstname: "Sachin",
    lastname: "TP",
  };

  const nameList = [
    {
      firstname: "Sachin",
      lastname: "TP",
    },
    {
      firstname: "Akash",
      lastname: "HM",
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/greet"
          element={<Greet name="Sachin" messageCount={20} isLoggedIn={false} />}
        />

        <Route
          path="/greet2"
          element={<Greet name="Sachin" isLoggedIn={false} />}
        />

        <Route path="/person" element={<Person name={personName} />} />

        <Route path="/person-list" element={<PersonList names={nameList} />} />

        <Route path="/heading" element={<Heading>Placeholder text</Heading>} />

        <Route
          path="/oscar"
          element={
            <Oscar>
              <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
            </Oscar>
          }
        />

        <Route path="/status" element={<Status status="success" />} />

        <Route
          path="/input-button"
          element={
            <Input value="" handleChange={(event) => console.log(event)} />
          }
        />

        <Route
          path="/props-style"
          element={
            <Container
              styles={{ border: "1px solid black", padding: "2rem" }}
            />
          }
        />
        <Route path="/loggedin" element={<LoggedIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
