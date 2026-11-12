import { useState } from "react";

import { Link, useSearchParams } from "react-router-dom";

import { useStudents } from "../context/StudentContext";

import StudentCard from "../components/StudentCard";

function Students() {

  const { students, dispatch, loading, error } = useStudents();

  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const page = Math.max(

    1,

    Number(searchParams.get("page")) || 1

  );

  // Search students
  const filteredStudents = students.filter((student) => {

    return (

      student.name.toLowerCase().includes(search.toLowerCase()) ||

      student.email.toLowerCase().includes(search.toLowerCase())

    );

  });

  // Pagination
  const studentsPerPage = 6;

  const totalPages = Math.max(

    1,

    Math.ceil(filteredStudents.length / studentsPerPage)

  );

  const currentPage = Math.min(page, totalPages);

  const startIndex = (currentPage - 1) * studentsPerPage;

  const displayedStudents = filteredStudents.slice(

    startIndex,

    startIndex + studentsPerPage

  );

  // Change page
  function changePage(newPage) {

    setSearchParams({

      page: String(newPage)

    });

  }

  // Delete student
  function deleteStudent(id) {

    const confirmDelete = window.confirm(

      "Are you sure you want to delete this student?"

    );

    if (confirmDelete) {

      dispatch({

        type: "DELETE_STUDENT",

        payload: id

      });

    }

  }

  if (loading) {

    return <h2>Loading Students...</h2>;

  }

  if (error) {

    return <p className="error">{error}</p>;

  }

  return (

    <div>

      <div className="page-title">

        <div>

          <h1>Student List</h1>

          <p>View and manage student information.</p>

        </div>

        <Link to="/add-student" className="btn primary">

          + Add Student

        </Link>

      </div>

      <input

        className="search-input"

        type="text"

        placeholder="Search by name or email..."

        value={search}

        onChange={(e) => {

          setSearch(e.target.value);

          changePage(1);

        }}

      />

      {displayedStudents.length > 0 ? (

        <div className="student-grid">

          {displayedStudents.map((student) => (

            <StudentCard

              key={student.id}

              student={student}

              onDelete={deleteStudent}

            />

          ))}

        </div>

      ) : (

        <p className="notice">

          No students found.

        </p>

      )}

      <div className="pagination">

        <button

          className="btn secondary"

          disabled={currentPage === 1}

          onClick={() => changePage(currentPage - 1)}

        >

          Previous

        </button>

        <span>

          Page {currentPage} of {totalPages}

        </span>

        <button

          className="btn secondary"

          disabled={currentPage === totalPages}

          onClick={() => changePage(currentPage + 1)}

        >

          Next

        </button>

      </div>

    </div>

  );

}

export default Students;