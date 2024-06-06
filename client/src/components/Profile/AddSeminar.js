import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./EditNavbar.css"
import axios from 'axios';

export class AddSeminar extends Component {

  constructor(props) {
    super(props);

    this.onChangeTopic = this.onChangeTopic.bind(this);
    this.onChangeOrganizer = this.onChangeOrganizer.bind(this);
    this.onChangeTypeOfSeminar = this.onChangeTypeOfSeminar.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      topic: '',
      organizer: '',
      type_of_seminar: '',
      date: '',
    }
  }

  onChangeTopic(e) {
    this.setState({
      topic: e.target.value
    })
  }

  onChangeOrganizer(e) {
    this.setState({
      organizer: e.target.value
    })
  }

  onChangeTypeOfSeminar(e) {
    this.setState({
      type_of_seminar: e.target.value
    })
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const seminar = {
      topic: this.state.topic,
      organizer: this.state.organizer,
      type_of_seminar: this.state.type_of_seminar,
      date: this.state.date,
    };

    console.log(seminar);

    axios.post('http://localhost:5000/research/seminar/add', seminar)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
        <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
        <section id="sidebar"> 
  {/* <div classTopic="white-label">
  </div>  */}
  <div id="sidebar-nav">   
    <ul>
      <li><Link to="/profile"> Back</Link></li>
      <li className="active"><Link to="/profile/add-seminar"> Add Seminar</Link></li>
    </ul>
  </div>
</section>
   {/* Add form details here  */}
   <div className="profile">
          <div className="content">
            <h1>Add Seminar</h1>
            <form action onSubmit={this.onSubmit}>
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="cname">Seminar Topic</label>
                </div>
                <div className="grid-65">
                <textarea required
                    name
                    id
                    cols={30}
                    rows="auto"
                    tabIndex={3}
                    defaultValue={""} value={this.state.topic} onChange={this.onChangeTopic}
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="abstract">Organizer</label>
                </div>
                <div className="grid-65">
                  <input required type="text" id="abstract" tabIndex={1} value={this.state.organizer} onChange={this.onChangeOrganizer}/>
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="submission">Type of Seminar</label>
                </div>
                <div className="grid-65">
                <select ref="userInput"
              required
              className="form-control"
              value={this.state.type_of_seminar}
              onChange={this.onChangeTypeOfSeminar}>
                <option>MS Seminar</option>
                <option>Weekly Seminar</option>
                <option>Research Proposal Seminar</option>
                <option>PhD Seminar</option>
          </select>
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="notification">Date (Mon DD, YYYY)</label>
                </div>
                <div className="grid-65">
                  <input required type="text" id="notification" tabIndex={6} value={this.state.date} onChange={this.onChangeDate}/>
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
    )
  }
}

export default AddSeminar
