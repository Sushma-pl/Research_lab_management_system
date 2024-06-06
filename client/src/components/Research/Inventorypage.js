import "./PublicationsPage.css"
import React, { Component } from 'react'

export default class InventoryPage extends Component {
  render() {
    return (
      <div>
        <main>
          <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
          <center><h3 className="mb-3 mt-5">Inventory</h3></center>
          <div className="accordion accordion-flush" id="accordionFlushExample">
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingOne">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                BOLD: Ontology-based Log Debugger
								</button>
							</h2>
							<div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body"><i>Developer(s): Dileep Kumar Pattipati<br/>Faculty Advisor(s): P. Sreenivasa Kumar, Rupesh Nasre</i></div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingTwo">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
								Colosseum: Regression Test Prioritization by Delta Displacement in Test Coverage
								</button>
							</h2>
							<div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body"><i>Developer(s): Vimala Soundarapandian, Adharsh Kamath, Kartik Nagar, KC Sivaramakrishnan<br/>Faculty Advisor(s): Rupesh Narse</i></div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingThree">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
								Hansie: Hybrid and Consensus Regression Test Prioritization
								</button>
							</h2>
							<div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body"><i>Developer(s): Shouvick Mondal<br/>Faculty Advisor(s): V Krishna Nandivada</i></div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingFour">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
								Installing GEM5 on Aqua Cluster
								</button>
							</h2>
							<div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body"><i>Developer(s): Joe Augustine, Raghavendra Kanakagiri, John Jose, Madhu Mutyam<br/>Faculty Advisor(s): Rupesh Narse</i></div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingFive">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
								Graffix: Efficient Graph Processing with GPU-Specific Approximations
								</button>
							</h2>
							<div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body"><i>Developer(s): Anchu Rajendran, V. Krishna Nandivada<br/>Faculty Advisor(s): Rupesh Narse</i></div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="flush-headingSix">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
								OPAL: An Extensible Framework for Ontology-based Program Analysis
								</button>
							</h2>
							<div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body"><i>Developer(s): Mahmut Kandemir<br/>Faculty Advisor(s): Vijaykrishnan Narayanan</i></div>
							</div>
						</div>
					</div>
        </main>
       
      </div>
    )
  }
}