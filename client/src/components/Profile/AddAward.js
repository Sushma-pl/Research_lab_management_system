import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./EditNavbar.css"
import axios from 'axios';

export class AddAward extends Component {

  constructor(props) {
    super(props);

    this.onChangeNameOfAward = this.onChangeNameOfAward.bind(this);
    this.onChangeRecipient = this.onChangeRecipient.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name_of_award: '',
      recipient: '',
      description: '',
      date: '',
    }
  }

  onChangeNameOfAward(e) {
    this.setState({
      name_of_award: e.target.value
    })
  }

  onChangeRecipient(e) {
    this.setState({
      recipient: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const award = {
      name_of_award: this.state.name_of_award,
      recipient: this.state.recipient,
      description: this.state.description,
      date: this.state.date,
    };

    console.log(award);

    axios.post('http://localhost:5000/research/award/add', award)
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
      <li><Link to="/profile"> Back</Link></li>
      <li className="active"><Link to="/profile/add-award">Add Award</Link></li>      
    </ul>
  </div>
</section>
   {/* Add form details here  */}
   <div className="profile">
          <div className="content">
            <h1>Add Award</h1>
            <form action onSubmit={this.onSubmit}>
              <fieldset>
                <div className="grid-35">
                  <label htmlFor="cname">Name of Award</label>
                </div>
                <div className="grid-65">
                <input required type="text" id="abstract" tabIndex={1} value={this.state.name_of_award} onChange={this.onChangeNameOfAward}/>
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="abstract">Recipient</label>
                </div>
                <div className="grid-65">
                  <input required type="text" id="abstract" tabIndex={1} value={this.state.recipient} onChange={this.onChangeRecipient}/>
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

              <fieldset>
                <div className="grid-35">
                  <label htmlFor="cname">Description</label>
                </div>
                <div className="grid-65">
                <textarea required
                    name
                    id
                    cols={30}
                    rows="auto"
                    tabIndex={3}
                    defaultValue={""} value={this.state.description} onChange={this.onChangeDescription}
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

export default AddAward
