import React, { Component } from 'react'
import axios from 'axios';
import "./ConferencesPage.css";

const Conferencee = props => (
  <tr>
    <td data-label="Conference">{props.conference.name}</td>
    <td data-label="Abstract Date">{props.conference.abstract_date}</td>
    <td data-label="Submission Date">{props.conference.submission_date}</td>
    <td data-label="Notification Date">{props.conference.notification_date}</td>
    <td data-label="Event Date">{props.conference.event_date}</td>
    <td data-label="Location">{props.conference.location}</td>
    <td data-label="Core Rank">{props.conference.core_rank}</td>
  </tr>
)

export class ConferencesPage extends Component {

  constructor(props) {
    super(props);
    this.state = {conferences: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/research/conference/')
      .then(response => {
        this.setState({ conferences: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  ConferenceList() {
    return this.state.conferences.map(currentConference => {
      return <Conferencee conference={currentConference} />;
    })
  }

  render() {
    return (
      <div>
        <main>
        <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
        <center><h3 className="mb-3 mt-5">Conference Deadlines</h3></center>
        <div className="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Conference</th>
                <th>Abstract Date</th>
                <th>Submission Date</th>
                <th>Notification Date</th>
                <th>Event Date</th>
                <th>Location</th>
                <th>Core Rank</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {this.ConferenceList()}
            </tbody>
          </table>
        </div>
      </main>
      
      </div>
    )
  }
}

export default ConferencesPage

/*
            <tr>
              <td data-label="Conference">NDSS 2024</td>
              <td data-label="Abstract Date">&nbsp;</td>
              <td data-label="Submission Date">Apr 19, 2023</td>
              <td data-label="Notification Date">Jun 21, 2023</td>
              <td data-label="Event Date">Feb 26-Mar 1, 2024</td>
              <td data-label="Location">San Diego, USA</td>
              <td data-label="Core Rank">A*</td>
            </tr>

            <tr>
              <td data-label="Conference">ASPLOS 2024</td>
              <td data-label="Abstract Date">Apr 13, 2023</td>
              <td data-label="Submission Date">Apr 20, 2023</td>
              <td data-label="Notification Date">Aug 2, 2023</td>
              <td data-label="Event Date">TBA</td>
              <td data-label="Location">California, USA</td>
              <td data-label="Core Rank">A*</td>
            </tr>

            <tr>
              <td data-label="Conference">NOCS 2023</td>
              <td data-label="Abstract Date">Apr 14, 2023</td>
              <td data-label="Submission Date">Apr 21, 2023</td>
              <td data-label="Notification Date">Jun 23, 2023</td>
              <td data-label="Event Date">Sep 21-22, 2023</td>
              <td data-label="Location">Hamburg, Germany</td>
              <td data-label="Core Rank">&nbsp;</td>
            </tr>

            <tr>
              <td data-label="Conference">ICPP 2023</td>
              <td data-label="Abstract Date">Apr 14, 2023</td>
              <td data-label="Submission Date">Apr 22, 2023</td>
              <td data-label="Notification Date">Jun 16, 2023</td>
              <td data-label="Event Date">Aug 7-10, 2023</td>
              <td data-label="Location">Utah, USA</td>
              <td data-label="Core Rank">A</td>
            </tr>

            <tr>
              <td data-label="Conference">SAS 2023</td>
              <td data-label="Abstract Date">&nbsp;</td>
              <td data-label="Submission Date">Apr 24, 2023</td>
              <td data-label="Notification Date">Jun 29, 2023</td>
              <td data-label="Event Date">Oct 22-24, 2023</td>
              <td data-label="Location">Cascais, Portugal</td>
              <td data-label="Core Rank">B</td>
            </tr>

            <tr>
              <td data-label="Conference">ICSME 2023</td>
              <td data-label="Abstract Date">Apr 20, 2023</td>
              <td data-label="Submission Date">Apr 27, 2023</td>
              <td data-label="Notification Date">Jun 29, 2023</td>
              <td data-label="Event Date">Oct 2-6, 2023</td>
              <td data-label="Location">Bogota, Colombia</td>
              <td data-label="Core Rank">A</td>
            </tr>

            <tr>
              <td data-label="Conference">MICRO 2023</td>
              <td data-label="Abstract Date">Apr 21, 2023</td>
              <td data-label="Submission Date">Apr 28, 2023</td>
              <td data-label="Notification Date">Jul 24, 2023</td>
              <td data-label="Event Date">Oct 27-Nov 1, 2023</td>
              <td data-label="Location">Toronto, Canada</td>
              <td data-label="Core Rank">A</td>
            </tr>

            <tr>
              <td data-label="Conference">CONCUR 2023</td>
              <td data-label="Abstract Date">Apr 24, 2023</td>
              <td data-label="Submission Date">May 2, 2023</td>
              <td data-label="Notification Date">Jun 28, 2023</td>
              <td data-label="Event Date">Sep 17-22, 2023</td>
              <td data-label="Location">Antwerp, Belgium</td>
              <td data-label="Core Rank">A</td>
            </tr>

            <tr>
              <td data-label="Conference">ATVA 2023</td>
              <td data-label="Abstract Date">Apr 27, 2023</td>
              <td data-label="Submission Date">May 4, 2023</td>
              <td data-label="Notification Date">Jun 30, 2023</td>
              <td data-label="Event Date">Oct 31-Nov 3, 2023</td>
              <td data-label="Location">Singapore</td>
              <td data-label="Core Rank">B</td>
            </tr>

            <tr>
              <td data-label="Conference">ASE 2023</td>
              <td data-label="Abstract Date">Apr 28, 2023</td>
              <td data-label="Submission Date">May 5, 2023</td>
              <td data-label="Notification Date">Jul 17, 2023</td>
              <td data-label="Event Date">Sep 11-15, 2023</td>
              <td data-label="Location">Kirchberg, Luxembourg</td>
              <td data-label="Core Rank">A*</td>
            </tr>

            <tr>
              <td data-label="Conference">CGO</td>
              <td data-label="Abstract Date">&nbsp;</td>
              <td data-label="Submission Date">May 19, 2023</td>
              <td data-label="Notification Date">Jul 17, 2023</td>
              <td data-label="Event Date">Mar 2-6, 2024</td>
              <td data-label="Location">Edinburgh, UK</td>
              <td data-label="Core Rank">A</td>
            </tr>

            <tr>
              <td data-label="Conference">HiPEAC 2024</td>
              <td data-label="Abstract Date">&nbsp;</td>
              <td data-label="Submission Date">Jun 1, 2023</td>
              <td data-label="Notification Date">Nov 15, 2023</td>
              <td data-label="Event Date">Jan 17-19, 2024</td>
              <td data-label="Location">Munich, Germany</td>
              <td data-label="Core Rank">&nbsp;</td>
            </tr>

            <tr>
              <td data-label="Conference">APLAS 2023</td>
              <td data-label="Abstract Date">&nbsp;</td>
              <td data-label="Submission Date">Jun 15, 2023</td>
              <td data-label="Notification Date">Aug 14, 2023</td>
              <td data-label="Event Date">Nov 27-29, 2023</td>
              <td data-label="Location">Taipei, Taiwan</td>
              <td data-label="Core Rank">B</td>
            </tr>
*/
