import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Resume Builder</h1>
        <p className="lead">Let's create your resume</p>
        <hr className="my-4" />
        <p>A simple and basic WebApp to create resume.</p>
        <p className="lead">
          <Link to="/create">
            <button className="btn btn-primary btn-lg">Start Building</button>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Landing;
