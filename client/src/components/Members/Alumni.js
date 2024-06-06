import React, { Component } from 'react'
import image from './Picture/Image_1.jpg'
import axios from 'axios';
import "./Alumni.css"

const Alumnii = props => (
  <div className="col-lg-6">
    <div className="member d-flex align-items-start" >
      <div className="alumni-teampic"><img src={image} className="img-fluid rounded-circle" alt=""/></div>
      <div className="member-info">
        <h4>{props.alumni.name}</h4>
            <span>{props.alumni.type_of_alumni}</span>
            <div className="detalis mt-3">
              <p className='fs-6'>
                <b>Mentor:</b>  {props.alumni.mentor} <br />
                <b>Thesis:</b> {props.alumni.thesis} <br />
                <b>Graduation year:</b> {props.alumni.graduation_year} <br />
                <b>Current Position:</b> {props.alumni.present_position}
            </p>
            </div>
        <div className="social">
          <a href={props.alumni.gs}><i className="fab fa-google scholar"></i></a>
          <a href={props.alumni.linkedin}><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
  </div>
)

export default class Alumni extends Component {

  constructor(props) {
    super(props);
    this.state = {alumnis: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/member/alumni/')
      .then(response => {
        this.setState({ alumnis: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  AlumniList() {
    return this.state.alumnis.map(currentAlumni => {
      return <Alumnii alumni={currentAlumni} />;
    })
  }

  render() {
    return (
        <div>
        {/* <!-- ======= alumni-team Section ======= --> */}
     <section id="alumni-team" className="alumni-team alumni-bg">
        <div className="container">

          <div className="alumni-title">
            <h2>Alumni</h2>
            <div className="underline"></div>
          </div>

          <div className="row">

            {this.AlumniList()}

          </div>

        </div>
      </section>
      
      </div>
    )
  }
}
