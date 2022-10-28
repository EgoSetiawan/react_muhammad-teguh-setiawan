import React from "react";
import NotFoundImage from "../../assets/not_found_image.png";
import { Link } from "react-router-dom";

function NotFound() {
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
        404 Not Found
      </h1>
      <img
        className="notfound-image"
        src={NotFoundImage}
        width={700}
        height={500}
        alt="404"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      />
      <button
        className="btn-back"
        style={{
          paddingTop: "20px",
          marginTop: "20px",
        }}
      >
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
}

export default NotFound;
