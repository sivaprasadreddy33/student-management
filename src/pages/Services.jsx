import { Link, Outlet } from "react-router-dom";

function Services() {

  return (

    <div>

      <h1>Our Services</h1>

      <p>

        Explore our educational and career services.

      </p>

      <div className="service-links">

        <Link to="web-development">

          💻 Web Development

        </Link>

        <Link to="data-science">

          📊 Data Science

        </Link>

        <Link to="career-guidance">

          🎯 Career Guidance

        </Link>

      </div>

      {/* Child routes appear here */}

      <Outlet />

    </div>

  );

}

export default Services;