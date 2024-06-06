import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./EditNavbar.css";



export class UploadPictures extends Component {
  render() {
    return (
      <div>
        <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
        <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
        <section id="sidebar">
          {/* <div className="white-label">
  </div>  */}
          <div id="sidebar-nav">
            <ul>
              <li>
                <Link to="/profile"> Back</Link>
              </li>
              <li className="active">
                <Link to="/profile/upload-pictures">
                  {" "}
                  Upload Pictures to Gallery
                </Link>
              </li>
            </ul>
          </div>
        </section>
        {/* Add form details here  */}
        <div className="profile">
          <div className="content">
            <h1>Upload pictures to gallery</h1>
            <form action>
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="photos">Upload photo here</label>
                </div>
                <div className="grid-65">
                  <span className="pictures" title="Upload your Photo!" />
                  <input type="file" className="btn" />
                </div>
              </fieldset>
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="videos">Upload video here</label>
                </div>
                <div className="grid-65">
                  <span className="pictures" title="Upload your Video!" />
                  <input type="file" className="btn" />
                </div>
              </fieldset>
              <fieldset className="buttons">
                <input
                  type="button"
                  className="Btn cancel"
                  defaultValue="Cancel"
                />
                <input
                  type="submit"
                  className="Btn"
                  defaultValue="Save Changes"
                />
              </fieldset>
            </form>
          </div>
        </div>
        
      </div>
    );
  }
}

export default UploadPictures
