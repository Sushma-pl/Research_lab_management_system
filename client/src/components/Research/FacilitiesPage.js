import React, { Component } from 'react'

import "./ConferencesPage.css";
export class FacilitiesPage extends Component {
  render() {
    return (
      <div>
        <main>
        <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
        <center><h3 className="mb-3 mt-5">Equipments and Facilities</h3></center>
        <div className="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Equipment</th>
                <th>Quantity</th>
                <th>Faculty</th>
                <th>Description</th>
                <th>Location</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
            <tr>
              <td data-label="Equipment">RF Spectrum Analyzer</td>
              <td data-label="Quantity">2</td>
              <td data-label="Faculty">Antony Franklin</td>
              <td data-label="Description">Computing Servers</td>
              <td data-label="Location">A-422</td>
            </tr>

            <tr>
              <td data-label="Equipment">Tower Server</td>
              <td data-label="Quantity">5</td>
              <td data-label="Faculty">Antony Franklin</td>
              <td data-label="Description">Tower Server</td>
              <td data-label="Location">A-422</td>
            </tr>

            <tr>
              <td data-label="Equipment">Rack Mount Server</td>
              <td data-label="Quantity">2</td>
              <td data-label="Faculty">Antony Franklin</td>
              <td data-label="Description">Computing Server</td>
              <td data-label="Location">A-007</td>
            </tr>

            <tr>
              <td data-label="Equipment">Switches</td>
              <td data-label="Quantity">10</td>
              <td data-label="Faculty">Antony Franklin</td>
              <td data-label="Description">Computing Server</td>
              <td data-label="Location">A-007</td>
            </tr>

            <tr>
              <td data-label="Equipment">Workstations</td>
              <td data-label="Quantity">35</td>
              <td data-label="Faculty">Krishna Mohan C</td>
              <td data-label="Description">Workstations</td>
              <td data-label="Location">A-613</td>
            </tr>

            <tr>
              <td data-label="Equipment">Rack Mount Server</td>
              <td data-label="Quantity">1</td>
              <td data-label="Faculty">Sakethnath Jagarlamudi</td>
              <td data-label="Description">GPU Computing</td>
              <td data-label="Location">Data Centre</td>
            </tr>

            <tr>
              <td data-label="Equipment">Server</td>
              <td data-label="Quantity">4</td>
              <td data-label="Faculty">Sobhan Babu</td>
              <td data-label="Description">Server</td>
              <td data-label="Location">Data Centre</td>
            </tr>

            <tr>
              <td data-label="Equipment">DGX-1</td>
              <td data-label="Quantity">4</td>
              <td data-label="Faculty">Vineeth N B</td>
              <td data-label="Description">GPU Server</td>
              <td data-label="Location">Data Centre</td>
            </tr>

            <tr>
              <td data-label="Equipment">Rack Mount Server</td>
              <td data-label="Quantity">15</td>
              <td data-label="Faculty">Bheemarjuna Reddy T</td>
              <td data-label="Description">GPU Computing</td>
              <td data-label="Location">Data Centre</td>
            </tr>
            </tbody>
          </table>
        </div>
      </main>
     
      </div>
    )
  }
}

export default FacilitiesPage
