import React from "react";

function Form(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <input
            className="form-control"
            type="text"
            placeholder="Search by name"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Form;
