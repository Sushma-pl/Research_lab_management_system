import React, { Component } from "react";
import "./videos.css";

class Videos extends Component {
  render() {
    return (
      <div className="videos">
        <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
        <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
        <h1 className="title">Gallery-Videos</h1>
        <div className="container">
          <h2>Title</h2>
          {/* GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(600px, 1fr))",
              gridGap: "20px",
            }}
          >
            {/* Video 1 */}
            <div style={{ backgroundColor: "whitesmoke", padding: "15px" }}>
              <h3
                style={{
                  borderBottom: "1px solid",
                  margin: "0 0 8px 0",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Caption
              </h3>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src={require("./videoImages/video1.mp4")}
                  title="Pine Siskin"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
            {/* Video 2 */}
            <div style={{ backgroundColor: "whitesmoke", padding: "15px" }}>
              <h3
                style={{
                  borderBottom: "1px solid",
                  margin: "0 0 8px 0",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Caption
              </h3>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src={require("./videoImages/video2.mp4")}
                  title="Salmon Lifecycle with Ranger Tessa"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
            {/* Video 3 */}
            <div style={{ backgroundColor: "whitesmoke", padding: "15px" }}>
              <h3
                style={{
                  borderBottom: "1px solid",
                  margin: "0 0 8px 0",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Caption
              </h3>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src={require("./videoImages/video3.mp4")}
                  title="Pacific Treefrog Calling"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
            {/* Video 4 */}
            <div style={{ backgroundColor: "whitesmoke", padding: "15px" }}>
              <h3
                style={{
                  borderBottom: "1px solid",
                  margin: "0 0 8px 0",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Caption
              </h3>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%",
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src={require("./videoImages/video4.mp4")}
                  title="River Otters"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
