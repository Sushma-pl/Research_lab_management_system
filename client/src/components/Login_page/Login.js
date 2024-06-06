import {useState, useContext} from 'react'
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "./UserContext";
import "./Login.css";
function Login (){

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [loginError, setLoginError] = useState(false);

      const user = useContext(UserContext);

      function loginUser(e) {
        e.preventDefault();

        const data = { email, password };
        axios
          .post("http://localhost:5000/login", data, { withCredentials: true })
          .then((response) => {
            user.setEmail(response.data.email);
            setEmail("");
            setPassword("");
            setLoginError(false);
          })
          .catch(() => {
            setLoginError(true);
          });
      }


    return (
      <div className="Author-background">
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={(e) => loginUser(e)}>
            {loginError && <div>LOGIN ERROR! WRONG EMAIL OR PASSWORD!</div>}
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">
                <i className="fas fa-user-circle icon-size"></i>
              </h3>

              <div className="form-group mt-3">
                <label>Enter email</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <label>
                  <input type="checkbox" name="remember" /> Remember me
                </label>
              </div>

              <div className="row">
                <div className="col-6 text-left">
                  <span className="forgot-password mt-2">
                    <Link to="/login/forgot-password">Forgot password?</Link>
                  </span>
                </div>
                <div className="col-6 text-right">
                  <span className="forgot-password mt-2">
                    <Link to="/login/change-password">Change password?</Link>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );

}

export default Login;
