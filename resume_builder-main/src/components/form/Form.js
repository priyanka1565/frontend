import "./Form.css";
import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Taggit from "../taggit/Taggit";
import { update } from "../../../store/profileStore";
import { useHistory } from "react-router-dom";

const Form = () => {
  /**
   * State management
   */

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  // init states
  const [form, setForm] = useState(state.form);
  const [tags, setTags] = useState(state.tags);
  const [edInput, setEdInput] = useState(state.edInput);
  const [exInput, setExInput] = useState(state.exInput);

  // state change handling
  const handleTags = async (value) => {
    await setTags(value);
  };

  const handleEdInput = async (e) => {
    e.preventDefault();
    await setEdInput([...edInput, { Institute: "", Year: "", Degree: "" }]);
  };

  const handleExInput = async (e) => {
    e.preventDefault();
    await setExInput([...exInput, { Company: "", Year: "", Designation: "" }]);
  };

  const handleEdInputChange = async (index, e) => {
    e.preventDefault();
    const values = [...edInput];
    switch (e.target.name) {
      case "Institute":
        values[index].Institute = e.target.value;
        break;
      case "Year":
        values[index].Year = e.target.value;
        break;
      case "Degree":
        values[index].Degree = e.target.value;
        break;
      default:
        break;
    }
    await setEdInput(values);
  };

  const handleExInputChange = async (index, e) => {
    e.preventDefault();
    const values = [...exInput];
    switch (e.target.name) {
      case "Company":
        values[index].Company = e.target.value;
        break;
      case "Year":
        values[index].Year = e.target.value;
        break;
      case "Designation":
        values[index].Designation = e.target.value;
        break;
      default:
        break;
    }
    await setExInput(values);
  };

  /**
   * submitting form
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    let state = {
      form,
      tags,
      edInput,
      exInput,
    };
    dispatch(update(state));
    history.push("/view");
  };

  /**
   * return JSX
   */

  return (
    <>
      <div className="container">
        <br />
        <br />

        <form onSubmit={handleSubmit}>
          <h3>Basic Details</h3>
          <hr />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              required
              className="form-control"
              id="name"
              value={form.name || ""}
              placeholder="Enter Name"
              onChange={(e) => {
                const newState = { ...form, name: e.target.value };
                setForm(newState);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
              value={form.email || ""}
              onChange={(e) => {
                const newState = { ...form, email: e.target.value };
                setForm(newState);
              }}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Mobile</label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              placeholder="Enter Mobile"
              value={form.mobile || ""}
              onChange={(e) => {
                const newState = { ...form, mobile: e.target.value };
                setForm(newState);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={form.address || ""}
              placeholder="Enter Address"
              onChange={(e) => {
                const newState = { ...form, address: e.target.value };
                setForm(newState);
              }}
            />
          </div>
          <br />
          <h3>Education</h3>
          <hr />

          <div>
            {edInput.map((field, i) => (
              <>
                <div key={i}>
                  <div className="row">
                    <div className="form-group col-sm-12 col-md-4">
                      <label>Institute</label>
                      <input
                        type="text"
                        className="form-control"
                        value={field.Institute}
                        id={field.Institute + i.toString()}
                        onChange={(e) => handleEdInputChange(i, e)}
                        name="Institute"
                        required
                      />
                    </div>
                    <div className="form-group col-sm-12 col-md-4">
                      <label>Year</label>
                      <input
                        type="text"
                        className="form-control"
                        value={field.Year}
                        id={field.Year + i.toString()}
                        name="Year"
                        onChange={(e) => handleEdInputChange(i, e)}
                        required
                      />
                    </div>
                    <div className="form-group col-sm-12 col-md-4">
                      <label>Degree</label>
                      <input
                        type="text"
                        className="form-control"
                        value={field.Degree}
                        id={field.Degree + i.toString()}
                        name="Degree"
                        onChange={(e) => handleEdInputChange(i, e)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </>
            ))}
            <button className="btn btn-primary" onClick={handleEdInput}>
              + ADD
            </button>
          </div>
          <br />
          <h3>Experience</h3>
          <hr />

          <div>
            {exInput.map((field, i) => (
              <>
                <div key={i}>
                  <div className="row">
                    <div className="form-group col-sm-12 col-md-4">
                      <label>Company</label>
                      <input
                        type="text"
                        className="form-control"
                        value={field.Company}
                        id={field.Institute + i.toString()}
                        name="Company"
                        onChange={(e) => handleExInputChange(i, e)}
                        required
                      />
                    </div>
                    <div className="form-group col-sm-12 col-md-4">
                      <label>Year</label>
                      <input
                        type="text"
                        className="form-control"
                        value={field.Year}
                        id={field.Year + i.toString()}
                        name="Year"
                        onChange={(e) => handleExInputChange(i, e)}
                        required
                      />
                    </div>
                    <div className="form-group col-sm-12 col-md-4">
                      <label>Designation</label>
                      <input
                        type="text"
                        className="form-control"
                        value={field.Designation}
                        id={field.Degree + i.toString()}
                        name="Designation"
                        onChange={(e) => handleExInputChange(i, e)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </>
            ))}
            <button className="btn btn-primary" onClick={handleExInput}>
              + ADD
            </button>
          </div>
          <br />
          <h3>Skills</h3>
          <hr />
          <Taggit handler={handleTags} tags={tags} />

          <br />
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br />
          <br />
        </form>
      </div>
    </>
  );
};

export default Form;
