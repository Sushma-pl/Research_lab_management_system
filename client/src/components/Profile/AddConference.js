import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import "./EditNavbar.css"

export class AddConference extends Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAbstractDate = this.onChangeAbstractDate.bind(this);
    this.onChangeSubmissionDate = this.onChangeSubmissionDate.bind(this);
    this.onChangeNotificationDate = this.onChangeNotificationDate.bind(this);
    this.onChangeEventDate = this.onChangeEventDate.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeCoreRank = this.onChangeCoreRank.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      abstract_date: '',
      submission_date: '',
      notification_date: '',
      event_date: '',
      location: '',
      core_rank: '',
      graduation_year: ''
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeAbstractDate(e) {
    this.setState({
      abstract_date: e.target.value
    })
  }

  onChangeSubmissionDate(e) {
    this.setState({
      submission_date: e.target.value
    })
  }

  onChangeNotificationDate(e) {
    this.setState({
      notification_date: e.target.value
    })
  }

  onChangeEventDate(e) {
    this.setState({
      event_date: e.target.value
    })
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }

  onChangeCoreRank(e) {
    this.setState({
      core_rank: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const conference = {
      name: this.state.name,
      abstract_date: this.state.abstract_date,
      submission_date: this.state.submission_date,
      graduation_year: this.state.graduation_year,
      notification_date: this.state.notification_date,
      event_date: this.state.event_date,
      location: this.state.location,
      core_rank: this.state.core_rank,
    };

    console.log(conference);

    axios.post('http://localhost:5000/research/conference/add', conference)
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
                <Link to="/profile/add-conference"> Add Conference</Link>
              </li>
            </ul>
          </div>
        </section>
        {/* Add form details here  */}
        <div className="profile">
          <div className="content">
            <h1>Add Conference</h1>
            <form action onSubmit={this.onSubmit}>
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="cname">Conference Name</label>
                </div>
                <div className="grid-65">
                  <input required type="text" id="cname" tabIndex={1} value={this.state.name} onChange={this.onChangeName}/>
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="abstract">Abstract Date (Mon DD, YYYY)</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="abstract" tabIndex={1} value={this.state.abstract_date} onChange={this.onChangeAbstractDate}/>
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="submission">Submission date (Mon DD, YYYY)</label>
                </div>
                <div className="grid-65">
                  <input required type="text" id="submission" tabIndex={6} value={this.state.submission_date} onChange={this.onChangeSubmissionDate}/>
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="notification">Notification date (Mon DD, YYYY)</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="notification" tabIndex={6} value={this.state.notification_date} onChange={this.onChangeNotificationDate}/>
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="event">Event date (Mon DD-DD, YYYY or Mon DD-Mon DD, YYYY)</label>
                </div>
                <div className="grid-65">
                  <input required type="text" id="event" tabIndex={6} value={this.state.event_date} onChange={this.onChangeEventDate}/>
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="location">Location</label>
                </div>
                <div className="grid-65">
                  <input required type="text" id="location" tabIndex={6} value={this.state.location} onChange={this.onChangeLocation}/>
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="core">Core rank</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="core" tabIndex={6} value={this.state.core_rank} onChange={this.onChangeCoreRank}/>
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

export default AddConference
