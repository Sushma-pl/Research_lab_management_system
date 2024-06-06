import React, { Component } from 'react'
import "./mentors.css";
import image from './Picture/Image_1.jpg';
import axios from 'axios';

const Mentorr = props => (
  <div className="col-lg-6">
    <div className="member d-flex align-items-start" >
      <div className="teampic"><img src={image} className="img-fluid" alt=""/></div>
      <div className="member-info">
        <h4>{props.mentor.name}</h4>
            <span>{props.mentor.post}</span>

        <p>{props.mentor.description}</p>
        <div className="social">
          <a href={props.mentor.googleScholar_link}><i className="bi bi-google scholar"></i></a>
          {/* <!-- <a href=""><i className="bi bi-webpage"></i></a>--> */}
          <a href={props.mentor.linked_link}><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
  </div>
)

export class Mentor extends Component {

  constructor(props) {
    super(props);
    this.state = {mentors: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/member/mentor/')
      .then(response => {
        this.setState({ mentors: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  MentorList() {
    return this.state.mentors.map(currentMentor => {
      return <Mentorr mentor={currentMentor} />;
    })
  }

  render() {
    return (
      <div>
        {/* <!-- ======= Team Section ======= --> */}
     <section id="team" className="team section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Mentors</h2>
            <div className="underline"></div>
            {/* <p>IITH Research Laboratory Management</p> */}
          </div>

          <div className="row">

            {this.MentorList()}

          </div>

        </div>
      </section>
      {/* <!-- End Team Section --> */}
      
      </div>
    )
  }
}

export default Mentor

/*
<div className="col-lg-6">
              <div className="member d-flex align-items-start" >
                <div className="teampic"><img src={image} className="img-fluid" alt=""/></div>
                <div className="member-info">
                  <h4>V. Krishna Nandivada</h4>
                      <span>Professor</span>

                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
                  <div className="social">
                    <a href=""><i className="bi bi-google scholar"></i></a>
                   <a href=""><i className="bi bi-linkedin"></i></a>
                   </div>
                 </div>
               </div>
             </div>
 
             <div className="col-lg-6 mt-4 mt-lg-0">
               <div className="member d-flex align-items-start" >
                 <div className="teampic"><img src={image} className="img-fluid" alt=""/></div>
                 <div className="member-info">
                   <h4>Madhu Mutyam</h4>
                   <span>Assistant Professor</span>
 
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
                   <div className="social">
                     <a href=""><i className="bi bi-google scholar"></i></a>
                     <a href=""><i className="bi bi-linkedin"></i></a>
                   </div>
                 </div>
               </div>
             </div>
 
             <div className="col-lg-6 mt-4">
               <div className="member d-flex align-items-start" >
                 <div className="teampic"><img src={image} className="img-fluid" alt=""/></div>
                 <div className="member-info">
                   <h4>Kartik Nagar</h4>
                  <span>Associate Professor</span>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
                   <div className="social">
                     <a href=""><i className="bi bi-google scholar"></i></a>
                     <a href=""><i className="bi bi-linkedin"></i></a>
                   </div>
                 </div>
               </div>
             </div>
 
             <div className="col-lg-6 mt-4">
               <div className="member d-flex align-items-start" >
                 <div className="teampic"><img src={image} className="img-fluid" alt=""/></div>
                 <div className="member-info">
                   <h4>Rupesh Nasre</h4>
                      <span>Professor</span>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ducimus.</p>
                   <div className="social">
                     <a href=""><i className="bi bi-google scholar"></i></a>
                     <a href=""><i className="bi bi-linkedin"></i></a>
                   </div>
                 </div>
               </div>
             </div>
*/
