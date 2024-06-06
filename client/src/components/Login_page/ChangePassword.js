import React, { Component } from 'react'
import "./ChangePassword.css"

export class ChangePassword extends Component {
  render() {
    return (
        <div className="ChangeAuthor-background">
        <div className="ChangeAuth-form-container">
        <form className="ChangeAuth-form">
        <div className="ChangeAuth-form-content">
        <h3 className="ChangeAuth-form-title">
          Change Password
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

            <div className="form-group mt-1">
              <label>Old Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="form-group mt-1">
              <label>New Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="form-group mt-1">
              <label>Re-enter New Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter email"
                required
              />
            </div> 

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Change Password
              </button>
            </div>

          </div>
        </form>
      </div>
      </div>
    )
  }
}

export default ChangePassword
