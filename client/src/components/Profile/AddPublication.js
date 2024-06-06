import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./EditNavbar.css"
import axios from 'axios';

export class AddPublication extends Component {

  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthors = this.onChangeAuthors.bind(this);
    this.onChangeJournalConference = this.onChangeJournalConference.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      authors: '',
      journal_or_conference: '',
    }
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeAuthors(e) {
    this.setState({
      authors: e.target.value
    })
  }

  onChangeJournalConference(e) {
    this.setState({
      journal_or_conference: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const publication = {
      title: this.state.title,
      authors: this.state.authors,
      journal_or_conference: this.state.journal_or_conference,
    };

    console.log(publication);

    axios.post('http://localhost:5000/research/publication/add', publication)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
        <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
        <section id="sidebar"> 
          <div id="sidebar-nav">   
            <ul>
              <li><Link to="/profile"> Back</Link></li>
              <li className="active"><Link to="/profile/add-publication">Add Publication</Link></li>      
            </ul>
          </div>
        </section>
        <div className="profile">
          <div className="content">
            <h1>Add Publication</h1>
            <form action onSubmit={this.onSubmit}>
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="cname">Title</label>
                </div>
                <div className="grid-65">
                <textarea required
                    name
                    id
                    cols={30}
                    rows="auto"
                    tabIndex={3}
                    defaultValue={""} value={this.state.title} onChange={this.onChangeTitle}
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="abstract">Authors</label>
                </div>
                <div className="grid-65">
                  <input required type="text" id="abstract" tabIndex={1} value={this.state.authors} onChange={this.onChangeAuthors}/>
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="notification">Journal/Conference: </label>
                </div>
                <div className="grid-65">
                <textarea required
                    name
                    id
                    cols={30}
                    rows="auto"
                    tabIndex={3}
                    defaultValue={""} value={this.state.journal_or_conference} onChange={this.onChangeJournalConference}
                  />
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

export default AddPublication