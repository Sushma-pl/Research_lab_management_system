import React from "react";
import "./ChangePassword.css";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useState, useContext } from "react";
function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = useContext(UserContext);

    function registerUser(e) {
      e.preventDefault();

      const data = { email, password };
      axios
        .post("http://localhost:5000/SignUp", data, { withCredentials: true })
        .then((response) => {
          user.setEmail(response.data.email);
          setEmail("");
          setPassword("");
        });
    }
    return (
      <div className="ChangeAuthor-background">
        <div className="ChangeAuth-form-container">
          <form className="ChangeAuth-form" onSubmit={(e) => registerUser(e)}>
            <div className="ChangeAuth-form-content">
              <h3 className="ChangeAuth-form-title">Sign up</h3>

              <div className="form-group mt-1">
                <label>Enter e-mail</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group mt-1">
                <label>Enter Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="password"
                  required
                  name="password"
                  vvalue={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  <Link to="/Login">Submit</Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );

}

export default SignUp;
