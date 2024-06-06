import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./EditNavbar.css"
import axios from 'axios';

export class AddAlumni extends Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeTypeOfAlumni = this.onChangeTypeOfAlumni.bind(this);
    this.onChangeMentor = this.onChangeMentor.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeThesis = this.onChangeThesis.bind(this);
    this.onChangePresentPosition = this.onChangePresentPosition.bind(this);
    this.onChangeLinkedIn = this.onChangeLinkedIn.bind(this);
    this.onChangeGScholar = this.onChangeGScholar.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      type_of_alumni: 'PhD Alumni',
      mentor: '',
      thesis: '',
      present_position: '',
      linkedin: '',
      gs: '',
      graduation_year: ''
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeTypeOfAlumni(e) {
    this.setState({
      type_of_alumni: e.target.value
    })
  }

  onChangeMentor(e) {
    this.setState({
      mentor: e.target.value
    })
  }

  onChangeYear(e) {
    this.setState({
      graduation_year: e.target.value
    })
  }

  onChangeThesis(e) {
    this.setState({
      thesis: e.target.value
    })
  }

  onChangePresentPosition(e) {
    this.setState({
      present_position: e.target.value
    })
  }

  onChangeLinkedIn(e) {
    this.setState({
      linkedin: e.target.value
    })
  }

  onChangeGScholar(e) {
    this.setState({
      gs: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const alumni = {
      name: this.state.name,
      type_of_alumni: this.state.type_of_alumni,
      mentor: this.state.mentor,
      graduation_year: this.state.graduation_year,
      thesis: this.state.thesis,
      present_position: this.state.present_position,
      linkedin: this.state.linkedin,
      gs: this.state.gs
    };

    console.log(alumni);

    axios.post('http://localhost:5000/member/alumni/add', alumni)
      .then(res => console.log(res.data));

    window.location = '/';
  }

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
                <Link to="/profile/add-alumni"> Add Alumni</Link>
              </li>
            </ul>
          </div>
        </section>
        {/* Add form details here  */}
        <div className="profile">
          <div className="content">
            <h1>Add Alumni</h1>
            <form action onSubmit={this.onSubmit}>
              {/* Photo */}
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="avatar">Photo</label>
                </div>
                <div className="grid-65">
                  <span className="photo" title="Upload your Photo!" />
                  <input type="file" className="btn" />
                </div>
              </fieldset>
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="fname">Name</label>
                </div>
                <div className="grid-65">
                  <input type="text" required id="fname" tabIndex={1} value={this.state.name} onChange={this.onChangeName}/>
                </div>
                {/* type of alumni */}
              </fieldset>
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="fname">Type of Alumni</label>
                </div>
                <div className="grid-65">
                <select ref="userInput"
              required
              className="form-control"
              value={this.state.type_of_alumni}
              onChange={this.onChangeTypeOfAlumni}>
                <option>PhD Alumni</option>
                <option>MTech Alumni</option>
          </select>
                </div>
              </fieldset>
              {/* Email */}
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="email">Mentor</label>
                </div>
                <div className="grid-65">
                  <input type="text" required id="mentor-name" tabIndex={6} value={this.state.mentor} onChange={this.onChangeMentor}/>
                </div>
              </fieldset>
              {/* Description*/}
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="description">Thesis</label>
                </div>
                <div className="grid-65">
                  <textarea
                    name
                    id
                    cols={30}
                    rows="auto"
                    tabIndex={3}
                    defaultValue={""} value={this.state.thesis} onChange={this.onChangeThesis}
                  />
                </div>
              </fieldset>
              {/* Research area*/}
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="description">Graduation Year</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="grad-year" tabIndex={6} value={this.state.graduation_year} onChange={this.onChangeYear}/>
                </div>
              </fieldset>
              {/* Present Position */}
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="linkedin">Present Position</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="linkedin" tabIndex={12} value={this.state.present_position} onChange={this.onChangePresentPosition}/>
                </div>
              </fieldset>
              {/* Linkedin URL */}
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="linkedin">LinkedIn URL</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="linkedin" tabIndex={12} value={this.state.linkedin} onChange={this.onChangeLinkedIn}/>
                </div>
              </fieldset>
              {/* Website URL */}
              <fieldset style={{ borderBottom: "none" }}>
                <div className="grid-35">
                  <label htmlFor="website">Website URL</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="website" tabIndex={13} value={this.state.gs} onChange={this.onChangeGScholar}/>
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

export default AddAlumni
