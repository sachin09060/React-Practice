export interface InitialReduxStateProps {
  count: number;
  action: string;
  students: Student[];
}

export interface Student {
  id: number;
  name: string;
  email: string;
  age: number | string;
  gender: string;
}

