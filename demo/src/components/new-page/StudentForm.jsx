import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export const StudentForm = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
  });

  const [submitStudent, setsubmitStudent] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmitStudent([...submitStudent, student]);
  };
  

  const handleReset = (e) => {
    e.preventDefault();
    setStudent({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
    });
  };

  const handleRefresh = () => {
    window.location.reload();
  }

  return (
    <div className="form">
      <h1>Home Page</h1>
      <form>
        <Input
          label="First Name"
          type="text"
          name="firstName"
          value={student.firstName}
          onChange={handleChange}
        />
        <Input
          label="Last Name"
          type="text"
          name="lastName"
          value={student.lastName}
          onChange={handleChange}
        />
        <Input
          label="Age"
          type="text"
          name="age"
          value={student.age}
          onChange={handleChange}
        />
        <Input
          label="Gender"
          type="text"
          name="gender"
          value={student.gender}
          onChange={handleChange}
        />

        <Button label="Submit" onClick={handleSubmit} />
        <Button label="Reset fields" onClick={handleReset} />
        <Button label="Refresh page" onClick={handleRefresh} />
      </form>
      {submitStudent.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {submitStudent.map((item, index) => (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
