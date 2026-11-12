import { Link } from "react-router-dom";

function StudentCard({ student, onDelete }) {

  return (

    <div className="student-card">

      <div className="avatar">

        {student.name.charAt(0).toUpperCase()}

      </div>

      <h3>{student.name}</h3>

      <p>{student.email}</p>

      <p>

        <b>Course:</b> {student.course}

      </p>

      <p>

        <b>City:</b> {student.city}

      </p>

      <div className="card-actions">

        <Link
          to={`/students/${student.id}`}
          className="btn secondary"
        >

          View

        </Link>

        <Link
          to={`/students/${student.id}/edit`}
          className="btn edit-btn"
        >

          Edit

        </Link>

        <button
          className="btn danger"
          onClick={() => onDelete(student.id)}
        >

          Delete

        </button>

      </div>

    </div>

  );

}

export default StudentCard;