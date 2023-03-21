import "./404.css";
import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>
              4<span>0</span>4
            </h1>
          </div>
          <p className="notfound-paragraph">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="anchor"
            onClick={() => {
              props.setCurrentLink("/");
            }}
          >
            Home Page
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
