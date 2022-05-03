import React from "react";

function Portfolio() {
  return (
    <section>
      <h2 className="text-center fw-bold my-3">My Projects</h2>
      <div className="d-flex m-5 p-3 my-border">
        <img className="p-image" src={require('../../assets/images/placeholder-avatar.jpg')}></img>
        <div className="mx-auto text-center">
          <h3>Title</h3>
          <p>some text about the application</p>
          <a href="#" target="_blank">View Deployed Application</a> <br></br>
          <a href="#" target="_blank">View GitHub Repository</a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio