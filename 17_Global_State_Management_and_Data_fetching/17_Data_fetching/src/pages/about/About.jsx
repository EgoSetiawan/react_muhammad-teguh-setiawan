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
        About App
      </h1>
      <h2
        style={{
          display: "flex",
          justifyContent: "start",
        }}
      >
        Aplikasi pertama yang dibuat dari react js
      </h2>
      <h2
        style={{
          display: "flex",
          justifyContent: "start",
        }}
      >
        Aplikasi yang akan mencatat list-list yang akan ingi dilakukan
      </h2>
    </div>
  );
}

export default About;
