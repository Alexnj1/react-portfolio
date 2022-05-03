import React from "react";

function Footer() {
  return (
    <div className="mt-auto">
      <footer className="d-flex justify-content-around">
        <h4>Reach out on my socials!</h4>
        <ul className="list-inline my-auto">
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" href="#">GitHub</a></li>
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" href="#">LinkedIn</a></li>
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" href="#">Stack Overflow</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
