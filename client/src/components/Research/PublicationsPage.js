import "./PublicationsPage.css"
import React, { Component } from 'react'
import axios from 'axios';

const Publicationn = props => (
  <div className="accordion-item">
		<h2 className="accordion-header" id={props.heading}>
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={props.hash} aria-expanded="false" aria-controls={props.collapse}>
				{props.publication.title}
			</button>
		</h2>
		<div id={props.collapse} className="accordion-collapse collapse" aria-labelledby={props.heading} data-bs-parent="#accordionFlushExample">
			<div className="accordion-body"><i>{props.publication.authors}<br/>{props.publication.journal_or_conference}</i></div>
		</div>
	</div>
)

export default class PublicationsPage extends Component {

	constructor(props) {
    super(props);
    this.state = {publications: []};
  }

	componentDidMount() {
    axios.get('http://localhost:5000/research/publication/')
      .then(response => {
        this.setState({ publications: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

	PublicationList() {
		return this.state.publications.map((currentConference,ind) => {
      return <Publicationn publication={currentConference} heading={"h"+ind} collapse={"c"+ind} hash={"#c"+ind}/>;
    })
  }

  render() {
    return (
      <div>
        <main>
          <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
          <center><h3 className="mb-3 mt-5">Publications</h3></center>
          <div className="accordion accordion-flush" id="accordionFlushExample">
						{this.PublicationList()}
					</div>
        </main>
      </div>
    )
  }
}

/*
<div className="accordion-item">
		<h2 className="accordion-header" id={props.heading}>
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={props.hash} aria-expanded="false" aria-controls={props.collapse}>
				{props.publication.title}
			</button>
		</h2>
		<div id={props.collapse} className="accordion-collapse collapse" aria-labelledby={props.heading} data-bs-parent="#accordionFlushExample">
			<div className="accordion-body"><i>{props.publication.authors}<br/>{props.publication.journal_or_conference}</i></div>
		</div>
	</div>
<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingOn">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
									Multi Interval DomLock (MID): Towards Improving Concurrency in Hierarchies
								</button>
							</h2>
							<div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body"><i>Author(s): Anju M A, Rupesh Nasre<br/>Journal/Conference: ACM Transactions on Parallel Computing (TOPC), 2022</i></div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingTwo">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
								Certified Mergeable Replicated Data Types
								</button>
							</h2>
							<div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body"><i>Author(s): Vimala Soundarapandian, Adharsh Kamath, Kartik Nagar, KC Sivaramakrishnan<br/>Journal/Conference: ACM Conference on Programming Language Design and Implementation (PLDI), Jun 13-17, 2022</i></div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingThree">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
								Hansie: Hybrid and Consensus Regression Test Prioritization
								</button>
							</h2>
							<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body"><i>Author(s): Shouvick Mondal, Rupesh Nasre<br/>Journal/Conference: Journal of Systems and Software (JSS), 2020 and IEEE International Conference on Software Testing, Verification and Validation (ICST), 2021</i></div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingFour">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
								Router Buffer Caching for Managing Shared Cache Blocks in Tiled Multi-Core Processors
								</button>
							</h2>
							<div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body"><i>Author(s): Joe Augustine, Raghavendra Kanakagiri, John Jose, Madhu Mutyam<br/>Journal/Conference: IEEE International Conference on Computer Design (ICCD), 2020</i></div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingFive">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
								DisGCo: A Compiler for Distributed Graph Analytics
								</button>
							</h2>
							<div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body"><i>Author(s): Anchu Rajendran, V. Krishna Nandivada<br/>Journal/Conference: ACM Transactions on Architecture and Code Optimization (TACO), 2020</i></div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingSix">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
								Optimization of Inter Cache Traffic Entanglement in Tagless Caches with Tiling Opportunities
								</button>
							</h2>
							<div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body"><i>Author(s): S.R. Swamy Saranam Chongala, Sumitha George, Hariram Thirucherai Govind, Jagadish Kotra, Madhu Mutyam, John Samson, Mahmut Kandemir, Vijaykrishnan Narayanan<br/>Journal/Conference: International Conference on Compilers, Architectures, and Synthesis for Embedded Systems (CASES), Sep 20-25, 2020</i></div>
							</div>
						</div>
*/