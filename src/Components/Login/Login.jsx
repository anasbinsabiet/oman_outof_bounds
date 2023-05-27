import React, { useEffect, useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "react-bootstrap";

const Login = () => {
  const baseurl = "http://127.0.0.1:5000";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState("");

  // useEffect(() => {
  //   if (
  //     !localStorage.getItem("token") !== "" ||
  //     !localStorage.getItem("token") !== null
  //   ) {
  //     navigate("/");
  //   }
  //   console.log(localStorage.getItem("token"));
  // }, []);

  const loginAction = (e) => {
    setValidationErrors("");
    e.preventDefault();
    let payload = {
      email: email,
      password: password,
    };
    if (email && password) {
      axios
        .post(`${baseurl}/login`, payload)
        .then((r) => {
          if(r.data.error === false){
            localStorage.setItem("token", r.data.data.token);
            if(email === 'oman@gmail.com'){
              navigate("/dashboard");
            }else{
              navigate("/");
            }
          }
        })
        .catch((e) => {
          setValidationErrors("Wrong email or password given!");
        });
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
            <h3>Sign In</h3>
          </div>
          <div className="card-body">
            <form
              onSubmit={(e) => {
                loginAction(e);
              }}
            >
              {validationErrors && (
                <Alert variant="danger">
                  <div className="alert-heading h6">
                  {validationErrors}
                  </div>
                </Alert>
              )}
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
              Don't have an account? <Link to={"/register"}> Sign Up</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
