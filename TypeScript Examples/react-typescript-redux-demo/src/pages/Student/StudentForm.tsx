import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitialReduxStateProps } from "../../redux/redux.props";
import { addStudent, removeStudent } from "../../redux/action";
import InputField from "../../components/inputfield";
import Button from "../../components/button";
import Header from "../../components/header";

const StudentForm = () => {
  const dispatch = useDispatch();
  const students = useSelector(
    (state: InitialReduxStateProps) => state.students
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number | string>("");
  const [gender, setGender] = useState("");

  const handleAddStudent = () => {
    const id = students.length + 1;
    dispatch(addStudent({ id, name, email, age, gender }));
    setName("");
    setEmail("");
    setAge("");
    setGender("");
  };

  const handleDeleteStudent = (studentId: number) => {
    dispatch(removeStudent(studentId));
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2 className="container-heading">Add Student</h2>

        <InputField
          type="text"
          placeholder="Enter Name...."
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="field"
        />

        <InputField
          className="field"
          type="number"
          placeholder="Enter Age...."
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <InputField
          className="field"
          type="text"
          placeholder="Enter Gender...."
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />

        <InputField
          className="field"
          type="text"
          placeholder="Enter Email...."
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          className="button-36"
          onClick={handleAddStudent}
          label="Add Student"
          type="button"
        />

        <br />

        <h2 className="container-heading">Students</h2>
        <table className="table-container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
                <td>{student.email}</td>
                <td>
                  <Button
                    className="button-36"
                    onClick={() => handleDeleteStudent(student.id)}
                    label="Delete Student"
                    type="button"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentForm;
