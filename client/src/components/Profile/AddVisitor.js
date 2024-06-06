import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./EditNavbar.css"
import axios from 'axios'

export class AddVisitor extends Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAffiliation = this.onChangeAffiliation.bind(this);
    this.onChangeVisitDate = this.onChangeVisitDate.bind(this);
    this.onChangeWebsite = this.onChangeWebsite.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      affiliation: '',
      visit_date: '',
      website: '',
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeAffiliation(e) {
    this.setState({
      affiliation: e.target.value
    })
  }

  onChangeVisitDate(e) {
    this.setState({
      visit_date: e.target.value
    })
  }

  onChangeWebsite(e) {
    this.setState({
      website: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const visitor = {
      name: this.state.name,
      affiliation: this.state.affiliation,
      visit_date: this.state.visit_date,
      website: this.state.website
    };

    console.log(visitor);

    axios.post('http://localhost:5000/member/visitor/add', visitor)
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
                <Link to="/profile/add-visitor"> Add Visitor</Link>
              </li>
            </ul>
          </div>
        </section>
        {/* Add form details here  */}
        <div className="profile">
          <div className="content">
            <h1>Add Visitor</h1>
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
                  <input required type="text" id="fname" tabIndex={1} value={this.state.name} onChange={this.onChangeName}/>
                </div>
              </fieldset>
              {/* Email */}
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="email">Affiliation</label>
                </div>
                <div className="grid-65">
                  <input required type="text" id="mentor-name" tabIndex={6} value={this.state.affiliation} onChange={this.onChangeAffiliation}/>
                </div>
              </fieldset>
              {/* Description*/}
              {/* Research area*/}
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="description">Visit Date</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="grad-year" tabIndex={6} value={this.state.visit_date} onChange={this.onChangeVisitDate}/>
                </div>
              </fieldset>
              {/* Website URL */}
              <fieldset style={{ borderBottom: "none" }}>
                <div className="grid-35">
                  <label htmlFor="website" >Website URL</label>
                </div>
                <div className="grid-65">
                  <input type="text" id="website" tabIndex={13} value={this.state.website} onChange={this.onChangeWebsite}/>
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

export default AddVisitor
