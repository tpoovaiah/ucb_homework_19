import React from "react";

function Form(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={props.filterEmployees}>
            <input
              onChange={props.handleOnChange}
              className="form-control"
              type="text"
              name="filter"
              value={props.filter}
              placeholder="Search by name"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
