import React, { Component } from 'react'
import axios from 'axios'
import "./SeminarsPage.css"

const Seminarr = props => (
  <li><span style={{color: 'rgb(255, 71, 71)'}}>{props.seminar.date}: </span><span style={{color: '#0b22b3'}}>{props.seminar.type_of_seminar} </span>by <span style={{color: '#0b22b3'}}>{props.seminar.organizer}</span><br/><i>{props.seminar.topic}</i></li>
)

export class SeminarsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {seminars: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/research/seminar/')
      .then(response => {
        this.setState({ seminars: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  SeminarList() {
    return this.state.seminars.map(currentSeminar => {
      return <Seminarr seminar={currentSeminar} />;
    })
  }

  render() {
    return (
      <div>
        <main>
          <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
          <center><h3 className="mb-3 mt-5">Seminars' List</h3></center>
          <ul className='list-seminars'>
            {this.SeminarList()}
          </ul>
        </main>
       
      </div>
    )
  }
}

export default SeminarsPage