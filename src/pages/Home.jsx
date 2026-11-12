import { Link } from "react-router-dom";

import { useStudents } from "../context/StudentContext";

function Home() {

  const { students, loading } = useStudents();

  return (

    <div>

      <section className="hero">

        <div className="hero-content">

          <h1>

            Student Management System

          </h1>

          <p>

            Manage Students, Track Records

            and Build a Better Future.

          </p>

          <Link to="/students" className="btn primary">

            Get Started →

          </Link>

        </div>

        <div className="hero-icon">

          🎓

        </div>

      </section>

      <div className="stats">

        <div className="stat">

          <h2>{loading ? "..." : students.length}</h2>

          <p>Total Students</p>

        </div>

        <div className="stat">

          <h2>4</h2>

          <p>Available Courses</p>

        </div>

        <div className="stat">

          <h2>3</h2>

          <p>Our Services</p>

        </div>

        <div className="stat">

          <h2>24/7</h2>

          <p>Portal Access</p>

        </div>

      </div>

      <h2>Quick Access</h2>

      <div className="feature-grid">

        <Link to="/students" className="feature-card">

          <h3>👨‍🎓 Student List</h3>

          <p>View all registered students.</p>

        </Link>

        <Link to="/add-student" className="feature-card">

          <h3>➕ Add Student</h3>

          <p>Register a new student.</p>

        </Link>

        <Link to="/services" className="feature-card">

          <h3>🚀 Our Services</h3>

          <p>Explore available services.</p>

        </Link>

      </div>

    </div>

  );

}

export default Home;