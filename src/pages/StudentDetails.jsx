import { Link, useParams } from "react-router-dom";

import { useStudents } from "../context/StudentContext";

function StudentDetails() {

  const { id } = useParams();

  const { students, loading, error } = useStudents();

  if (loading) {

    return <h2>Loading Student Details...</h2>;

  }

  if (error) {

    return <p className="error">{error}</p>;

  }

  const student = students.find((item) => {

    return String(item.id) === id;

  });

  if (!student) {

    return (

      <div className="panel">

        <h2>Student Not Found</h2>

        <Link to="/students">Back to Student List</Link>

      </div>

    );

  }

  return (

    <div className="panel detail-panel">

      <Link to="/students" className="back-link">

        ← Back to Students

      </Link>

      <div className="detail-avatar">

        {student.name.charAt(0).toUpperCase()}

      </div>

      <h1>{student.name}</h1>

      <div className="detail-grid">

        <p><b>Student ID:</b> {student.id}</p>

        <p><b>Course:</b> {student.course}</p>

        <p><b>Email:</b> {student.email}</p>

        <p><b>Age:</b> {student.age}</p>

        <p><b>City:</b> {student.city}</p>

        <p><b>Phone:</b> {student.phone}</p>

      </div>

      <Link

        to={`/students/${student.id}/edit`}

        className="btn primary"

      >

        Edit Student

      </Link>

    </div>

  );

}

export default StudentDetails;