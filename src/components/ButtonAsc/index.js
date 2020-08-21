import React from "react";

function ButtonAsc(props) {
  return (
    <div className="container">
      
      <button type="button" className="btn btn-info" onClick={props.handleButtonClickAsc}>
      {props.children}
    </button>
    
    </div>
   
  );
}

export default ButtonAsc;
