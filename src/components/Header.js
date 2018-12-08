import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 col-md-7 col-lg-9 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">
A test using the
                <a
                  href="https://dog.ceo/dog-api/"
                  target="_new"
                >
dog-api
                </a>
                {' '}
library.
              </p>
            </div>
            <div className="col-sm-4 offset-md-1 col-lg-2 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.linkedin.com/in/andrei-zayats/"
                    className="text-white"
                    target="_new"
                  >
linkedine
                  </a>
                </li>
                <li><a href="tel: +375298545681" className="text-white">+375 (29) 854-56-81</a></li>
                <li><a href="mailto: andrei.zayats93@gmail.com" className="text-white">Email me</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container-fluid d-flex justify-content-between">
          <a href="./" className="navbar-brand d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path
                d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
              />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <strong>Dog breeds</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </div>
    </header>
  );
}
