import { useNavigate, useParams } from "react-router-dom";

import StudentForm from "../components/StudentForm";

import { useStudents } from "../context/StudentContext";

function AddStudent() {

  const navigate = useNavigate();

  const { id } = useParams();

  const { students, dispatch } = useStudents();

  // Find student when editing
  const existingStudent = id

    ? students.find((student) => String(student.id) === id)

    : null;


  // Save student details
  function saveStudent(studentData) {

    if (existingStudent) {

      // Update existing student
      dispatch({

        type: "UPDATE_STUDENT",

        payload: {

          ...existingStudent,

          ...studentData

        }

      });

    } else {

      // Add new student
      dispatch({

        type: "ADD_STUDENT",

        payload: studentData

      });

    }

    navigate("/students");

  }

  if (id && !existingStudent) {

    return (

      <div className="panel">

        <h2>Student Not Found</h2>

        <button

          className="btn primary"

          onClick={() => navigate("/students")}

        >

          Back to Students

        </button>

      </div>

    );

  }

  return (

    <div className="narrow">

      <h1>

        {existingStudent ? "Edit Student" : "Add New Student"}

      </h1>

      <StudentForm

        key={existingStudent?.id || "new"}

        initialData={existingStudent}

        onSave={saveStudent}

      />

    </div>

  );

}

export default AddStudent;