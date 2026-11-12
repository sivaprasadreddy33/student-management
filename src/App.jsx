import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import AddStudent from "./pages/AddStudent";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {

  return (

    <>

      <Navbar />

      <main className="page-container">

        <Routes>

          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Student List */}
          <Route path="/students" element={<Students />} />

          {/* Student Details */}
          <Route
            path="/students/:id"
            element={<StudentDetails />}
          />

          {/* Edit Student */}
          <Route
            path="/students/:id/edit"
            element={<AddStudent />}
          />

          {/* Add Student */}
          <Route
            path="/add-student"
            element={<AddStudent />}
          />

          {/* Nested Services Routing */}
          <Route path="/services" element={<Services />}>

            <Route
              index
              element={<p>Select a service to know more.</p>}
            />

            <Route
              path="web-development"
              element={<ServiceInfo title="Web Development" description="Learn HTML, CSS, JavaScript and React to build modern websites." />}
            />

            <Route
              path="data-science"
              element={<ServiceInfo title="Data Science" description="Learn Python, data analysis and database concepts." />}
            />

            <Route
              path="career-guidance"
              element={<ServiceInfo title="Career Guidance" description="Get guidance about resumes, interviews and placements." />}
            />

          </Route>

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />

          {/* Invalid Page */}
          <Route path="*" element={<NotFound />} />

        </Routes>

      </main>

      <Footer />

    </>

  );

}


// Reusable service component
function ServiceInfo({ title, description }) {

  return (

    <div className="panel">

      <h2>{title}</h2>

      <p>{description}</p>

    </div>

  );

}

export default App;