import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./ForgotPassword.css"

export class ForgotPassword extends Component {
  render() {
    return (
        <div className="ForgotAuthor-background">
        <div className="ForgotAuth-form-container">
       <form className="ForgotAuth-form">
        <div className="ForgotAuth-form-content">
        <h3 className="ForgotAuth-form-title">
          Forgot Password
          </h3>
            
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter username"
                required
              />
              </div>
            

            <div className="form-group mt-3">
              <label>Institute Email-id</label>
              <input
                type="email"
                className="form-control mt-1 mb-1"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Send Reset Link
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    )
  }
}

export default ForgotPassword
