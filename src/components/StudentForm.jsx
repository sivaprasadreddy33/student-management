import { useRef, useState } from "react";

function StudentForm({ onSave, initialData }) {

  const nameInput = useRef(null);

  const [student, setStudent] = useState({

    name: initialData?.name || "",

    email: initialData?.email || "",

    course: initialData?.course || "Computer Science",

    age: initialData?.age || "",

    city: initialData?.city || ""

  });

  const [message, setMessage] = useState("");

  // Update input values
  function handleChange(e) {

    const { name, value } = e.target;

    setStudent({

      ...student,

      [name]: value

    });

    setMessage("");

  }

  // Validate and save student
  function handleSubmit(e) {

    e.preventDefault();

    if (

      !student.name.trim() ||

      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email) ||

      !student.age ||

      Number(student.age) < 1 ||

      !student.city.trim()

    ) {

      setMessage("Please enter valid details in all fields.");

      return;

    }

    onSave({

      ...student,

      age: Number(student.age)

    });

    if (!initialData) {

      setStudent({

        name: "",

        email: "",

        course: "Computer Science",

        age: "",

        city: ""

      });

      nameInput.current.focus();

    }

  }

  return (

    <form className="form panel" onSubmit={handleSubmit}>

      <h2>

        {initialData ? "Update Student" : "Register Student"}

      </h2>

      <label>Student Name</label>

      <input

        ref={nameInput}

        type="text"

        name="name"

        placeholder="Enter student name"

        value={student.name}

        onChange={handleChange}

      />

      <label>Email Address</label>

      <input

        type="email"

        name="email"

        placeholder="Enter email"

        value={student.email}

        onChange={handleChange}

      />

      <label>Course</label>

      <select

        name="course"

        value={student.course}

        onChange={handleChange}

      >

        <option>Computer Science</option>

        <option>Information Technology</option>

        <option>Data Science</option>

        <option>Artificial Intelligence</option>

      </select>

      <label>Age</label>

      <input

        type="number"

        name="age"

        min="1"

        placeholder="Enter age"

        value={student.age}

        onChange={handleChange}

      />

      <label>City</label>

      <input

        type="text"

        name="city"

        placeholder="Enter city"

        value={student.city}

        onChange={handleChange}

      />

      {message && (

        <p className="error">{message}</p>

      )}

      <button className="btn primary" type="submit">

        {initialData ? "Update Student" : "Add Student"}

      </button>

    </form>

  );

}

export default StudentForm;