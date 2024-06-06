import React, { Component } from 'react'
import "./Student.css"
import image1 from "./Picture/Image_1.jpg"
import image2 from "./Picture/Image_2.jpg"
import image3 from "./Picture/Image_3.jpg"
import image4 from "./Picture/Image_4.jpg"

import axios from 'axios';

const Studentt = props => (
  <div class="col-lg-6">
    <div class="member d-flex align-items-start" >
      <div class="student-teampic"><img src={image1} class="img-fluid" alt=""/></div>
      <div class="member-info">
        <h4>{props.student.name}</h4>
        <p>Mentor: {props.student.mentor}<br/>
          Research: {props.student.research_area} <br/>
          Email: {props.student.email} <br/> <br/></p>
          <button class="favorite styled"
                type="button" href={props.student.website}>
                Website
          </button>
      </div>
    </div>
  </div>
)

export class Student extends Component {

  constructor(props) {
    super(props);
    this.state = {students: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/member/student/')
      .then(response => {
        this.setState({ students: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  StudentList() {
    return this.state.students.map(currentStudent => {
      return <Studentt student={currentStudent} />;
    })
  }

  render() {
    return (
      <div>
        {/* <!-- ======= student-team Section ======= --> */}
     <section id="student-team" class="student-team student-bg">
        <div class="container">

          <div class="student-title">
            <h2>Students</h2>
            <div class="underline"></div>
          </div>

          <div class="row">

            {this.StudentList()}

          </div>

        </div>
      </section>
      {/* <!-- End student-team Section --> */}
    
      </div>
    )
  }
}

export default Student

/*
<div class="col-lg-6">
              <div class="member d-flex align-items-start" >
                <div class="student-teampic"><img src={image1} class="img-fluid" alt=""/></div>
                <div class="member-info">
                  <h4>V. Krishna Nandivada</h4>
                  <p>Mentor: Krishna Nandivada <br/>
                    Research: Compiler Optimizations for Parallel Programs <br/>
                    Email: amannoug [at] domain <br/> <br/></p>
                    <button class="favorite styled"
                         type="button">
                         Website
                    </button>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4 mt-lg-0">
              <div class="member d-flex align-items-start" >
                <div class="student-teampic"><img src={image2} class="img-fluid" alt=""/></div>
                <div class="member-info">
                  <h4>Madhu Mutyam</h4>
                 
                  <p>Mentor: Krishna Nandivada <br/>
                    Research: Compiler Optimizations for Parallel Programs <br/>
                    Email: amannoug [at] domainbr> <br/> <br/></p>
                    <button class="favorite styled"
                         type="button">
                         Website
                    </button>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4">
              <div class="member d-flex align-items-start" >
                <div class="student-teampic"><img src={image3} class="img-fluid" alt=""/></div>
                <div class="member-info">
                  <h4>Kartik Nagar</h4>
                  
                  <p>Mentor: Krishna Nandivada <br/>
                    Research: Compiler Optimizations for Parallel Programs <br/>
                    Email: amannoug [at] domain <br/> <br/></p>
                    <button class="favorite styled"
                         type="button">
                         Website
                    </button>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4">
              <div class="member d-flex align-items-start" >
                <div class="student-teampic"><img src={image4} class="img-fluid" alt=""/></div>
                <div class="member-info">
                  <h4>Rupesh Nasre</h4>
                  
                  <p>Mentor: Krishna Nandivada <br/>
                    Research: Compiler Optimizations for Parallel Programs <br/>
                    Email: amannoug [at] domain <br/> <br/></p>
                    <button class="favorite styled"
                         type="button">
                         Website
                    </button>
                </div>
              </div>
            </div>
*/