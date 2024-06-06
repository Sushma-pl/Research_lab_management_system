import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

import "./Contents.css";
export class Contents extends Component {
  render() {
    return (
      <div className="container pt-4" id="contents">
        <div className="row row-cols-1 row-cols-xl-3 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-header bg-light">
                <h2 >News</h2>
              </div>

              <div className="card-image">
                <img
                  src="https://source.unsplash.com/800x600/?research"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Open positions available for phd</h4>

                <p className="card-text">
                  Our computer science lab invites applications to enthusiastic
                  students who cleared Gate/CSIR-JRF to apply phd position.
                </p>

                <h4 className="card-title">Research Excellence award</h4>

                <p className="card-text">
                  We congratulate our phd for recieving Research Excellence
                  award by IEEE. He was nominated twice for this awards. He was
                  always been best student, he also got best paper award for his
                  research last year.
                </p>
              </div>

              <div className="card-footer">
                <div className="card-footer__info">
                  <span className="read-more">
                    <a className="text-uppercase read-more-1" href="#">
                      Read more{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-header">
                <h2>Announcements</h2>
              </div>

              <div className="card-image">
                <img
                  src="https://source.unsplash.com/800x600/?students"
                  className="card-img-top"
                  alt="..."
                />
              </div>

              <div className="card-body">
                <h4 className="card-title">Changing guidelines!!</h4>

                <p className="card-text">
                  We are adding bio-metric system for our research lab. Everyone
                  should be present in lab by 9AM. There is no limit for leaving
                  time.
                </p>

                <h4 className="card-title">Holiday</h4>

                <p className="card-text">
                  Next monday is holiday from the guidelines of government of
                  India.
                </p>
              </div>
              <div className="card-footer ">
                <div className="card-footer__info">
                  <span className="read-more">
                    <a className="text-uppercase read-more-2" href="#">
                      Read more{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-header">
                <h2>Activities</h2>
              </div>

              <div className="card-image">
                <img
                  src="https://source.unsplash.com/800x600/?seminars"
                  className="card-img-top"
                  alt="..."
                />
              </div>

              <div className="card-body">
                <h4 className="card-title">LPM Research conference</h4>

                <p className="card-text">
                  LPM Institute just announced new 10th annual conference in
                  upcoming month on their. Details are yet to announced.
                </p>

                <h4 className="card-title">Seminar on trends of AI</h4>

                <p className="card-text">
                  Seminar by Dr. XXXXX on trends of AI and their impacts. Venue:
                  BA234.
                </p>
              </div>
              <div className="card-footer ">
                <div className="card-footer__info">
                  <span className="read-more">
                    <a className="text-uppercase read-more-2" href="#">
                      Read more{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contents;
