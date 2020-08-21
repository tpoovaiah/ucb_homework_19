import React from "react";

function Button(props) {
  return (
    <div className="container">
      
      <button type="button" className="btn btn-info" onClick={props.handleButtonClick}>
      {props.children}
    </button>
    
    </div>
   
  );
}

export default Button;
