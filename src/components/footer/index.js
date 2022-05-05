import React from "react";

function Footer() {
  return (
    <div className="mt-auto">
      <footer className="d-flex justify-content-around p-2">
        <h4 className="my-auto text-center">Connect with me!</h4>
        <ul className="list-inline my-auto text-center">
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" href="#">GitHub</a></li>
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" href="#">LinkedIn</a></li>
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" href="#">Stack Overflow</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
