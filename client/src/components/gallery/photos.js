import React, { Component } from "react";


import "./photos.css";
export class Photos extends Component {
  render() {
    return (
      <div className="photos">
        <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
        <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
        <h1 className="page_title">Gallery-Photos</h1>

        <div className="container">
          <div className="row">
            <div className="test_box box-01 col-xs-6 col-md-4">
              <div className="inner">
                <div className="test_click">
                  <div className="flex_this"></div>
                </div>
              </div>
              <div className="test_title">Caption</div>
            </div>
            <div className="test_box box-02 col-xs-6 col-md-4">
              <div className="inner">
                <div href="#" className="test_click">
                  <div className="flex_this"></div>
                </div>
              </div>
              <div className="test_title">Caption</div>
            </div>
            <div className="test_box box-03 col-xs-6 col-md-4">
              <div className="inner">
                <div href="#" className="test_click">
                  <div className="flex_this"></div>
                </div>
              </div>
              <div className="test_title">Caption</div>
            </div>
            <div className="test_box box-04 col-xs-6 col-md-4">
              <div className="inner">
                <div href="#" className="test_click">
                  <div className="flex_this"></div>
                </div>
              </div>
              <div className="test_title">Caption</div>
            </div>
            <div className="test_box box-05 col-xs-6 col-md-4">
              <div className="inner">
                <div href="#" className="test_click">
                  <div className="flex_this"></div>
                </div>
              </div>
              <div className="test_title">Caption</div>
            </div>
            <div className="test_box box-06 col-xs-6 col-md-4">
              <div className="inner">
                <div href="#" className="test_click">
                  <div className="flex_this"></div>
                </div>
              </div>
              <div className="test_title">Caption</div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
export default Photos;
