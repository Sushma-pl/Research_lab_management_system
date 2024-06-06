import React, { Component } from 'react'
import "./Visitor.css"
import image1 from "./Picture/Image_1.jpg"
import image2 from "./Picture/Image_2.jpg"
import axios from 'axios';

const Visitorr = props => (
  <div className="col-lg-6">
    <div className="visitor d-flex align-items-start" >
      <div className="visitorpic"><img src={image1} className="img-fluid" alt=""/></div>
      <div className="visitor-info">
        <h4>{props.visitor.name}</h4>
        <p> <br/>
          <b>Affiliation:</b> {props.visitor.affiliation} <br/>
          <b>Visit Date:</b> {props.visitor.visit_date} <br/> <br/></p>
          <button className="favorite styled"
                type="button" href={props.visitor.website}>
                Website
          </button>
      </div>
    </div>
  </div>
)

export class Visitor extends Component {

  constructor(props) {
    super(props);
    this.state = {visitors: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/member/visitor/')
      .then(response => {
        this.setState({ visitors: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  VisitorList() {
    return this.state.visitors.map(currentVisitor => {
      return <Visitorr visitor={currentVisitor} />;
    })
  }

  render() {
    return (
      <div>
        <section id="visitorteam" className="visitorteam section-bg">
        <div className="container">

          <div className="vsection-title">
            <h2>VISITORS</h2>
            <div className="underline"></div>
          </div>

          <div className="row">

          {this.VisitorList()}

        </div>

        </div>
      </section>
     
      </div>
    )
  }
}

export default Visitor
