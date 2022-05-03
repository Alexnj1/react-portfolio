import React from "react";

function About() {
  return (
    <div>
      <section className="my-5 d-flex justify-content-around">
        <img
          id="avatar"
          src={require("../../assets/images/placeholder-avatar.jpg")}
          alt="Placeholder avatar"
        ></img>
        <div className="my-auto text-center" id="aboutMe">
          <h2 className="fw-bold">About Me</h2>
          <p className="fw-bold lh-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
