import React from "react";

function ButtonDesc(props) {
  return (
    <div className="container">
      
      <button type="button" className="btn btn-info" onClick={props.handleButtonClickDesc}>
      {props.children}
    </button>
    
    </div>
   
  );
}

export default ButtonDesc;
