import React from "react";

function About() {
  return (
    <div>
      <section className="my-5 d-flex flex-wrap justify-content-around">
        <img
          id="avatar"
          src={require("../../assets/images/placeholder-avatar.jpg")}
          alt="Placeholder avatar"
          className="m-3"
        ></img>
        <div className="m-5 text-center" id="aboutMe">
          <h2 className="fw-bold">About Me</h2>
          <p className="fw-bold lh-lg">
            I am a South-Florida based full-stack web developer! I've had a
            strong passion for learning as much as I can about technology for as
            long as I can remember. I am a very driven individual with a very
            uncomplacent outlook on my career. There is always more to learn,
            more to see, more to accomplish and I want to be at the forefront of
            all of that.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
