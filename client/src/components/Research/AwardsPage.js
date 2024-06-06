import React, { Component } from 'react'
import "./SeminarsPage.css";
import axios from 'axios';

const Awardd = props => (
  <li><span style={{color: 'rgb(255, 71, 71)'}}>{props.award.date}: </span><span style={{color: '#0b22b3'}}>{props.award.name_of_award} </span>by <span style={{color: '#0b22b3'}}>{props.award.recipient}</span><br/><i>{props.award.description}</i></li>
)

export class AwardsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {awards: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/research/award/')
      .then(response => {
        this.setState({ awards: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  AwardList() {
    return this.state.awards.map(currentAward => {
      return <Awardd award={currentAward} />;
    })
  }
  
  render() {
    return (
      <div>
        <main>
          <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
          <center><h3 className="mb-3 mt-5">Awards</h3></center>
          <ul className='list-seminars'>
          {this.AwardList()}
          </ul>
        </main>

      </div>
    )
  }
}

export default AwardsPage

/*
<li><span style={{color: 'rgb(255, 71, 71)'}}>2023-Apr-11: </span><span style={{color: '#0b22b3'}}>Best Paper Award </span>to <span style={{color: '#0b22b3'}}>Nibedita Behera</span><br/><i>The award was given to the student for best paper in the AICM,2023.</i></li>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2023-Mar-17: </span><span style={{color: '#0b22b3'}}>Best Poster Award </span>to <span style={{color: '#0b22b3'}}>Abdun Nihaal</span><br/><i>The award was given to the student for excelling in the Poster Presentations held on the occasion of IITH Foundation Day Events.</i></li>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2023-Feb-10: </span><span style={{color: '#0b22b3'}}>Senior Leadership Award </span>to <span style={{color: '#0b22b3'}}>Kranti Ingale</span><br/><i>The award was given to the student for displaying outstanding leadership skills.</i></li>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2022-Dec-08: </span><span style={{color: '#0b22b3'}}>Fermi Presidential Award </span>to <span style={{color: '#0b22b3'}}>Prasoon Mishra</span><br/><i>The President awarded the student for their immense contributions to the field of science and technology.</i></li>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2022-Nov-28: </span><span style={{color: '#0b22b3'}}>Oral Presentation Award </span>to <span style={{color: '#0b22b3'}}>Aditya Agrawal</span><br/><i>The award was given to the student for best presentation in the International Symposium on Graph Drawing, 2022</i></li>
            <li><span style={{color: 'rgb(255, 71, 71)'}}>2022-Nov-23: </span><span style={{color: '#0b22b3'}}>Best Paper Award </span>to <span style={{color: '#0b22b3'}}>Kasaraneni Ramya</span><br/><i>The student was awarded for best paper in the Conference on Implementation and Application of Automata, 2022</i></li>
*/