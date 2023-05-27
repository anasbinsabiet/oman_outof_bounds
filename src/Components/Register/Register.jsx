import { faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import axios from "axios";
import { Alert } from "react-bootstrap";

const Register = () => {
  const baseurl = "http://127.0.0.1:5000";
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState("");

  const registerAction = async (e) => {
    e.preventDefault();
    setValidationErrors("");
    let payload = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };

    try{
      const response = await axios.post(`${baseurl}/register`, payload);
      if(response.data.error === false){
        navigate("/login");
      };
    } catch(e){
      setValidationErrors(e.response.data.message);
    }
  };
  return (
    <div>
      <Header />

      <section class="banner_inner" id="home">
        <div class="banner_inner_overlay"></div>
      </section>

      <section className="py-5">
        <div className="card py-4 px-2 mx-auto">
          <div className="card-header">
            <h3>Sign Up</h3>
          </div>
          <div className="card-body">
            <form onSubmit={(e) => registerAction(e)}>
              {validationErrors && (
                <Alert variant="danger">
                  <div className="alert-heading h6">
                    {validationErrors}
                  </div>
                </Alert>
              )}
              <div className="row clearfix">
                <div className="col-md-6">
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      id="firstname"
                      name="firstname"
                      value={firstname}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="last name"
                      id="lastname"
                      name="lastname"
                      value={lastname}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required="required"
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faKey} />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required="required"
                />
              </div>
              <div className="form-group text-right">
                <input
                  type="submit"
                  defaultValue="Login"
                  className="btn float-right login_btn"
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Already have an account? <Link to={"/login"}> Sign In</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
