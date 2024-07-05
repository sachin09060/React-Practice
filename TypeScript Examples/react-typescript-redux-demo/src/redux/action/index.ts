import { Student } from '../redux.props';

export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const reset = () => ({
  type: "RESET",
});

export const addStudent = (student: Student) => ({
  type: "ADD_STUDENT",
  payload: student,
});

export const removeStudent = (studentId: number) => ({
  type: "REMOVE_STUDENT",
  payload: studentId,
});