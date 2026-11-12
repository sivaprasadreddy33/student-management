import { Link } from "react-router-dom";

function NotFound() {

  return (

    <div className="panel not-found">

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>Sorry, the requested page does not exist.</p>

      <Link to="/" className="btn primary">

        Back to Home

      </Link>

    </div>

  );

}

export default NotFound;