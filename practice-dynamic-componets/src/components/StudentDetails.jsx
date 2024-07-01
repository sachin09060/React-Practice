import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export const StudentForm = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    age: "",
    grade: "",
  });
  const [submittedStudents, setSubmittedStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedStudents((prevState) => [...prevState, student]);
    setStudent({
      firstName: "",
      lastName: "",
      age: "",
      grade: "",
    });
  };

  return (
    <>
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
          label="Grade"
          type="text"
          name="grade"
          value={student.grade}
          onChange={handleChange}
        />

        <Button label="Submit" onClick={handleSubmit} />
      </form>
      {submittedStudents.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {submittedStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
