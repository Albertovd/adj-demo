import { useState } from "react";
import TestController from "./modules/test/test.controller";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ADJ Demo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <h1 className="text-center">The all new MacBook Pro M5</h1>
        <p className="text-center">Experience the power of the new M5 chip with unparalleled performance and efficiency.</p>

       <button className="btn btn-md " onClick={() => TestController.callToAPI()}>Call API</button>
      </div>
    </>
  );
}

export default App;
