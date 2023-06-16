import "./resume.css";
import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { reset } from "../../../store/profileStore";

const Resume = () => {
  /**
   * State management
   */

  const state = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  /**
   * submitting form
   */

  const handleEdit = (e) => {
    e.preventDefault();
    history.push("/edit");
  };

  const handleNew = (e) => {
    e.preventDefault();
    dispatch(reset());
    history.push("/");
  };

  /**
   * return JSX
   */

  return (
    <>
      <div className="container">
        <br />
        <br />

        <form>
          <h2>{state.form.name}</h2>
          <span>{state.form.email}</span>
          <br />
          <span>{state.form.mobile}</span>
          <br />
          <span>{state.form.address}</span>
          <br />
          <hr />

          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-8 custom-col">
                <h4>Experience</h4>
                <ul>
                  {state.exInput.map((elem, i) => {
                    return (
                      <>
                        <li key={i}>
                          <h6>{elem.Company}</h6>
                          <i>Joining: {elem.Year}</i>
                          <p>Designation: {elem.Designation}</p>
                        </li>
                      </>
                    );
                  })}
                </ul>

                <h4>Education</h4>
                <ol>
                  {state.edInput.map((elem, i) => {
                    return (
                      <>
                        <li key={i}>
                          <h6>{elem.Institute}</h6>
                          <i>Year: {elem.Year}</i>
                          <p>Degree: {elem.Degree}</p>
                        </li>
                      </>
                    );
                  })}
                </ol>
              </div>
              <div className="col-sm-12 col-md-4">
                <h4>Skills</h4>

                {state.tags.map((elem, i) => {
                  return (
                    <>
                      <span key={i} className="badge badge-primary">
                        {elem.text}
                      </span>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <br />
          <br />

          <button onClick={handleEdit} className="btn btn-primary">
            Edit
          </button>
          <span>&nbsp;&nbsp;</span>
          <button onClick={handleNew} className="btn btn-primary">
            Create New
          </button>
          <br />
          <br />
        </form>
      </div>
    </>
  );
};

export default Resume;
