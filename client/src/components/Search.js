import React from "react";

function BookSearch() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" >
         Google Books
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Search <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              Saved
              </a>
            </li>
          </ul>
         
        </div>
      </nav>
      <div className="jumbotron">
        <h1>(React) Google Books Search</h1>
        <p>
            Search for and Save Books of Interest.
        </p>
      </div>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title"> Book Search</h3>
        </div>
        <div className="card-body">
        
        </div>
      </div>
    </div>
  );
}

export default BookSearch;
