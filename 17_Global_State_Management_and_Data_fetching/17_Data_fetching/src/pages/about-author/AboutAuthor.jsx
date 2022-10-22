import React from "react";

function About() {
  return (
    <div
      className="notfound-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <h1
        className="notfound-title"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        About Author
      </h1>
      <h2
        style={{
          display: "flex",
          justifyContent: "start",
        }}
      >
        Self taught programmer
      </h2>
    </div>
  );
}

export default About;
