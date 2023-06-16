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

  return (
    <>
      <div className="container">
        <br />
        <br />

        <form>
          <h4 style={{
            fontWeight: "500",
            fontFamily: "sans-serif",
            font: "bold",
            marginBottom:"5px"
          }}>Name</h4>
          <label>{state.form.name}</label>
          <h4 style={{
            fontWeight: "500",
            fontFamily: "sans-serif",
            font: "bold",
            marginTop:"10px"
          }}
          >Email</h4>
          <label>{state.form.email}</label>
          <br />
          <h4 style={{
            fontWeight: "500",
            fontFamily: "sans-serif",
            font: "bold",
             marginTop:"10px"
          }}
          >Phone</h4>
          <label style={{
           
          }}>{state.form.mobile}</label>
          <br />
          <h4 style={{
            fontWeight: "500",
            fontFamily: "sans-serif",
            font: "bold",
             marginTop:"10px"
          }}
          >Address</h4>
          <label>{state.form.address}</label>
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
