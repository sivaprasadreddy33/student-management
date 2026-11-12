import {
  createContext,
  useContext,
  useEffect,
  useReducer
} from "react";

import useFetchData from "../hooks/useFetchData";

import { studentReducer } from "../reducer/studentReducer";

const StudentContext = createContext();

export function StudentProvider({ children }) {

  // Get student information from API
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  // Manage all student information
  const [students, dispatch] = useReducer(
    studentReducer,
    []
  );

  // Add API students to our application
  useEffect(() => {

    if (data.length > 0) {

      const studentList = data.map((user) => ({

        id: user.id,

        name: user.name,

        email: user.email,

        username: user.username,

        phone: user.phone,

        website: user.website,

        course: "Computer Science",

        age: 20,

        city: user.address.city

      }));

      dispatch({

        type: "SET_STUDENTS",

        payload: studentList

      });

    }

  }, [data]);

  return (

    <StudentContext.Provider
      value={{
        students,
        dispatch,
        loading,
        error
      }}
    >

      {children}

    </StudentContext.Provider>

  );

}


// Access student information from any component
export function useStudents() {

  return useContext(StudentContext);

}